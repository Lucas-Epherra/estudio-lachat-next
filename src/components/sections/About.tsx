import Button from "@/components/ui/Button";

/**
 * Sección institucional del estudio.
 *
 * Refuerza confianza, criterio profesional y cercanía antes del bloque de FAQ
 * y contacto. Está pensada como una pieza breve de validación, no como una
 * biografía extensa.
 */
export default function About() {
  return (
    <section
      id="el-estudio"
      aria-labelledby="about-title"
      className="scroll-mt-28 bg-brand-cream px-4 py-20 sm:px-6 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative overflow-hidden rounded-4xl border border-brand-gold/25 bg-brand-dark px-8 py-10 text-brand-surface sm:px-10 lg:px-12">
          <div
            className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full border border-brand-gold/25"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 size-56 rounded-full border border-brand-gold/15"
            aria-hidden="true"
          />

          <p className="relative text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">
            El estudio
          </p>

          <h2
            id="about-title"
            className="relative mt-5 max-w-xl font-serif text-3xl leading-tight text-brand-surface sm:text-4xl lg:text-5xl"
          >
            Asesoramiento legal claro, cercano y preventivo.
          </h2>

          <p className="relative mt-6 max-w-2xl text-base leading-8 text-brand-surface/78">
            El Estudio Jurídico Lachat acompaña a personas, propietarios,
            inquilinos, profesionales y clientes del ámbito rural en consultas
            vinculadas a contratos, locaciones, arrendamientos, intimaciones y
            conflictos cotidianos que requieren una respuesta jurídica concreta.
          </p>
        </div>

        <div className="space-y-8">
          <div className="rounded-4xl border border-brand-dark/10 bg-brand-surface p-7 sm:p-9">
            <h3 className="font-serif text-2xl text-brand-dark">
              Un enfoque jurídico sin vueltas innecesarias
            </h3>

            <p className="mt-4 text-base leading-8 text-brand-dark/70">
              La prioridad es traducir cada situación a pasos claros: revisar
              documentación, detectar riesgos, ordenar alternativas y definir
              una estrategia posible antes de avanzar.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-3xl border border-brand-gold/25 bg-brand-surface p-6">
              <h3 className="font-serif text-xl text-brand-dark">
                Atención remota
              </h3>

              <p className="mt-3 text-sm leading-7 text-brand-dark/68">
                Consultas online con posibilidad de adjuntar documentación para
                analizar el caso con mayor precisión.
              </p>
            </article>

            <article className="rounded-3xl border border-brand-gold/25 bg-brand-surface p-6">
              <h3 className="font-serif text-xl text-brand-dark">
                Criterio preventivo
              </h3>

              <p className="mt-3 text-sm leading-7 text-brand-dark/68">
                Foco en evitar conflictos futuros mediante contratos claros,
                intimaciones bien redactadas y decisiones documentadas.
              </p>
            </article>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="#contacto">Enviar consulta</Button>
            <Button href="#servicios" variant="secondary">
              Ver servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}