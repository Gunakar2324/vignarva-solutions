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
    description: "Comprehensive implementation, configuration, customization, and support for Oracle Fusion Cloud modules including Financials, HCM, SCM, and Procurement.",
    points: ["Oracle Fusion Financials Cloud", "Oracle Fusion HCM & Global Payroll", "Oracle Fusion Supply Chain (SCM)", "Oracle Fusion Procurement & PPM"]
  },
  {
    id: 'oracle-apex',
    title: "Oracle APEX Development",
    featured: true,
    icon: Zap,
    description: "Rapid low-code enterprise application development using Oracle APEX (Application Express) seamlessly integrated with Oracle Database and EBS/Fusion systems.",
    points: ["Custom Low-Code APEX Web Apps", "EBS & Fusion APEX Extensions", "Database & PL/SQL Logic", "Responsive UI & Report Automation"]
  },
  {
    id: 'oracle',
    title: "Oracle IT Solutions",
    featured: true,
    icon: Database,
    description: "Complete Oracle ERP Cloud implementation, HCM, SCM, Financials, EBS migration, custom module development, and 24/7 managed services.",
    points: ["Oracle Cloud ERP & HCM", "SCM & Manufacturing MES", "OIC & API Middleware Integrations", "OTBI & Analytics Cloud"]
  },
  {
    id: 'enterprise',
    title: "Enterprise Software Development",
    icon: Code2,
    description: "Robust, scalable enterprise applications built with modern architectures, microservices, and high-security compliance standards.",
    points: ["Custom Enterprise Solutions", "Microservices Architecture", "Legacy System Modernization", "Secure Scalable Workflows"]
  },
  {
    id: 'web',
    title: "Web Application Development",
    icon: Globe,
    description: "Next-gen web applications engineered using React, Vue, Angular, Node.js, and Java Spring Boot for lightning-fast digital performance.",
    points: ["Progressive Web Apps (PWA)", "Single Page Applications", "Responsive SaaS Platforms", "High-Performance Speed"]
  },
  {
    id: 'mobile',
    title: "Mobile Application Development",
    icon: Smartphone,
    description: "Native and cross-platform mobile apps for iOS and Android, providing intuitive user experiences and real-time backend synchronization.",
    points: ["iOS & Android Apps", "Cross-Platform Frameworks", "Offline Data Sync", "App Store Deployment"]
  },
  {
    id: 'cloud',
    title: "Cloud Solutions",
    icon: Cloud,
    description: "Comprehensive cloud architecting, AWS, Azure, and Oracle Cloud Infrastructure (OCI) migration, DevOps automation, and Docker/K8s containerization.",
    points: ["Cloud Infrastructure (OCI/AWS/Azure)", "DevOps & CI/CD Pipelines", "Docker & Kubernetes Deployment", "Cloud Security & Compliance"]
  },
  {
    id: 'api',
    title: "API Integration",
    icon: Cpu,
    description: "Seamless REST & SOAP API development, webhook integrations, middleware connectors, and real-time enterprise data synchronization.",
    points: ["RESTful & GraphQL APIs", "Enterprise Bus (ESB)", "Third-Party SaaS Connectors", "Data Format Transformation"]
  },
  {
    id: 'digital',
    title: "Digital Transformation",
    icon: Sparkles,
    description: "Strategic digitization of core operational processes to increase organizational agility, reduce costs, and elevate customer experience.",
    points: ["Business Process Mapping", "Paperless Workflow Automation", "Legacy Migration Strategy", "Digital Growth Consulting"]
  },
  {
    id: 'uiux',
    title: "UI / UX Design",
    icon: Palette,
    description: "User-centric interface design, wireframing, interactive prototyping, and design systems crafted for optimal conversion and usability.",
    points: ["Design Systems & UI Kits", "User Journey & Wireframing", "Interactive Prototypes", "Accessibility Compliance"]
  },
  {
    id: 'ai',
    title: "AI & Automation",
    icon: Bot,
    description: "Intelligent process automation (RPA), machine learning workflows, and natural language processing to automate complex business tasks.",
    points: ["Robotic Process Automation", "Machine Learning Analytics", "Chatbots & Virtual Assistants", "Document Intelligence"]
  },
  {
    id: 'bi',
    title: "Business Intelligence",
    icon: BarChart4,
    description: "Data warehousing, real-time analytics, custom reporting, and executive dashboards for data-driven strategic decision making.",
    points: ["Executive Dashboards", "Data Warehouse Engineering", "Real-Time ETL Pipelines", "Predictive Forecasting"]
  },
  {
    id: 'maintenance',
    title: "Application Maintenance",
    icon: Wrench,
    description: "Proactive 24x7 application monitoring, bug fixes, performance tuning, security patching, and SLA-backed ongoing support.",
    points: ["24×7 Managed IT Support", "Performance Optimization", "Security Patching & Audits", "SLA Guarantee"]
  }
];

const Services = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-accent-50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-brand-50 text-brand-600 border border-brand-200 uppercase tracking-wider">
            Our Service Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">IT Services</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From Oracle ERP implementations to custom cloud engineering, we deliver end-to-end IT services designed for continuous business growth.
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
                className={`glass-card p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 ${
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

                  <div className="space-y-2 mb-6">
                    {service.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
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
