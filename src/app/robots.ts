import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/**
 * Genera el archivo robots.txt del sitio.
 *
 * Permite indexación general y declara la ubicación del sitemap para facilitar
 * el rastreo por motores de búsqueda.
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