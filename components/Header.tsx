import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        
        {/* Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {/* Custom Logo SVG based on the provided heart image */}
          <div className="h-10 w-10 flex-shrink-0">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#84cc16" />
                  <stop offset="100%" stopColor="#16a34a" />
                </linearGradient>
                <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fcd34d" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
                <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#dc2626" />
                </linearGradient>
              </defs>
              {/* Green Part (Top Left) */}
              <path d="M50 45C35 45 20 35 20 20C20 5 45 5 50 25C48 15 35 15 50 45Z" fill="url(#greenGrad)" />
              <path d="M25 25C25 10 45 10 52 30C52 30 35 25 25 25Z" fill="#84cc16" />
              
              {/* Orange Part (Middle Swoosh) */}
              <path d="M20 35C20 60 50 85 50 85C40 70 30 50 35 40C35 40 25 45 20 35Z" fill="url(#orangeGrad)" />
              
              {/* Red Part (Right & Bottom) */}
              <path d="M52 30C65 10 90 15 90 35C90 60 50 95 50 95C50 95 85 60 85 35C85 20 65 20 52 30Z" fill="url(#redGrad)" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-gray-900">RESERVAPP</span>
            <span className="text-[0.65rem] font-semibold tracking-wider text-gray-500 uppercase">Estudia · Convive</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="!py-2 !px-4 !text-sm">
            Iniciar Sesión
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-5 py-4 shadow-xl">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="block text-base font-medium text-gray-700 hover:text-primary-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
               <Button variant="primary" className="w-full justify-center">
                Iniciar Sesión
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;