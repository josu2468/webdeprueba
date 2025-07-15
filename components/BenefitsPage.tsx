
import React from 'react';
import type { NavigationPayload } from '../App';

interface BenefitsPageProps {
  navigate: (page: string, payload?: NavigationPayload) => void;
}

const benefits = [
  {
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=500&auto=format&fit=crop',
    title: 'Cuidamos tu bienestar',
    description: 'Al formar parte de nuestro equipo conseguirás descuentos exclusivos en servicios hospitalarios y acceso a atención psicológica a través de Open Salud para que cuides de ti'
  },
  {
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=500&auto=format&fit=crop',
    title: 'Plan de Carrera',
    description: 'Impulsamos tu futuro con becas para postgrados, financiación de certificaciones y días libres para que asistas a congresos científicos.'
  },
  {
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=500&auto=format&fit=crop',
    title: 'Soporte Legal',
    description: 'Contarás con un equipo de expertos que estará a tu disposición para tus consultas legales.'
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop',
    title: 'Reconocemos tu Trabajo',
    description: 'Celebramos tu compromiso a través de nominaciones entre compañeros, premiando la excelencia, la innovación y el trabajo en equipo.'
  },
  {
    image: 'https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=500&auto=format&fit=crop',
    title: 'Responsabilidad Social',
    description: 'Participa en jornadas de salud comunitarias y dedica "horas solidarias" a ONGs, reforzando nuestro compromiso con la sociedad.'
  },
  {
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=500&auto=format&fit=crop',
    title: 'Descuentos exclusivos',
    description: 'Accede a nuestro club de beneficios con descuentos exclusivos en servicios tan variados como hoteles, bancos, guarderías y en nuestro propio hospital'
  }
];

const BenefitCard: React.FC<{ image: string; title: string; description: string; }> = ({ image, title, description }) => (
    <div className="bg-[#FDFBF5] border-8 border-brand-green rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col h-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6 text-center flex flex-col flex-grow">
        <h3 className="font-black text-2xl text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-base">{description}</p>
        </div>
    </div>
);

const BenefitsPage: React.FC<BenefitsPageProps> = ({ navigate }) => {
  return (
    <div className="bg-gray-50">
      <main>
        {/* Hero Section */}
        <section 
            className="relative bg-cover bg-center text-white py-20 md:py-28" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1740&auto=format&fit=crop')" }}
            aria-labelledby="benefits-heading"
        >
          
          <div className="relative container mx-auto px-6 text-center">
            <h1 id="benefits-heading" className="text-4xl md:text-6xl font-black uppercase tracking-wider [text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]">
              SIEMPRE ESTAMOS CREANDO MANERAS DE ESTAR AHÍ <span className="text-brand-green">PARA TI</span>
            </h1>
          </div>
        </section>

        {/* Intro Text */}
        <section className="bg-white pt-12 pb-10">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hemos diseñado un ecosistema de beneficios que apoya tu desarrollo profesional, tu salud, tu bienestar personal y el de tu familia. <span className="whitespace-nowrap">Porque <strong className="font-bold">cuando tú estás bien, todos estamos mejor.</strong></span>
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map(benefit => (
                <BenefitCard key={benefit.title} {...benefit} />
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default BenefitsPage;