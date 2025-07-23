import React, { useEffect } from 'react'; // Adicionado useEffect
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Adicionado useLocation

// Importações dos seus componentes e seções
import Header from './components/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Location from './sections/Location';
import Contact from './sections/Contact';
import BusinessHours from './sections/BusinessHours';
import Brands from './sections/Brands';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Importações das suas páginas de rota
import LinkBioPage from './components/LinkBioPage';
import PrinterRentalPage from './components/PrinterRentalPage'; // Certifique-se que o caminho está correto

// Componente HomePage
function HomePage() {
  const location = useLocation(); // Hook para acessar a localização atual da URL

  // Efeito para lidar com a rolagem para seções específicas
  useEffect(() => {
    // Cria um objeto URLSearchParams a partir dos parâmetros de busca da URL (ex: ?section=contact)
    const params = new URLSearchParams(location.search);
    // Obtém o valor do parâmetro 'section'
    const sectionId = params.get('section');

    // Se um sectionId foi encontrado na URL
    if (sectionId) {
      // Função para tentar rolar para o elemento
      const attemptScroll = () => {
        const element = document.getElementById(sectionId); // Tenta encontrar o elemento pelo ID

        if (element) {
          // Se o elemento foi encontrado, rola para ele suavemente
          element.scrollIntoView({ behavior: 'smooth' });
          // Opcional: Limpa o parâmetro 'section' da URL após a rolagem para uma URL mais limpa
          // Isso também impede que a rolagem aconteça novamente se o usuário atualizar a página
          // window.history.replaceState({}, document.title, location.pathname);
        } else {
          // Se o elemento ainda não existe no DOM, tenta novamente após um pequeno atraso
          // Isso é útil para garantir que a rolagem aconteça depois que o React renderize tudo
          setTimeout(attemptScroll, 100); // Tenta a cada 100ms
        }
      };

      // Inicia a primeira tentativa de rolagem após um pequeno atraso inicial
      // Isso dá tempo para a HomePage renderizar seus filhos antes da primeira busca pelo elemento
      const initialDelay = setTimeout(attemptScroll, 150); // Atraso inicial de 150ms

      // Função de limpeza: garante que o setTimeout inicial seja cancelado
      // se o componente for desmontado ou se o 'location.search' mudar antes do atraso terminar
      return () => clearTimeout(initialDelay);
    }
  }, [location.search, location.pathname]); // O efeito roda quando 'location.search' ou 'location.pathname' mudam

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        {/* Seção de Localização e Horário de Funcionamento em layout de grid */}
        <div className="grid md:grid-cols-2 gap-0">
          <Location />
          <BusinessHours />
        </div>
        <Brands />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

// Componente principal da aplicação
function App() {
  return (
    <Router>
      {/* O div min-h-screen define a altura mínima e o fundo para toda a aplicação */}
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        <Routes>
          {/* Rota para a página inicial */}
          <Route path="/" element={<HomePage />} />
          {/* Rota para a página de Link na Bio */}
          <Route path="/linkbio" element={<LinkBioPage />} />
          {/* Rota para a página de Aluguel de Impressoras */}
          <Route path="/aluguel-impressoras" element={<PrinterRentalPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;