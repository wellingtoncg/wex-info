import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const highlights = [
    "Anos de experiência no mercado de tecnologia",
    "Técnicos especializados e certificados",
    "Peças e componentes originais",
    "Garantia em todos os serviços",
    "Atendimento rápido e personalizado"
  ];

  return (
    <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -left-20 -bottom-20 w-64 h-64 opacity-10">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 50) rotate(90) scale(50)">
              <stop stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#EC4899" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre a Wex Info</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 shadow-xl">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Com anos de experiência no mercado de tecnologia, a Wex Info oferece soluções completas em assistência técnica com foco em excelência, agilidade e confiança. Nossa equipe é formada por profissionais altamente qualificados, prontos para resolver qualquer problema relacionado a computadores, notebooks, smartphones e impressoras.
            </p>
            
            <h3 className="text-xl font-bold mb-4">Por que escolher a Wex Info?</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-purple-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;