import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

/**
 * Botón reutilizable para acciones primarias y secundarias de la landing.
 *
 * Renderiza un enlace estilizado compatible con rutas internas y enlaces
 * externos, manteniendo la estética boutique legal del sitio.
 */
export default function Button({
  href,
  children,
  variant = "primary",
  target,
  rel,
}: ButtonProps) {
  const variantClasses =
    variant === "primary"
      ? "bg-brand-dark text-brand-surface hover:bg-brand-dark/90"
      : "border border-brand-gold/50 bg-brand-cream/70 text-brand-dark hover:bg-brand-gold/10";

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center rounded-full px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-cream active:scale-95 ${variantClasses}`}
    >
      {children}
    </Link>
  );
}