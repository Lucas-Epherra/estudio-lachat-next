import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/**
 * Genera el sitemap XML de la landing.
 *
 * Actualmente el sitio tiene una única URL pública principal. Si más adelante
 * se agregan páginas internas, deben sumarse acá con su prioridad y frecuencia.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}