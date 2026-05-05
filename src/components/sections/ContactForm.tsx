"use client"; // Obligatorio en Next.js App Router para componentes con interactividad (useState, onClick)

import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Aquí simularemos el envío. Más adelante podemos conectarlo a WhatsApp o EmailJS
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Consulta enviada con éxito. Nos contactaremos a la brevedad.");
    }, 1500);
  };

  return (
    <div className="relative grid gap-5 p-6 md:p-10 border border-brand-dark/10 rounded-[1.75rem] bg-[#fffcf5]/90 shadow-sm">
      
      {/* Cabecera del Formulario */}
      <div className="grid gap-2 max-w-2xl">
        <p className="m-0 text-brand-gold text-xs font-bold tracking-[0.12em] uppercase">
          Consulta Online
        </p>
        <h2 className="m-0 text-brand-dark font-serif text-3xl md:text-4xl leading-none tracking-tight">
          Contanos tu caso
        </h2>
        <p className="m-0 text-brand-dark/70 text-base leading-relaxed">
          Te responderemos a la brevedad para coordinar una primera evaluación de tu situación.
        </p>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="grid gap-4 mt-4">
        
        {/* Fila de Nombre y Teléfono (2 columnas en desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-1.5 text-brand-dark font-semibold text-sm">
            <label htmlFor="nombre">Nombre completo</label>
            <input 
              type="text" 
              id="nombre"
              required
              className="w-full border border-brand-dark/15 rounded-2xl p-3.5 bg-brand-surface text-brand-dark outline-none focus:border-brand-gold focus:bg-[#fffdf8] transition-colors placeholder:text-brand-dark/40"
              placeholder="Ej. Juan Pérez"
            />
          </div>
          <div className="grid gap-1.5 text-brand-dark font-semibold text-sm">
            <label htmlFor="telefono">Teléfono / WhatsApp</label>
            <input 
              type="tel" 
              id="telefono"
              required
              className="w-full border border-brand-dark/15 rounded-2xl p-3.5 bg-brand-surface text-brand-dark outline-none focus:border-brand-gold focus:bg-[#fffdf8] transition-colors placeholder:text-brand-dark/40"
              placeholder="+54 9 11..."
            />
          </div>
        </div>

        {/* Textarea del mensaje */}
        <div className="grid gap-1.5 text-brand-dark font-semibold text-sm">
          <label htmlFor="mensaje">¿En qué podemos ayudarte?</label>
          <textarea 
            id="mensaje"
            required
            rows={4}
            className="w-full min-h-36 resize-y border border-brand-dark/15 rounded-2xl p-3.5 bg-brand-surface text-brand-dark outline-none focus:border-brand-gold focus:bg-[#fffdf8] transition-colors placeholder:text-brand-dark/40"
            placeholder="Describí brevemente tu situación..."
          ></textarea>
        </div>

        {/* Botón de Enviar */}
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="justify-self-start border-none rounded-full px-8 py-3.5 bg-brand-dark text-brand-surface font-bold cursor-pointer hover:-translate-y-0.5 transition-transform disabled:opacity-65 disabled:cursor-not-allowed mt-2"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
        </button>
        
        {/* Texto legal (muy importante en webs de abogados) */}
        <p className="text-brand-dark/60 text-xs mt-2">
          Tus datos son tratados con estricta confidencialidad profesional.
        </p>
      </form>
    </div>
  );
}