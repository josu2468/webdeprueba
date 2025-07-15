import React, { useState, useMemo, useEffect } from 'react';
import type { Job } from '../types';
import type { NavigationPayload } from '../App';

interface AllVacanciesPageProps {
  navigate: (page: string, payload?: NavigationPayload) => void;
  initialLocation?: string | null;
  initialKeyword?: string | null;
}

const allJobs: Job[] = [
    { id: '1', title: 'Enfermero/a de Quirófano', category: 'Enfermería', location: 'Las Palmas de Gran Canaria', datePosted: 'Hace 2 días', type: 'Jornada Completa' },
    { id: '2', title: 'Médico/a de Urgencias', category: 'Medicina', location: 'Maspalomas', datePosted: 'Hace 5 días', type: 'Jornada Completa' },
    { id: '3', title: 'Técnico/a de Laboratorio', category: 'Técnico-Sanitaria', location: 'Las Palmas de Gran Canaria', datePosted: 'Hace 1 semana', type: 'Jornada Completa' },
    { id: '5', title: 'Auxiliar Administrativo/a', category: 'Gestión y Administración', location: 'Maspalomas', datePosted: 'Hace 10 días', type: 'Media Jornada' },
    { id: '6', title: 'Fisioterapeuta', category: 'Técnico-Sanitaria', location: 'Las Palmas de Gran Canaria', datePosted: 'Hace 2 semanas', type: 'Jornada Completa' },
    { id: '8', title: 'Cardiólogo/a', category: 'Medicina', location: 'Las Palmas de Gran Canaria', datePosted: 'Hace 1 día', type: 'Jornada Completa' },
    { id: '9', title: 'Enfermero/a de Pediatría', category: 'Enfermería', location: 'Maspalomas', datePosted: 'Hace 6 días', type: 'Jornada Completa' },
    { id: '10', title: 'Técnico de Rayos', category: 'Técnico-Sanitaria', location: 'Lanzarote', datePosted: 'Hace 8 días', type: 'Jornada Completa'},
];

const AllVacanciesPage: React.FC<AllVacanciesPageProps> = ({ navigate, initialLocation, initialKeyword }) => {
    const [keyword, setKeyword] = useState(initialKeyword || '');
    const [location, setLocation] = useState(initialLocation || '');
    
    useEffect(() => {
        setKeyword(initialKeyword || '');
        setLocation(initialLocation || '');
    }, [initialKeyword, initialLocation]);

    const filteredJobs = useMemo(() => {
        return allJobs.filter(job => {
            const keywordMatch = keyword.trim() === '' || 
                                 job.title.toLowerCase().includes(keyword.toLowerCase()) || 
                                 job.category.toLowerCase().includes(keyword.toLowerCase());
            const locationMatch = location.trim() === '' || 
                                  job.location.toLowerCase().includes(location.toLowerCase());
            return keywordMatch && locationMatch;
        });
    }, [keyword, location]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // The filtering is already done by the useMemo hook, this is just to handle form submission if needed in the future
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <main>
                {/* Search and Filter Section */}
                <section className="bg-white pt-10 pb-8 shadow-md">
                    <div className="container mx-auto px-6">
                        <h1 className="text-3xl md:text-4xl font-black text-center text-gray-800 mb-6">Encuentra tu Próxima Oportunidad</h1>
                        <form onSubmit={handleSearch} className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 items-end bg-white p-6 rounded-lg border border-gray-200">
                             <div className="md:col-span-2">
                                <label htmlFor="search-keywords" className="block text-left text-sm font-bold mb-1 text-gray-600">Palabras clave</label>
                                <input 
                                    type="text" 
                                    id="search-keywords" 
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    placeholder="Puesto, categoría..." 
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-green focus:border-transparent transition bg-white"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="search-location" className="block text-left text-sm font-bold mb-1 text-gray-600">Ubicación</label>
                                <input 
                                    type="text" 
                                    id="search-location" 
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="Ciudad, centro..." 
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-green focus:border-transparent transition bg-white"
                                />
                            </div>
                            <button 
                                type="submit" 
                                className="bg-brand-green hover:bg-brand-green-darker text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 w-full"
                            >
                                Buscar
                            </button>
                        </form>
                    </div>
                </section>

                {/* Job Listings */}
                <section className="py-12 md:py-16">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">Resultados ({filteredJobs.length})</h2>
                            {/* Sorting options can be added here */}
                        </div>

                        <div className="space-y-6">
                            {filteredJobs.length > 0 ? (
                                filteredJobs.map(job => (
                                    <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center">
                                        <div className="mb-4 md:mb-0">
                                            <h3 className="text-xl font-bold text-brand-green hover:underline cursor-pointer">{job.title}</h3>
                                            <p className="text-gray-600 font-semibold">{job.category}</p>
                                            <div className="flex items-center text-gray-500 text-sm mt-2">
                                                <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                                <span>{job.location}</span>
                                                <span className="mx-2">|</span>
                                                <span>{job.datePosted}</span>
                                            </div>
                                        </div>
                                        <div>
                                             <a href="#" className="bg-white border-2 border-brand-green text-brand-green font-bold py-2 px-6 rounded-full transition-all duration-300 hover:bg-brand-green hover:text-white whitespace-nowrap">
                                                Ver Detalles
                                            </a>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-16 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <h3 className="text-2xl font-bold text-gray-700">No se encontraron vacantes</h3>
                                    <p className="text-gray-500 mt-2">Prueba a modificar los términos de búsqueda o a unirte a nuestro equipo.</p>
                                     <button 
                                        onClick={() => navigate('talent')}
                                        className="mt-6 bg-brand-green hover:bg-brand-green-darker text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
                                     >
                                        Unirme al Equipo
                                    </button>
                                </div>
                            )}
                        </div>
                         {/* Pagination could be added here */}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AllVacanciesPage;