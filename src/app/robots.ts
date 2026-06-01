import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/**
 * Define las reglas de rastreo para buscadores.
 *
 * Permite indexar el sitio completo y declara la ubicación del sitemap generado
 * por Next.js para mejorar la descubribilidad de la landing.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}