export interface FAQItemData {
  q: string;
  a: string;
}

interface FAQItemProps {
  item: FAQItemData;
}

/**
 * Renderiza un ítem individual de preguntas frecuentes usando HTML semántico nativo.
 *
 * Se utiliza `<details>` y `<summary>` para evitar estado innecesario en React,
 * manteniendo el componente como Server Component y mejorando accesibilidad,
 * rendimiento y simplicidad.
 */
export default function FAQItem({ item }: FAQItemProps) {
  return (
    <details className="group rounded-[1.35rem] border border-brand-gold/25 bg-brand-surface/75 p-6 transition-colors duration-300 open:bg-brand-cream">
      <summary className="cursor-pointer list-none font-serif text-xl text-brand-dark outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 focus-visible:ring-offset-4 focus-visible:ring-offset-brand-cream [&::-webkit-details-marker]:hidden">
        <span className="flex items-center justify-between gap-5">
          <span>{item.q}</span>

          <span
            aria-hidden="true"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-brand-gold/45 text-brand-gold transition-transform duration-300 group-open:rotate-45"
          >
            +
          </span>
        </span>
      </summary>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-dark/75">
        {item.a}
      </p>
    </details>
  );
}