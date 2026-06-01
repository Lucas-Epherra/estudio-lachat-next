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
 *
 * Las preguntas están orientadas a resolver objeciones comerciales frecuentes,
 * mejorar la claridad del servicio y reforzar búsquedas relacionadas con
 * contratos, locaciones, intimaciones y asesoramiento legal online.
 */
export const faqs: FAQ[] = [
  {
    q: "¿Conviene revisar un contrato antes de firmar?",
    a: "Sí. Una revisión previa permite detectar omisiones, riesgos y cláusulas que pueden generar conflictos futuros. Es especialmente recomendable en contratos de locación, contratos comerciales y arrendamientos rurales.",
  },
  {
    q: "¿Qué documentación necesito enviar para revisar un contrato?",
    a: "Podés enviar el contrato, anexos, conversaciones relevantes, comprobantes de pago, datos de las partes y cualquier documentación vinculada a la operación. Con esa información se puede evaluar el caso con mayor precisión.",
  },
  {
    q: "¿La consulta puede realizarse online?",
    a: "Sí. La documentación puede enviarse digitalmente y la consulta puede resolverse de forma online, sin necesidad de trasladarte. Esta modalidad permite ordenar el caso y definir los próximos pasos con mayor agilidad.",
  },
  {
    q: "¿Cuándo corresponde intimar por carta documento?",
    a: "Puede corresponder cuando existe falta de pago, incumplimiento contractual, daños, uso indebido, falta de restitución del inmueble o negativa a cumplir una obligación previamente asumida.",
  },
  {
    q: "¿Pueden asesorarme si soy propietario o inquilino?",
    a: "Sí. El asesoramiento puede orientarse tanto a propietarios como a inquilinos, según el tipo de contrato, el estado de la relación y el conflicto que se necesite prevenir, ordenar o reclamar.",
  },
  {
    q: "¿Trabajan con arrendamientos rurales?",
    a: "Sí. Se brinda asesoramiento en contratos vinculados al uso de campos, parcelas, pastoreo, agricultura, mejoras, conservación del inmueble rural y obligaciones entre las partes.",
  },
  {
    q: "¿Puedo consultar antes de enviar una intimación?",
    a: "Sí. Antes de enviar una carta documento o intimación conviene revisar la documentación, los antecedentes y el objetivo del reclamo para evitar errores formales o planteos poco convenientes.",
  },
  {
    q: "¿Atienden consultas legales fuera de Tres Arroyos?",
    a: "Sí. La atención online permite recibir consultas y documentación desde distintas localidades de Argentina, especialmente en temas vinculados a contratos, locaciones, intimaciones y reclamos civiles.",
  },
];