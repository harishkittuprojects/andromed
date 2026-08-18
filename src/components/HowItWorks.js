import React from 'react';
import { HOW_IT_WORKS } from '../data/loansData.js';
import { getLoanIcon, Icons } from './Icons.js';

export const HowItWorks = ({ onOpenLeadModal }) => {
  return (
    <section className="py-16 sm:py-20 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Icons.Zap className="w-4 h-4" />
            <span>Fast & Seamless Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight brand-font">
            How It Works
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From initial application to bank disbursal in 4 simple, transparent steps.
          </p>
        </div>

        {/* 4 Step Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {HOW_IT_WORKS.map((step, index) => (
            <div
              key={index}
              className="relative bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-blue-300"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              {/* Step indicator badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                  {getLoanIcon(step.icon, "w-6 h-6")}
                </div>
                <span className="text-2xl font-black text-blue-600/30 brand-font">
                  {step.step}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 brand-font">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 text-xs font-bold text-blue-600 flex items-center gap-1">
                <span>Step {index + 1}</span>
                <Icons.ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Trigger */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <button
            onClick={() => onOpenLeadModal()}
            className="px-8 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/20 transition-all inline-flex items-center gap-2"
          >
            <span>Start Your Loan Application</span>
            <Icons.ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
