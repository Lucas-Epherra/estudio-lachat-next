import { siteConfig } from "@/config/site";
import { faqs } from "@/data/faqs";

type JsonLd = Record<string, unknown>;

/**
 * Serializa datos estructurados evitando caracteres conflictivos dentro del
 * script JSON-LD.
 */
function serializeJsonLd(data: JsonLd): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/**
 * Datos estructurados globales del sitio.
 *
 * Expone información institucional mediante JSON-LD para ayudar a buscadores y
 * sistemas automáticos a interpretar el tipo de servicio, zona de atención,
 * contenido principal y preguntas frecuentes.
 */
export default function StructuredData() {
  const legalServiceJsonLd: JsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    description: siteConfig.description,
    areaServed: [
      {
        "@type": "City",
        name: siteConfig.city,
      },
      {
        "@type": "AdministrativeArea",
        name: siteConfig.province,
      },
      {
        "@type": "Country",
        name: siteConfig.country,
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.province,
      addressCountry: "AR",
    },
    serviceType: siteConfig.serviceType,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios legales",
      itemListElement: siteConfig.serviceType.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
    inLanguage: "es-AR",
  };

  const websiteJsonLd: JsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "es-AR",
  };

  const faqPageJsonLd: JsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        id="legal-service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(legalServiceJsonLd),
        }}
      />

      <script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(websiteJsonLd),
        }}
      />

      <script
        id="faq-page-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(faqPageJsonLd),
        }}
      />
    </>
  );
}