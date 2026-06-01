import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import StructuredData from "@/components/seo/StructuredData";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { siteConfig } from "@/config/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Estudio Jurídico Lachat - Asesoramiento legal en contratos, locaciones e intimaciones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * Layout raíz de la aplicación.
 *
 * Define la estructura persistente del sitio con navegación, contenido principal,
 * datos estructurados, botón flotante de WhatsApp y footer institucional.
 * También concentra la metadata SEO global de la landing.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es-AR">
      <body className="min-h-screen bg-brand-cream text-brand-dark antialiased">
        <StructuredData />

        <Navbar />

        {children}

        <FloatingWhatsApp />

        <Footer />
      </body>
    </html>
  );
}