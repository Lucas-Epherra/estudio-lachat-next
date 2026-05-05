export interface ContactConfig {
  whatsappNumber: string;
  email: string;
  instagram: string;
}

/**
 * Datos centrales de contacto del Estudio Jurídico Lachat.
 *
 * Mantener estos valores centralizados evita duplicar información sensible
 * en componentes, secciones o botones comerciales.
 */
export const contact: ContactConfig = {
  whatsappNumber: "542983406416",
  email: "rominalachat@gmail.com",
  instagram: "https://www.instagram.com/estudiojuridicolachat/",
};

export const defaultWhatsappMessage =
  "Hola, quisiera consultar por asesoramiento en contratos, locaciones, arrendamientos o intimaciones.";

/**
 * Construye una URL válida de WhatsApp con un mensaje codificado.
 *
 * Esta función permite que cada CTA de la landing tenga un mensaje contextual
 * sin repetir la lógica de encoding ni el número de contacto.
 */
export function buildWhatsAppUrl(message = defaultWhatsappMessage): string {
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${contact.whatsappNumber}?text=${encodedMessage}`;
}

/**
 * URL principal de WhatsApp usada por CTAs genéricos de la landing.
 */
export const whatsappUrl = buildWhatsAppUrl();

/**
 * URL principal de email con asunto predefinido para consultas legales.
 */
export const emailUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
  "Consulta legal - Estudio Lachat",
)}`;