import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, Database, ShieldCheck, Cloud, Cpu, Star, Layers, Activity } from 'lucide-react';

const Hero = ({ onOpenConsultation }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-mesh-pattern">
      
      {/* Background Soft Gradient Orbs & Shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-300/30 via-accent-300/20 to-indigo-300/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-brand-200/80 shadow-sm backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 rounded-full bg-brand-500 animate-ping" />
              <Sparkles className="w-4 h-4 text-brand-600" />
              <span className="text-xs sm:text-sm font-semibold text-slate-800 tracking-wide">
                Oracle ERP Cloud & Enterprise IT Specialists
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Transforming Businesses with <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 bg-clip-text text-transparent">
                Innovative IT Solutions
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              We deliver Oracle ERP Cloud, Enterprise Applications, Cloud Solutions, Digital Transformation, Custom Software Development, and Managed IT Consulting services to power enterprise growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 rounded-2xl shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-800 bg-white/80 hover:bg-white border border-slate-200 hover:border-slate-300 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                Contact Us
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-slate-200/60 grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">Oracle Certified Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">End-to-End Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">24×7 Managed Support</span>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Visual (Glass Cards & Dynamic Dashboard Preview) */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Main Central Glass Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="glass-card p-6 sm:p-8 rounded-3xl relative z-10 border border-white/90">
                {/* Header of Glass Card */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-brand-50 rounded-xl text-brand-600">
                      <Database className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">Oracle ERP Suite</h3>
                      <p className="text-xs text-slate-500">Live Enterprise Hub</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200/60 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" /> Active
                  </span>
                </div>

                {/* Modules Grid Quick Preview */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: 'Financials Cloud', status: 'Implemented', color: 'text-brand-600 bg-brand-50' },
                    { label: 'HCM & Payroll', status: 'Active', color: 'text-accent-600 bg-accent-50' },
                    { label: 'SCM & Inventory', status: 'Optimized', color: 'text-indigo-600 bg-indigo-50' },
                    { label: 'OIC Integrations', status: 'Synced', color: 'text-sky-600 bg-sky-50' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 bg-white/80 rounded-xl border border-slate-100 shadow-xs">
                      <div className="text-xs font-bold text-slate-800">{item.label}</div>
                      <div className={`text-[10px] font-semibold mt-1 inline-block px-2 py-0.5 rounded-md ${item.color}`}>
                        {item.status}
                      </div>
                    </div>
                  ))}
                </div>

                {/* System Activity Meter */}
                <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-brand-600" /> Migration & SLA Health
                    </span>
                    <span className="font-bold text-brand-600">99.98%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-600 to-accent-500 rounded-full w-[99.98%]" />
                  </div>
                </div>
              </div>

              {/* Floating Glass Pill Card 1 - Top Right */}
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-4 sm:-right-8 z-20 glass-card px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-white/80"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-md">
                  <Star className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Client Rating</div>
                  <div className="text-sm font-extrabold text-slate-900">4.9 / 5.0 Rating</div>
                </div>
              </motion.div>

              {/* Floating Glass Pill Card 2 - Bottom Left */}
              <motion.div 
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-4 sm:-left-8 z-20 glass-card px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-white/80"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 flex items-center justify-center text-white shadow-md">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Oracle Expertise</div>
                  <div className="text-sm font-extrabold text-slate-900">100+ Projects Done</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
