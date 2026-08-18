import React from 'react';
import { getLoanIcon, Icons } from './Icons.js';

export const LoanDetailModal = ({ loan, isOpen, onClose, onApplyNow }) => {
  if (!isOpen || !loan) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Strip */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <Icons.X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-xs">
            {getLoanIcon(loan.icon, "w-7 h-7")}
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 brand-font">{loan.name}</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                Rate: {loan.interestRate}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Max Tenure: {loan.maxTenure}
              </span>
            </div>
          </div>
        </div>

        {/* Full Description */}
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
          {loan.fullDescription}
        </p>

        {/* Quick Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-150 mb-6 text-xs">
          <div>
            <span className="text-slate-400 block uppercase text-[10px] font-bold">Max Limit</span>
            <span className="font-bold text-slate-900 text-sm">{loan.maxAmount}</span>
          </div>
          <div>
            <span className="text-slate-400 block uppercase text-[10px] font-bold">Max Tenure</span>
            <span className="font-bold text-slate-900 text-sm">{loan.maxTenure}</span>
          </div>
          <div>
            <span className="text-slate-400 block uppercase text-[10px] font-bold">Processing Fee</span>
            <span className="font-bold text-slate-900 text-sm">{loan.processingFee}</span>
          </div>
          <div>
            <span className="text-slate-400 block uppercase text-[10px] font-bold">Min Credit Score</span>
            <span className="font-bold text-slate-900 text-sm">{loan.minCreditScore}+</span>
          </div>
        </div>

        {/* Tabs / Two Column breakdown for Eligibility & Documents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          
          {/* Eligibility */}
          <div className="bg-slate-50/70 p-4 rounded-2xl border border-slate-150">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Icons.UserCheck className="w-4 h-4 text-blue-600" />
              <span>Eligibility Criteria</span>
            </h4>
            <ul className="space-y-2">
              {loan.eligibility.map((e, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Documents */}
          <div className="bg-slate-50/70 p-4 rounded-2xl border border-slate-150">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Icons.FileText className="w-4 h-4 text-blue-600" />
              <span>Required Documents</span>
            </h4>
            <ul className="space-y-2">
              {loan.documents.map((d, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></div>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100">
          <button
            onClick={() => {
              onClose();
              onApplyNow(loan);
            }}
            className="w-full sm:w-auto flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md shadow-blue-600/20 text-sm transition-all flex items-center justify-center gap-2"
          >
            <span>Apply For {loan.name}</span>
            <Icons.ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-sm transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
