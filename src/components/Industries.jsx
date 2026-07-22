import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Car, Stethoscope, ShoppingBag, Truck, Network, GraduationCap, Building2, Landmark, PhoneCall } from 'lucide-react';

const industryList = [
  { name: "Manufacturing", icon: Factory, useCase: "MES integration, shop floor control, barcode tracking & Oracle ERP Manufacturing." },
  { name: "Automotive", icon: Car, useCase: "Supply chain visibility, quality compliance & just-in-time inventory systems." },
  { name: "Healthcare", icon: Stethoscope, useCase: "HIPAA-compliant patient portals, ERP financials & medical supply chain tracking." },
  { name: "Retail", icon: ShoppingBag, useCase: "Omnichannel inventory sync, POS integration & customer analytics dashboards." },
  { name: "Logistics", icon: Truck, useCase: "Fleet management, Oracle TMS routes optimization & real-time dispatch tracking." },
  { name: "Supply Chain", icon: Network, useCase: "Supplier portals, procurement automation, demand planning & WMS operations." },
  { name: "Education", icon: GraduationCap, useCase: "Student information systems, cloud HCM payroll & campus enterprise resource planning." },
  { name: "Banking", icon: Building2, useCase: "Secure general ledger accounting, core banking API integrations & risk analytics." },
  { name: "Finance", icon: Landmark, useCase: "Automated AP/AR reconciliation, tax engine automation & financial reporting." },
  { name: "Telecom", icon: PhoneCall, useCase: "Billing middleware integrations, asset tracking & high-volume customer portals." },
];

const Industries = () => {
  return (
    <section id="industries" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-brand-50 text-brand-600 border border-brand-200 uppercase tracking-wider">
            Sector Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Industries We <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">Serve</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Empowering key industry sectors with specialized domain knowledge, compliance frameworks, and custom IT solutions.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {industryList.map((ind, idx) => {
            const IconComp = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="glass-card p-6 rounded-2xl border border-slate-200/80 hover:border-brand-300 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ind.useCase}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Industries;
