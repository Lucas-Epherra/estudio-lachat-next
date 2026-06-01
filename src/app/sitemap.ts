import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/**
 * Genera el sitemap XML del sitio.
 *
 * Al tratarse de una landing institucional de una sola página, se expone la URL
 * principal como entrada prioritaria para facilitar el rastreo por buscadores.
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