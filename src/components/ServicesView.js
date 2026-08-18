import React, { useState } from 'react';
import { LOAN_CATEGORIES } from '../data/loansData.js';
import { getLoanIcon, Icons } from './Icons.js';

export const ServicesView = ({ onApplyNow, onViewDetails }) => {
  const [selectedServiceId, setSelectedServiceId] = useState(LOAN_CATEGORIES[0].id);

  const activeService = LOAN_CATEGORIES.find(l => l.id === selectedServiceId) || LOAN_CATEGORIES[0];

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-100">
            <Icons.Briefcase className="w-4 h-4" />
            <span>Comprehensive Financial Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight brand-font">
            Our Loan Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Explore the specialized loan services provided through Andromeda. From fast retail credit to multi-million commercial facilities, we structure loans that power your ambitions.
          </p>
        </div>

        {/* Interactive Service Detail Showcase */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mb-16" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Sidebar Service Selector */}
            <div className="lg:col-span-4 bg-slate-50/80 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-slate-200 space-y-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 mb-3">
                Select a Loan Service
              </h3>
              {LOAN_CATEGORIES.map((cat) => {
                const isSelected = cat.id === selectedServiceId;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedServiceId(cat.id)}
                    className={`w-full text-left p-3.5 rounded-xl transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 font-bold'
                        : 'bg-white text-slate-750 hover:bg-slate-100/90 text-slate-700 border border-slate-150'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${isSelected ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'}`}>
                        {getLoanIcon(cat.icon, "w-4 h-4")}
                      </div>
                      <span className="text-sm font-semibold">{cat.name}</span>
                    </div>
                    <span className={`text-xs font-bold ${isSelected ? 'text-blue-100' : 'text-blue-600'}`}>
                      {cat.interestRate}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Detailed Feature Overview */}
            <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-xs">
                      {getLoanIcon(activeService.icon, "w-7 h-7")}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 brand-font">
                        {activeService.name}
                      </h2>
                      <p className="text-xs text-slate-500 font-medium">
                        Disbursal via Top Partner Banks & NBFCs
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-50 px-4 py-2 rounded-xl text-center border border-blue-100">
                    <span className="text-[11px] text-slate-500 font-semibold block">Interest Rate</span>
                    <span className="text-lg font-black text-blue-600">{activeService.interestRate}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed my-6">
                  {activeService.fullDescription}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium block">Max Loan Limit</span>
                    <span className="text-sm sm:text-base font-bold text-slate-900">{activeService.maxAmount}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium block">Max Repayment Tenure</span>
                    <span className="text-sm sm:text-base font-bold text-slate-900">{activeService.maxTenure}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium block">Processing Fee</span>
                    <span className="text-sm sm:text-base font-bold text-slate-900">{activeService.processingFee}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium block">Min Credit Score</span>
                    <span className="text-sm sm:text-base font-bold text-slate-900">{activeService.minCreditScore}+</span>
                  </div>
                </div>

                {/* Key Benefits / Highlights Checklist */}
                <div className="space-y-2.5 mb-8">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Key Features & Advantages
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.highlights.map((h, i) => (
                      <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                          <Icons.Check className="w-3 h-3" />
                        </div>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-slate-100">
                <button
                  onClick={() => onApplyNow(activeService)}
                  className="w-full sm:w-auto px-7 py-3 font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Apply For {activeService.name}</span>
                  <Icons.ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onViewDetails(activeService)}
                  className="w-full sm:w-auto px-5 py-3 font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors text-center"
                >
                  View Full Eligibility & Docs
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Loan Comparison Matrix */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm mb-16" data-aos="fade-up">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 brand-font">
              Complete Loan Comparison Matrix
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Compare interest rates, loan limits, and processing timelines across all Andromeda categories.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-4">Loan Category</th>
                  <th className="py-3.5 px-4">Interest Rate</th>
                  <th className="py-3.5 px-4">Max Amount</th>
                  <th className="py-3.5 px-4">Max Tenure</th>
                  <th className="py-3.5 px-4">Min Score</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {LOAN_CATEGORIES.map((item) => (
                  <tr key={item.id} className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center space-x-2.5">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        {getLoanIcon(item.icon, "w-4 h-4")}
                      </div>
                      <span>{item.name}</span>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-blue-600">{item.interestRate}</td>
                    <td className="py-3.5 px-4 font-medium text-slate-800">{item.maxAmount}</td>
                    <td className="py-3.5 px-4 text-slate-600">{item.maxTenure}</td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 text-xs font-semibold bg-slate-100 rounded-md text-slate-700">
                        {item.minCreditScore}+
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => onApplyNow(item)}
                        className="px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
                      >
                        Apply
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};
