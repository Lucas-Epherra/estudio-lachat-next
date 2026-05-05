export interface ContactConfig {
  whatsappNumber: string;
  email: string;
  instagram: string;
}

/**
 * Datos centrales de contacto del Estudio Jurídico Lachat.
 *
 * Mantener esta información centralizada evita duplicar datos de contacto
 * en componentes, secciones y llamados a la acción.
 */
export const contact: ContactConfig = {
  whatsappNumber: "542983406416",
  email: "rominalachat@gmail.com",
  instagram: "https://www.instagram.com/estudiojuridicolachat/",
};

export const defaultWhatsappMessage =
  "Hola, quisiera consultar por asesoramiento en contratos, locaciones, arrendamientos o intimaciones.";

/**
 * Construye una URL válida de WhatsApp usando el número del estudio y un
 * mensaje codificado para URL.
 */
export function buildWhatsAppUrl(message = defaultWhatsappMessage): string {
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${contact.whatsappNumber}?text=${encodedMessage}`;
}

/**
 * URL principal de WhatsApp para CTAs generales.
 */
export const whatsappUrl = buildWhatsAppUrl();

/**
 * URL principal de email con asunto predefinido.
 */
export const emailUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
  "Consulta legal - Estudio Lachat",
)}`;