import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor,
  Laptop,
  HardDrive,
  RefreshCw,
  Printer,
  Trash2,
  Building2,
  MapPin,
  FileText,
  Users,
  MessageCircle,
  CheckCircle,
  ArrowLeft,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const WA_URL =
  'https://wa.me/5581985786235?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20de%20suporte%20de%20TI%20para%20minha%20empresa.';

const services = [
  {
    icon: <Monitor size={32} />,
    title: 'Manutenção preventiva',
    description:
      'Manutenção preventiva e corretiva de computadores e notebooks para evitar paradas inesperadas no seu negócio.',
  },
  {
    icon: <HardDrive size={32} />,
    title: 'Upgrade de hardware',
    description:
      'Troca e upgrade de HD para SSD, memória RAM e outros componentes para aumentar a performance da sua equipe.',
  },
  {
    icon: <RefreshCw size={32} />,
    title: 'Formatação e sistemas',
    description:
      'Formatação e reinstalação de sistemas operacionais com backup completo dos dados da empresa.',
  },
  {
    icon: <Building2 size={32} />,
    title: 'Redes e roteadores',
    description:
      'Configuração de redes cabeadas e Wi-Fi, roteadores e switches para escritórios e lojas.',
  },
  {
    icon: <Printer size={32} />,
    title: 'Impressoras com toner incluso',
    description:
      'Aluguel e manutenção de impressoras com toner incluso — sem surpresas na conta no fim do mês.',
  },
  {
    icon: <Trash2 size={32} />,
    title: 'Limpeza de equipamentos',
    description:
      'Limpeza e conservação interna de computadores, notebooks e impressoras, prolongando a vida útil.',
  },
  {
    icon: <MapPin size={32} />,
    title: 'Atendimento presencial',
    description:
      'Técnico vai até a sua empresa em Recife e Região Metropolitana — sem você precisar sair do lugar.',
  },
];

const diferenciais = [
  { icon: <MapPin size={20} />, text: 'Atendimento presencial em Recife e Região Metropolitana' },
  { icon: <FileText size={20} />, text: 'Contrato de manutenção mensal disponível' },
  { icon: <Building2 size={20} />, text: 'CNPJ: 56.045.009/0001-73' },
  { icon: <Users size={20} />, text: 'Técnicos especializados com anos de experiência' },
  { icon: <MessageCircle size={20} />, text: 'Orçamento sem compromisso' },
];

const EmpresasPage = () => {
  // SEO: atualiza título, description e canonical dinamicamente
  useEffect(() => {
    // Title
    const prevTitle = document.title;
    document.title = 'Suporte de TI para Empresas em Recife | Wex Info';

    // Description
    let descMeta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    const prevDesc = descMeta?.content ?? '';
    if (descMeta) {
      descMeta.content =
        'Wex Info oferece manutenção de computadores, notebooks e impressoras para empresas em Recife. Contrato mensal, atendimento presencial. CNPJ: 56.045.009/0001-73';
    }

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const prevCanonical = canonical?.href ?? '';
    if (canonical) {
      canonical.href = 'https://www.wexinfo.com.br/empresas';
    }

    return () => {
      document.title = prevTitle;
      if (descMeta) descMeta.content = prevDesc;
      if (canonical) canonical.href = prevCanonical;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      <main>
        {/* ── HERO ── */}
        <section className="relative py-24 flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Hexagon decorativo direita */}
          <div className="absolute right-0 top-1/3 h-64 w-64 opacity-20 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="url(#hex1)" />
              <defs>
                <linearGradient id="hex1" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8B5CF6" />
                  <stop offset="1" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {/* Hexagon decorativo esquerda */}
          <div className="absolute left-10 bottom-1/4 h-40 w-40 opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="url(#hex2)" />
              <defs>
                <linearGradient id="hex2" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8B5CF6" />
                  <stop offset="1" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="container mx-auto px-4 z-10 text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Suporte de TI para Empresas em Recife
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              A Wex Info oferece manutenção preventiva e corretiva de computadores, notebooks e
              impressoras para escritórios, lojas, consultórios e empresas de todos os portes em
              Recife e Região Metropolitana.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-md text-lg font-semibold shadow-lg hover:shadow-green-500/40 transition-all duration-300"
            >
              Solicitar orçamento para minha empresa
            </a>
          </div>
        </section>

        {/* ── SERVIÇOS ── */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Serviços para Empresas</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <div className="text-purple-500 mb-4">{s.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-gray-300">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DIFERENCIAIS ── */}
        <section className="py-20 bg-gray-800 relative overflow-hidden">
          {/* Círculo decorativo */}
          <div className="absolute -left-20 -bottom-20 w-64 h-64 opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="50" fill="url(#radial1)" />
              <defs>
                <radialGradient
                  id="radial1"
                  cx="0" cy="0" r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(50 50) rotate(90) scale(50)"
                >
                  <stop stopColor="#8B5CF6" />
                  <stop offset="1" stopColor="#EC4899" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher a Wex Info?</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto" />
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 shadow-xl">
                <div className="grid md:grid-cols-2 gap-5">
                  {diferenciais.map((d, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-purple-500 mt-0.5 shrink-0">{d.icon}</span>
                      <p className="text-gray-300">{d.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para ter suporte de TI de verdade?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Fale agora com um técnico pelo WhatsApp e receba um orçamento sem compromisso para a
              sua empresa.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-md text-lg font-semibold shadow-lg hover:shadow-green-500/40 transition-all duration-300"
            >
              Solicitar orçamento para minha empresa
            </a>
          </div>
        </section>
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default EmpresasPage;
