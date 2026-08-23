import React, { useState } from 'react';
import { BRAND_INFO, LOAN_CATEGORIES, FAQS } from '../data/loansData.js';
import { Icons } from './Icons.js';

export const ContactView = ({ onFormSubmitted }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: 'Personal Loans',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onFormSubmitted) {
        onFormSubmitted(formData);
      }
    }, 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-100">
            <Icons.PhoneCall className="w-4 h-4" />
            <span>We Are Here For You</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight brand-font">
            Contact Andromeda
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Have questions about loan options, eligibility criteria, or financial partner programs? Our certified loan advisors are ready to assist you.
          </p>
        </div>

        {/* Contact Info + Contact Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Office Card */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
            
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-900 brand-font">
                Get in Touch Directly
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Icons.Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase">Toll-Free Helpline</span>
                    <div>
                      <a href={`tel:${BRAND_INFO.phone}`} className="text-base font-bold text-slate-900 hover:text-blue-600 hover:underline">
                        {BRAND_INFO.phoneDisplay || BRAND_INFO.phone}
                      </a>
                    </div>
                    <span className="text-xs text-slate-500">{BRAND_INFO.workingHours}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Icons.Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase">Customer Support</span>
                    <div className="text-base font-bold text-blue-600">{BRAND_INFO.supportEmail}</div>
                    <span className="text-xs text-slate-500">Partner: {BRAND_INFO.salesEmail}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Icons.MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase">Corporate Headquarters</span>
                    <div className="text-sm font-semibold text-slate-800">{BRAND_INFO.address}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map / Location Placeholder */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase">
                <span>Corporate Office Location</span>
                <span className="text-blue-600">New York District</span>
              </div>
              <div className="h-44 w-full bg-slate-100 rounded-2xl border border-slate-200 flex flex-col items-center justify-center text-slate-400 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-slate-200/50"></div>
                <Icons.MapPin className="w-8 h-8 text-blue-600 relative z-10 animate-bounce" />
                <span className="text-xs font-bold text-slate-700 relative z-10 mt-1">Financial District, Suite 400</span>
                <span className="text-[11px] text-slate-500 relative z-10">Interactive GPS Routing Available</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-slate-900 brand-font mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Fill out the form below and an Andromeda loan advisor will respond within 15 minutes.
            </p>

            {isSuccess ? (
              <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-4 animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                  <Icons.Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900">Message Received Successfully!</h3>
                <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your inquiry for <strong>{formData.loanType}</strong> has been logged. An Andromeda loan representative will contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({ name: '', email: '', phone: '', loanType: 'Personal Loans', message: '' });
                  }}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Michael Anderson"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="michael@example.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Loan Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Loan Type of Interest
                  </label>
                  <select
                    value={formData.loanType}
                    onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
                  >
                    {LOAN_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                    <option value="General Inquiry">General Partnership / Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Message / Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your loan amount requirement, time frame, or questions..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Icons.ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm" data-aos="fade-up">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-bold text-slate-900 brand-font">Frequently Asked Questions</h3>
            <p className="text-sm text-slate-500 mt-1">Quick answers to common questions about Andromeda services and borrower terms.</p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between text-slate-900 font-bold text-sm sm:text-base hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <Icons.ChevronRight className={`w-5 h-5 text-blue-600 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 bg-slate-50/50 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
