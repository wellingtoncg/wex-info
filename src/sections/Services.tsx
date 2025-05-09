import React from 'react';
import { Monitor, Laptop, HardDrive, Smartphone, Printer, Cpu, RefreshCw, DownloadCloud } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: <Monitor size={32} />,
      title: "Manutenção de Computadores",
      description: "Serviços especializados para montagem e manutenção de computadores gamer e convencionais."
    },
    {
      icon: <Laptop size={32} />,
      title: "Reparo de Notebooks",
      description: "Diagnóstico e reparo de problemas em notebooks de todas as marcas e modelos."
    },
    {
      icon: <HardDrive size={32} />,
      title: "Reparo de Placas",
      description: "Serviços de reparo especializado para placas de vídeo, placas-mãe e fontes."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Reparo de Smartphones",
      description: "Manutenção e reparo de smartphones com peças originais e garantia."
    },
    {
      icon: <Printer size={32} />,
      title: "Aluguel de Impressoras",
      description: "Soluções de aluguel de impressoras para empresas com manutenção inclusa."
    },
    {
      icon: <Cpu size={32} />,
      title: "Upgrade de Hardware",
      description: "Análise de desempenho e upgrade de componentes para melhorar a performance."
    },
    {
      icon: <RefreshCw size={32} />,
      title: "Regravação de BIOS",
      description: "Serviço especializado de regravação de BIOS para recuperação de equipamentos."
    },
    {
      icon: <DownloadCloud size={32} />,
      title: "Formatação e Atualização",
      description: "Formatação e atualização de sistemas operacionais com backup de dados."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;