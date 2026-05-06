export const CASE_TYPES = [
  "Contratos",
  "Locaciones",
  "Carta documento",
  "Arrendamientos rurales",
  "Reclamo / intimación",
  "Otra consulta",
] as const;

export type CaseType = (typeof CASE_TYPES)[number];

export interface ContactFormState {
  fullName: string;
  email: string;
  phone: string;
  caseType: CaseType;
  message: string;
  company: string;
}

/**
 * Estado inicial del formulario de contacto.
 *
 * `company` funciona como honeypot anti-spam:
 * - Los usuarios reales no lo ven.
 * - Muchos bots lo completan automáticamente.
 */
export const INITIAL_CONTACT_FORM: ContactFormState = {
  fullName: "",
  email: "",
  phone: "",
  caseType: CASE_TYPES[0],
  message: "",
  company: "",
};

export const FORM_STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
} as const;

export type FormStatus = (typeof FORM_STATUS)[keyof typeof FORM_STATUS];

export const CONTACT_REQUEST_STATUS = {
  NEW: "new",
  CONTACTED: "contacted",
  CLOSED: "closed",
} as const;

export type ContactRequestStatus =
  (typeof CONTACT_REQUEST_STATUS)[keyof typeof CONTACT_REQUEST_STATUS];

/**
 * Configuración de adjuntos del formulario.
 *
 * Límites conservadores para MVP:
 * - máximo 3 archivos
 * - máximo 5 MB por archivo
 * - formatos habituales para documentación legal.
 */
export const ATTACHMENTS_CONFIG = {
  BUCKET_NAME: "legal-documents",
  MAX_FILES: 3,
  MAX_FILE_SIZE_MB: 5,
  MAX_FILE_SIZE_BYTES: 5 * 1024 * 1024,
  ACCEPTED_EXTENSIONS: [".pdf", ".jpg", ".jpeg", ".png", ".doc", ".docx"],
  ACCEPTED_MIME_TYPES: [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ],
} as const;