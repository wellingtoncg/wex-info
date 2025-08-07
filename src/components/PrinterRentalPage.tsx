// src/pages/PrinterRentalPage.tsx

import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

// Importe as imagens diretamente da sua nova pasta 'src/image'
import BrotherDCP8112DN from '../image/BrotherDCP8112DN.png'; // Certifique-se do nome do arquivo
import BrotherDCP7065DN from '../image/BrotherDCP7065DN.png'; // Certifique-se do nome do arquivo
import Brother5652DCP from '../image/Brother 5652 DCP L5652DN.png'; // Certifique-se do nome do arquivo
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
      name: "Multifuncional Brother DCP-8112DN DUPLEX",
      description: `Alto desempenho x baixo custo Benefício
- 38 ppm
- Imprime Frente e Verso
- Rede e USB

A Impressora Brother 8112 entrega alta performance com velocidade de 38 páginas por minuto e conexão de rede Ethernet, para ser compartilhada com todo escritório. Suportando até 50.000 páginas impressas por mês, a brother 8112 dá conta do recado em ambientes que exigem alta produtividade e qualidade de impressão.

As cópias ou digitalizações de documentos e fotos podem ser feitas através do vidro expositor ou ainda utilizando o alimentador automático. O Alimentador automático da Brother DCP-8112DN possibilita copiar ou digitalizar até 35 páginas numa única vez sem a necessidade de colocar folha por folha.`,
      price: "A partir de R$ 220,00/mês",
      imageUrl: BrotherDCP8112DN // <== Usando a imagem importada
    },
    {
      name: "Multifuncional Brother 5652 DCP L5652DN",
      description: "A brother 5652 conta com impressão duplex, utilizando a frente e o verso da folha automaticamente, reduzindo o tempo de trabalho e gerando economia de papel. Conta com resolução máxima de 1200×1200 dpi e bandeja para papel de até 200g/m2, permitindo a impressão desde documentos mais simples, quanto material para apresentações e divulgação, que exige melhor acabamento final. Além disso a DCP L5652 trabalha com toner de alto rendimento, proporcionando um baixo custo por página.",
      price: "A partir de R$ 280,00/mês",
      imageUrl: Brother5652DCP // <== Usando a imagem importada
    },
    {
      name: "Multifuncional Laser Mono Brother DCP-7065DN",
      description: "Solução de baixo custo por página, excelente para uso diário. Impressora tanque de tinta colorida com alimentador automático.",
      price: "A partir de R$ 220,00/mês",
      imageUrl: BrotherDCP7065DN // <== Usando a imagem importada
    }/*
    {
      name: "Impressora Brother HL-L2350DW",
      description: "Monocromática, rápida e ideal para grandes volumes de documentos. Design compacto para qualquer espaço.",
      price: "A partir de R$ 200,00/mês",
      imageUrl: BrotherHL2350DW // <== Usando a imagem importada
    }*/
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {printerModels.map((printer, index) => (
                <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between p-6 text-center transition-transform transform hover:scale-105">
                  <div>
                    <img
                      src={printer.imageUrl}
                      alt={printer.name}
                      className="w-full h-48 object-contain mb-4 rounded-md bg-gray-700 p-2"
                    />
                    <h3 className="text-xl font-bold mb-2">{printer.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{printer.description}</p>
                  </div>
                  <div className="flex flex-col space-y-2 mt-auto"> {/* Usando 'mt-auto' para empurrar para o fundo */}
                    <p className="text-purple-400 text-lg font-semibold mb-0">{printer.price}</p>
                    <a
                      href="https://wa.me/5581985786235"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
                    >
                      Solicitar Orçamento 💬
                    </a>
                  </div>
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