import { emailUrl, whatsappUrl } from "@/config/contact";

import Button from "../ui/Button";
import { Divider } from "../ui/Dividers";
import Label from "../ui/Label";
import LeafSprig from "../ui/LeafSprig";
import OrganicDecor from "../ui/OrganicDecor";

/**
 * Sección principal de presentación del Estudio Jurídico Lachat.
 *
 * Comunica la propuesta de valor inicial, prioriza conversión mediante CTAs
 * directos y mantiene una estructura semántica optimizada para SEO.
 */
export default function Hero() {
  const expressItems = [
    "Contratos de locación",
    "Revisión legal remota",
    "Arrendamientos rurales",
    "Cartas documento",
  ];

  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-20 lg:py-28">
      <OrganicDecor />

      <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Label>Contratos, locaciones y consultas legales remotas</Label>

          <h1 className="mt-8 max-w-4xl font-serif text-4xl font-semibold leading-[0.98] tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
            Asesoramiento legal claro para contratos, locaciones y reclamos.
          </h1>

          <Divider />

          <p className="max-w-2xl text-base leading-8 text-brand-dark/80 md:text-lg">
            Revisamos, redactamos y ordenamos documentación legal con una mirada
            preventiva, estratégica y personalizada. Atención remota para
            resolver consultas sin necesidad de trasladarte.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar por WhatsApp
            </Button>

            <Button
              href={emailUrl}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar Email
            </Button>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-6 text-brand-dark/60">
            Atención online · Respuesta personalizada · Asesoramiento para
            particulares, propietarios, inquilinos y clientes del ámbito rural.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div
            aria-hidden="true"
            className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-brand-gold/35"
          />

          <div
            aria-hidden="true"
            className="absolute -right-10 bottom-10 h-48 w-48 rounded-full bg-[#EFE4D2]/20 blur-sm"
          />

          <div className="relative overflow-hidden rounded-[2.4rem] bg-brand-dark p-8 text-brand-surface shadow-xl">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-brand-gold/20"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-20 -right-12 h-48 w-48 rounded-full bg-brand-surface/5"
            />

            <LeafSprig className="-right-5 top-12 h-44 w-24 text-brand-gold/20" />

            <div className="relative z-10">
              <Label dark>Consulta remota</Label>

              <h2 className="mt-8 font-serif text-3xl leading-tight text-brand-surface md:text-4xl">
                Antes de firmar, reclamar o intimar, asesorate con respaldo
                profesional.
              </h2>

              <p className="mt-5 text-sm leading-7 text-brand-surface/80">
                Enviá tu consulta o documentación y recibí orientación legal
                clara sobre los próximos pasos.
              </p>

              <div className="mt-10 space-y-4">
                {expressItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-brand-surface/10 bg-brand-surface/5 px-5 py-4 text-sm text-brand-surface/90"
                  >
                    <span className="mr-2 text-brand-gold" aria-hidden="true">
                      ✦
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}