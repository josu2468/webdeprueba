import React, { useState } from 'react';
import type { NavigationPayload } from '../App';
import { HospitalIcon, ClinicIcon, WellnessIcon, GlobeIcon } from './icons';

interface LocationsPageProps {
  navigate: (page: string, payload?: NavigationPayload) => void;
}

const locationsData = [
    {
        category: 'Hospitales Universitarios',
        icon: <HospitalIcon className="w-16 h-16 text-brand-green" />,
        description: 'Nuestros hospitales son centros de referencia equipados con la más alta tecnología y un equipo humano excepcional, donde abordamos los casos de mayor complejidad y lideramos la innovación sanitaria.',
        centers: [
            {
                name: 'Hospitales Universitarios San Roque en Las Palmas de Gran Canaria',
                address: 'C/ Dolores de la Rocha, nº5, Las Palmas de Gran Canaria.',
                shortLocation: 'Las Palmas de Gran Canaria',
            },
            {
                name: 'Hospitales Universitarios San Roque en Maspalomas',
                address: 'C/ Mar de Siberia, nº1, Meloneras.',
                shortLocation: 'Maspalomas'
            }
        ]
    },
    {
        category: 'Centros Asistenciales',
        icon: <ClinicIcon className="w-16 h-16 text-brand-green" />,
        description: 'Nuestra red de centros asistenciales extiende nuestro modelo de atención de calidad, acercando nuestros servicios a la población y ofreciendo un cuidado cercano y accesible.',
        centers: [
            {
                name: 'Centro Asistencial Vecindario',
                address: 'Avda. de Canarias, nº 131, Vecindario.',
                shortLocation: 'Vecindario'
            },
            {
                name: 'Centro Asistencial Lanzarote',
                address: 'C/ Dr. Juan Negrín, nº 250, Arrecife.',
                shortLocation: 'Lanzarote'
            }
        ]
    },
    {
        category: 'Centros Especializados y de Bienestar',
        icon: <WellnessIcon className="w-16 h-16 text-brand-green" />,
        description: 'Vamos más allá de la medicina tradicional, con centros dedicados a la atención especializada y al bienestar integral de las personas.',
        centers: [
            {
                name: 'IKIGAI by Hospitales San Roque',
                address: 'C/ García Tello, 5, Las Palmas de Gran Canaria.',
                shortLocation: 'Las Palmas de Gran Canaria'
            },
            {
                name: 'Centro Sociosanitario Queen Victoria',
                address: 'C/ Paseo de la Cornisa s/n, Las Palmas de Gran Canaria.',
                shortLocation: 'Las Palmas de Gran Canaria'
            }
        ]
    },
    {
        category: 'Expansión Internacional',
        icon: <GlobeIcon className="w-16 h-16 text-brand-green" />,
        description: 'Nuestro compromiso con la salud no tiene fronteras, llevando nuestro modelo de gestión y calidad a nuevos horizontes.',
        centers: [
            {
                name: 'Centro Asistencial Cabo Verde',
                address: 'Isla de San Vicente, Cabo Verde.',
                shortLocation: 'Cabo Verde'
            }
        ]
    }
];


const LocationsPage: React.FC<LocationsPageProps> = ({ navigate }) => {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategoryData = locationsData[activeTab];

  return (
    <div className="bg-gray-50">
      <main>
        {/* Hero Section */}
        <section 
            className="relative bg-cover bg-center text-white py-20 md:py-28" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542095030-221557117188?q=80&w=1740&auto=format=fit=crop')" }}
            aria-labelledby="locations-heading"
        >
          
          <div className="relative container mx-auto px-6 text-center">
            <h1 id="locations-heading" className="text-4xl md:text-6xl font-black uppercase tracking-wider [text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]">
              Nuestros Centros
            </h1>
          </div>
        </section>

        {/* Intro Text */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Donde tu Talento Crece con Nosotros</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              En Hospitales Universitarios San Roque, cada uno de nuestros centros es un pilar fundamental de nuestro compromiso con la salud y la excelencia. Te invitamos a conocer los lugares donde podrás desarrollarte profesionalmente, formar parte de equipos de alto rendimiento y marcar una diferencia real.
            </p>
          </div>
        </section>

        {/* Locations Tabs Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                {/* Tab buttons */}
                <div className="flex flex-wrap border-b border-gray-200 bg-gray-50">
                    {locationsData.map((group, index) => (
                        <React.Fragment key={group.category}>
                            <button
                                onClick={() => setActiveTab(index)}
                                className={`flex-auto md:flex-initial py-4 px-2 sm:px-6 text-center text-base font-bold transition-colors duration-300 focus:outline-none ${
                                    activeTab === index
                                        ? 'bg-brand-green text-white shadow-inner'
                                        : 'text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                {group.category}
                            </button>
                        </React.Fragment>
                    ))}
                </div>

                {/* Tab content */}
                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-12 gap-8 items-center">
                      <div className="md:col-span-2 flex justify-center">
                          {activeCategoryData.icon}
                      </div>
                      <div className="md:col-span-10 text-center md:text-left">
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">{activeCategoryData.category}</h3>
                          <p className="text-gray-700 leading-relaxed">{activeCategoryData.description}</p>
                      </div>
                  </div>
                  <div className="mt-10 border-t border-gray-200 pt-8">
                      <h4 className="font-bold text-xl text-gray-700 mb-6 text-center md:text-left">Centros disponibles en esta categoría:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          {activeCategoryData.centers.map(center => (
                              <a
                                  key={center.name}
                                  href="#"
                                  onClick={(e) => { e.preventDefault(); navigate('vacancies', { location: center.shortLocation }); }}
                                  className="block p-5 bg-gray-50 rounded-lg hover:bg-green-100 hover:shadow-lg transition-all duration-300 group border border-gray-200"
                              >
                                  <p className="font-semibold text-gray-800 group-hover:text-brand-green">{center.name}</p>
                                  <p className="text-sm text-gray-500 mt-1">{center.address}</p>
                              </a>
                          ))}
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LocationsPage;