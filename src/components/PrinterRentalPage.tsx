// src/pages/PrinterRentalPage.tsx

import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

// Importe as imagens diretamente da sua nova pasta 'src/image'
import BrotherMFC5700DW from '../image/Brother MFC-L5700DW.webp'; // Certifique-se do nome do arquivo
import HPEcoTankL6270 from '../image/Epson EcoTank L6270.png'; // Certifique-se do nome do arquivo
import HPLaserJetM428fdw from '../image/HP LaserJet Pro MFP M428fdw.png'; // Certifique-se do nome do arquivo
import BrotherHL2350DW from '../image/Brother HL-L2350DW.webp'; // Certifique-se do nome do arquivo


const PrinterRentalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rentalBenefits = [
    "Redução de custos com manutenção e suprimentos",
    "Equipamentos modernos e de alta performance",
    "Suporte técnico especializado incluso",
    "Flexibilidade para escalar ou reduzir o número de equipamentos",
    "Gestão simplificada de impressões para sua empresa",
    "Melhoria na produtividade e eficiência"
  ];

  const printerModels = [
    {
      name: "Multifuncional Brother MFC-L5700DW",
      description: "Ideal para escritórios com alto volume de impressão, oferece rapidez e economia. Impressora laser monocromática com conectividade Wi-Fi.",
      price: "A partir de R$ 350,00/mês",
      imageUrl: BrotherMFC5700DW // <== Usando a imagem importada
    },
    {
      name: "Multifuncional HP LaserJet Pro MFP M428fdw",
      description: "Compacta e eficiente, perfeita para pequenas e médias empresas. Oferece impressão, cópia, digitalização e fax.",
      price: "A partir de R$ 280,00/mês",
      imageUrl: HPLaserJetM428fdw // <== Usando a imagem importada
    },
    {
      name: "Impressora Epson EcoTank L6270",
      description: "Solução de baixo custo por página, excelente para uso diário. Impressora tanque de tinta colorida com alimentador automático.",
      price: "A partir de R$ 220,00/mês",
      imageUrl: HPEcoTankL6270 // <== Usando a imagem importada
    },
    {
      name: "Impressora Brother HL-L2350DW",
      description: "Monocromática, rápida e ideal para grandes volumes de documentos. Design compacto para qualquer espaço.",
      price: "A partir de R$ 180,00/mês",
      imageUrl: BrotherHL2350DW // <== Usando a imagem importada
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-24 pb-12 bg-gray-900 text-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Aluguel de Impressoras 🖨️</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              Soluções flexíveis e completas para o aluguel de impressoras e multifuncionais,
              garantindo eficiência e economia para sua empresa em Recife e região.
            </p>
          </div>

          {/* Seção de Benefícios */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Por que alugar com a Wex Info? 🤔</h2>
            <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6">
                {rentalBenefits.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-purple-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Seção de Modelos de Impressoras */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8">Nossos Modelos Disponíveis 📄</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {printerModels.map((printer, index) => (
                <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden p-6 text-center transition-transform transform hover:scale-105">
                  <img
                    src={printer.imageUrl} // <== Usando a variável da importação
                    alt={printer.name}
                    className="w-full h-48 object-contain mb-4 rounded-md bg-gray-700 p-2"
                  />
                  <h3 className="text-xl font-bold mb-2">{printer.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{printer.description}</p>
                  <p className="text-purple-400 text-lg font-semibold mb-4">{printer.price}</p>
                  <a
                    href="https://wa.me/5581985786235"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
                  >
                    Solicitar Orçamento 💬
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Chamada para Ação para Soluções Personalizadas */}
          <section className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Soluções Personalizadas para Sua Empresa 🤝</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Precisa de uma configuração específica ou grandes volumes? Entre em contato conosco para
              um plano de aluguel sob medida para as suas necessidades.
            </p>
            <a
              href="https://wa.me/5581985786235"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-md text-xl font-semibold hover:bg-green-700 transition-colors"
            >
              Fale Conosco via WhatsApp 📲
            </a>
          </section>

        </div>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default PrinterRentalPage;