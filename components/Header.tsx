import React, { useState, useEffect, useRef } from 'react';
import type { NavigationPayload } from '../App';
import { ChevronDownIcon, MenuIcon, XIcon } from './icons';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  navigate: (page: string, payload?: NavigationPayload) => void;
}

const NavLink = ({ children, onClick }: { children: React.ReactNode, onClick?: (e: React.MouseEvent) => void }) => (
  <a href="#" onClick={onClick} className="text-gray-600 hover:text-brand-green w-full py-3 px-4 flex items-center justify-center space-x-1 transition-colors duration-300">
    <span>{children}</span>
  </a>
);

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu, navigate }) => {
  const [isCareersDropdownOpen, setIsCareersDropdownOpen] = useState(false);
  const [isWhyUsDropdownOpen, setIsWhyUsDropdownOpen] = useState(false);

  const careersDropdownRef = useRef<HTMLDivElement>(null);
  const whyUsDropdownRef = useRef<HTMLDivElement>(null);

  // Unified navigation links structure for easier maintenance and ordering.
  const navLinks = [
    { name: '¿Por qué Unirte a Nosotros/as?', id: 'why-us', hasDropdown: true, page: null },
    { name: 'Áreas de Carrera', id: 'careers', hasDropdown: true, page: null },
    { name: 'Todas las Vacantes', id: 'vacancies', hasDropdown: false, page: 'vacancies' },
    { name: 'Únete a Nuestro Equipo', id: 'talent', hasDropdown: false, page: 'talent', isCTA: true },
  ];

  const careersDropdownItems = [
    { name: 'Enfermería', page: 'nursing' },
    { name: 'Medicina', page: 'home' },
    { name: 'Técnico-Sanitaria', page: 'home' },
    { name: 'Gestión y Administración', page: 'home' },
  ];
  
  const whyUsDropdownItems = [
    { name: 'Beneficios', page: 'benefits' },
    { name: 'Plan de Carrera', page: 'careerPath' },
    { name: 'Cultura', page: 'culture' },
  ];

  const handleNavigation = (e: React.MouseEvent, page: string | null) => {
    e.preventDefault();
    if (page) {
      navigate(page);
    }
  };

  const toggleDropdown = (dropdown: 'careers' | 'why-us') => {
    if (dropdown === 'careers') {
      setIsCareersDropdownOpen(prev => !prev);
      setIsWhyUsDropdownOpen(false);
    } else { // 'why-us'
      setIsWhyUsDropdownOpen(prev => !prev);
      setIsCareersDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (!isMenuOpen) {
      setIsCareersDropdownOpen(false);
      setIsWhyUsDropdownOpen(false);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (careersDropdownRef.current && !careersDropdownRef.current.contains(event.target as Node)) {
        setIsCareersDropdownOpen(false);
      }
      if (whyUsDropdownRef.current && !whyUsDropdownRef.current.contains(event.target as Node)) {
        setIsWhyUsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [careersDropdownRef, whyUsDropdownRef]);

  const renderDropdown = (items: { name: string, page: string }[]) => (
    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50">
      {items.map((item) => (
        <a
          key={item.name}
          href="#"
          onClick={(e) => handleNavigation(e, item.page)}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-green w-full text-left transition-colors duration-200"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
  
  const renderMobileDropdown = (items: { name: string, page: string }[]) => (
     <div className="flex flex-col items-center bg-gray-50 w-full py-2">
       {items.map((item) => (
          <a
            href="#"
            key={item.name}
            onClick={(e) => handleNavigation(e, item.page)}
            className="text-gray-600 hover:text-brand-green py-2 w-full text-center transition-colors duration-200 block"
          >
            {item.name}
          </a>
       ))}
     </div>
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" onClick={(e) => handleNavigation(e, 'home')} aria-label="Página de inicio">
          <img className="h-10 w-auto" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=422,fit=crop,q=95/mP4n1j8GywHbD1wq/logo-hospitales-universitarios-san-roque_sin_fondo-A0xjl1aRyOsWOaQ3.png" alt="Logo Hospitales San Roque" />
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              const isOpen = link.id === 'careers' ? isCareersDropdownOpen : isWhyUsDropdownOpen;
              const dropdownRef = link.id === 'careers' ? careersDropdownRef : whyUsDropdownRef;
              const items = link.id === 'careers' ? careersDropdownItems : whyUsDropdownItems;

              return (
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => toggleDropdown(link.id as 'careers' | 'why-us')}
                    className="text-gray-600 hover:text-brand-green py-2 flex items-center space-x-1 transition-colors duration-300 focus:outline-none"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                  >
                    <span>{link.name}</span>
                    <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && renderDropdown(items)}
                </div>
              );
            }
            if (link.isCTA) {
              return (
                <a
                  key={link.name}
                  href="#"
                  onClick={(e) => handleNavigation(e, link.page)}
                  className="bg-brand-green hover:bg-brand-green-darker text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  {link.name}
                </a>
              );
            }
            return (
              <a
                key={link.name}
                href="#"
                onClick={(e) => handleNavigation(e, link.page)}
                className="text-gray-600 hover:text-brand-green py-2 px-3 transition-colors duration-300"
              >
                {link.name}
              </a>
            );
          })}
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col items-center w-full">
            {navLinks.map((link) => {
               if (link.hasDropdown) {
                 const isOpen = link.id === 'careers' ? isCareersDropdownOpen : isWhyUsDropdownOpen;
                 const items = link.id === 'careers' ? careersDropdownItems : whyUsDropdownItems;

                return (
                  <div key={link.name} className="w-full text-center border-b border-gray-100">
                    <button
                      onClick={() => toggleDropdown(link.id as 'careers' | 'why-us')}
                      className="text-gray-600 hover:text-brand-green py-3 px-4 flex items-center justify-center space-x-1 transition-colors duration-300 w-full"
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                    >
                      <span>{link.name}</span>
                      <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && renderMobileDropdown(items)}
                  </div>
                );
               }
               if (link.isCTA) {
                 return (
                   <div key={link.name} className="w-full p-4">
                     <a
                       href="#"
                       onClick={(e) => handleNavigation(e, link.page)}
                       className="bg-brand-green hover:bg-brand-green-darker text-white font-bold py-3 px-6 rounded-full transition-all duration-300 w-full block text-center"
                     >
                       {link.name}
                     </a>
                   </div>
                 );
               }
               return (
                 <div key={link.name} className="w-full text-center border-b border-gray-100">
                   <NavLink onClick={(e) => handleNavigation(e, link.page)}>{link.name}</NavLink>
                 </div>
               );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;