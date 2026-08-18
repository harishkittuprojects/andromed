import React, { useState, useEffect } from 'react';
import { LOAN_CATEGORIES } from '../data/loansData.js';
import { Icons } from './Icons.js';

export const LeadModal = ({ isOpen, onClose, initialCategory, isPartnerInquiry = false, initialAmount, onSubmitLead }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    loanCategory: initialCategory || 'Personal Loans',
    loanAmount: initialAmount ? String(initialAmount) : '25000',
    city: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialCategory) {
      setFormData(prev => ({ ...prev, loanCategory: initialCategory }));
    }
    if (initialAmount) {
      setFormData(prev => ({ ...prev, loanAmount: String(initialAmount) }));
    }
  }, [initialCategory, initialAmount]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.mobileNumber.trim() || !formData.email.trim() || !formData.city.trim()) {
      setErrorMsg('Please complete all required fields (*).');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onSubmitLead) {
        onSubmitLead(formData);
      }
    }, 1000);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      mobileNumber: '',
      email: '',
      loanCategory: 'Personal Loans',
      loanAmount: '25000',
      city: '',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      
      <div 
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Strip */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500"></div>

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <Icons.X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4 animate-scale-up">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-md border border-emerald-100">
              <Icons.CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 brand-font">
              Application Submitted Successfully!
            </h3>

            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>. Your application for <span className="font-bold text-blue-600">{formData.loanCategory}</span> (${Number(formData.loanAmount).toLocaleString()}) has been forwarded to our lending review team.
            </p>

            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-xs text-blue-800 text-left space-y-1.5">
              <div className="font-bold flex items-center gap-1.5">
                <Icons.Clock className="w-4 h-4 text-blue-600" />
                <span>Next Step: 15-Minute Priority Call</span>
              </div>
              <p className="text-slate-600">
                A dedicated Andromeda loan coordinator will contact you at <span className="font-semibold text-slate-800">{formData.mobileNumber}</span> to verify your application and finalize your offer.
              </p>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all"
            >
              Done & Return to Website
            </button>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                <Icons.Zap className="w-3.5 h-3.5 text-blue-600" />
                <span>{isPartnerInquiry ? 'Partner Lead Request' : 'Instant Pre-Approval'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 brand-font">
                {isPartnerInquiry ? 'Request Qualified Lead Batch' : 'Apply for Your Loan'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Zero impact on your credit score during initial pre-qualification.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
                {errorMsg}
              </div>
            )}

            {/* Lead Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Jonathan Reynolds"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>

              {/* Mobile & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jonathan@domain.com"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>
              </div>

              {/* Loan Category & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Loan Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.loanCategory}
                    onChange={(e) => setFormData({ ...formData, loanCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-blue-600 focus:bg-white"
                  >
                    {LOAN_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    City / Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. New York, NY"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>
              </div>

              {/* Required Loan Amount Slider / Input */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Required Loan Amount
                  </label>
                  <span className="text-sm font-extrabold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md">
                    ${Number(formData.loanAmount).toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="500000"
                  step="2500"
                  value={formData.loanAmount}
                  onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                  className="w-full cursor-pointer"
                />
              </div>

              {/* Message (Optional) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Additional Note / Message (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Any specific tenure or requirements..."
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:bg-white"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-xl shadow-lg shadow-blue-600/25 transition-all text-sm flex items-center justify-center gap-2 mt-2"
              >
                {isSubmitting ? (
                  <span>Processing Application...</span>
                ) : (
                  <>
                    <span>Submit & Get Pre-Qualified</span>
                    <Icons.ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <Icons.Lock className="w-3.5 h-3.5" />
                <span>256-Bit SSL Encrypted • No Spam Policy</span>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
