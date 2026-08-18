import React, { useState } from 'react';
import { LOAN_CATEGORIES } from '../data/loansData.js';
import { getLoanIcon, Icons } from './Icons.js';

export const ChargesView = ({ onOpenLeadModal, customCharges, onUpdateCharge }) => {
  const [leadVolume, setLeadVolume] = useState(25);
  const [selectedCalcCategory, setSelectedCalcCategory] = useState(LOAN_CATEGORIES[0].id);
  const [isEditingCharges, setIsEditingCharges] = useState(false);
  const [localCharges, setLocalCharges] = useState(
    LOAN_CATEGORIES.reduce((acc, curr) => ({
      ...acc,
      [curr.id]: customCharges?.[curr.id] ?? curr.leadChargeUSD
    }), {})
  );

  const handleChargeChange = (id, val) => {
    const num = Math.max(1, parseInt(val) || 0);
    const updated = { ...localCharges, [id]: num };
    setLocalCharges(updated);
    if (onUpdateCharge) {
      onUpdateCharge(id, num);
    }
  };

  const currentSelectedLoan = LOAN_CATEGORIES.find(l => l.id === selectedCalcCategory) || LOAN_CATEGORIES[0];
  const unitCost = localCharges[currentSelectedLoan.id] || currentSelectedLoan.leadChargeUSD;
  
  // Volume discount logic
  let discountPct = 0;
  if (leadVolume >= 100) discountPct = 20;
  else if (leadVolume >= 50) discountPct = 10;
  else if (leadVolume >= 20) discountPct = 5;

  const rawTotal = unitCost * leadVolume;
  const discountAmount = (rawTotal * discountPct) / 100;
  const finalTotal = rawTotal - discountAmount;

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-100">
            <Icons.BadgeDollarSign className="w-4 h-4" />
            <span>Institutional & Partner Pricing</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight brand-font">
            Our Charges (Per Lead)
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Transparent, performance-driven pricing for financial institutions, banks, and authorized lending partners. High-intent, phone-verified loan leads.
          </p>

          {/* Configurable toggle notification */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-600 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Configurable Pricing Engine</span>
            <button
              onClick={() => setIsEditingCharges(!isEditingCharges)}
              className="ml-2 font-bold text-blue-600 hover:text-blue-700 underline text-xs"
            >
              {isEditingCharges ? 'Done Editing' : 'Customize Rates'}
            </button>
          </div>
        </div>

        {/* Lead Charges Grid / Desktop Table & Mobile Cards */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mb-16" data-aos="fade-up">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-blue-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold brand-font">Validated Loan Lead Tariff</h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Zero spam leads. Every lead includes OTP mobile verification, required amount, and city.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/20 text-xs font-semibold">
              <Icons.ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Quality Guaranteed</span>
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6">Loan Category</th>
                  <th className="py-4 px-6">Average Ticket Size</th>
                  <th className="py-4 px-6">Verification Level</th>
                  <th className="py-4 px-6">Charge Per Lead</th>
                  <th className="py-4 px-6 text-right">Partner Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {LOAN_CATEGORIES.map((loan) => {
                  const currentCost = localCharges[loan.id] || loan.leadChargeUSD;
                  return (
                    <tr key={loan.id} className="hover:bg-blue-50/30 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-900 flex items-center space-x-3">
                        <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          {getLoanIcon(loan.icon, "w-5 h-5")}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">{loan.name}</div>
                          <div className="text-xs text-slate-400">Slug: {loan.slug}</div>
                        </div>
                      </td>
                      <td className="py-4 px-6 font-medium text-slate-700">
                        Up to {loan.maxAmount}
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <Icons.Check className="w-3 h-3" />
                          OTP Verified
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        {isEditingCharges ? (
                          <div className="flex items-center space-x-1">
                            <span className="text-sm font-bold text-slate-500">$</span>
                            <input
                              type="number"
                              min="1"
                              value={currentCost}
                              onChange={(e) => handleChargeChange(loan.id, e.target.value)}
                              className="w-20 px-2 py-1 text-sm font-bold border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        ) : (
                          <div>
                            <span className="text-lg font-black text-blue-600">${currentCost}</span>
                            <span className="text-xs text-slate-400 block font-normal">per qualified lead</span>
                          </div>
                        )}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button
                          onClick={() => onOpenLeadModal({ defaultCategory: loan.name, isPartnerInquiry: true })}
                          className="px-4 py-2 text-xs font-bold text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 rounded-lg border border-blue-200 hover:border-blue-600 transition-all"
                        >
                          Request Sample Leads
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Responsive Cards */}
          <div className="md:hidden divide-y divide-slate-100 p-4 space-y-4">
            {LOAN_CATEGORIES.map((loan) => {
              const currentCost = localCharges[loan.id] || loan.leadChargeUSD;
              return (
                <div key={loan.id} className="bg-slate-50/70 rounded-2xl p-4 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                        {getLoanIcon(loan.icon, "w-4 h-4")}
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">{loan.name}</h4>
                    </div>
                    <div className="text-right">
                      {isEditingCharges ? (
                        <div className="flex items-center space-x-1">
                          <span className="text-xs font-bold">$</span>
                          <input
                            type="number"
                            min="1"
                            value={currentCost}
                            onChange={(e) => handleChargeChange(loan.id, e.target.value)}
                            className="w-16 px-1.5 py-0.5 text-xs font-bold border border-blue-400 rounded"
                          />
                        </div>
                      ) : (
                        <span className="text-base font-black text-blue-600">${currentCost}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs text-slate-500 pt-2 border-t border-slate-200">
                    <span>Limit: {loan.maxAmount}</span>
                    <span className="text-emerald-700 font-semibold">OTP Verified</span>
                  </div>

                  <button
                    onClick={() => onOpenLeadModal({ defaultCategory: loan.name, isPartnerInquiry: true })}
                    className="w-full py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    Request Leads
                  </button>
                </div>
              );
            })}
          </div>

        </div>

        {/* Interactive Partner Volume & ROI Calculator */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg" data-aos="fade-up">
          <div className="max-w-3xl mb-8">
            <h3 className="text-2xl font-bold text-slate-900 brand-font">
              Lead Volume & Cost Estimator
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Select your preferred loan category and expected monthly lead volume to calculate total estimated investment with automatic bulk discounts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Slider & Selectors */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Loan Category
                </label>
                <select
                  value={selectedCalcCategory}
                  onChange={(e) => setSelectedCalcCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:border-blue-600"
                >
                  {LOAN_CATEGORIES.map((l) => (
                    <option key={l.id} value={l.id}>
                      {l.name} (${localCharges[l.id] || l.leadChargeUSD} / lead)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Expected Monthly Leads: <span className="text-blue-600 text-sm font-extrabold">{leadVolume} leads</span>
                  </label>
                  {discountPct > 0 && (
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {discountPct}% Volume Discount Applied
                    </span>
                  )}
                </div>
                <input
                  type="range"
                  min="5"
                  max="250"
                  step="5"
                  value={leadVolume}
                  onChange={(e) => setLeadVolume(parseInt(e.target.value))}
                  className="w-full cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                  <span>5 Leads (Starter)</span>
                  <span>50 Leads (-10%)</span>
                  <span>100+ Leads (-20%)</span>
                  <span>250 Leads</span>
                </div>
              </div>
            </div>

            {/* Estimated Total Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Investment Estimate
              </div>

              <div className="space-y-2 border-b border-slate-800 pb-4 text-xs sm:text-sm">
                <div className="flex justify-between text-slate-300">
                  <span>Base Rate ({leadVolume} × ${unitCost})</span>
                  <span>${rawTotal.toLocaleString()}</span>
                </div>
                {discountPct > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>Volume Discount ({discountPct}%)</span>
                    <span>-${discountAmount.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div>
                <div className="text-xs text-slate-400">Total Monthly Investment</div>
                <div className="text-3xl sm:text-4xl font-black text-white brand-font mt-1">
                  ${finalTotal.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Effective cost: ${(finalTotal / leadVolume).toFixed(1)} / lead
                </div>
              </div>

              <button
                onClick={() => onOpenLeadModal({ defaultCategory: currentSelectedLoan.name, isPartnerInquiry: true })}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 transition-all text-sm flex items-center justify-center gap-2"
              >
                <span>Partner With Andromeda</span>
                <Icons.ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
