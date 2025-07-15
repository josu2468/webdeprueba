import React from 'react';
import { LinkedinIcon, FacebookIcon, TwitterIcon, InstagramIcon } from './icons';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <LinkedinIcon className="w-6 h-6" />, href: '#' },
    { icon: <FacebookIcon className="w-6 h-6" />, href: '#' },
    { icon: <TwitterIcon className="w-6 h-6" />, href: '#' },
    { icon: <InstagramIcon className="w-6 h-6" />, href: '#' },
  ];
  
  const footerLinks = [
    'Sobre Nosotros', 'Prensa', 'Política de Privacidad', 'Términos de Uso', 'Declaración de Igualdad de Oportunidades'
  ];

  return (
    <footer className="bg-[#1e293b] text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo and Social */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#" aria-label="Página de inicio" className="mb-4">
              <img className="h-12 w-auto" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=422,fit=crop,q=95/mP4n1j8GywHbD1wq/logo-hospitales-universitarios-san-roque_sin_fondo-A0xjl1aRyOsWOaQ3.png" alt="Logo Hospitales San Roque" />
            </a>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Empty column for spacing */}
          <div className="hidden md:block"></div>
          
          {/* Links */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            {footerLinks.map(link => (
              <a key={link} href="#" className="hover:text-white transition-colors duration-300">{link}</a>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Hospitales San Roque. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;