import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start">
            <span className="text-sm font-semibold text-gray-900 tracking-wider uppercase">ReservApp</span>
            <span className="text-xs text-gray-500 mt-1">Proyecto estudiantil universitario · {currentYear}</span>
          </div>

          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-primary-600 transition-colors">Acerca de</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Soporte</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Contacto</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Privacidad</a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-[10px] text-gray-400">
          Hecho con ❤️ por estudiantes para estudiantes.
        </div>
      </div>
    </footer>
  );
};

export default Footer;