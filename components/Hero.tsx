import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center text-white" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba9996a?q=80&w=1740&auto=format&fit=crop')" }}
      aria-labelledby="hero-heading"
    >
      
      <div className="relative container mx-auto px-6 py-32 md:py-48 flex flex-col items-center justify-center text-center">
        <h1 id="hero-heading" className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-8 [text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]">
          Una carrera que cambia vidas. Empezando por la tuya.
        </h1>
        <div className="bg-white text-gray-700 p-6 sm:p-8 rounded-lg shadow-2xl w-full max-w-4xl">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="md:col-span-2">
              <label htmlFor="keywords" className="block text-left text-sm font-bold mb-1">Palabras clave</label>
              <input 
                type="text" 
                id="keywords" 
                placeholder="Puesto, habilidad, etc." 
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-green focus:border-transparent transition"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-left text-sm font-bold mb-1">Ubicación</label>
              <input 
                type="text" 
                id="location" 
                placeholder="Ciudad, código postal" 
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-green focus:border-transparent transition"
              />
            </div>
            <div>
              <label htmlFor="radius" className="block text-left text-sm font-bold mb-1">Radio</label>
              <select 
                id="radius" 
                className="w-full p-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-brand-green focus:border-transparent transition"
              >
                <option>+10km</option>
                <option>+25km</option>
                <option>+50km</option>
                <option>+100km</option>
              </select>
            </div>
            <button 
              type="submit" 
              className="md:col-start-4 bg-brand-green hover:bg-brand-green-darker text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 col-span-1 w-full"
            >
              Buscar Empleos
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;