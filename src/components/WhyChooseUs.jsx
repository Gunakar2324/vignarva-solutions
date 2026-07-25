import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Layers, Zap, Clock, DollarSign, CheckCircle2, HeartHandshake } from 'lucide-react';

const whyCards = [
  {
    title: "Experienced Professionals",
    icon: Award,
    description: "Enterprise architects, developers, and cloud consultants with proven delivery."
  },
  {
    title: "Oracle Experts",
    icon: ShieldCheck,
    description: "Certified Oracle consultants for ERP, HCM, SCM, and middleware."
  },
  {
    title: "End-to-End Solutions",
    icon: Layers,
    description: "From strategy and architecture to coding, QA, deployment, and support."
  },
  {
    title: "Agile Delivery",
    icon: Zap,
    description: "Sprint delivery with clear progress and faster time-to-market."
  },
  {
    title: "24×7 Support",
    icon: Clock,
    description: "Round-the-clock monitoring and SLA-backed support."
  },
  {
    title: "Affordable Pricing",
    icon: DollarSign,
    description: "Optimized delivery models for enterprise-grade value."
  },
  {
    title: "Quality Assurance",
    icon: CheckCircle2,
    description: "Automated testing, security scanning, and performance audits."
  },
  {
    title: "Dedicated Commitment",
    icon: HeartHandshake,
    description: "Client success through clear communication and excellent delivery."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-16 bg-gradient-to-b from-brand-50/50 via-white to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-white text-brand-600 border border-brand-200 uppercase tracking-wider">
            Our Key Differentiators
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Choose <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">Vignarva Solutions</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Expert Oracle solutions for measurable impact.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="glass-card p-6 rounded-3xl border border-slate-200/80 hover:border-brand-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 bg-white/80"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
