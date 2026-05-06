import { whatsappUrl } from "@/config/contact";

/**
 * Botón flotante de WhatsApp.
 *
 * Permite iniciar una consulta rápida desde cualquier punto de la landing.
 * En mobile usa proporciones compactas para reducir superposición con contenido.
 */
export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center rounded-full border border-brand-gold/40 bg-brand-dark px-4 py-3 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-brand-cream transition duration-300 hover:-translate-y-0.5 hover:border-brand-gold/70 hover:bg-brand-dark/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-cream active:scale-95 sm:bottom-5 sm:right-5 sm:px-5 sm:text-xs"
    >
      WhatsApp
    </a>
  );
}