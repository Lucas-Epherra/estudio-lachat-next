import LeafSprig from "./LeafSprig";

/**
 * Componente decorativo para el fondo del Hero.
 * Genera una atmósfera orgánica y premium sin interferir con la legibilidad del texto.
 * Utiliza posicionamiento absoluto para servir como capa base (z-0).
 */
export default function OrganicDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      
      {/* Círculo superior izquierdo: Tono crema suave para dar calidez */}
      <div className="absolute -left-28 -top-28 h-96 w-96 rounded-full bg-[#EFE4D2]/75" />
      
      {/* Borde dorado circular superior izquierdo: Refuerza la estructura visual */}
      <div className="absolute -left-16 -top-12 h-112 w-md rounded-full border border-brand-gold/35" />

      {/* Círculos superiores derechos: Generan equilibrio visual con el lado izquierdo */}
      <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#F1E7D8]/70" />
      <div className="absolute -right-10 top-24 h-72 w-72 rounded-full border border-brand-gold/30" />

      {/* Elipse inferior: Crea una base visual que 'sostiene' el contenido del Hero */}
      <div className="absolute -bottom-36 left-10 h-80 w-136 rounded-[50%] bg-[#EADFCC]/55" />

      {/* Detalle botánico SVG: Aporta el toque boutique legal definitivo */}
      <LeafSprig className="right-16 top-24 h-56 w-32 text-brand-gold/35" />
      
    </div>
  );
}