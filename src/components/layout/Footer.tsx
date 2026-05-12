import Link from "next/link";

import Logo from "@/components/ui/Logo";
import { contact, emailUrl, whatsappUrl } from "@/config/contact";

interface FooterLink {
  label: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "#servicios" },
  { label: "Como Trabajamos", href: "#metodo" },
  { label: "Preguntas", href: "#preguntas" },
  { label: "Consulta online", href: "#contacto" },
];

/**
 * Pie de página institucional del Estudio Jurídico Lachat.
 *
 * Reúne identidad de marca, enlaces internos y datos de contacto relevantes
 * dentro de un bloque de alto contraste, consistente con la estética editorial
 * boutique del sitio.
 */
export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-cream">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-28 lg:py-20">
        <div className="grid gap-12 border-b border-brand-surface/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <Logo light size="lg" />

            <p className="mt-6 max-w-md text-base leading-8 text-brand-cream/75">
              Asesoramiento legal claro, preventivo y personalizado para
              contratos, locaciones, arrendamientos e intimaciones.
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm text-brand-cream/60">
              <span aria-hidden="true" className="text-brand-gold">
                ◆
              </span>
              <span>Atención remota · Consultas personalizadas</span>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">
              Enlaces
            </h2>

            <nav aria-label="Enlaces del pie de página" className="mt-6">
              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base text-brand-cream/80 transition-colors duration-300 hover:text-brand-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-dark"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">
              Contacto
            </h2>

            <address className="mt-6 not-italic">
              <ul className="space-y-4 text-base leading-7 text-brand-cream/80">
                <li>Buenos Aires, Argentina</li>

                <li>
                  <a
                    href={emailUrl}
                    className="transition-colors duration-300 hover:text-brand-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-dark"
                  >
                    {contact.email}
                  </a>
                </li>

                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 hover:text-brand-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-dark"
                  >
                    +54 9 2983 40-6416
                  </a>
                </li>

                <li>
                  <a
                    href={contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 hover:text-brand-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-dark"
                  >
                    Instagram del estudio
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-sm text-brand-cream/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Estudio Jurídico Lachat. Todos los derechos reservados.</p>

          <p>
            Desarrollado por{" "}
            <a
              href="https://lucasepherra.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-cream/90 transition-colors duration-300 hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-dark"
            >
              Lucas Epherra
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}