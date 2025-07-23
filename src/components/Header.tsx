// src/components/Header.tsx

import React, { useState, useEffect } from 'react';
import { Instagram, Menu, X, MessageCircle as WhatsappIcon } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Mantém as importações
import Logo from './Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Nova função para lidar com o clique na seção
  const handleSectionClick = (id: string) => {
    setIsMenuOpen(false); // Sempre fecha o menu mobile

    if (location.pathname !== '/') {
      // Se não estiver na HomePage, navegue para a HomePage com o parâmetro de query
      navigate(`/?section=${id}`); // <== AQUI ESTÁ A MUDANÇA PRINCIPAL
    } else {
      // Se já estiver na HomePage, apenas role
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <Logo className="h-12 w-auto" />
        </Link>

        {/* Botão de menu para mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => handleSectionClick('services')}
            className="text-white hover:text-purple-400 transition"
          >
            Serviços
          </button>
          <button
            onClick={() => handleSectionClick('about')}
            className="text-white hover:text-purple-400 transition"
          >
            Sobre
          </button>
          {/* <Link
            to="/aluguel-impressoras"
            className="text-white hover:text-purple-400 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Aluguel de Impressoras
    </Link> */}
          <button
            onClick={() => handleSectionClick('location')}
            className="text-white hover:text-purple-400 transition"
          >
            Onde Estamos
          </button>
          <button
            onClick={() => handleSectionClick('contact')}
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

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm shadow-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => handleSectionClick('services')}
              className="text-white hover:text-purple-400 py-2 transition text-left"
            >
              Serviços
            </button>
            <button
              onClick={() => handleSectionClick('about')}
              className="text-white hover:text-purple-400 py-2 transition text-left"
            >
              Sobre
            </button>
            {/* <Link
              to="/aluguel-impressoras"
              className="text-white hover:text-purple-400 py-2 transition text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              Aluguel de Impressoras
            </Link> */}
            <button
              onClick={() => handleSectionClick('location')}
              className="text-white hover:text-purple-400 py-2 transition text-left"
            >
              Onde Estamos
            </button>
            <button
              onClick={() => handleSectionClick('contact')}
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