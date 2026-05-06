import Approach from "@/components/sections/Approach";
import CommonSituations from "@/components/sections/CommonSituations";
import ContactSection from "@/components/sections/ContactSection";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";

/**
 * Página principal del Estudio Jurídico Lachat.
 *
 * Ensambla las secciones principales de la landing respetando una arquitectura
 * server-first y una jerarquía comercial orientada a conversión.
 */
export default function Home() {
  return (
    <main>
      <Hero />

      <Services />

      <Approach />

      <CommonSituations />

      <Process />

      <FAQ />

      <ContactSection />
    </main>
  );
}