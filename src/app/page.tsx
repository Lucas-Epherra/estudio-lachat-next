export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-gold/30">
      
      {/* Hero Section con Estética Editorial */}
      <main className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="space-y-6 max-w-4xl">
          <span className="text-brand-gold text-sm font-bold tracking-[0.12em] uppercase">
            Estudio Jurídico Lachat
          </span>
          
          <h1 className="font-serif text-brand-dark text-5xl md:text-7xl leading-[1.1] tracking-tight">
            Asesoramiento legal claro para contratos, locaciones y reclamos.
          </h1>
          
          <p className="text-brand-dark/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            Brindamos soluciones legales con un enfoque boutique, priorizando la claridad y el respaldo profesional en cada paso.
          </p>

          <div className="pt-6 flex gap-4">
            <button className="bg-brand-dark text-brand-surface px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all">
              Consultar Ahora
            </button>
            <button className="border border-brand-dark/20 px-8 py-4 rounded-full font-bold hover:bg-brand-dark/5 transition-all">
              Saber más
            </button>
          </div>
        </div>
      </main>

      {/* Sección de Servicios - Grid Limpio */}
      <section className="bg-brand-surface/50 border-y border-brand-dark/5 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          
          <div className="group space-y-4">
            <div className="text-brand-gold font-bold text-lg tracking-tighter">01</div>
            <h3 className="font-serif text-2xl text-brand-dark">Locaciones urbanas</h3>
            <p className="text-brand-dark/60 leading-relaxed">
              Gestión integral de alquileres, contratos y resolución de conflictos.
            </p>
          </div>

          <div className="group space-y-4">
            <div className="text-brand-gold font-bold text-lg tracking-tighter">02</div>
            <h3 className="font-serif text-2xl text-brand-dark">Contratos comerciales</h3>
            <p className="text-brand-dark/60 leading-relaxed">
              Redacción y revisión de acuerdos para proteger los intereses de tu negocio.
            </p>
          </div>

          <div className="group space-y-4">
            <div className="text-brand-gold font-bold text-lg tracking-tighter">03</div>
            <h3 className="font-serif text-2xl text-brand-dark">Arrendamientos</h3>
            <p className="text-brand-dark/60 leading-relaxed">
              Asesoramiento especializado en arrendamientos rurales y comerciales.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}