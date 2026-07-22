import React from 'react';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 relative overflow-hidden">
      
      {/* Soft Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo-mark.png" 
                alt="Vignarva Solutions Logo Mark" 
                className="h-11 w-auto object-contain bg-white/10 p-1.5 rounded-xl backdrop-blur-md"
              />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  Vignarva <span className="text-brand-400">Solutions</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  Innovating Business Through Technology
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Chennai-based enterprise IT consulting company specializing in Oracle ERP Cloud, custom enterprise software development, cloud migration, and 24/7 managed IT services.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="tel:+919600446220" className="hover:text-white transition-colors">+91 9600446220</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="mailto:g.vigneshkumar007@gmail.com" className="hover:text-white transition-colors">g.vigneshkumar007@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-500 pl-2">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#home" className="hover:text-brand-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#oracle-solutions" className="hover:text-brand-400 transition-colors">Oracle Solutions</a></li>
              <li><a href="#technologies" className="hover:text-brand-400 transition-colors">Technologies</a></li>
              <li><a href="#industries" className="hover:text-brand-400 transition-colors">Industries</a></li>
              <li><a href="#careers" className="hover:text-brand-400 transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: IT Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-500 pl-2">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#oracle-solutions" className="hover:text-brand-400 transition-colors">Oracle ERP Cloud</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Enterprise Software</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Mobile App Development</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Cloud & DevOps</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">API Integration</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">AI & Automation</a></li>
            </ul>
          </div>

          {/* Col 4: Oracle Specialization */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-500 pl-2">
              Oracle Modules
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#oracle-solutions" className="hover:text-brand-400 transition-colors">ERP Financials</a></li>
              <li><a href="#oracle-solutions" className="hover:text-brand-400 transition-colors">HCM & Global Payroll</a></li>
              <li><a href="#oracle-solutions" className="hover:text-brand-400 transition-colors">SCM & Procurement</a></li>
              <li><a href="#oracle-solutions" className="hover:text-brand-400 transition-colors">Manufacturing MES</a></li>
              <li><a href="#oracle-solutions" className="hover:text-brand-400 transition-colors">OIC Integration</a></li>
              <li><a href="#oracle-solutions" className="hover:text-brand-400 transition-colors">OTBI & Analytics Cloud</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Vignarva Solutions. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-white transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-brand-600 text-white transition-all shadow-md flex items-center gap-1 text-[11px]"
            >
              Top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
