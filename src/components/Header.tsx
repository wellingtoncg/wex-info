import React, { useState, useEffect } from 'react';
import { Instagram, Menu, X, MessageCircle as WhatsappIcon } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo className="h-12 w-auto" />
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('services')} 
            className="text-white hover:text-purple-400 transition"
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-white hover:text-purple-400 transition"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('location')} 
            className="text-white hover:text-purple-400 transition"
          >
            Onde Estamos
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition"
          >
            Fale Conosco
          </button>
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/wexinfo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition"
            >
              <Instagram size={22} />
            </a>
            <a 
              href="https://wa.me/5581985786235" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition"
            >
              <WhatsappIcon size={22} />
            </a>
          </div>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm shadow-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-white hover:text-purple-400 py-2 transition text-left"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white hover:text-purple-400 py-2 transition text-left"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('location')} 
              className="text-white hover:text-purple-400 py-2 transition text-left"
            >
              Onde Estamos
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition text-left"
            >
              Fale Conosco
            </button>
            <div className="flex items-center space-x-4 py-2">
              <a 
                href="https://www.instagram.com/wexinfo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition"
              >
                <Instagram size={22} />
              </a>
              <a 
                href="https://wa.me/5581985786235" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-green-400 transition"
              >
                <WhatsappIcon size={22} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;