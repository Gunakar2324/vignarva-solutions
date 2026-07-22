import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, Cloud, Code, Terminal, Server } from 'lucide-react';

const techItems = [
  { name: "Oracle", category: "Oracle & Database", level: "Enterprise Specialist", desc: "Oracle ERP Cloud, EBS, OTBI, OIC", highlight: true },
  { name: "Oracle Database", category: "Oracle & Database", level: "Core Expertise", desc: "Autonomous DB, RAC, Exadata, PL/SQL", highlight: true },
  { name: "Java", category: "Backend & Frameworks", level: "Core Architecture", desc: "Enterprise Java 17/21, Microservices" },
  { name: "Spring Boot", category: "Backend & Frameworks", level: "Framework Standard", desc: "REST APIs, Security, Spring Cloud" },
  { name: "React", category: "Frontend & Mobile", level: "Modern Web Standard", desc: "Next.js, Redux, Tailwind CSS" },
  { name: "Vue", category: "Frontend & Mobile", level: "Modern Frontend", desc: "Vue 3, Nuxt, Pinia, Composition API" },
  { name: "Angular", category: "Frontend & Mobile", level: "Enterprise Frontend", desc: "Angular 17, RxJS, TypeScript" },
  { name: "Node.js", category: "Backend & Frameworks", level: "Full-Stack Async", desc: "Express, NestJS, Event Loop" },
  { name: "Python", category: "Backend & Frameworks", level: "Data & Automation", desc: "FastAPI, Django, Scripting, AI/ML" },
  { name: "Docker", category: "Cloud & DevOps", level: "Containerization", desc: "Microservices Container Packaging" },
  { name: "Kubernetes", category: "Cloud & DevOps", level: "Orchestration", desc: "K8s Clusters, Helm, Auto-Scaling" },
  { name: "MySQL", category: "Oracle & Database", level: "Relational DB", desc: "High Availability, InnoDB, Clustering" },
  { name: "PostgreSQL", category: "Oracle & Database", level: "Advanced Relational", desc: "JSONB, Complex Queries, Analytics" },
  { name: "AWS", category: "Cloud & DevOps", level: "Cloud Platform", desc: "EC2, S3, Lambda, RDS, ECS" },
  { name: "Azure", category: "Cloud & DevOps", level: "Cloud Platform", desc: "Azure DevOps, AKS, Active Directory" },
  { name: "Google Cloud", category: "Cloud & DevOps", level: "Cloud Infrastructure", desc: "GCP Compute Engine, BigQuery, GKE" },
];

const categories = [
  { name: "All", icon: Layers },
  { name: "Oracle & Database", icon: Database },
  { name: "Cloud & DevOps", icon: Cloud },
  { name: "Backend & Frameworks", icon: Server },
  { name: "Frontend & Mobile", icon: Code },
];

const Technologies = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTech = selectedCategory === "All" 
    ? techItems 
    : techItems.filter(item => item.category === selectedCategory);

  return (
    <section id="technologies" className="py-24 bg-gradient-to-b from-slate-50 via-brand-50/40 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-white text-brand-600 border border-brand-200 uppercase tracking-wider">
            Technology Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Technologies We <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">Work With</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We leverage industry-leading enterprise databases, cloud platforms, and modern development frameworks to deliver secure, resilient software.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-3 mb-12">
          {categories.map((cat) => {
            const CatIcon = cat.icon;
            const isActive = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20 scale-105'
                    : 'bg-white/80 hover:bg-white text-slate-700 border border-slate-200/80 shadow-xs'
                }`}
              >
                <CatIcon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-brand-600'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredTech.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className={`glass-card p-5 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 ${
                tech.highlight 
                  ? 'border-brand-300 bg-gradient-to-br from-brand-50/60 to-white shadow-md ring-1 ring-brand-500/20' 
                  : 'border-slate-200/80 hover:border-brand-300 bg-white/80'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-base sm:text-lg font-black text-slate-900 group-hover:text-brand-600 transition-colors">
                  {tech.name}
                </span>
                {tech.highlight && (
                  <span className="px-2 py-0.5 text-[9px] font-extrabold bg-brand-600 text-white rounded-md uppercase">
                    Core
                  </span>
                )}
              </div>
              <div className="text-[11px] font-semibold text-brand-600 mb-1">{tech.level}</div>
              <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Technologies;
