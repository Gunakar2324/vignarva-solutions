import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Layers, DollarSign, Users, Truck, Factory, Cpu, BarChart3, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, ChevronRight, X } from 'lucide-react';

const oracleData = {
  "ERP Cloud": {
    icon: Database,
    badge: "Core Enterprise",
    tagline: "End-to-End Enterprise Resource Planning for Modern Business Efficiency",
    modules: [
      "Financials", "Procurement", "SCM", "Inventory", "Manufacturing",
      "Order Management", "Maintenance", "Planning", "Cost Management",
      "Warehouse Management (WMS)", "Transportation Management (TMS)", "Product Lifecycle Management (PLM)"
    ],
    features: [
      "Automated financial closing and multi-currency consolidation",
      "Global procurement workflow with automated supplier onboarding",
      "Integrated demand planning and real-time inventory visibility",
      "Warehouse & Logistics route optimization"
    ]
  },
  "HCM Cloud": {
    icon: Users,
    badge: "Human Capital",
    tagline: "Empower Your Global Workforce with Next-Gen Human Resources Tech",
    modules: [
      "Core HR", "Payroll", "Talent Management", "Recruiting",
      "Learning", "Performance Management", "Time and Labor", "Absence Management"
    ],
    features: [
      "Unified employee self-service portal and mobile HR",
      "Automated multi-country payroll computation and tax compliance",
      "AI-assisted talent acquisition and candidate matching",
      "Continuous performance tracking and learning paths"
    ]
  },
  "Finance": {
    icon: DollarSign,
    badge: "Financial Control",
    tagline: "Streamlined Accounts, General Ledger, Tax, and Cash Flow Management",
    modules: [
      "Accounts Payable (AP)", "Accounts Receivable (AR)", "General Ledger (GL)",
      "Fixed Assets", "Cash Management", "Expense Management", "Tax Engine"
    ],
    features: [
      "Real-time ledger audit trails and compliance dashboards",
      "Automated bank reconciliation and cash position forecasting",
      "Digital expense report capture and mobile approval flows",
      "Integrated tax calculation engine for global jurisdictions"
    ]
  },
  "SCM": {
    icon: Truck,
    badge: "Supply Chain",
    tagline: "Agile Supply Chain Management from Sourcing to Delivery",
    modules: [
      "Purchasing", "Inventory Management", "Shipping", "Receiving",
      "Supplier Portal", "Quality Management", "Manufacturing Operations"
    ],
    features: [
      "End-to-end supply chain traceability and order tracking",
      "Supplier self-service portal for purchase order management",
      "Automated reorder point calculations and safety stock alerts",
      "Integrated quality control inspection workflows"
    ]
  },
  "Manufacturing": {
    icon: Factory,
    badge: "Shop Floor & MES",
    tagline: "Smart Manufacturing, MES Integration, and Industrial Automation",
    modules: [
      "Manufacturing Execution System (MES)", "Work Orders", "Shop Floor Control",
      "Production Planning", "Machine Integration", "Barcode Solutions",
      "Label Printing", "FIFO Enforcement", "Traceability"
    ],
    features: [
      "Direct IoT machine interface and shop floor data capture",
      "Barcode/RFID integration for real-time batch tracking",
      "FIFO material allocation to minimize material waste",
      "Complete lot & serial number genealogy for regulatory compliance"
    ]
  },
  "Integration": {
    icon: Cpu,
    badge: "OIC & Middleware",
    tagline: "Seamless Hybrid Integration Cloud for Oracle and Third-Party Systems",
    modules: [
      "Oracle Integration Cloud (OIC)", "REST APIs", "SOAP APIs",
      "BI Publisher Integrations", "XML Processing", "JSON Parsers", "FTP & SFTP Automation"
    ],
    features: [
      "Pre-built Oracle Cloud ERP adapters and connectors",
      "Real-time event-driven API architecture and webhook triggers",
      "High-volume batch data transfer and automated SFTP jobs",
      "Fault-tolerant error handling and centralized audit logging"
    ]
  },
  "Analytics": {
    icon: BarChart3,
    badge: "BI & Reporting",
    tagline: "Turn Raw Data into Actionable Business Intelligence & Dashboards",
    modules: [
      "Oracle Transactional Business Intelligence (OTBI)",
      "Oracle Analytics Cloud (OAC)",
      "BI Publisher Reports",
      "Executive Dashboards & KPIs"
    ],
    features: [
      "Pre-packaged subject areas for real-time ERP/HCM reporting",
      "Custom pixel-perfect financial statement publishing",
      "Predictive analytics and machine learning insights",
      "Mobile analytics dashboards for C-level executives"
    ]
  }
};

const OracleSolutionsExplorer = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState("ERP Cloud");
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const currentData = oracleData[activeTab];

  const closeMoreInfo = () => setShowMoreInfo(false);

  return (
    <section id="oracle-solutions" className="py-20 bg-gradient-to-b from-brand-50/60 via-white to-slate-50 relative overflow-hidden">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-white text-brand-700 border border-brand-200 shadow-xs">
            <Sparkles className="w-4 h-4 text-brand-600" />
            <span>Featured Core Competency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Oracle IT <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Oracle Cloud implementation, migration, integration, and managed services for growing enterprises.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none px-2">
          {Object.keys(oracleData).map((tabName) => {
            const TabIcon = oracleData[tabName].icon;
            const isActive = activeTab === tabName;
            return (
              <button
                key={tabName}
                onClick={() => setActiveTab(tabName)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-500/25 scale-105'
                    : 'bg-white/80 hover:bg-white text-slate-700 hover:text-brand-600 border border-slate-200/80 shadow-xs'
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-brand-600'}`} />
                <span>{tabName}</span>
              </button>
            );
          })}
        </div>

        {/* Active Module Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-6 sm:p-10 rounded-3xl border border-white/90 shadow-xl bg-white/80"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Overview Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 to-accent-500 text-white flex items-center justify-center shadow-md">
                    {React.createElement(currentData.icon, { className: "w-7 h-7" })}
                  </div>
                  <div>
                    <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase bg-brand-50 text-brand-600 rounded-md border border-brand-200">
                      {currentData.badge}
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 mt-1">{activeTab}</h3>
                  </div>
                </div>

                <p className="text-slate-700 font-medium text-base leading-relaxed">
                  {currentData.tagline}
                </p>

                {/* Key Benefits List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Implementation Capabilities</h4>
                  {currentData.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-6">
                  <button
                    onClick={() => setShowMoreInfo(true)}
                    className="text-sm font-bold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 transition-all"
                  >
                    More Info <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={onOpenConsultation}
                    className="px-6 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2 transition-all hover:gap-3"
                  >
                    Consult Oracle Experts <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {showMoreInfo ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMoreInfo}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
            >
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden"
              >
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
                  <div>
                    <p className="text-xs font-semibold text-brand-600 uppercase tracking-widest">Supported Oracle Modules</p>
                    <h3 className="text-xl font-extrabold text-slate-900 mt-1">{activeTab}</h3>
                  </div>
                  <button
                    onClick={closeMoreInfo}
                    className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="px-6 py-5 grid gap-3 sm:grid-cols-2">
                  {currentData.modules.map((moduleName, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Module</div>
                      <p className="mt-2 text-sm font-medium text-slate-800">{moduleName}</p>
                    </div>
                  ))}
                </div>

                <div className="px-6 py-5 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <p className="text-sm text-slate-600">
                    Explore the Oracle modules available for {activeTab}. Click outside or use the close button to return.
                  </p>
                  <button
                    onClick={closeMoreInfo}
                    className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default OracleSolutionsExplorer;
