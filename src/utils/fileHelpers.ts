interface BuildStoragePathParams {
  submissionId: string;
  fileName: string;
  index: number;
}

/**
 * Normaliza nombres de archivo para evitar caracteres problemáticos en Storage.
 */
function sanitizeFileName(fileName: string): string {
  const extension = fileName.includes(".")
    ? fileName.slice(fileName.lastIndexOf(".")).toLowerCase()
    : "";

  const baseName = fileName
    .replace(extension, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9-_]+/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();

  return `${baseName || "documento"}${extension}`;
}

/**
 * Construye una ruta estable para guardar adjuntos en Supabase Storage.
 *
 * Agrupar por `submissionId` permite relacionar fácilmente los archivos con
 * una consulta específica sin exponer datos personales en el path.
 */
export function buildStoragePath({
  submissionId,
  fileName,
  index,
}: BuildStoragePathParams): string {
  const safeFileName = sanitizeFileName(fileName);

  return `contact-requests/${submissionId}/${index + 1}-${safeFileName}`;
}