import type { FAQ } from "@/data/faqs";

interface FAQItemProps {
  item: FAQ;
}

/**
 * Ítem individual de preguntas frecuentes.
 *
 * Usa `<details>` y `<summary>` nativos para resolver el comportamiento
 * desplegable sin estado React, evitando convertirlo en Client Component.
 * Esto mejora rendimiento, accesibilidad y simplicidad.
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

      <p className="text-copy-sm mt-4 max-w-2xl text-brand-dark/75">
        {item.a}
      </p>
    </details>
  );
}