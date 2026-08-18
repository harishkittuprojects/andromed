import React from 'react';
import { BRAND_INFO, WHY_CHOOSE_US, STATS } from '../data/loansData.js';
import { getLoanIcon, Icons } from './Icons.js';

export const AboutView = ({ onOpenLeadModal }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-100">
            <Icons.ShieldCheck className="w-4 h-4" />
            <span>Pioneering Financial Accessibility</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight brand-font">
            About Andromeda
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Andromeda is an innovative loan services and financial match platform dedicated to empowering individuals and businesses with fast, transparent, and competitive capital solutions.
          </p>
        </div>

        {/* Company Introduction Section */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Company Introduction</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 brand-font">
                Empowering Financial Journeys Through Technology & Trust
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Established with a vision to simplify complex financial lending markets, Andromeda connects borrowers directly with accredited financial institutions, private banks, and NBFCs. We eliminate opaque fee structures and lengthy delays by providing transparent comparison tools and automated qualification.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Whether you are buying your first home, growing an enterprise, funding higher education, or securing emergency liquidity, Andromeda delivers tailored financial advisory and verified lead distribution.
              </p>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-blue-600 to-blue-900 text-white rounded-2xl p-8 shadow-xl space-y-6">
              <h3 className="text-xl font-bold brand-font">Key Milestones</h3>
              <div className="space-y-4">
                {STATS.slice(0, 3).map((st, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center font-bold text-white text-xs">
                      {i + 1}
                    </div>
                    <div>
                      <div className="text-lg font-black">{st.value}</div>
                      <div className="text-xs text-blue-100">{st.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
          
          {/* Mission */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-4 hover:border-blue-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Icons.Zap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 brand-font">Our Mission</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To democratize access to institutional credit by helping consumers and commercial enterprises discover suitable financial solutions, negotiate optimal interest rates, and receive reliable funding with utmost clarity.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-4 hover:border-blue-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Icons.ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 brand-font">Our Vision</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To build the world's most trusted, accessible, and technology-driven financial loan ecosystem, setting new standards for speed, security, and borrower satisfaction.
            </p>
          </div>

        </div>

        {/* Why Andromeda Pillars */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm" data-aos="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 brand-font">
              Why Andromeda
            </h3>
            <p className="text-sm text-slate-500 mt-2">
              Our core principles define our relationship with borrowers and financial partners alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.slice(0, 3).map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-150 space-y-2.5">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  {getLoanIcon(item.icon, "w-5 h-5")}
                </div>
                <h4 className="text-base font-bold text-slate-900 brand-font">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer First Approach */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl" data-aos="fade-up">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-blue-200 border border-white/10">
              <Icons.UserCheck className="w-4 h-4" />
              <span>Customer-Centric Philosophy</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold brand-font">
              Our Customer-First Promise
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We believe that borrowing should never be intimidating. Our dedicated loan advisors provide personalized guidance at zero upfront cost to the borrower, ensuring you make informed choices with complete peace of mind.
            </p>
            <div className="pt-4">
              <button
                onClick={() => onOpenLeadModal()}
                className="px-7 py-3 font-bold text-slate-900 bg-white hover:bg-blue-50 rounded-xl shadow-md transition-all inline-flex items-center gap-2 text-sm"
              >
                <span>Get Started with Andromeda</span>
                <Icons.ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
