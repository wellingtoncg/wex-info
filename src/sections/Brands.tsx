import React from 'react';

const Brands = () => {
  // These are just examples of tech brands that Wex Info might service
  const brands = [
    { name: 'HP', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/150px-HP_logo_2012.svg.png' },
    { name: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/150px-Dell_Logo.svg.png' },
    { name: 'Lenovo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Lenovo_Logo_2015.svg/150px-Lenovo_Logo_2015.svg.png' },
    { name: 'Asus', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/150px-ASUS_Logo.svg.png' },
    { name: 'Acer', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/150px-Acer_2011.svg.png' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/150px-Apple_logo_black.svg.png' },
    { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/150px-Samsung_Logo.svg.png' },
    { name: 'LG', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/LG_symbol.svg/150px-LG_symbol.svg.png' },
    { name: 'Canon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Canon_logo.svg/150px-Canon_logo.svg.png' },
    { name: 'Epson', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Epson_logo.svg/150px-Epson_logo.svg.png' },
    { name: 'Brother', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Brother_logotype.svg/150px-Brother_logotype.svg.png' },
    { name: 'Xiaomi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/150px-Xiaomi_logo_%282021-%29.svg.png' },
  ];

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Trabalhamos com todas as marcas</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div key={index} className="p-4 flex items-center justify-center">
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`} 
                className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;