
import React from 'react';
import type { NavigationPayload } from '../App';
import { CheckCircleIcon } from './icons';

interface CareerPathPageProps {
  navigate: (page: string, payload?: NavigationPayload) => void;
}

const CareerPathPage: React.FC<CareerPathPageProps> = ({ navigate }) => {
  return (
    <div className="bg-white text-gray-800 antialiased">
      <main>
        {/* Hero Section */}
        <section 
            className="relative bg-cover bg-center text-white py-20 md:py-28" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1740&auto=format&fit=crop')" }}
            aria-labelledby="careerpath-heading"
        >
          <div className="relative container mx-auto px-6 text-center">
            <h1 id="careerpath-heading" className="text-4xl md:text-6xl font-black uppercase tracking-wider [text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]">
              LA ÚNICA MANERA DE LOGRAR LO IMPOSIBLE ES CREER QUE <span className="text-brand-green">ES POSIBLE</span>
            </h1>
          </div>
        </section>

        {/* Intro Text */}
        <section className="bg-white pt-12 pb-8">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                   Creemos que <strong className="font-bold text-gray-800">invertir en nuestra gente es la mejor forma de ofrecer una atención excepcional</strong>. Te ofrecemos las herramientas, el apoyo y las oportunidades para que construyas una carrera gratificante y llena de propósito.
                </p>
            </div>
        </section>

        {/* Main Content - Compacted */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-6 max-w-6xl space-y-16">

            {/* Section 1: Mentoring */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="w-full h-80 rounded-lg overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1740&auto=format&fit=crop" alt="Líderes en una reunión de equipo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Programas de Mentoring</h3>
                <p className="text-gray-600 mb-6">Creemos en el poder de la colaboración y la experiencia compartida. Nuestro programa de mentoring conecta a profesionales que se incorporan o buscan nuevos desafíos con miembros experimentados de la organización. Es una relación de confianza y apoyo diseñada para guiarte, acelerar tu integración y potenciar tu desarrollo desde el primer día.</p>
                <ul className="space-y-3 list-none p-0">
                  <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-1" /><span>Recibe orientación directa de expertos para superar desafíos, adquirir nuevas competencias y alcanzar tus metas profesionales más rápidamente.</span></li>
                  <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-1" /><span>Construye una red de contactos sólida dentro de la organización y comprende nuestra cultura y valores de una forma cercana.</span></li>
                  <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-1" /><span>Obtén una perspectiva valiosa y consejos prácticos para enfocar tu carrera y tomar las mejores decisiones para tu futuro.</span></li>
                </ul>
              </div>
            </div>

            {/* Section 2: Formación Continua */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-last w-full h-80 rounded-lg overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1740&auto=format&fit=crop" alt="Profesional en una sesión de formación online" className="w-full h-full object-cover" />
              </div>
              <div className="md:order-first">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Formación Continua</h3>
                <p className="text-gray-600 mb-6">Fomentamos una cultura de curiosidad y mejora constante a través de iniciativas internas que aprovechan nuestro mayor recurso: el conocimiento de nuestros propios equipos.</p>
                 <ul className="space-y-3 list-none p-0">
                  <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-1" /><span>Te ayudamos a mantenerte al día de las últimas tendencias, tecnologías procedimientos de tu área de especialización.</span></li>
                  <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-1" /><span>Acceso a plataformas de e-learning con contenido de primer nivel.</span></li>
                  <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-1" /><span>Jornadas de actualización y seminarios internos.</span></li>
                </ul>
              </div>
            </div>
            
             {/* Section 3: Movilidad Interna */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="w-full h-80 rounded-lg overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1740&auto=format&fit=crop" alt="Dos profesionales discutiendo un plan" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Movilidad Interna</h3>
                <p className="text-gray-600 mb-6">Creemos en el talento que ya tenemos en casa. Fomentamos activamente la promoción y la movilidad interna, ofreciéndote la oportunidad de explorar diferentes roles, departamentos y especialidades dentro de Hospitales San Roque.</p>
                <ul className="space-y-3 list-none p-0">
                  <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-1" /><span>Bolsa de empleo interna con prioridad para nuestros profesionales.</span></li>
                  <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-1" /><span>Planes de carrera personalizados y evaluación del desempeño.</span></li>
                  <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-1" /><span>Oportunidades para participar en proyectos transversales.</span></li>
                </ul>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
};

export default CareerPathPage;
