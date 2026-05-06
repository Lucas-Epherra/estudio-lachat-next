import ContactForm from "@/components/sections/ContactForm";

/**
 * Sección comercial de contacto.
 *
 * Mantiene separado el layout de la landing de la lógica interactiva del
 * formulario, que vive dentro de `ContactForm`.
 */
export default function ContactSection() {
  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className="border-t border-brand-dark/5 bg-brand-cream px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <ContactForm />
      </div>
    </section>
  );
}