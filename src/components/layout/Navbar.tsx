import Link from "next/link";

import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { whatsappUrl } from "@/config/contact";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Servicios", href: "#servicios" },
  { label: "Método", href: "#metodo" },
  { label: "Preguntas", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

/**
 * Barra de navegación principal de la landing.
 *
 * Mantiene una estructura simple, semántica y orientada a conversión.
 * Usa enlaces de ancla para navegar dentro de la home y un CTA principal
 * hacia WhatsApp.
 */
export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-dark/10 bg-brand-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <div className="shrink-0">
          <Logo  size="lg"/>
        </div>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-10 md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-dark/70 transition-colors duration-300 hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-cream"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="shrink-0">
          <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Consultar
          </Button>
        </div>
      </div>
    </header>
  );
}