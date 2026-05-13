import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import { buildWhatsAppUrl } from "@/config/contact";
import { commonSituations } from "@/data/commonSituations";

/**
 * Sección orientada a conversión basada en situaciones frecuentes.
 *
 * Traduce los servicios legales del estudio a problemas concretos que el usuario
 * puede reconocer rápidamente, aumentando la intención de consulta y reduciendo
 * fricción antes del contacto.
 */
export default function CommonSituations() {
  return (
    <section
      id="situaciones"
      aria-labelledby="common-situations-title"
      className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <Label>Situaciones frecuentes</Label>

          <h2
            id="common-situations-title"
            className="mt-6 max-w-xl font-serif text-4xl font-semibold leading-tight tracking-[-0.035em] text-brand-dark md:text-5xl"
          >
            Si estás en alguna de estas situaciones, conviene consultar antes de
            avanzar.
          </h2>

          <p className="text-copy-lg mt-6 max-w-xl text-brand-dark/75">
            Un contrato mal revisado o una intimación mal planteada puede generar
            más problemas que soluciones. La prevención legal suele ser más
            simple, más rápida y más económica que corregir el conflicto después.
          </p>
        </div>

        <div className="grid gap-5">
          {commonSituations.map((situation) => {
            const situationWhatsappUrl = buildWhatsAppUrl(
              situation.whatsappMessage,
            );

            return (
              <article
                key={situation.title}
                className="group rounded-4xl border border-brand-gold/25 bg-brand-surface/80 p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-gold/50"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-brand-dark">
                      {situation.title}
                    </h3>

                    <p className="text-copy-sm mt-3 max-w-2xl text-brand-dark/75">
                      {situation.text}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <Button
                      href={situationWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                    >
                      {situation.cta}
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}