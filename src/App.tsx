import React from 'react';
import { MapIcon as WhatsappIcon } from 'lucide-react';
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

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <div className="grid md:grid-cols-2 gap-0">
          <Location />
          <BusinessHours />
        </div>
        <Brands />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;