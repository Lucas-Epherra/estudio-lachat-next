import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  light?: boolean;
  size?: "sm" | "md" | "lg";
  href?: string;
}

/**
 * Logo del Estudio Jurídico Lachat.
 *
 * Mantiene la composición editorial original del proyecto y reemplaza únicamente
 * la marca circular por el logo institucional real del estudio.
 * Por defecto funciona como enlace interno al inicio de la landing.
 */
export default function Logo({
  light = false,
  size = "md",
  href = "/",
}: LogoProps) {
  const eyebrowColor = light ? "text-brand-cream/65" : "text-brand-dark/55";
  const titleColor = light ? "text-brand-cream" : "text-brand-dark";
  const markBackground = light ? "bg-brand-cream" : "bg-brand-cream/80";

  const sizeClasses = {
    sm: {
      mark: "h-10 w-10",
      image: "40px",
      eyebrow: "text-[8px]",
      title: "text-lg",
    },
    md: {
      mark: "h-11 w-11",
      image: "44px",
      eyebrow: "text-[9px]",
      title: "text-xl",
    },
    lg: {
      mark: "h-12 w-12",
      image: "48px",
      eyebrow: "text-[10px]",
      title: "text-2xl",
    },
  } satisfies Record<
    NonNullable<LogoProps["size"]>,
    {
      mark: string;
      image: string;
      eyebrow: string;
      title: string;
    }
  >;

  const selectedSize = sizeClasses[size];

  return (
    <Link
      href={href}
      aria-label="Ir al inicio de Estudio Jurídico Lachat"
      className="flex w-fit items-center gap-3 transition-opacity duration-300 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-cream"
    >
      <div
        aria-hidden="true"
        className={`relative grid ${selectedSize.mark} place-items-center rounded-full border border-brand-gold/50 ${markBackground}`}
      >
        <div className="relative h-full w-full overflow-hidden rounded-full">
          <Image
            src="/logo-lachat.jpeg"
            alt=""
            fill
            sizes={selectedSize.image}
            className="object-cover"
          />
        </div>

        <span className="absolute -right-1 -top-1 text-[10px] text-brand-gold">
          ✦
        </span>
      </div>

      <div className="leading-none">
        <p
          className={`${selectedSize.eyebrow} uppercase tracking-[0.34em] ${eyebrowColor}`}
        >
          Estudio Jurídico
        </p>

        <p
          className={`mt-1 font-serif ${selectedSize.title} tracking-[0.22em] ${titleColor}`}
        >
          LACHAT
        </p>
      </div>
    </Link>
  );
}