import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-brand-surface/80 py-12 border-t border-brand-gold/20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Columna 1: Branding */}
        <div className="space-y-4">
          <h3 className="font-serif text-xl text-brand-surface tracking-tight">Estudio Lachat</h3>
          <p className="text-sm leading-relaxed max-w-xs">
            Asesoramiento legal claro, honesto y con un enfoque boutique para proteger tus intereses.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className="space-y-4">
          <h4 className="text-brand-gold text-sm font-bold tracking-widest uppercase">Enlaces</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-brand-surface transition-colors">Inicio</Link></li>
            <li><Link href="#servicios" className="hover:text-brand-surface transition-colors">Áreas de Práctica</Link></li>
            <li><Link href="#contacto" className="hover:text-brand-surface transition-colors">Consulta Online</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="space-y-4">
          <h4 className="text-brand-gold text-sm font-bold tracking-widest uppercase">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li>Buenos Aires, Argentina</li>
            <li>contacto@estudiolachat.com.ar</li>
            {/* Aquí luego agregaremos el link real de WhatsApp */}
            <li>+54 9 11 XXXX-XXXX</li> 
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-brand-surface/10 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {currentYear} Estudio Jurídico Lachat. Todos los derechos reservados.</p>
        <p className="opacity-60">Desarrollado por Lucas Epherra</p>
      </div>
    </footer>
  );
}