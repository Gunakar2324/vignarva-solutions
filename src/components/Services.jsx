import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, Code2, Globe, Smartphone, Cloud, Cpu, Sparkles, 
  Palette, Bot, BarChart4, Wrench, ArrowRight, CheckCircle, X,
  Layers, Zap, Boxes
} from 'lucide-react';

const servicesList = [
  {
    id: 'oracle-fusion',
    title: "Oracle Fusion Modules",
    featured: true,
    icon: Layers,
    description: "Implementation and support for Financials, HCM, SCM, and Procurement.",
    points: ["Financials Cloud", "HCM & Payroll", "SCM & Supply Chain", "Procurement & Projects"]
  },
  {
    id: 'oracle-apex',
    title: "Oracle APEX Development",
    featured: true,
    icon: Zap,
    description: "Low-code enterprise apps integrated with Oracle Database and EBS/Fusion.",
    points: ["Low-code APEX apps", "EBS/Fusion extensions", "PL/SQL logic", "Responsive dashboards"]
  },
  {
    id: 'oracle',
    title: "Oracle IT Solutions",
    featured: true,
    icon: Database,
    description: "Oracle ERP Cloud implementation, migration, custom modules, and managed services.",
    points: ["ERP & HCM Cloud", "SCM & MES", "Middleware integrations", "Analytics reporting"]
  },
  {
    id: 'enterprise',
    title: "Enterprise Software Development",
    icon: Code2,
    description: "Scalable enterprise applications built with modern, secure architectures.",
    points: ["Custom enterprise systems", "Microservices", "Legacy modernization", "Secure workflows"]
  },
  {
    id: 'web',
    title: "Web Application Development",
    icon: Globe,
    description: "React, Vue, Angular, Node.js, and Spring Boot apps for fast digital experiences.",
    points: ["PWA & SPA", "Responsive platforms", "SaaS apps", "High-speed UX"]
  },
  {
    id: 'mobile',
    title: "Mobile Application Development",
    icon: Smartphone,
    description: "Native and cross-platform apps with backend sync and intuitive UX.",
    points: ["iOS & Android", "Cross-platform", "Offline sync", "App deployment"]
  },
  {
    id: 'cloud',
    title: "Cloud Solutions",
    icon: Cloud,
    description: "Cloud architecture, OCI/AWS/Azure migration, DevOps, and containers.",
    points: ["OCI/AWS/Azure", "CI/CD pipelines", "Kubernetes", "Cloud security"]
  },
  {
    id: 'api',
    title: "API Integration",
    icon: Cpu,
    description: "REST/SOAP APIs, middleware connectors, and real-time data sync.",
    points: ["REST & GraphQL", "ESB connectors", "SaaS connectors", "Data transformation"]
  },
  {
    id: 'digital',
    title: "Digital Transformation",
    icon: Sparkles,
    description: "Process automation to improve agility, reduce costs, and improve customer experience.",
    points: ["Process mapping", "Workflow automation", "Legacy strategy", "Growth consulting"]
  },
  {
    id: 'uiux',
    title: "UI / UX Design",
    icon: Palette,
    description: "User-centric design, wireframing, prototyping, and accessible interfaces.",
    points: ["Design systems", "User journeys", "Interactive prototypes", "Accessibility"]
  },
  {
    id: 'ai',
    title: "AI & Automation",
    icon: Bot,
    description: "RPA, machine learning, and automation workflows for business processes.",
    points: ["RPA automation", "ML workflows", "Chatbots", "Document intelligence"]
  },
  {
    id: 'bi',
    title: "Business Intelligence",
    icon: BarChart4,
    description: "Analytics, dashboards, data warehousing, and reporting.",
    points: ["Executive dashboards", "Data warehousing", "Real-time ETL", "Forecasting"]
  },
  {
    id: 'maintenance',
    title: "Application Maintenance",
    icon: Wrench,
    description: "24x7 monitoring, bug fixes, tuning, patching, and ongoing support.",
    points: ["24×7 support", "Performance tuning", "Security patching", "SLA care"]
  }
];

const Services = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" aria-labelledby="services-heading" className="py-10 bg-white relative overflow-hidden">
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-accent-50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-brand-50 text-brand-600 border border-brand-200 uppercase tracking-wider">
            Our Service Portfolio
          </span>
          <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">IT Services</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Oracle ERP, cloud, and software services for modern businesses.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`glass-card p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 ${
                  service.featured
                    ? 'border-brand-300 ring-2 ring-brand-500/20 bg-gradient-to-b from-brand-50/50 to-white shadow-lg'
                    : 'border-slate-200/80 hover:border-brand-300 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                      service.featured 
                        ? 'bg-brand-600 text-white shadow-md' 
                        : 'bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white'
                    }`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    {service.featured && (
                      <span className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider bg-brand-600 text-white rounded-full">
                        Flagship
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    View Service Details <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="glass-card max-w-lg w-full p-6 sm:p-8 rounded-3xl border border-white bg-white shadow-2xl relative"
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center">
                {React.createElement(selectedService.icon, { className: "w-6 h-6" })}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{selectedService.title}</h3>
                <span className="text-xs font-semibold text-brand-600">Enterprise Service Offering</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">Key Deliverables</h4>
              {selectedService.points.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
              {['enterprise', 'web', 'mobile'].includes(selectedService.id) && (
                <div className="pt-3 text-xs text-brand-600 font-semibold">
                  More Info: <a href="https://techprogenz.in" target="_blank" rel="noreferrer" className="underline hover:text-brand-700">techprogenz.in</a>
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenConsultation();
                }}
                className="px-5 py-2.5 text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-md"
              >
                Request Proposal
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Services;
