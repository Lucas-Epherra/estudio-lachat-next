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
 * la conversión y contextualizar la consulta inicial del potencial cliente.
 */
export const services: Service[] = [
  {
    number: "01",
    title: "Locaciones urbanas",
    text: "Contratos de vivienda, locales, consultorios, oficinas y galpones.",
    icon: "⌂",
    cta: "Consultar Locación",
    whatsappMessage:
      "Hola, necesito asesoramiento sobre un contrato de locación urbana.",
  },
  {
    number: "02",
    title: "Contratos comerciales",
    text: "Cláusulas sobre precio, actualización, garantías, mora y restitución.",
    icon: "◇",
    cta: "Revisar Contrato",
    whatsappMessage:
      "Hola, necesito revisar o redactar un contrato comercial.",
  },
  {
    number: "03",
    title: "Arrendamientos rurales",
    text: "Uso de campo, parcelas, pastoreo, agricultura, mejoras y conservación.",
    icon: "✦",
    cta: "Consultar Arrendamiento",
    whatsappMessage:
      "Hola, necesito asesoramiento sobre un arrendamiento rural.",
  },
  {
    number: "04",
    title: "Intimaciones",
    text: "Cartas documento por falta de pago, daños o incumplimientos.",
    icon: "✉",
    cta: "Consultar Intimación",
    whatsappMessage:
      "Hola, necesito consultar por una posible intimación o carta documento.",
  },
];