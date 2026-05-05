import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Importações dos componentes e seções
import Header from './components/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Location from './sections/Location';
import Contact from './sections/Contact';
import BusinessHours from './sections/BusinessHours';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Importações das páginas de rota
import LinkBioPage from './components/LinkBioPage';
import PrinterRentalPage from './components/PrinterRentalPage';
import PrivacyPage from './pages/PrivacyPage';
import EmpresasPage from './pages/EmpresasPage';

// Componente HomePage
function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sectionId = params.get('section');

    if (sectionId) {
      const attemptScroll = () => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          setTimeout(attemptScroll, 100);
        }
      };
      const initialDelay = setTimeout(attemptScroll, 150);
      return () => clearTimeout(initialDelay);
    }
  }, [location.search, location.pathname]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <div className="grid md:grid-cols-2 gap-0">
          <Location />
          <BusinessHours />
        </div>
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

/**
 * AppRoutes — árvore de rotas sem o Router container.
 * Exportado separadamente para poder ser usado pelo SSR (StaticRouter).
 */
export function AppRoutes() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/linkbio" element={<LinkBioPage />} />
        <Route path="/aluguel-impressoras" element={<PrinterRentalPage />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPage />} />
          <Route path="/empresas" element={<EmpresasPage />} />
      </Routes>
    </div>
  );
}

// Componente principal — envolve com BrowserRouter para uso no cliente
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;