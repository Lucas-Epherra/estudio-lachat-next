import FAQItem from "@/components/ui/FAQItem";
import Label from "@/components/ui/Label";
import { faqs } from "@/data/faqs";

/**
 * Sección de preguntas frecuentes.
 *
 * Reduce fricción comercial antes de la consulta inicial, resolviendo dudas
 * habituales sobre revisión contractual, intimaciones y modalidad online.
 * Se mantiene como Server Component porque no requiere hooks ni estado cliente.
 */
export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="mx-auto max-w-7xl px-6 py-20 lg:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <Label>Preguntas frecuentes</Label>

          <h2
            id="faq-title"
            className="mt-7 font-serif text-4xl font-semibold leading-tight tracking-[-0.03em] text-brand-dark md:text-5xl"
          >
            Dudas comunes antes de contratar.
          </h2>

          <p className="mt-6 max-w-md text-sm leading-8 text-brand-dark/70">
            Información clara para tomar decisiones con menos incertidumbre y
            mayor respaldo jurídico.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <FAQItem key={item.q} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}