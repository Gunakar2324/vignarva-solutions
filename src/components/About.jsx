import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, Users, Target, Compass, CheckCircle } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: MapPin,
      title: "Chennai Headquarters",
      description: "Based in Chennai, ready to serve with flexible onshore and offshore delivery.",
    },
    {
      icon: Award,
      title: "Oracle IT Specialists",
      description: "Oracle Cloud ERP, HCM, SCM, Financials, integrations, and analytics expertise.",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "Agile delivery that reduces cost and speeds time-to-value.",
    },
    {
      icon: Target,
      title: "Digital Transformation",
      description: "Modernizing legacy enterprises with cloud workflows and APIs.",
    },
  ];

  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 relative bg-white overflow-hidden">
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-brand-50 text-brand-600 border border-brand-200 uppercase tracking-wider inline-flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" /> Corporate Overview
          </span>
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">Vignarva Solutions</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Oracle ERP, software, and digital transformation for modern enterprises.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Company Story Card */}
          <motion.div 
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 rounded-3xl border border-slate-200/80 shadow-soft-lg space-y-5 bg-gradient-to-b from-white to-slate-50/50">
              <div className="inline-flex items-center gap-2 text-brand-600 font-bold text-sm">
                <span className="w-2 h-2 rounded-full bg-brand-600" /> Executive Statement
              </div>
              <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                Empowering Enterprises with Scalable Cloud & Oracle Solutions
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                <strong>Vignarva Solutions</strong> is a Chennai IT firm focused on Oracle implementation, cloud migration, application development, and managed services.
              </p>

              <div className="pt-4 border-t border-slate-200/70 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-xs">
                  <div className="text-2xl sm:text-3xl font-black text-brand-600">Chennai</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Tamil Nadu, India</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-xs">
                  <div className="text-2xl sm:text-3xl font-black text-accent-600">Oracle</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">ERP Specialists</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Highlights Cards Grid */}
          <motion.div 
            className="lg:col-span-6 grid sm:grid-cols-2 gap-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="glass-card p-6 rounded-2xl border border-slate-200/80 hover:border-brand-300 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
