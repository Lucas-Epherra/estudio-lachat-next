export interface FAQ {
  q: string;
  a: string;
}

/**
 * Preguntas frecuentes visibles en la landing.
 *
 * Cada objeto representa una pregunta desplegable renderizada por `FAQItem`.
 * Mantener este contenido separado de la vista facilita escalar, editar o
 * reordenar preguntas sin modificar componentes.
 */
export const faqs: FAQ[] = [
  {
    q: "¿Conviene revisar un contrato antes de firmar?",
    a: "Sí. Una revisión previa permite detectar omisiones, riesgos y cláusulas que pueden generar conflictos futuros.",
  },
  {
    q: "¿Cuándo corresponde intimar por carta documento?",
    a: "Cuando existe falta de pago, incumplimiento contractual, daños, uso indebido o falta de restitución del inmueble.",
  },
  {
    q: "¿La consulta puede realizarse online?",
    a: "Sí. La documentación puede enviarse digitalmente y la consulta puede resolverse de forma online.",
  },
];