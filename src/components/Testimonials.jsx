import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Building, CheckCircle2 } from 'lucide-react';

const testimonialsList = [
  {
    quote: "Vignarva Solutions seamlessly executed our Oracle Cloud ERP Financials & SCM migration. Their deep domain expertise in Oracle modules saved us months of downtime and optimized our procurement workflow.",
    author: "Ramesh Krishnan",
    role: "VP of Information Technology",
    company: "Global Manufacturing Corp",
    location: "Chennai, India",
    rating: 5,
    tag: "Oracle Cloud ERP Migration"
  },
  {
    quote: "The OIC middleware and custom REST API integrations designed by Vignarva enabled real-time sync between our shop floor MES systems and Oracle Cloud. Outstanding engineering team!",
    author: "Anand Venkatesh",
    role: "Director of Enterprise Systems",
    company: "Apex Automotive Tech",
    location: "Bengaluru, India",
    rating: 5,
    tag: "Oracle OIC Integration"
  },
  {
    quote: "Partnering with Vignarva Solutions for our Oracle HCM Cloud implementation transformed our payroll and talent management operations. Their 24x7 support has been stellar.",
    author: "Deepa Sundaram",
    role: "Head of HR Systems & Payroll",
    company: "Logistics Enterprise Ltd",
    location: "Chennai, India",
    rating: 5,
    tag: "Oracle HCM Cloud"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-white text-brand-600 border border-brand-200 uppercase tracking-wider">
            Client Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What Our <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Hear from IT leaders and C-level executives who trust Vignarva Solutions for their mission-critical enterprise systems.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonialsList.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-slate-200/80 bg-white/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Rating & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 text-[10px] font-bold bg-brand-50 text-brand-600 rounded-md border border-brand-200">
                    {t.tag}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-brand-200 mb-3" />

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-extrabold text-slate-900">{t.author}</div>
                  <div className="text-xs text-brand-600 font-medium">{t.role}</div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                    <Building className="w-3 h-3 text-slate-400" /> {t.company}
                  </div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
