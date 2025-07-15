import React from 'react';

const IntroSection: React.FC = () => {
  return (
    <section className="bg-white pt-8 pb-12">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>
            <strong>Los nuevos retos y las oportunidades de aprendizaje son los que permiten el desarrollo de grandes carreras.</strong> Únete a nuestra familia y experimenta esto de primera mano junto a profesionales expertos en una cultura que te brinda el apoyo que necesitas. Juntos, podemos dar la atención de primera clase que nuestros pacientes esperan.
            </p>
            <p>
            Explora algunas de nuestras áreas profesionales clave a continuación y descubra cómo te apoyamos en las cosas que realmente importan.
            </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;