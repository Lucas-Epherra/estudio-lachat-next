import { whatsappUrl } from "@/config/contact";

/**
 * Botón flotante de WhatsApp para iniciar consultas rápidas desde cualquier
 * punto de la landing.
 *
 * Es un Server Component porque solo renderiza un enlace externo estático y no
 * requiere estado, hooks ni listeners del lado cliente.
 */
export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 rounded-full border border-brand-gold/40 bg-brand-dark px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-cream transition duration-300 hover:-translate-y-0.5 hover:border-brand-gold hover:bg-brand-dark/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-cream"
    >
      WhatsApp
    </a>
  );
}