import React from 'react';
import { Icons } from './Icons.js';
import { LOAN_CATEGORIES } from '../data/loansData.js';

export const HeroSection = ({ onOpenLeadModal, onExploreLoans, onSelectLoan }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-50/60 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 -mb-20 w-80 h-80 rounded-full bg-indigo-50/40 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Call To Action */}
          <div className="lg:col-span-7 space-y-6 text-left" data-aos="fade-right">
            {/* Trust pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
              <Icons.ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Verified Financial & Multi-Bank Loan Network</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] brand-font">
              Find the Right Loan for Your <span className="text-blue-600">Financial Needs</span>
            </h1>

            {/* Supporting Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Explore personal, business, home, vehicle, education and other loan solutions with Andromeda. We connect you with top-tier lending partners with transparent rates and fast approvals.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenLeadModal()}
                className="px-7 py-3.5 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Apply Now</span>
                <Icons.ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreLoans}
                className="px-7 py-3.5 text-base font-bold text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-blue-50/70 border border-slate-200 hover:border-blue-200 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Loans</span>
                <Icons.ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Quick Key Highlights */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 max-w-xl">
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 brand-font">8+</div>
                <div className="text-xs font-medium text-slate-500">Loan Categories</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-blue-600 brand-font">7.9%</div>
                <div className="text-xs font-medium text-slate-500">Rates Starting From</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 brand-font">15 Mins</div>
                <div className="text-xs font-medium text-slate-500">Fast Lead Callback</div>
              </div>
            </div>
          </div>

          {/* Right Column: Financial Illustration & Floating Loan Cards */}
          <div className="lg:col-span-5 relative" data-aos="fade-left">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Central Illustration Artboard with Dual Advisor Photo Showcase */}
              <div className="relative rounded-3xl bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border border-blue-100/70 p-6 sm:p-8 shadow-xl shadow-blue-900/5">
                
                {/* Advisor Photo Showcase */}
                <div className="relative rounded-2xl bg-gradient-to-tr from-[#071E3D] via-[#0B3A75] to-[#1565D8] p-3 mb-5 overflow-hidden shadow-md">
                  <div className="flex items-center justify-between px-2 pb-2 text-white">
                    <span className="text-[11px] font-extrabold text-amber-300 flex items-center gap-1">
                      <Icons.ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                      <span>Certified Loan Specialists</span>
                    </span>
                    <span className="text-[10px] font-bold text-cyan-200 bg-cyan-500/20 px-2 py-0.5 rounded-full">
                      Direct Login
                    </span>
                  </div>
                  <div className="flex items-end justify-center gap-2 pt-1">
                    <img
                      src="./hero_female.png"
                      alt="Andromeda Advisor"
                      className="h-44 sm:h-52 w-auto object-contain object-bottom drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform"
                    />
                    <img
                      src="./hero_male.png"
                      alt="Andromeda Advisor"
                      className="h-44 sm:h-52 w-auto object-contain object-bottom drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="text-center pt-2 border-t border-white/10">
                    <p className="text-[10px] font-bold text-white tracking-wide uppercase">Multi-Bank Loan Network • Fast Approvals</p>
                  </div>
                </div>

                {/* Visual Header */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                      <Icons.BadgeDollarSign className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Instant Pre-Qualification</h4>
                      <p className="text-xs text-slate-500">Multi-Lender Comparison</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 rounded-full border border-emerald-200">
                    Live Rates
                  </span>
                </div>

                {/* Micro Loan Quick Picker List */}
                <div className="py-4 space-y-2.5">
                  {LOAN_CATEGORIES.slice(0, 4).map((loan) => (
                    <div 
                      key={loan.id}
                      onClick={() => onSelectLoan(loan)}
                      className="group flex items-center justify-between p-3 rounded-xl bg-white border border-slate-150 hover:border-blue-300 hover:shadow-md hover:shadow-blue-500/10 cursor-pointer transition-all"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <Icons.BadgeDollarSign className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                            {loan.name}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            Up to {loan.maxAmount}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-blue-600">{loan.interestRate}</div>
                        <div className="text-[10px] text-slate-400">Tenure: {loan.maxTenure}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Instant Action Button inside Card */}
                <button
                  onClick={() => onOpenLeadModal()}
                  className="w-full py-3 bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Icons.Zap className="w-4 h-4 text-yellow-400" />
                  <span>Check Your Eligibility Now</span>
                </button>
              </div>

              {/* Floating Stat Card 1 (Top Right) */}
              <div className="absolute -top-5 -right-3 sm:-right-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 animate-float hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Icons.CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">98.4% Approvals</div>
                  <div className="text-[10px] text-slate-500">Across 45+ Bank Partners</div>
                </div>
              </div>

              {/* Floating Stat Card 2 (Bottom Left) */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 animate-float-delayed hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Icons.Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">$0 Advisory Fees</div>
                  <div className="text-[10px] text-slate-500">100% Free for Borrowers</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
