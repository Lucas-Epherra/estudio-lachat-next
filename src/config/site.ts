export interface SiteConfig {
  name: string;
  legalName: string;
  url: string;
  title: string;
  description: string;
  locale: string;
  ogImage: string;
  keywords: string[];
}

/**
 * Configuración institucional y SEO centralizada del sitio.
 *
 * Evita duplicar dominio, descripciones y metadatos entre layout, sitemap,
 * robots y futuras páginas internas.
 */
export const siteConfig: SiteConfig = {
  name: "Estudio Jurídico Lachat",
  legalName: "Estudio Jurídico Lachat",
  url: "https://www.estudiolachat.com.ar",
  title:
    "Estudio Jurídico Lachat | Asesoramiento legal en contratos, locaciones e intimaciones",
  description:
    "Asesoramiento legal claro y personalizado para contratos, locaciones, arrendamientos rurales, cartas documento e intimaciones. Atención online en Argentina.",
  locale: "es_AR",
  ogImage: "/og-lachat.png",
  keywords: [
    "Estudio Jurídico Lachat",
    "abogada contratos",
    "contratos de locación",
    "locaciones urbanas",
    "arrendamientos rurales",
    "carta documento",
    "intimaciones legales",
    "asesoramiento legal online",
    "abogada en Buenos Aires",
    "contratos comerciales",
  ],
};