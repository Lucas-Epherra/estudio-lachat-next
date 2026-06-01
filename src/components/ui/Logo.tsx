import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  light?: boolean;
  size?: "sm" | "md" | "lg";
  href?: string;
  preload?: boolean;
}

/**
 * Logo del Estudio Jurídico Lachat.
 *
 * Mantiene la composición editorial original del proyecto y usa el logo real
 * del estudio dentro de la marca circular. Funciona como enlace interno al
 * inicio de la landing.
 */
export default function Logo({
  light = false,
  size = "md",
  href = "/",
  preload = false,
}: LogoProps) {
  const eyebrowColor = light ? "text-brand-cream/65" : "text-brand-dark/55";
  const titleColor = light ? "text-brand-cream" : "text-brand-dark";
  const markBackground = light ? "bg-brand-cream" : "bg-brand-cream/80";

  const sizeClasses = {
    sm: {
      mark: "h-10 w-10",
      imageSize: "40px",
      eyebrow: "text-[7px]",
      title: "text-[1.05rem]",
      gap: "gap-2",
    },
    md: {
      mark: "h-11 w-11",
      imageSize: "44px",
      eyebrow: "text-[9px]",
      title: "text-xl",
      gap: "gap-3",
    },
    lg: {
      mark: "h-12 w-12",
      imageSize: "48px",
      eyebrow: "text-[10px]",
      title: "text-2xl",
      gap: "gap-3",
    },
  } satisfies Record<
    NonNullable<LogoProps["size"]>,
    {
      mark: string;
      imageSize: string;
      eyebrow: string;
      title: string;
      gap: string;
    }
  >;

  const selectedSize = sizeClasses[size];

  return (
    <Link
      href={href}
      aria-label="Ir al inicio de Estudio Jurídico Lachat"
      className={`flex w-fit items-center ${selectedSize.gap} transition-opacity duration-300 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-cream`}
    >
      <div
        aria-hidden="true"
        className={`relative grid ${selectedSize.mark} place-items-center overflow-hidden rounded-full border border-brand-gold/50 ${markBackground}`}
      >
        <Image
          src="/images/brand/logo-lachat.jpeg"
          alt=""
          fill
          sizes={selectedSize.imageSize}
          preload={preload}
          className="rounded-full object-cover"
        />

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