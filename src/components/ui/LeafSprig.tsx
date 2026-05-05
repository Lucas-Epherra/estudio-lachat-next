/**
 * Ornamento botánico SVG utilizado como detalle visual en tarjetas y fondos.
 */
export default function LeafSprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 220"
      fill="none"
      className={`pointer-events-none absolute ${className}`}
      aria-hidden="true"
    >
      <path
        d="M61 208C58 151 61 83 94 18"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {[
        [75, 43, 34], [84, 70, -18], [67, 96, 28],
        [78, 125, -24], [57, 150, 26], [70, 176, -20],
      ].map(([x, y, r], index) => (
        <ellipse
          key={index}
          cx={x}
          cy={y}
          rx="8"
          ry="24"
          transform={`rotate(${r} ${x} ${y})`}
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}