import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, X, Send } from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: "Senior Oracle ERP Cloud Consultant",
    type: "Full-Time",
    location: "Chennai / Hybrid",
    experience: "5+ Years",
    dept: "Oracle Practice",
    desc: "Lead Oracle ERP Financials and SCM implementations, module setup, user training, and EBS to Cloud migrations."
  },
  {
    id: 2,
    title: "Oracle OIC / Integration Developer",
    type: "Full-Time",
    location: "Chennai / Remote",
    experience: "3+ Years",
    dept: "Middleware & API",
    desc: "Build custom REST/SOAP integrations using Oracle Integration Cloud (OIC), BI Publisher reports, and automated XML pipelines."
  },
  {
    id: 3,
    title: "Full Stack Java & React Engineer",
    type: "Full-Time",
    location: "Chennai / Onsite",
    experience: "3+ Years",
    dept: "Software Engineering",
    desc: "Architect enterprise web applications using Spring Boot microservices, React, Tailwind CSS, and PostgreSQL."
  },
  {
    id: 4,
    title: "Oracle HCM Functional Specialist",
    type: "Full-Time",
    location: "Chennai / Hybrid",
    experience: "4+ Years",
    dept: "HCM Practice",
    desc: "Configure Core HR, Global Payroll, Talent Management, and Absence Management for enterprise clients."
  }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
    const formDataObj = new FormData(e.target);

    // Append Web3Forms access key and subject metadata
    formDataObj.append("access_key", accessKey);
    formDataObj.append("subject", `Career Application: ${selectedJob?.title || 'General'}`);
    formDataObj.append("job_title", selectedJob?.title || 'Not Specified');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setSelectedJob(null);
        }, 4000);
      } else {
        setSubmitError(result.message || "Failed to submit application. Please try again.");
      }
    } catch (error) {
      setSubmitError("Network error. Please check connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="careers" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-brand-50 text-brand-600 border border-brand-200 uppercase tracking-wider">
            Career Opportunities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Join Our <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Build your career at Vignarva Solutions. Work with leading enterprise technologies, Oracle Cloud ecosystems, and a collaborative team in Chennai.
          </p>
        </div>

        {/* Job Openings Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {jobOpenings.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 hover:border-brand-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 text-[10px] font-extrabold bg-brand-50 text-brand-600 rounded-full uppercase border border-brand-200">
                    {job.dept}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {job.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h3>
                
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-600" /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-brand-600" /> {job.experience}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {job.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedJob(job)}
                  className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2 transition-all"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="glass-card max-w-lg w-full p-6 sm:p-8 rounded-3xl border border-white bg-white shadow-2xl relative"
          >
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Application Submitted!</h3>
                <p className="text-sm text-slate-600">
                  Thank you for applying for <strong>{selectedJob.title}</strong>. Our HR team in Chennai will review your profile and reach out soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-brand-600 uppercase">Career Application</span>
                  <h3 className="text-xl font-bold text-slate-900">{selectedJob.title}</h3>
                  <p className="text-xs text-slate-500">{selectedJob.location} • {selectedJob.experience}</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="e.g. Vignesh Kumar"
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email</label>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="you@email.com"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Experience / Tech Summary</label>
                    <textarea
                      rows={3}
                      name="message"
                      placeholder="Briefly describe your experience with Oracle / Software Development..."
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>

                {submitError && (
                  <div className="p-3 text-[11px] font-semibold text-red-800 bg-red-50 border border-red-200 rounded-xl">
                    {submitError}
                  </div>
                )}

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-5 py-2.5 text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-md flex items-center gap-1.5 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'} <Send className="w-3.5 h-3.5 animate-pulse" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Careers;
