import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-brand-cream/90 backdrop-blur-md border-b border-brand-dark/5">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo / Nombre del Estudio */}
        <Link href="/" className="font-serif text-xl font-bold text-brand-dark tracking-tight">
          Estudio Lachat<span className="text-brand-gold">.</span>
        </Link>

        {/* Enlaces de navegación (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-brand-dark/80 hover:text-brand-dark font-medium text-sm transition-colors">
            Inicio
          </Link>
          <Link href="#servicios" className="text-brand-dark/80 hover:text-brand-dark font-medium text-sm transition-colors">
            Servicios
          </Link>
          <Link href="#equipo" className="text-brand-dark/80 hover:text-brand-dark font-medium text-sm transition-colors">
            El Estudio
          </Link>
        </nav>

        {/* Call To Action (Botón de contacto) */}
        <div className="flex items-center">
          <Link 
            href="#contacto" 
            className="bg-brand-dark text-brand-surface px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-gold transition-colors"
          >
            Contacto
          </Link>
        </div>

      </div>
    </header>
  );
}