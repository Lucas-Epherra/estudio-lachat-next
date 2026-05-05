import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

import "./globals.css";

export const metadata: Metadata = {
  title: "Estudio Jurídico Lachat",
  description:
    "Asesoramiento legal claro para contratos, locaciones, arrendamientos e intimaciones.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * Layout raíz de la aplicación.
 *
 * Define la estructura persistente del sitio con navegación, contenido,
 * botón flotante de WhatsApp y footer institucional.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-brand-cream text-brand-dark antialiased">
        <Navbar />
        {children}
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}