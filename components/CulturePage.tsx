

import React, { useState } from 'react';
import type { NavigationPayload } from '../App';
import { HeartHandIcon, TeamworkIcon, HandshakeIcon, HomeIcon } from './icons';

interface CulturePageProps {
  navigate: (page: string, payload?: NavigationPayload) => void;
}

const cultureTabsData = [
    { name: 'Misión y Valores' },
    { name: 'Cultura' },
];

const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.748 1.295 2.539 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
    </svg>
);


const CulturePage: React.FC<CulturePageProps> = ({ navigate }) => {
  const [activeCultureTab, setActiveCultureTab] = useState(0);
  const [flippedValues, setFlippedValues] = useState<Record<string, boolean>>({});

  const handleFlip = (title: string) => {
    setFlippedValues(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const priorities = [
      {
          icon: <TeamworkIcon className="w-10 h-10 text-brand-green flex-shrink-0" />,
          text: <>Cuidamos de nuestros <strong className="font-bold">pacientes</strong> como si fueran de nuestra propia familia.</>
      },
      {
          icon: <HandshakeIcon className="w-10 h-10 text-brand-green flex-shrink-0" />,
          text: <>Nos tratamos entre <strong className="font-bold">compañeros</strong> con el mismo respeto y apoyo que a nuestra familia.</>
      },
      {
          icon: <HeartHandIcon className="w-10 h-10 text-brand-green flex-shrink-0" />,
          text: <>Demostramos un <strong className="font-bold">compromiso</strong> activo con el bienestar de la comunidad canaria a la que servimos.</>
      },
      {
          icon: <HomeIcon className="w-10 h-10 text-brand-green flex-shrink-0" />,
          text: <>Cuidamos la <strong className="font-bold">organización</strong> con responsabilidad y orgullo garantizando su sostenibilidad para el futuro.</>
      }
  ];
  
  const keyValues = [
    {
      title: 'Calidad y excelencia',
      description: 'La búsqueda constante de la máxima calidad asistencial y la excelencia en todos los procesos y procedimientos para lograr la mejor experiencia del paciente.',
      image: 'https://i.pinimg.com/1200x/d5/e9/af/d5e9af23e6301ec0a84bfe0da2b4e900.jpg'
    },
    {
      title: 'Cercanía',
      description: 'Mantener un trato cercano, familiar y honesto con los pacientes, sus familiares y cuidadores buscando mejorar la capacidad de respuesta y eliminando barreras.',
      image: 'https://i.pinimg.com/736x/fb/86/60/fb86608f0c57c2f9240ff9bedecd43db.jpg'
    },
    {
      title: 'Ética',
      description: 'Actuar siempre de manera ética, justa y respetuosa, situando al paciente en el centro de todas las actuaciones.',
      image: 'https://i.pinimg.com/736x/9f/80/ae/9f80aec92548948c1260f0a8bcb256dd.jpg'
    },
    {
      title: 'Igualdad',
      description: 'Promover un entorno de trabajo inclusivo basado en la igualdad de oportunidades y la no discriminación, donde se respeta y valora la diversidad de cada persona.',
      image: 'https://i.pinimg.com/736x/db/c2/7c/dbc27c5b759080876359703f9ea5dcb4.jpg'
    },
    {
      title: 'Innovación y tecnología',
      description: 'El uso de tecnología de última generación como herramienta fundamental para mejorar el bienestar de las personas y la eficacia de los servicios sanitarios.',
      image: 'https://i.pinimg.com/736x/2e/cc/ea/2eccea51a2c47a92e6fc0287a22193c8.jpg'
    },
    {
      title: 'Sostenibilidad',
      description: 'Actuar con eficiencia para asegurar la sostenibilidad del negocio y la rentabilidad siendo al mismo tiempo socialmente responsables.',
      image: 'https://i.pinimg.com/736x/78/88/dc/7888dc64c19fd5a03e55548b8f7e8436.jpg'
    },
  ];

  return (
    <div className="bg-gray-50">
      <main>
        {/* Hero Section */}
        <section 
            className="relative bg-cover bg-center text-white py-20 md:py-28" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542884748-2b87b36c6b90?q=80&w=1740&auto=format&fit=crop')" }}
            aria-labelledby="culture-heading"
        >
          
          <div className="relative container mx-auto px-6 text-center">
            <h1 id="culture-heading" className="text-4xl md:text-6xl font-black uppercase tracking-wider [text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]">
              PERSONAS QUE <span className="text-brand-green">CUIDAN</span> DE PERSONAS
            </h1>
          </div>
        </section>

        {/* Intro Text */}
        <section className="bg-white pt-16 pb-8">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong className="font-bold">Una atención excepcional al paciente requiere cuidadores excepcionales.</strong> Hemos creado un entorno donde los cuidadores se sienten como en familia y donde lo más importante es el día a día: el aprendizaje constante, la colaboración intensa y la atención correcta por los motivos adecuados. Porque cuando cada desafío viene acompañado de un apoyo incondicional, todos somos más fuertes.
            </p>
          </div>
        </section>

        {/* Culture Tabs Section */}
        <section className="bg-white pt-4 pb-20">
            <div className="container mx-auto px-6">
                <div className="shadow-lg rounded-xl overflow-hidden">
                    {/* Tabs */}
                    <div className="flex flex-wrap border-b border-gray-200 bg-gray-50">
                        {cultureTabsData.map((tab, index) => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveCultureTab(index)}
                                className={`flex-auto py-4 px-2 text-center text-sm sm:text-base font-bold transition-colors duration-300 focus:outline-none ${
                                    activeCultureTab === index
                                        ? 'bg-brand-green text-white shadow-inner'
                                        : 'text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    {activeCultureTab === 0 ? (
                        <div className="bg-white p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-brand-green mb-6">
                                        Nuestra misión es cuidar la vida, investigar la salud y educar a quienes prestan servicio.
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        Ese siempre ha sido nuestro norte. Y nos ha llevado a brindar un nivel excepcional de atención junto con algunos de los cuidadores más talentosos y dedicados del sector. Nuestra misión también nos ayudó a definir nuestra visión: ser el mejor lugar para recibir atención médica en Canarias y el mejor lugar para trabajar en el sector sanitario.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        Al brindar atención, reconocemos cuatro prioridades:
                                    </p>
                                </div>
                                <div>
                                    <img 
                                        src="https://i.pinimg.com/1200x/49/18/d7/4918d71decae350e7784b85521502683.jpg" 
                                        alt="Equipo de profesionales sanitarios colaborando en una reunión" 
                                        className="rounded-lg shadow-md w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
                                {priorities.map((priority, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        {priority.icon}
                                        <div>
                                            <p className="text-gray-700">{priority.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-16 mt-16 border-t border-gray-200">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
                                    Ponemos en práctica nuestra misión y visión con seis valores clave:
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {keyValues.map((value) => {
                                        const isFlipped = !!flippedValues[value.title];
                                        return (
                                            <div key={value.title} className="w-full h-64 [perspective:1000px] cursor-pointer" onClick={() => handleFlip(value.title)}>
                                                <div className={`relative h-full w-full rounded-lg shadow-lg transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                                                    {/* Front */}
                                                    <div className="absolute inset-0 [backface-visibility:hidden]">
                                                        <img src={value.image} alt={value.title} className="w-full h-full object-cover rounded-lg" />
                                                        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
                                                        <div className="absolute bottom-0 left-0 w-full p-4 bg-brand-green/80 rounded-b-lg">
                                                            <h4 className="text-white font-bold text-lg">{value.title}</h4>
                                                        </div>
                                                    </div>
                                                    {/* Back */}
                                                    <div className="absolute inset-0 bg-white rounded-lg p-6 flex flex-col justify-center items-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                                        <h4 className="font-bold text-brand-green text-xl mb-2">{value.title}</h4>
                                                        <p className="text-gray-600 text-sm">{value.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                    ) : (
                        <div className="bg-white p-8 md:p-12">
                            {/* Section 1: Experiencias */}
                            <div className="mb-16">
                                <h3 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">Experiencias</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    Somos un hospital de referencia en Canarias con una cartera de pacientes única y variada. Aquí, cada momento es una nueva oportunidad para afrontar nuevos retos, aprender y crecer como cuidadores.
                                </p>
                            </div>

                            {/* Section 2: La voz de nuestros pacientes */}
                             <div className="bg-gray-100 p-8 md:p-12 rounded-lg">
                                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">La voz de nuestros pacientes</h3>
                                        <div className="text-gray-600 leading-relaxed space-y-4">
                                            <p>
                                                Creemos que la excelencia no solo se mide en los resultados clínicos, también la encontramos en la calidad humana y la dedicación de nuestro equipo. Por eso, hemos creado la iniciativa "El Paciente Te Valora".
                                            </p>
                                            <p>
                                                Este programa recoge los agradecimientos y valoraciones positivas de nuestros pacientes para reconocer y premiar periódicamente a aquellos profesionales cuya empatía, cercanía y compromiso han dejado una huella imborrable.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <img 
                                            src="https://hospitalessanroque.com/public/uploads/posts/grupo-maspalomas-baja-1b51b6fca4b0.jpeg" 
                                            alt="Iniciativa El Paciente Te Valora" 
                                            className="rounded-lg shadow-md w-full h-auto object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Section 3: Historias de nuestros cuidadores */}
                            <div className="mt-16 pt-16 border-t border-gray-200">
                                <h3 className="text-2xl md:text-3xl font-bold text-brand-green mb-4 text-center">Historias de nuestros cuidadores</h3>
                                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                                    Nuestro mayor activo es nuestro equipo. Detrás de cada diagnóstico, de cada tratamiento y de cada sonrisa, hay profesionales con historias de crecimiento, pasión y compromiso. Te invitamos a conocer a algunos de ellos.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer transition-shadow hover:shadow-xl">
                                        <div className="relative">
                                            <img src="https://i.pinimg.com/1200x/dc/97/8f/dc978fd33b17ca573dfc100579e3b693.jpg" alt="Carmen Santana, Supervisora de Enfermería" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-40">
                                                <PlayIcon className="w-16 h-16 text-white text-opacity-80 drop-shadow-lg transition-transform duration-300 group-hover:scale-110" />
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h4 className="font-bold text-lg text-gray-800 mb-2">Carmen Santana, Supervisora de Enfermería</h4>
                                            <p className="text-gray-600 text-sm">"De enfermera junior a liderar el equipo que me vio crecer. Mi pasión es combinar la excelencia clínica con el trato cercano que nos define y guiar a las nuevas generaciones en ese camino."</p>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer transition-shadow hover:shadow-xl">
                                        <div className="relative">
                                          <img src="https://i.pinimg.com/736x/6c/6e/d7/6c6ed7f4011b7f926b3f1505475aba16.jpg" alt="Javier Ríos, Técnico Superior en Imagen para el Diagnóstico" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                                          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-40">
                                              <PlayIcon className="w-16 h-16 text-white text-opacity-80 drop-shadow-lg transition-transform duration-300 group-hover:scale-110" />
                                          </div>
                                        </div>
                                        <div className="p-6">
                                            <h4 className="font-bold text-lg text-gray-800 mb-2">Javier Ríos, Técnico Superior en Imagen para el Diagnóstico</h4>
                                            <p className="text-gray-600 text-sm">"Aquí, la innovación no es un eslogan. Manejo la tecnología de diagnóstico más avanzada de Canarias, y saber que mi trabajo es clave para ofrecer respuestas rápidas y precisas a los pacientes es mi mayor motivación."</p>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer transition-shadow hover:shadow-xl">
                                       <div className="relative">
                                          <img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1740&auto=format&fit=crop" alt="Lucía Mendoza, Responsable de Atención al Paciente" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                                           <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-40">
                                              <PlayIcon className="w-16 h-16 text-white text-opacity-80 drop-shadow-lg transition-transform duration-300 group-hover:scale-110" />
                                          </div>
                                        </div>
                                        <div className="p-6">
                                            <h4 className="font-bold text-lg text-gray-800 mb-2">Lucía Mendoza, Responsable de Atención al Paciente</h4>
                                            <p className="text-gray-600 text-sm">"Mi carrera es la prueba de que aquí el talento interno es la primera opción. Empecé en Admisión y, gracias a la formación y a la confianza, hoy lidero un área clave. San Roque no solo ve lo que eres, sino que invierte en lo que puedes llegar a ser."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </section>
        
      </main>
    </div>
  );
};

export default CulturePage;