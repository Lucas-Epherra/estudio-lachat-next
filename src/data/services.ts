export interface Service {
  number: string;
  title: string;
  text: string;
  icon: string;
  cta: string;
  whatsappMessage: string;
}

/**
 * Servicios principales mostrados en la sección comercial de la landing.
 *
 * Cada servicio incluye su propio CTA y mensaje de WhatsApp para mejorar
 * la conversión, contextualizar la consulta inicial del potencial cliente y
 * reforzar términos relevantes para SEO local y búsquedas legales específicas.
 */
export const services: Service[] = [
  {
    number: "01",
    title: "Locaciones urbanas",
    text: "Revisión y redacción de contratos de vivienda, locales, consultorios, oficinas y galpones, con foco en prevenir conflictos entre propietarios e inquilinos.",
    icon: "⌂",
    cta: "Consultar Locación",
    whatsappMessage:
      "Hola, necesito asesoramiento sobre un contrato de locación urbana.",
  },
  {
    number: "02",
    title: "Contratos comerciales",
    text: "Análisis de cláusulas sobre precio, actualización, garantías, mora, plazos, obligaciones de las partes y restitución de bienes o inmuebles.",
    icon: "◇",
    cta: "Revisar Contrato",
    whatsappMessage:
      "Hola, necesito revisar o redactar un contrato comercial.",
  },
  {
    number: "03",
    title: "Arrendamientos rurales",
    text: "Asesoramiento legal para contratos vinculados al uso de campos, parcelas, pastoreo, agricultura, mejoras, conservación y obligaciones rurales.",
    icon: "✦",
    cta: "Consultar Arrendamiento",
    whatsappMessage:
      "Hola, necesito asesoramiento sobre un arrendamiento rural.",
  },
  {
    number: "04",
    title: "Intimaciones",
    text: "Redacción y revisión de cartas documento e intimaciones por falta de pago, daños, incumplimientos contractuales o falta de restitución.",
    icon: "✉",
    cta: "Consultar Intimación",
    whatsappMessage:
      "Hola, necesito consultar por una posible intimación o carta documento.",
  },
];