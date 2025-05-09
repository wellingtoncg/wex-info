import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="bg-gray-900 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Onde Estamos</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Visite nossa loja e conheça todos os serviços que oferecemos. 
            Estamos localizados na Estrada de Belém, 207, Encruzilhada, Recife - PE.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl">
            <div className="relative aspect-video">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.597351091879!2d-34.8931047!3d-8.0367193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab196f88f1525f%3A0xcc99c69d58e4ad7f!2sEstr.%20de%20Bel%C3%A9m%2C%20207%20-%20Encruzilhada%2C%20Recife%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1716584103022!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Wex Info"
              ></iframe>
            </div>
            
            <div className="p-6 flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <MapPin className="text-purple-500 mr-2" size={24} />
                <p className="text-white">Estrada de Belém, 207, Encruzilhada, Recife - PE</p>
              </div>
              
              <a 
                href="https://maps.app.goo.gl/gAivv1EjLP2mKeVi9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition"
              >
                <Navigation className="mr-2" size={18} />
                <span>Ver Rotas</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;