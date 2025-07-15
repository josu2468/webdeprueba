import React from 'react';
import type { NavigationPayload } from '../App';
import { CheckCircleIcon } from './icons';

interface NursingPageProps {
  navigate: (page: string, payload?: NavigationPayload) => void;
}

const NursingPage: React.FC<NursingPageProps> = ({ navigate }) => {
  const handleTalentJoinClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('talent');
  };

  return (
    <div className="bg-white text-gray-800 antialiased">
      <main>
        {/* Hero Section */}
        <section 
            className="relative bg-cover bg-center text-white py-20 md:py-28" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1806&auto=format=fit=crop')" }}
            aria-labelledby="nursing-heading"
        >
          <div className="relative container mx-auto px-6 text-center">
            <h1 id="nursing-heading" className="text-4xl md:text-6xl font-black uppercase tracking-wider [text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]">
              NOSOTROS TE AYUDAMOS A CREAR <span className="text-brand-green">TU FUTURO</span>
            </h1>
          </div>
        </section>

        {/* Intro Text */}
        <section className="bg-white py-16">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    En Hospitales San Roque (HUSR), nuestros profesionales de enfermería son el corazón de nuestra misión. Ofrecemos un entorno dinámico y de apoyo donde puedes prosperar profesionalmente, mientras marcas una diferencia significativa en la vida de nuestros pacientes y sus familias.
                </p>
            </div>
        </section>

        {/* Main Content - Alternating Layout */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6 max-w-6xl space-y-24">

            {/* Section 1: Modelo de Práctica Profesional */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="w-full h-80 rounded-lg overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1576091160550-2173dba9996a?q=80&w=1740&auto=format&fit=crop" alt="Equipo de enfermería colaborando" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Modelo de Práctica Profesional</h2>
                <p className="text-gray-600 mb-6">Nuestro modelo de gobernanza compartida te empodera para tomar decisiones que impactan directamente en la atención al paciente y en tu entorno de trabajo. Creemos que las enfermeras y enfermeros deben liderar la práctica clínica, y te damos la voz y las herramientas para hacerlo.</p>
                <ul className="space-y-3 list-none p-0">
                  <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-1" /><span>Participación activa en comités y toma de decisiones.</span></li>
                  <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-1" /><span>Autonomía para innovar y mejorar los procesos de atención.</span></li>
                  <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-1" /><span>Fomento de un liderazgo clínico en todos los niveles.</span></li>
                </ul>
              </div>
            </div>

            {/* Section 2: Desarrollo Profesional y Crecimiento */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-last w-full h-80 rounded-lg overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1740&auto=format&fit=crop" alt="Profesional en una sesión de desarrollo" className="w-full h-full object-cover" />
              </div>
              <div className="md:order-first">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Desarrollo Profesional y Crecimiento</h2>
                <p className="text-gray-600 mb-6">Invertimos en ti. Desde programas de residencia para recién graduados hasta oportunidades de formación continua y especialización, tu crecimiento es nuestra prioridad. Te apoyamos para que alcances tus metas profesionales y te conviertas en el líder que aspiras a ser.</p>
                 <ul className="space-y-3 list-none p-0">
                  <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-1" /><span>Acceso a certificaciones y programas de especialización.</span></li>
                  <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-1" /><span>Tutoría de líderes de enfermería con experiencia.</span></li>
                  <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-1" /><span>Rutas de carrera claras para el avance clínico y administrativo.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Section */}
        <section className="relative bg-cover bg-center text-white py-24" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1740&auto=format&fit=crop')" }}>
            
            <div className="relative container mx-auto px-6 text-center max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 [text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]">Investigación, Innovación y Colaboración</h2>
                <p className="text-lg md:text-xl text-white [text-shadow:1px_1px_2px_rgba(0,0,0,0.7)]">La enfermería en HUSR está a la vanguardia de la innovación. Te animamos a cuestionar el status quo, a participar en la investigación y a colaborar con equipos multidisciplinarios para desarrollar las mejores prácticas que definirán el futuro de la atención sanitaria.</p>
            </div>
        </section>

        {/* Talent Community Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Únete a Nuestro Equipo</h2>
            <p className="text-lg text-gray-600 mb-8">
              Incluso si no ves un puesto abierto que se ajuste a tu perfil, nos encantaría saber de ti. Únete a nuestra red para recibir notificaciones sobre futuras oportunidades que coincidan con tus habilidades e intereses.
            </p>
            <a 
              href="#" 
              onClick={handleTalentJoinClick}
              className="bg-white border-2 border-brand-green text-brand-green font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-brand-green hover:text-white hover:scale-105"
            >
              Unirse Ahora
            </a>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 text-center">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">¿Listo para dar el siguiente paso en tu carrera?</h2>
                 <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); navigate('vacancies', { keyword: 'Enfermería' }); }}
                    className="bg-brand-green hover:bg-brand-green-darker text-white font-bold py-4 px-10 rounded-full transition-all duration-300 inline-block text-lg transform hover:scale-105"
                 >
                    Buscar Empleos en Enfermería
                </a>
            </div>
        </section>

      </main>
    </div>
  );
};

export default NursingPage;