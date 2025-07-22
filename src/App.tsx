import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

import LinkBioPage from './components/LinkBioPage'; // <== novo

function HomePage() {
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
        <Brands />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/linkbio" element={<LinkBioPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
