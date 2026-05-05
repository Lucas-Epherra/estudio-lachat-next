/**
 * Componentes de división visual para el Estudio Lachat.
 * Utilizan el color dorado de la marca para mantener la coherencia editorial.
 */

/**
 * Divisor alineado a la izquierda (por defecto).
 * Ideal para separar párrafos dentro de secciones de texto alineadas a la izquierda.
 */
export function Divider() {
  return (
    <div className="my-7 flex max-w-xs items-center justify-center gap-3 text-brand-gold">
      {/* Línea izquierda con opacidad para suavizar el impacto visual */}
      <span className="h-px flex-1 bg-current/70" />
      
      {/* Icono central de rombo característico de la estética boutique */}
      <span className="text-xs">◆</span>
      
      {/* Línea derecha */}
      <span className="h-px flex-1 bg-current/70" />
    </div>
  );
}

/**
 * Divisor centrado automáticamente.
 * Diseñado para ser usado debajo de títulos o párrafos que estén centrados en la pantalla.
 */
export function CenterDivider() {
  return (
    <div className="mx-auto my-7 flex max-w-xs items-center justify-center gap-3 text-brand-gold">
      <span className="h-px flex-1 bg-current/70" />
      <span className="text-xs">◆</span>
      <span className="h-px flex-1 bg-current/70" />
    </div>
  );
}