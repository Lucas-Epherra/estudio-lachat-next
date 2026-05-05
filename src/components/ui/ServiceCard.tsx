import Button from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/config/contact";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

/**
 * Tarjeta individual para presentar un servicio legal.
 *
 * Recibe su contenido desde `src/data/services.ts`, construye una URL de
 * WhatsApp específica para ese servicio y mantiene desacoplada la vista del
 * contenido comercial.
 */
export default function ServiceCard({ service }: ServiceCardProps) {
  const serviceWhatsappUrl = buildWhatsAppUrl(service.whatsappMessage);

  return (
    <article className="group relative overflow-hidden rounded-4xl border border-brand-gold/25 bg-brand-surface/80 p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-gold/50">
      <div className="mb-8 flex items-center justify-between gap-6">
        <span
          aria-hidden="true"
          className="font-serif text-5xl text-brand-gold/70"
        >
          {service.number}
        </span>

        <span
          aria-hidden="true"
          className="grid h-12 w-12 place-items-center rounded-full bg-brand-dark text-xl text-brand-surface transition duration-300 group-hover:bg-brand-gold group-hover:text-brand-dark"
        >
          {service.icon}
        </span>
      </div>

      <h3 className="font-serif text-2xl font-semibold text-brand-dark">
        {service.title}
      </h3>

      <p className="mt-4 text-base leading-7 text-brand-dark/75">
        {service.text}
      </p>

      <div className="mt-8">
        <Button
          href={serviceWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
        >
          {service.cta}
        </Button>
      </div>
    </article>
  );
}