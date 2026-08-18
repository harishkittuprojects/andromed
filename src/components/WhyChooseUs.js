import React from 'react';
import { WHY_CHOOSE_US } from '../data/loansData.js';
import { getLoanIcon, Icons } from './Icons.js';

export const WhyChooseUs = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50/60" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Icons.ShieldCheck className="w-4 h-4" />
            <span>The Andromeda Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight brand-font">
            Why Choose Andromeda
          </h2>
          <p className="mt-3 text-base text-slate-600">
            We bridge the gap between borrowers seeking competitive terms and institutional lenders providing trusted capital.
          </p>
        </div>

        {/* 5 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const isLastSpan = index === 4;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border border-slate-200/90 p-7 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 ${
                  isLastSpan ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 shadow-xs">
                  {getLoanIcon(item.icon, "w-6 h-6")}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5 brand-font">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
