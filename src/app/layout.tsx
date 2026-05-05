import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Importamos nuestros nuevos componentes modulares
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estudio Jurídico Lachat | Asesoramiento Legal",
  description: "Asesoramiento legal claro para contratos, locaciones y reclamos. Enfoque boutique y profesional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        {/* El Navbar siempre arriba */}
        <Navbar />
        
        {/* El contenido de cada página (page.tsx) se inyecta aquí. 
            El flex-grow asegura que el footer se empuje siempre hacia abajo si hay poco contenido */}
        <main className="grow">
          {children}
        </main>

        {/* El Footer siempre abajo */}
        <Footer />
      </body>
    </html>
  );
}