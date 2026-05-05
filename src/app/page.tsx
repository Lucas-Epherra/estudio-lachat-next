import ContactForm from "@/components/sections/ContactForm";
import Hero from "@/components/sections/Hero";
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

      <section
        id="contacto"
        aria-labelledby="contact-title"
        className="border-t border-brand-dark/5 bg-brand-cream px-6 py-24"
      >
        <div className="mx-auto max-w-4xl">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}