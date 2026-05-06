"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { whatsappUrl } from "@/config/contact";
import { navItems } from "@/data/navItems";

/**
 * Menú mobile accesible para la navegación principal.
 *
 * Mantiene el estado de apertura/cierre aislado en un componente hoja para
 * respetar una arquitectura server-first. Cierra automáticamente al navegar
 * hacia una sección o al presionar Escape.
 */
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (!isOpen) return;

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Cerrar menú principal" : "Abrir menú principal"}
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((currentValue) => !currentValue)}
        className="inline-flex size-11 items-center justify-center rounded-full border border-brand-dark/15 bg-brand-surface/80 text-brand-dark transition duration-300 hover:bg-brand-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-cream"
      >
        <span className="sr-only">
          {isOpen ? "Cerrar menú principal" : "Abrir menú principal"}
        </span>

        <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
          <span
            className={`h-0.5 rounded-full bg-current transition duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 rounded-full bg-current transition duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 rounded-full bg-current transition duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {isOpen ? (
        <>
          <button
            type="button"
            aria-label="Cerrar menú principal"
            className="fixed inset-0 top-18 z-40 cursor-default bg-brand-dark/10 backdrop-blur-[2px]"
            onClick={() => setIsOpen(false)}
          />

          <nav
            id="mobile-navigation"
            aria-label="Navegación principal mobile"
            className="fixed inset-x-4 top-20 z-50 rounded-4xl border border-brand-gold/25 bg-brand-surface p-4 shadow-[0_24px_70px_rgba(8,46,58,0.18)]"
          >
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex rounded-2xl px-4 py-3 text-sm font-semibold text-brand-dark/80 transition duration-300 hover:bg-brand-gold/10 hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 grid gap-3 border-t border-brand-dark/10 pt-4">
              <Link
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-brand-dark px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-surface transition duration-300 hover:bg-brand-dark/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-surface"
              >
                Enviar consulta
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-brand-gold/50 bg-brand-cream/70 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-dark transition duration-300 hover:bg-brand-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-surface"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </>
      ) : null}
    </div>
  );
}