import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare, Building2, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-slate-50 to-brand-50/50 relative overflow-hidden">
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-brand-50 text-brand-600 border border-brand-200 uppercase tracking-wider">
            Contact & Consultation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Get In <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Have a question about Oracle ERP implementation, custom software development, or cloud migration? Speak to our experts today.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Info */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Contact Info Cards */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-soft-lg space-y-6 bg-white">
              
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Contact Information
              </h3>

              <div className="space-y-5">
                <a href="tel:+919600446220" className="flex items-start gap-4 group p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone</div>
                    <div className="text-base font-extrabold text-slate-900 group-hover:text-brand-600 transition-colors">
                      +91 9600446220
                    </div>
                    <div className="text-xs text-slate-500">Mon - Sat (9:00 AM - 6:00 PM IST)</div>
                  </div>
                </a>

                <a href="mailto:vigneshkumar@vignarvasolutions.com" className="flex items-start gap-4 group p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-accent-50 text-accent-600 flex items-center justify-center shrink-0 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</div>
                    <div className="text-base font-extrabold text-slate-900 group-hover:text-brand-600 transition-colors break-all">
                      vigneshkumar@vignarvasolutions.com
                    </div>
                    <div className="text-xs text-slate-500">Dedicated Enterprise Inquiries</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3 rounded-2xl group hover:bg-slate-50 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location</div>
                    <div className="text-base font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      Flat 104,Osborne, Hiranandani Parks, Vadakkupattu, Oragadam, Chennai - 603 204
                    </div>
                    <div className="text-xs text-slate-500">India Tech Hub Delivery Center</div>
                  </div>
                </div>
              </div>

              {/* Business Hours Box */}
              <div className="p-4 rounded-2xl bg-brand-700 border border-brand-800 text-white space-y-2 shadow-lg shadow-brand-700/20">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
                  <Clock className="w-4 h-4 text-white" /> Business Hours
                </div>
                <div className="text-xs text-white/80 flex justify-between">
                  <span>Monday – Friday:</span>
                  <span className="font-semibold text-white">9:00 AM – 6:00 PM IST</span>
                </div>
                <div className="text-xs text-white/80 flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold text-white">9:00 AM – 2:00 PM IST</span>
                </div>
                <div className="text-xs text-white/80 flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold text-brand-200">Closed (24x7 SLA Support Active)</span>
                </div>
              </div>

            </div>

            {/* Simulated Interactive Location Map Card */}
            <div className="glass-card p-4 rounded-3xl border border-slate-200/80 bg-white relative overflow-hidden h-48 flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-brand-50 to-accent-50 opacity-90" />
              <div className="relative z-10 text-center space-y-2 p-4">
                <div className="w-10 h-10 rounded-full bg-brand-600 text-white mx-auto flex items-center justify-center shadow-lg animate-bounce">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-slate-900">Vignarva Solutions Center</div>
                <div className="text-xs text-slate-600">Chennai, Tamil Nadu, India</div>
                <span className="inline-block px-3 py-1 bg-white text-brand-600 text-[10px] font-extrabold rounded-full shadow-xs border border-brand-200">
                  Google Map Verification Ready
                </span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-soft-lg bg-white relative">
              
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mb-6">
                Fill out the form below and an Oracle IT & Cloud Specialist will get back to you within 2 business hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-xl font-bold text-emerald-900">Thank You!</h4>
                  <p className="text-sm text-emerald-700">
                    Your message has been successfully received by Vignarva Solutions. We will contact you at <strong>{formData.email}</strong> shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Name <span className="text-red-500">*</span></label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Ex. Jon"
                        className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="jon@gmail.com"
                        className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Service Required <span className="text-red-500">*</span></label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                      >
                        <option value="">-- Select Service Request --</option>
                        <option value="Oracle IT Solutions">Oracle IT Solutions (ERP/HCM/SCM)</option>
                        <option value="Enterprise Software Development">Enterprise Software Development</option>
                        <option value="Web & Mobile Application">Web & Mobile Application</option>
                        <option value="Cloud Migration & DevOps">Cloud Migration & DevOps</option>
                        <option value="Digital Transformation">Digital Transformation & Consulting</option>
                        <option value="Other Inquiries">Other Inquiries</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Project Details / Message <span className="text-red-500">*</span></label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Please outline your project scope, requirements, or desired Oracle modules..."
                      className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-base font-bold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 rounded-xl shadow-lg shadow-brand-500/25 hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    Submit Inquiry <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
