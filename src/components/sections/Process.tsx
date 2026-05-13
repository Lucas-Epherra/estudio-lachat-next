import { CenterDivider } from "@/components/ui/Dividers";
import Label from "@/components/ui/Label";
import { processSteps } from "@/data/processSteps";

/**
 * Sección de método de trabajo.
 *
 * Explica el proceso de atención en tres pasos simples para reducir
 * incertidumbre antes del contacto y mostrar una experiencia legal clara,
 * ordenada y profesional.
 */
export default function Process() {
  return (
    <section
      id="metodo"
      aria-labelledby="process-title"
      className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Label>Cómo trabajamos</Label>

        <h2
          id="process-title"
          className="mt-7 font-serif text-4xl font-semibold leading-tight tracking-[-0.03em] text-brand-dark md:text-5xl"
        >
          Un proceso simple para resolver sin vueltas.
        </h2>

        <CenterDivider />

        <p className="text-copy mx-auto mt-6 max-w-2xl text-brand-dark/75">
          Desde la primera consulta hasta la entrega final, el objetivo es que
          entiendas el estado de tu situación, los riesgos principales y el
          camino legal más conveniente.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
        {processSteps.map((step, index) => (
          <article
            key={step.text}
            className="relative rounded-[1.8rem] border border-brand-gold/25 bg-brand-surface/75 p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-brand-gold/50"
          >
            <div
              aria-hidden="true"
              className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-dark font-serif text-xl text-brand-cream"
            >
              {index + 1}
            </div>

            <p className="text-copy-sm mt-6 text-brand-dark/75">
              {step.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}