import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Layers, DollarSign, Users, Truck, Factory, Cpu, BarChart3, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, ChevronRight } from 'lucide-react';

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
  const currentData = oracleData[activeTab];

  return (
    <section id="oracle-solutions" className="py-24 bg-gradient-to-b from-brand-50/60 via-white to-slate-50 relative overflow-hidden">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
            Complete Oracle Cloud implementation, customization, migration, integration, rollout, support, analytics, and managed services tailored for high-growth enterprises.
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

                <div className="pt-4">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full sm:w-auto px-6 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2 transition-all hover:gap-3"
                  >
                    Consult Oracle Experts <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Modules Grid Column */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-4 h-4 text-brand-600" /> Supported Oracle Modules ({currentData.modules.length})
                  </h4>
                  <span className="text-xs text-slate-500">Fully Customizable & Integrated</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {currentData.modules.map((moduleName, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/90 border border-slate-200/70 hover:border-brand-300 hover:shadow-md transition-all duration-200 flex items-center gap-3 group"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-500 group-hover:scale-125 transition-transform" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-brand-600 transition-colors">
                        {moduleName}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Additional Technical Assurance Footer Card */}
                <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-brand-50 to-accent-50 border border-brand-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-brand-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Oracle Cloud Migration & Upgrade Path</div>
                      <div className="text-[11px] text-slate-600">E-Business Suite (EBS) to Oracle Cloud ERP Migration Ready</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-brand-600" />
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default OracleSolutionsExplorer;
