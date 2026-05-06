interface BuildStoragePathParams {
  submissionId: string;
  fileName: string;
  index: number;
}

/**
 * Normaliza nombres de archivo para evitar caracteres problemáticos en Supabase Storage.
 *
 * Elimina acentos, espacios y símbolos conflictivos, manteniendo la extensión
 * original para facilitar la identificación del documento.
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
 * Construye una ruta compatible con la policy actual de Supabase Storage.
 *
 * La policy existente permite uploads públicos únicamente en rutas que empiezan
 * con `consultas/`, por eso mantenemos esa carpeta para no romper el circuito
 * ya configurado de archivos, email y Google Sheets.
 */
export function buildStoragePath({
  submissionId,
  fileName,
  index,
}: BuildStoragePathParams): string {
  const safeFileName = sanitizeFileName(fileName);

  return `consultas/${submissionId}/${index + 1}-${safeFileName}`;
}