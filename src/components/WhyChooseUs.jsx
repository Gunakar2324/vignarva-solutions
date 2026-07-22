import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Layers, Zap, Clock, DollarSign, CheckCircle2, HeartHandshake } from 'lucide-react';

const whyCards = [
  {
    title: "Experienced Professionals",
    icon: Award,
    description: "Seasoned enterprise architects, full-stack engineers, and cloud consultants with proven track records."
  },
  {
    title: "Oracle Experts",
    icon: ShieldCheck,
    description: "Certified Oracle consultants specializing in ERP Cloud, EBS migration, HCM, SCM, and OIC middleware."
  },
  {
    title: "End-to-End Solutions",
    icon: Layers,
    description: "From strategy, architecture, and licensing to custom coding, QA, deployment, and ongoing managed support."
  },
  {
    title: "Agile Delivery",
    icon: Zap,
    description: "Iterative sprint cycles ensuring transparent progress tracking, fast feedback loops, and rapid time-to-market."
  },
  {
    title: "24×7 Support",
    icon: Clock,
    description: "Dedicated round-the-clock technical monitoring and helpdesk backing critical enterprise SLA guarantees."
  },
  {
    title: "Affordable Pricing",
    icon: DollarSign,
    description: "Optimized onshore/offshore cost structures delivering high-end enterprise software quality at competitive value."
  },
  {
    title: "Quality Assurance",
    icon: CheckCircle2,
    description: "Rigorous automated test coverage, security vulnerability scanning, and performance benchmark audits."
  },
  {
    title: "Customer Satisfaction",
    icon: HeartHandshake,
    description: "99%+ retention rate with long-term enterprise partnerships based on transparency, trust, and excellence."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-brand-50/50 via-white to-slate-50 relative overflow-hidden">
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
            We combine deep technical expertise with a relentless focus on client satisfaction and tangible return on investment.
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
