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
      
      {/* Sticky Glass Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main className="flex-grow">
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
