import React from 'react';
import { MapPin, Navigation, Phone } from 'lucide-react'; // Added Phone icon for WhatsApp

const Location = () => {
  // Data for each store to make it easier to manage
  const stores = [
    {
      name: "Loja 1",
      address: "Estrada de Belém, 207, Encruzilhada, Recife - PE",
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.597351091879!2d-34.8931047!3d-8.0367193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab196f88f1525f%3A0xcc99c69d58e4ad7f!2sEstr.%20de%20Bel%C3%A9m%2C%20207%20-%20Encruzilhada%2C%20Recife%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1716584103022!5m2!1spt-BR!2sbr",
      wazeLink: "https://waze.com/ul?q=Estrada%20de%20Bel%C3%A9m%2C%20207%2C%20Encruzilhada%2C%20Recife%20-%20PE&navigate=yes",
      whatsappLink: "https://wa.me/5581985786235" // WhatsApp link added for Loja 1
    },
    {
      name: "Loja 2",
      address: "R. Córrego do Euclídes, 457 - Alto José Bonifacio, 02° andar, Recife - PE",
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.706173069152!2d-34.9126429!3d-8.028904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab182390a36939%3A0x6274482098d6c8e!2sR.%20C%C3%B3rrego%20do%20Eucl%C3%ADdes%2C%20457%20-%20Alto%20Jos%C3%A9%20Bonif%C3%A1cio%2C%20Recife%20-%20PE%2C%2052170-000!5e0!3m2!1spt-BR!2sbr!4v1721841000000!5m2!1spt-BR!2sbr", // Placeholder, generate actual
      wazeLink: "https://waze.com/ul?q=R.%20C%C3%B3rrego%20do%20Eucl%C3%ADdes%2C%20457%20-%20Alto%20Jos%C3%A9%20Bonifacio%2C%20Recife%20-%20PE&navigate=yes",
      whatsappLink: "https://wa.me/5581979118912"
    }
  ];

  return (
    <section id="location" className="bg-gray-900 py-20 font-inter text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Onde Estamos</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Visite nossas lojas e conheça todos os serviços que oferecemos.
          </p>
        </div>

        {/* Flex container for the store locations */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {stores.map((store, index) => (
            <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-xl">
              <h3 className="text-2xl font-bold p-6 pb-0">{store.name}</h3>
              <div className="relative aspect-video mt-4">
                <iframe
                  src={store.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Localização da Wex Info - ${store.name}`}
                ></iframe>
              </div>

              <div className="p-6 flex flex-col items-start"> {/* Changed to column for better stacking */}
                <div className="flex items-center mb-4">
                  <MapPin className="text-purple-500 mr-2" size={24} />
                  <p className="text-white">{store.address}</p>
                </div>

                <div className="flex flex-wrap gap-4 mt-2"> {/* Container for buttons */}
                  <a
                    href={store.wazeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out shadow-lg"
                  >
                    <Navigation className="mr-2" size={18} />
                    <span>Ver Rotas (Waze)</span>
                  </a>
                  {store.whatsappLink && (
                    <a
                      href={store.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out shadow-lg"
                    >
                      <Phone className="mr-2" size={18} />
                      <span>WhatsApp</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
