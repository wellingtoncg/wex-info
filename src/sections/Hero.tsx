import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
        
        {/* Hexagon grid pattern */}
        <div className="absolute right-0 top-1/3 h-64 w-64 opacity-20">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="url(#paint0_linear)" />
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="absolute left-10 bottom-1/4 h-40 w-40 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="url(#paint0_linear)" />
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="mx-auto max-w-3xl">
          <img 
            src="/logo.png" 
            alt="Wex Info Logo" 
            style={{ width: '50%', height: '50%' }}
            className="mx-auto mb-8"
          />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Assistência Técnica
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
            Manutenção, consertos e aluguel de impressoras com atendimento ágil e confiável
          </h2>
          
          <a
            href="https://wa.me/5581985786235"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all inline-block"
          >
            Solicite um Orçamento
          </a>

        </div>
        
      </div>
    </section>
  );
};

export default Hero;