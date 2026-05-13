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
      className={`inline-flex max-w-full items-center justify-center rounded-full px-6 py-3.5 text-center text-[0.72rem] font-bold uppercase leading-[1.15] tracking-widest transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-cream active:scale-95 sm:px-8 sm:text-[0.76rem] ${variantClasses}`}
    >
      <span className="min-w-0 wrap-break-word">{children}</span>
    </Link>
  );
}