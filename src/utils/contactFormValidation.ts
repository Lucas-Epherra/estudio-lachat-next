import {
  ATTACHMENTS_CONFIG,
  type ContactFormState,
} from "@/constants/contactForm";

/**
 * Obtiene la extensión de un archivo en minúsculas.
 */
function getFileExtension(fileName: string): string {
  const extensionIndex = fileName.lastIndexOf(".");

  if (extensionIndex === -1) {
    return "";
  }

  return fileName.slice(extensionIndex).toLowerCase();
}

/**
 * Valida el formulario de contacto antes de enviar datos a Supabase.
 *
 * Retorna:
 * - `"spam"` si el honeypot fue completado.
 * - un mensaje visible si hay un error de usuario.
 * - `null` si el formulario es válido.
 */
export function validateContactForm(
  form: ContactFormState,
  selectedFiles: File[],
): string | null {
  if (form.company.trim()) {
    return "spam";
  }

  if (!form.fullName.trim()) {
    return "Ingresá tu nombre y apellido para que el estudio pueda identificar la consulta.";
  }

  if (!form.email.trim()) {
    return "Ingresá un email de contacto.";
  }

  if (!form.phone.trim()) {
    return "Ingresá un teléfono o WhatsApp para poder coordinar la respuesta.";
  }

  if (!form.caseType) {
    return "Seleccioná el tipo de consulta.";
  }

  if (!form.message.trim()) {
    return "Contanos brevemente qué necesitás resolver.";
  }

  if (selectedFiles.length > ATTACHMENTS_CONFIG.MAX_FILES) {
    return `Podés adjuntar hasta ${ATTACHMENTS_CONFIG.MAX_FILES} archivos.`;
  }

  for (const file of selectedFiles) {
    const extension = getFileExtension(file.name);

    if (
      !ATTACHMENTS_CONFIG.ACCEPTED_EXTENSIONS.includes(
        extension as (typeof ATTACHMENTS_CONFIG.ACCEPTED_EXTENSIONS)[number],
      )
    ) {
      return `El archivo "${file.name}" no tiene un formato permitido. Usá PDF, JPG, PNG, DOC o DOCX.`;
    }

    if (
      file.type &&
      !ATTACHMENTS_CONFIG.ACCEPTED_MIME_TYPES.includes(
        file.type as (typeof ATTACHMENTS_CONFIG.ACCEPTED_MIME_TYPES)[number],
      )
    ) {
      return `El archivo "${file.name}" no tiene un tipo válido. Probá exportarlo nuevamente o adjuntarlo en PDF.`;
    }

    if (file.size > ATTACHMENTS_CONFIG.MAX_FILE_SIZE_BYTES) {
      return `El archivo "${file.name}" supera los ${ATTACHMENTS_CONFIG.MAX_FILE_SIZE_MB} MB.`;
    }
  }

  return null;
}