import React from 'react';
import { motion } from 'framer-motion';
import { Award, FolderCheck, Users, Database, Star } from 'lucide-react';

const stats = [
  { label: "Projects Delivered", value: "100+", subtext: "Enterprise IT & Cloud", icon: FolderCheck },
  { label: "Enterprise Clients", value: "50+", subtext: "Global & Domestic", icon: Users },
  { label: "Oracle Modules", value: "20+", subtext: "ERP, HCM, SCM & OIC", icon: Database },
  { label: "Client Satisfaction", value: "99%", subtext: "SLA Retention Rate", icon: Star },
];

const Achievements = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-brand-200/80 bg-gradient-to-r from-brand-600 via-brand-500 to-accent-600 text-white shadow-xl shadow-brand-500/15 relative overflow-hidden">
          
          {/* Subtle Decorative Pattern */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-black/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 text-center">
            {stats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="space-y-2"
                >
                  <div className="w-10 h-10 mx-auto rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-3">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-brand-100">{stat.label}</div>
                  <div className="text-[11px] font-medium text-brand-200">{stat.subtext}</div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Achievements;
