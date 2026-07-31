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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Contact Inquiry: ${formData.subject || 'General'}`,
          message: formData.message,
          from_name: formData.name
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 5000);
      } else {
        setSubmitError(result.message || "Failed to submit. Please verify the Web3Forms Access Key.");
      }
    } catch (error) {
      setSubmitError("Network error. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white via-slate-50 to-brand-50/50 relative overflow-hidden">

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
            Need help with Oracle ERP, cloud migration, or custom software? Our team is ready.
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
                    <div className="text-xs text-slate-500">Mon–Sat, 9am–6pm IST</div>
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
                    <div className="text-xs text-slate-500">Support & consulting</div>
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
                  <span className="font-semibold text-white">9:30 AM – 5:30 PM IST</span>
                </div>
                <div className="text-xs text-white/80 flex justify-between">
                  <span>Saturday & Sunday:</span>
                  <span className="font-semibold text-brand-200">Closed</span>
                </div>
              </div>

            </div>

            {/* Simulated Interactive Location Map Card */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Flat+104,+Osborne,+Hiranandani+Parks,+Vadakkupattu,+Oragadam,+Chennai+-+603204"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-3xl border border-slate-200/80 bg-white relative overflow-hidden h-48 flex items-center justify-center group block hover:shadow-lg hover:border-brand-300 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-brand-50 to-accent-50 opacity-90 group-hover:opacity-85 transition-opacity" />
              <div className="relative z-10 text-center space-y-2 p-4">
                <div className="w-10 h-10 rounded-full bg-brand-600 text-white mx-auto flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors">Vignarva Solutions Center</div>
                <div className="text-xs text-slate-600">Chennai, Tamil Nadu, India</div>
                <span className="inline-block px-3 py-1 bg-white text-brand-600 text-[10px] font-extrabold rounded-full shadow-xs border border-brand-200 group-hover:bg-brand-50 transition-colors">
                  Open Google Maps
                </span>
              </div>
            </a>

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
                Fill this out and an Oracle specialist will reply shortly.
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
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Service Request <span className="text-red-500">*</span></label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline your project scope, requirements, or desired Oracle modules..."
                      className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                    />
                  </div>

                  {submitError && (
                    <div className="p-4 text-xs font-semibold text-red-800 bg-red-50 border border-red-200 rounded-xl">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 text-base font-bold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 rounded-xl shadow-lg shadow-brand-500/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Inquiry'} <Send className="w-4 h-4 animate-pulse" />
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
