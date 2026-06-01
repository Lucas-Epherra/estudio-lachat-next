export interface SiteConfig {
  name: string;
  legalName: string;
  url: string;
  title: string;
  description: string;
  locale: string;
  ogImage: string;
  keywords: string[];
  city: string;
  province: string;
  country: string;
  areaServed: string[];
  serviceType: string[];
}

/**
 * Configuración institucional y SEO centralizada del sitio.
 *
 * Evita duplicar dominio, descripciones y metadatos entre layout, sitemap,
 * robots, datos estructurados y futuras páginas internas.
 */
export const siteConfig: SiteConfig = {
  name: "Estudio Jurídico Lachat",
  legalName: "Estudio Jurídico Lachat",
  url: "https://www.estudiolachat.com.ar",
  title:
    "Estudio Jurídico Lachat | Abogada en Tres Arroyos para contratos, locaciones e intimaciones",
  description:
    "Asesoramiento legal claro y personalizado en Tres Arroyos y modalidad online para contratos, locaciones, arrendamientos rurales, cartas documento, intimaciones y reclamos civiles.",
  locale: "es_AR",
  ogImage: "/og-lachat.png",
  city: "Tres Arroyos",
  province: "Buenos Aires",
  country: "Argentina",
  areaServed: [
    "Tres Arroyos",
    "Buenos Aires",
    "Argentina",
    "Modalidad online",
  ],
  serviceType: [
    "Contratos de locación",
    "Locaciones urbanas",
    "Contratos comerciales",
    "Arrendamientos rurales",
    "Cartas documento",
    "Intimaciones legales",
    "Reclamos civiles",
    "Asesoramiento legal online",
  ],
  keywords: [
    "Estudio Jurídico Lachat",
    "abogada en Tres Arroyos",
    "estudio jurídico en Tres Arroyos",
    "asesoramiento legal en Tres Arroyos",
    "abogada contratos Tres Arroyos",
    "contratos de locación",
    "locaciones urbanas",
    "contratos comerciales",
    "arrendamientos rurales",
    "carta documento",
    "cartas documento Tres Arroyos",
    "intimaciones legales",
    "reclamos civiles",
    "asesoramiento legal online",
    "abogada en Buenos Aires",
  ],
};