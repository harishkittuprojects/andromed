import React from 'react';
import { STATS, TESTIMONIALS } from '../data/loansData.js';
import { getLoanIcon, Icons } from './Icons.js';

export const TrustStats = () => {
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Key Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-16 border-b border-slate-800">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center sm:text-left" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-3 mx-auto sm:mx-0">
                {getLoanIcon(stat.icon, "w-5 h-5")}
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white brand-font tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section: Customer Testimonials Preview */}
        <div className="pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
            <h3 className="text-2xl sm:text-3xl font-bold brand-font">
              Trusted by Borrowers & Enterprise Leaders
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Discover how Andromeda facilitates fast, reliable financing solutions across all borrowing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/60 flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div>
                  <div className="flex items-center space-x-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, r) => (
                      <Icons.Star key={r} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-6">
                    "{t.comment}"
                  </p>
                </div>

                <div className="flex items-center space-x-3 pt-4 border-t border-slate-700/50">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-blue-500/30"
                  />
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-xs text-blue-400">{t.loanType}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
