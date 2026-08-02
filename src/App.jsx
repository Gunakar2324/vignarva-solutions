import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OracleSolutionsExplorer from './components/OracleSolutionsExplorer';
import Services from './components/Services';
import Industries from './components/Industries';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-brand-500 selection:text-white flex flex-col font-sans">
      
      {/* Skip to Content — Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-bold focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Sticky Glass Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        <Hero onOpenConsultation={handleOpenConsultation} />
        <About />
        <OracleSolutionsExplorer onOpenConsultation={handleOpenConsultation} />
        <Services onOpenConsultation={handleOpenConsultation} />
        <Industries />
        <WhyChooseUs />
        <Contact />
      </main>

      {/* Multi-column Corporate Footer */}
      <Footer />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />

    </div>
  );
}

export default App;
