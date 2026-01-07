import React from 'react';
import { MapPin, Navigation, Phone } from 'lucide-react';

const Location = () => {
  // Mantendo apenas os dados da Loja 1
  const store = {
    name: "Nossa Loja",
    address: "Estrada de Belém, 207, Encruzilhada, Recife - PE",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.563445942472!2d-34.8817757!3d-8.0335805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18949826d9c3%3A0x6475355877c08277!2sEstr.%20de%20Bel%C3%A9m%2C%20207%20-%20Encruzilhada%2C%20Recife%20-%20PE%2C%2052030-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000", // URL de exemplo corrigida
    wazeLink: "https://waze.com/ul?q=Estrada%20de%20Bel%C3%A9m%2C%20207%2C%20Encruzilhada%2C%20Recife%20-%20PE&navigate=yes",
    whatsappLink: "https://wa.me/5581985786235"
  };

  return (
    <section id="location" className="bg-gray-900 py-20 font-inter text-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Onde Estamos</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Venha nos visitar e conheça nossa estrutura preparada para te atender com excelência.
          </p>
        </div>

        {/* Card Único Centralizado */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
            <h3 className="text-2xl font-bold p-6 pb-0 text-center md:text-left">{store.name}</h3>
            
            {/* Mapa */}
            <div className="relative aspect-video mt-4">
              <iframe
                src={store.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Localização da Wex Info`}
              ></iframe>
            </div>

            {/* Informações e Botões */}
            <div className="p-6">
              <div className="flex items-start mb-6">
                <MapPin className="text-purple-500 mr-3 shrink-0" size={24} />
                <p className="text-white text-lg leading-relaxed">
                  {store.address}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={store.wazeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-lg"
                >
                  <Navigation className="mr-2" size={20} />
                  Ver Rotas (Waze)
                </a>
                
                <a
                  href={store.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-lg"
                >
                  <Phone className="mr-2" size={20} />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;