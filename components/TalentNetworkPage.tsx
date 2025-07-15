import React, { useState } from 'react';

const TalentNetworkPage: React.FC = () => {
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se podría añadir la lógica para enviar el formulario
    alert('¡Gracias por unirte a nuestra base de talento!');
  };

  const jobRoles = [
    "Médico/a",
    "Médico/a especialista",
    "Enfermero/a",
    "Auxiliar de enfermero/a",
    "Técnico Sanitario (Técnico Rayos, Técnico Radiología...)",
    "Administrativo/a",
    "Mensajería en moto",
    "Titulados Sanitarios (Fisioterapeuta, Logopeda...)",
    "Traductor/a",
    "Técnico/a de documentación",
    "Titulado superior no sanitario (CC Económicas y Empresariales…)",
    "Limpieza",
    "Mantenimiento de instalaciones",
    "Informática/Ingeniería",
    "Comunicación/Marketing"
  ];

  return (
    <div className="bg-gray-50 py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl">
          <h1 className="text-3xl md:text-4xl font-black text-center text-gray-800 mb-4">
            Únete a un Proyecto Líder
          </h1>
          <div className="text-left text-gray-600 mb-10 space-y-4">
            <p>
              Buscamos profesionales con talento y vocación que deseen crecer y dejar su huella en una institución líder, certificada en los más altos estándares de calidad y seguridad.
            </p>
            <p>
              <strong>¿Listo/a para dar el siguiente paso?</strong> Si compartes nuestra visión y quieres formar parte de nuestro equipo, nos encantaría conocerte.
            </p>
             <p>
              <strong>Completa el formulario a continuación para unirte a nuestra base de talento. Tu perfil será valorado para futuras oportunidades profesionales.</strong>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">Nombre</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-green focus:border-transparent transition bg-white"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">Apellidos</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-green focus:border-transparent transition bg-white"
                  placeholder="Tus apellidos"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Correo electrónico</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-green focus:border-transparent transition bg-white"
                placeholder="tu.email@ejemplo.com"
              />
            </div>
            <div>
                <label htmlFor="areaOfInterest" className="block text-sm font-bold text-gray-700 mb-2">Estoy interesado/a en:</label>
                <select 
                    id="areaOfInterest"
                    name="areaOfInterest"
                    required
                    defaultValue=""
                    className="w-full p-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-brand-green focus:border-transparent transition"
                >
                    <option value="" disabled>Selecciona un puesto</option>
                    {jobRoles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Currículum</label>
              <div className="flex items-center space-x-4">
                <label
                    htmlFor="resume-upload"
                    className="cursor-pointer bg-white border border-gray-300 rounded-md py-2 px-4 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
                >
                    <span>Subir archivo (.pdf)</span>
                </label>
                <input
                    type="file"
                    id="resume-upload"
                    name="resume-upload"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                />
                {fileName && (
                    <p className="text-sm text-gray-600 truncate" title={fileName}>
                        {fileName}
                    </p>
                )}
              </div>
            </div>
            <div className="text-center pt-4">
                <button
                    type="submit"
                    className="bg-brand-green hover:bg-brand-green-darker text-white font-bold py-3 px-10 rounded-full transition-all duration-300 text-lg transform hover:scale-105"
                >
                    Enviar mi Perfil
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TalentNetworkPage;