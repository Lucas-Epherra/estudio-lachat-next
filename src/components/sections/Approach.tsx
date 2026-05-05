import Label from "@/components/ui/Label";
import LeafSprig from "@/components/ui/LeafSprig";
import { approachItems } from "@/data/approachItems";

/**
 * Sección de enfoque diferencial del estudio.
 *
 * Presenta los principios de trabajo del Estudio Jurídico Lachat en un bloque
 * de alto contraste, reforzando confianza, prevención y claridad antes de la
 * instancia de contacto.
 */
export default function Approach() {
  return (
    <section
      id="enfoque"
      aria-labelledby="approach-title"
      className="relative overflow-hidden bg-brand-dark px-6 py-20 text-brand-cream lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -left-24 -top-36 h-80 w-80 rounded-full border border-brand-gold/25"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-brand-surface/5 blur-2xl"
      />

      <LeafSprig className="right-16 top-8 h-56 w-32 text-brand-gold/20" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <Label dark>Enfoque</Label>

          <h2
            id="approach-title"
            className="mt-7 max-w-lg font-serif text-4xl font-semibold leading-tight tracking-[-0.03em] text-brand-cream md:text-5xl"
          >
            Prevención jurídica con lenguaje claro.
          </h2>

          <p className="mt-6 max-w-md text-sm leading-8 text-brand-cream/70">
            Un acompañamiento legal pensado para anticipar riesgos, ordenar
            documentación y tomar decisiones con respaldo profesional.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {approachItems.map((item, index) => (
            <article
              key={item.text}
              className="rounded-[1.8rem] border border-brand-surface/15 bg-brand-surface/[0.07] p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:bg-brand-surface/10"
            >
              <p
                aria-hidden="true"
                className="font-serif text-3xl text-brand-gold"
              >
                0{index + 1}
              </p>

              <p className="mt-5 text-sm leading-7 text-brand-cream/75">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}