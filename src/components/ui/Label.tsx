/**
 * Etiqueta decorativa para subtítulos y categorías.
 * Incluye ornamentos lineales y circulares en color dorado.
 */
interface LabelProps {
  children: React.ReactNode;
  dark?: boolean;
}

export default function Label({ children, dark = false }: LabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.35em] ${
        dark
          ? "border-brand-gold/40 text-brand-gold"
          : "border-brand-gold/45 bg-brand-cream/75 text-brand-dark/70"
      }`}
    >
      <span className="h-px w-5 bg-brand-gold" aria-hidden="true" />
      {children}
      <span className="h-1 w-1 rounded-full bg-brand-gold" aria-hidden="true" />
    </div>
  );
}