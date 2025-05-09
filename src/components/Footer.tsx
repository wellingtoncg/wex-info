import React from 'react';
import { Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Logo className="h-10 w-auto mb-4" />
            <p className="text-gray-400 text-center md:text-left">
              Soluções completas em assistência técnica com foco em excelência, agilidade e confiança.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="text-gray-400 mb-2">Estrada de Belém, 207, Encruzilhada</p>
            <p className="text-gray-400 mb-2">Recife - PE</p>
            <a 
              href="tel:+5581985786235" 
              className="text-gray-400 hover:text-purple-400 transition"
            >
              (81) 98578-6235
            </a>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/wexinfo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/5581985786235" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9.5 13.5a5 5 0 0 0 5 0" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} Wex Info. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;