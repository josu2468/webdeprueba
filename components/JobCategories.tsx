import React, { useState } from 'react';
import type { NavigationPayload } from '../App';
import { DevelopmentIcon, HeartHandIcon, InnovationIcon, TeamworkIcon } from './icons';

interface JobCategoriesProps {
    navigate: (page: string, payload?: NavigationPayload) => void;
}

const categoriesData = [
    {
        name: 'Enfermería',
        keyword: 'Enfermería',
        image: 'https://i.pinimg.com/1200x/0e/44/8e/0e448e93666152bfab377db020aa318d.jpg',
        description: 'Forma parte del corazón de nuestro hospital. Ofrece un cuidado excepcional y cercano, marcando la diferencia en la vida de los pacientes y sus familias.',
    },
    {
        name: 'Médicos',
        keyword: 'Medicina',
        image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1740&auto=format&fit=crop',
        description: 'Lidera la vanguardia de la medicina, utilizando tecnología de punta y colaborando con equipos multidisciplinarios para cambiar vidas.',
    },
    {
        name: 'Técnico-Sanitaria',
        keyword: 'Técnico-Sanitaria',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba9996a?q=80&w=1740&auto=format&fit=crop',
        description: 'Aporta tu especialidad al equipo. Desde fisioterapia hasta radiología y laboratorio, tu papel es vital para un diagnóstico y tratamiento integral.',
    },
    {
        name: 'Gestión y Administración',
        keyword: 'Gestión y Administración',
        image: 'https://images.unsplash.com/photo-1556742082-d04e0b42e4ca?q=80&w=1740&auto=format&fit=crop',
        description: 'Sé la columna vertebral de nuestra organización. Tu rol en finanzas, recursos humanos o administración es clave para nuestro éxito.',
    },
];

const nursingPillars = [
    {
        icon: <DevelopmentIcon className="w-10 h-10 text-brand-green" />,
        title: "Desarrollo y Especialización",
        text: "Rutas de carrera financiadas (clínica, gestión, investigación) para que te conviertas en el profesional que quieres ser."
    },
    {
        icon: <TeamworkIcon className="w-10 h-10 text-brand-green" />,
        title: "Mentoría y Cultura de Aprendizaje",
        text: "Programas de mentoría y sesiones clínicas colaborativas para que nunca te sientas solo/a ante un desafío."
    },
    {
        icon: <HeartHandIcon className="w-10 h-10 text-brand-green" />,
        title: "Bienestar y Cuidado del Cuidador",
        text: "Apoyo psicológico, talleres y flexibilidad horaria para asegurar tu equilibrio y sostenibilidad."
    },
    {
        icon: <InnovationIcon className="w-10 h-10 text-brand-green" />,
        title: "Autonomía y Voz Profesional",
        text: "Comités de práctica donde tu voz cuenta para mejorar protocolos y un reconocimiento a tu impacto."
    }
];

const JobCategories: React.FC<JobCategoriesProps> = ({ navigate }) => {
    const [activeTab, setActiveTab] = useState(0);
    const activeCategory = categoriesData[activeTab];

    return (
        <section className="bg-white pt-12 pb-20">
            <div className="container mx-auto px-6">
                <div className="shadow-lg rounded-xl overflow-hidden">
                    {/* Tabs */}
                    <div className="flex flex-wrap border-b border-gray-200 bg-gray-50">
                        {categoriesData.map((category, index) => (
                            <button
                                key={category.name}
                                onClick={() => setActiveTab(index)}
                                className={`flex-auto py-4 px-2 text-center text-sm sm:text-base font-bold transition-colors duration-300 focus:outline-none ${
                                    activeTab === index
                                        ? 'bg-brand-green text-white shadow-inner'
                                        : 'text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div
                        className="relative bg-cover bg-center bg-no-repeat text-white min-h-[600px] flex items-center justify-center transition-all duration-500"
                        style={{ backgroundImage: `url('${activeCategory.image}')` }}
                        aria-live="polite"
                    >
                        <div className="absolute inset-0 bg-black/60"></div>
                        
                         {activeCategory.name === 'Enfermería' ? (
                            <div className="relative p-8 md:p-12 max-w-7xl w-full flex flex-col justify-center text-center mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-12 [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]">
                                    Crece profesionalmente y lidera el futuro de la enfermería
                                </h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                                    {nursingPillars.map(pillar => (
                                        <div key={pillar.title} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 flex flex-col items-center justify-start text-center transition-all duration-300 transform hover:scale-105 hover:bg-white/20">
                                            <div className="bg-white p-3 rounded-full mb-4 shadow-md">
                                              {pillar.icon}
                                            </div>
                                            <h3 className="font-bold text-lg text-white mb-2 [text-shadow:1px_1px_2px_rgba(0,0,0,0.6)]">{pillar.title}</h3>
                                            <p className="text-sm text-white/90 [text-shadow:1px_1px_2px_rgba(0,0,0,0.6)]">{pillar.text}</p>
                                        </div>
                                    ))}
                                </div>
                            
                                <button
                                    onClick={() => navigate('talent')}
                                    className="bg-brand-green hover:bg-brand-green-darker text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 self-center"
                                >
                                    Únete a Nuestro Equipo
                                </button>
                            </div>
                        ) : (
                            <div className="relative p-8 md:p-12 max-w-2xl flex flex-col justify-center text-center md:text-left">
                                <h3 className="text-3xl md:text-4xl font-bold mb-4 [text-shadow:1px_1px_3px_rgba(0,0,0,0.6)]">{activeCategory.name}</h3>
                                <p className="text-lg md:text-xl mb-8 text-white [text-shadow:1px_1px_3px_rgba(0,0,0,0.6)]">
                                    {activeCategory.description}
                                </p>
                                <button
                                    onClick={() => navigate('vacancies', { keyword: activeCategory.keyword })}
                                    className="bg-brand-green hover:bg-brand-green-darker text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 self-center md:self-start"
                                >
                                    Ver Vacantes en {activeCategory.name}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobCategories;