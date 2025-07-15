import React from 'react';
import { CheckCircleIcon } from './icons';

const WhyUs: React.FC = () => {
  const benefits = [
    'Desarrollo profesional y crecimiento',
    'Cultura de colaboración e innovación',
    'Beneficios competitivos y bienestar integral',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="w-full h-full rounded-lg overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1740&auto=format&fit=crop" alt="Equipo médico colaborando y sonriendo" className="w-full h-full object-cover"/>
          </div>
          <div className="text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">¿Por qué trabajar con nosotros?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Creemos en el poder de la colaboración para lograr lo extraordinario. Fomentamos un entorno donde cada voz es escuchada, cada idea es valorada y el crecimiento personal y profesional es una prioridad.
            </p>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="bg-brand-green hover:bg-brand-green-darker text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 inline-block">
              Saber Más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;