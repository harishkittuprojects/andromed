import React from 'react';
import { Icons } from './Icons.js';

export const CTASection = ({ onOpenLeadModal, onSpeakAdvisor }) => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background radial patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-aos="zoom-in">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-blue-100 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-xs border border-white/15">
          <Icons.Zap className="w-4 h-4 text-yellow-400" />
          <span>Zero Obligation Consultation</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight brand-font max-w-3xl mx-auto leading-tight">
          Ready to Secure the Best Loan Terms for Your Future?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Join thousands of individuals and growing enterprises who trust Andromeda for quick, transparent, and hassle-free financial solutions.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenLeadModal()}
            className="w-full sm:w-auto px-8 py-4 text-base font-bold text-blue-900 bg-white hover:bg-blue-50 rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
          >
            <span>Apply Now - Instant Check</span>
            <Icons.ArrowRight className="w-5 h-5 text-blue-700 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onSpeakAdvisor}
            className="w-full sm:w-auto px-7 py-4 text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-xl backdrop-blur-xs transition-all flex items-center justify-center gap-2"
          >
            <Icons.PhoneCall className="w-5 h-5 text-blue-200" />
            <span>Request Advisor Call</span>
          </button>
        </div>

        {/* 3 micro badges below CTA */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200">
          <div className="flex items-center gap-2">
            <Icons.Check className="w-4 h-4 text-emerald-400" />
            <span>No Hidden Costs</span>
          </div>
          <div className="flex items-center gap-2">
            <Icons.Check className="w-4 h-4 text-emerald-400" />
            <span>Fast Digital Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <Icons.Check className="w-4 h-4 text-emerald-400" />
            <span>Top Tier Bank Network</span>
          </div>
        </div>

      </div>
    </section>
  );
};
