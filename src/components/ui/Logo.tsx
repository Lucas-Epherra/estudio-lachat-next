interface LogoProps {
  light?: boolean;
}

/**
 * Logo textual del Estudio Jurídico Lachat.
 *
 * Soporta una variante `light` para adaptarse correctamente a fondos oscuros,
 * como footer o bloques de alto contraste, manteniendo la identidad editorial
 * del sitio.
 */
export default function Logo({ light = false }: LogoProps) {
  const eyebrowColor = light ? "text-brand-cream/65" : "text-brand-dark/55";
  const titleColor = light ? "text-brand-cream" : "text-brand-dark";

  return (
    <div className="flex items-center gap-3" aria-label="Estudio Jurídico Lachat">
      <div
        className={[
          "relative grid h-11 w-11 place-items-center rounded-full border border-brand-gold/50",
          light ? "bg-brand-cream" : "bg-brand-cream/80",
        ].join(" ")}
        aria-hidden="true"
      >
        <span className="font-serif text-2xl text-brand-dark">L</span>

        <span className="absolute -right-1 -top-1 text-[10px] text-brand-gold">
          ✦
        </span>
      </div>

      <div className="leading-none">
        <p className={`text-[9px] uppercase tracking-[0.34em] ${eyebrowColor}`}>
          Estudio Jurídico
        </p>

        <p className={`mt-1 font-serif text-xl tracking-[0.22em] ${titleColor}`}>
          LACHAT
        </p>
      </div>
    </div>
  );
}