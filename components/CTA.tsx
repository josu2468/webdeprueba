import React from 'react';
import type { NavigationPayload } from '../App';

interface CTAProps {
  navigate: (page: string, payload?: NavigationPayload) => void;
}

const CTA: React.FC<CTAProps> = ({ navigate }) => {
  const handleJoinClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('talent');
  };

  return (
    <section className="bg-brand-green text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-center items-center text-center gap-6">
          <h2 className="text-3xl font-bold max-w-xl">
            Únete a Nuestro Equipo para recibir alertas de empleo.
          </h2>
          <a 
            href="#"
            onClick={handleJoinClick}
            className="bg-white text-brand-green font-bold py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105 whitespace-nowrap"
          >
            Únete ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;