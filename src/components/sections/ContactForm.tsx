"use client";

import { type ChangeEvent, type FormEvent, useRef, useState } from "react";

import {
  ATTACHMENTS_CONFIG,
  CASE_TYPES,
  CONTACT_REQUEST_STATUS,
  FORM_STATUS,
  INITIAL_CONTACT_FORM,
  type ContactFormState,
  type FormStatus,
} from "@/constants/contactForm";
import { getSupabaseClient } from "@/lib/supabaseClient";
import { validateContactForm } from "@/utils/contactFormValidation";
import { buildStoragePath } from "@/utils/fileHelpers";

interface ContactRequestPayload {
  submission_id: string;
  full_name: string;
  email: string;
  phone: string;
  case_type: string;
  message: string;
  has_files: boolean;
  file_paths: string[];
  status: string;
}

const fieldClassName =
  "grid gap-2 text-[0.95rem] font-semibold leading-normal text-brand-dark";

const controlClassName =
  "w-full rounded-[0.95rem] border border-brand-dark/15 bg-brand-surface px-4 py-3.5 text-base text-brand-dark outline-none transition-colors duration-200 placeholder:text-brand-dark/40 focus:border-brand-gold focus:bg-[#fffdf8] focus-visible:ring-2 focus-visible:ring-brand-gold/30";

/**
 * Formulario real de contacto para Estudio Jurídico Lachat.
 *
 * Guarda consultas en Supabase, sube adjuntos a Supabase Storage y mantiene
 * un honeypot anti-spam. Es Client Component porque gestiona estado, archivos
 * seleccionados y submit del formulario.
 */
export default function ContactForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<ContactFormState>(INITIAL_CONTACT_FORM);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<FormStatus>(FORM_STATUS.IDLE);
  const [feedback, setFeedback] = useState("");

  const isSubmitting = status === FORM_STATUS.LOADING;

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  }

  /**
   * Convierte el FileList del input en un array real para poder validarlo,
   * renderizarlo y subirlo a Supabase Storage.
   */
  function handleFilesChange(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);

    setSelectedFiles(files);
  }

  /**
   * Limpia el estado controlado del formulario y resetea manualmente el input
   * file, ya que su value no debe controlarse directamente desde React.
   */
  function resetForm() {
    setForm(INITIAL_CONTACT_FORM);
    setSelectedFiles([]);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  /**
   * Sube los adjuntos seleccionados a Supabase Storage y retorna las rutas
   * internas generadas para persistirlas luego en la tabla `contact_requests`.
   */
  async function uploadAttachments(submissionId: string): Promise<string[]> {
    if (selectedFiles.length === 0) {
      return [];
    }

    const supabase = getSupabaseClient();
    const uploadedPaths: string[] = [];

    for (const [index, file] of selectedFiles.entries()) {
      const filePath = buildStoragePath({
        submissionId,
        fileName: file.name,
        index,
      });

      const { error } = await supabase.storage
        .from(ATTACHMENTS_CONFIG.BUCKET_NAME)
        .upload(filePath, file, {
          cacheControl: "3600",
          contentType: file.type || "application/octet-stream",
          upsert: false,
        });

      if (error) {
        throw error;
      }

      uploadedPaths.push(filePath);
    }

    return uploadedPaths;
  }

  /**
   * Construye el payload final compatible con la tabla `contact_requests`.
   */
  function buildPayload({
    submissionId,
    filePaths,
  }: {
    submissionId: string;
    filePaths: string[];
  }): ContactRequestPayload {
    return {
      submission_id: submissionId,
      full_name: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      case_type: form.caseType,
      message: form.message.trim(),
      has_files: filePaths.length > 0,
      file_paths: filePaths,
      status: CONTACT_REQUEST_STATUS.NEW,
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationError = validateContactForm(form, selectedFiles);

    if (validationError === "spam") {
      setStatus(FORM_STATUS.SUCCESS);
      setFeedback("Consulta enviada correctamente.");
      resetForm();
      return;
    }

    if (validationError) {
      setStatus(FORM_STATUS.ERROR);
      setFeedback(validationError);
      return;
    }

    setStatus(FORM_STATUS.LOADING);
    setFeedback("");

    const submissionId = crypto.randomUUID();

    try {
      const filePaths = await uploadAttachments(submissionId);
      const payload = buildPayload({ submissionId, filePaths });

      const supabase = getSupabaseClient();
      const { error } = await supabase.from("contact_requests").insert(payload);

      if (error) {
        throw error;
      }

      setStatus(FORM_STATUS.SUCCESS);
      setFeedback(
        filePaths.length > 0
          ? "Consulta enviada correctamente. El estudio recibió tu información y la documentación adjunta."
          : "Consulta enviada correctamente. El estudio recibió tu información.",
      );

      resetForm();
    } catch (error) {
      console.error("Contact form submit error:", error);

      const errorMessage =
        error instanceof Error
          ? error.message
          : "Error desconocido al enviar la consulta.";

      setStatus(FORM_STATUS.ERROR);
      setFeedback(`No pudimos enviar la consulta: ${errorMessage}`);
    }
  }

  return (
    <form
      className="relative grid gap-5 rounded-[1.75rem] border border-brand-dark/10 bg-[#fffcf5]/90 p-6 md:p-10"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company">Empresa</label>
        <input
          id="company"
          name="company"
          type="text"
          value={form.company}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid max-w-2xl gap-2">
        <p className="text-caption font-bold uppercase tracking-[0.12em] text-brand-gold">
          Consulta online
        </p>

        <h2
          id="contact-title"
          className="font-serif text-3xl leading-none tracking-[-0.04em] text-brand-dark md:text-5xl"
        >
          Dejanos tu consulta y el estudio se comunicará con vos.
        </h2>

        <p className="text-copy text-brand-dark/70">
          Completá tus datos, describí brevemente la situación y adjuntá
          documentación si ya la tenés disponible.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className={fieldClassName}>
          <span>Nombre y apellido</span>
          <input
            className={controlClassName}
            name="fullName"
            type="text"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Ej: María González"
            autoComplete="name"
            required
          />
        </label>

        <label className={fieldClassName}>
          <span>Email</span>
          <input
            className={controlClassName}
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Ej: nombre@email.com"
            autoComplete="email"
            required
          />
        </label>

        <label className={fieldClassName}>
          <span>Teléfono / WhatsApp</span>
          <input
            className={controlClassName}
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Ej: +54 9 2983 000000"
            autoComplete="tel"
            required
          />
        </label>

        <label className={fieldClassName}>
          <span>Tipo de consulta</span>
          <select
            className={controlClassName}
            name="caseType"
            value={form.caseType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Seleccioná una opción
            </option>

            {CASE_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className={fieldClassName}>
        <span>Consulta</span>
        <textarea
          className={`${controlClassName} min-h-36 resize-y`}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Contanos qué ocurrió, qué documentación tenés y qué necesitás resolver."
          rows={5}
          required
        />
      </label>

      <label className={fieldClassName}>
        <span>Documentación adjunta</span>

        <input
          ref={fileInputRef}
          className={`${controlClassName} cursor-pointer`}
          type="file"
          multiple
          accept={ATTACHMENTS_CONFIG.ACCEPTED_EXTENSIONS.join(",")}
          aria-describedby="attachments-help"
          onChange={handleFilesChange}
        />

        <small
          id="attachments-help"
          className="text-copy-sm font-medium text-brand-dark/60"
        >
          Opcional. Podés adjuntar hasta {ATTACHMENTS_CONFIG.MAX_FILES} archivos
          PDF, JPG, PNG, DOC o DOCX. Máximo{" "}
          {ATTACHMENTS_CONFIG.MAX_FILE_SIZE_MB} MB por archivo.
        </small>
      </label>

      {selectedFiles.length > 0 && (
        <div className="rounded-2xl border border-brand-gold/25 bg-brand-gold/10 p-4 text-brand-dark">
          <p className="text-copy-sm font-bold">Archivos seleccionados:</p>

          <ul className="text-copy-sm mt-3 grid gap-2 pl-5 text-brand-dark/75">
            {selectedFiles.map((file) => (
              <li key={`${file.name}-${file.size}-${file.lastModified}`}>
                {file.name} · {(file.size / 1024 / 1024).toFixed(2)} MB
              </li>
            ))}
          </ul>
        </div>
      )}

      <p id="privacy-note" className="text-copy-sm text-brand-dark/65">
        Al enviar este formulario aceptás ser contactado/a por el estudio para
        evaluar tu consulta. No compartas información extremadamente sensible si
        todavía no fue solicitada.
      </p>

      <button
        className="justify-self-start rounded-full bg-brand-dark px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-surface transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-cream disabled:cursor-not-allowed disabled:opacity-65"
        type="submit"
        disabled={isSubmitting}
        aria-describedby="privacy-note"
      >
        {isSubmitting ? "Enviando consulta..." : "Enviar consulta"}
      </button>

      {feedback && (
        <p
          className={`text-copy-sm rounded-2xl px-4 py-3 font-semibold ${
            status === FORM_STATUS.SUCCESS
              ? "bg-emerald-900/10 text-emerald-800"
              : "bg-red-900/10 text-red-800"
          }`}
          role={status === FORM_STATUS.ERROR ? "alert" : "status"}
          aria-live="polite"
        >
          {feedback}
        </p>
      )}
    </form>
  );
}