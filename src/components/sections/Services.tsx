import Label from "@/components/ui/Label";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

/**
 * Sección comercial de servicios legales.
 *
 * Renderiza dinámicamente las tarjetas desde `src/data/services.ts`, evitando
 * duplicar contenido en la vista y permitiendo actualizar los servicios desde
 * una única fuente de datos.
 */
export default function Services() {
  return (
    <section
      id="servicios"
      aria-labelledby="services-title"
      className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Label>Servicios legales</Label>

        <h2
          id="services-title"
          className="mt-6 font-serif text-4xl font-semibold leading-tight tracking-[-0.035em] text-brand-dark md:text-5xl"
        >
          Asesoramiento claro para decisiones importantes.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-brand-dark/75 md:text-lg">
          Acompañamiento jurídico personalizado para prevenir conflictos,
          ordenar documentación y actuar con firmeza cuando la situación lo
          requiere.
        </p>
      </div>

      <div
        aria-hidden="true"
        className="mx-auto my-12 flex max-w-xs items-center justify-center gap-3 text-brand-gold/70"
      >
        <span className="h-px flex-1 bg-brand-gold/30" />
        <span className="text-xs">◆</span>
        <span className="h-px flex-1 bg-brand-gold/30" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}