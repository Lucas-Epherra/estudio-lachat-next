import Link from "next/link";

import MobileMenu from "@/components/layout/MobileMenu";
import Logo from "@/components/ui/Logo";
import { whatsappUrl } from "@/config/contact";
import { navItems } from "@/data/navItems";

/**
 * Barra de navegación principal de la landing.
 *
 * Mantiene una estructura semántica, server-first y orientada a conversión.
 * En desktop muestra navegación completa y CTA directo. En mobile delega la
 * interacción al componente hoja MobileMenu.
 */
export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-dark/10 bg-brand-cream/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 md:gap-6 md:py-4">
        <div className="min-w-0 shrink">
          <Logo size="sm" />
        </div>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-7 lg:gap-10 md:flex"
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

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-full bg-brand-dark px-7 py-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-surface transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-cream md:inline-flex"
        >
          WhatsApp
        </a>

        <MobileMenu />
      </div>
    </header>
  );
}