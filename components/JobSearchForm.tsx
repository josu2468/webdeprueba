import React from 'react';
import type { NavigationPayload } from '../App';

interface JobSearchFormProps {
  navigate: (page: string, payload?: NavigationPayload) => void;
}

const JobSearchForm: React.FC<JobSearchFormProps> = ({ navigate }) => {
  const handleJoinClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('talent');
  };

  return (
    <section className="bg-gray-50" aria-labelledby="join-heading">
        <div className="container mx-auto px-6 pt-16 md:pt-20 pb-12 -mt-24 md:-mt-32 relative z-10">
            <div className="bg-gradient-to-r from-white to-gray-100 text-gray-700 p-6 rounded-xl shadow-2xl w-full max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center md:text-left">
                    {/* Left side: Text */}
                    <div>
                        <h2 id="join-heading" className="text-xl md:text-2xl font-bold text-gray-800">
                            Forma Parte de Nuestro Equipo
                        </h2>
                        <p className="text-gray-600 mt-1">
                            Déjanos tu currículum para futuras oportunidades.
                        </p>
                    </div>

                    {/* Right side: Button */}
                    <div className="flex-shrink-0">
                        <button
                            onClick={handleJoinClick}
                            className="bg-brand-green hover:bg-brand-green-darker text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-lg"
                        >
                            Únete a Nuestro Equipo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default JobSearchForm;