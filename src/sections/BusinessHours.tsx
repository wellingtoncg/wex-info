import React from 'react';
import { Clock } from 'lucide-react';

const BusinessHours = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <div className="mb-8 inline-block p-4 rounded-full bg-purple-500/10">
            <Clock className="text-purple-500" size={40} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Horário de Funcionamento</h2>
          
          <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
            <div className="mb-8">
              <h3 className="text-xl font-medium text-gray-300 mb-4">Segunda à Sexta</h3>
              <p className="text-3xl font-bold text-white">9h às 18h</p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-4">Sábado</h3>
              <p className="text-3xl font-bold text-white">9:30h às 13h</p>
            </div>
          </div>
          
         
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;