import React from 'react';
import { getLoanIcon, Icons } from './Icons.js';

export const LoanCategoryCard = ({ loan, onViewDetails, onApplyNow }) => {
  return (
    <div 
      className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between loan-card-hover group hover:border-blue-300 relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Top Accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div>
        {/* Top Header with Icon & Rate Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
            {getLoanIcon(loan.icon, "w-6 h-6")}
          </div>
          <span className="text-xs font-bold text-blue-700 bg-blue-50/90 px-2.5 py-1 rounded-full border border-blue-100">
            {loan.interestRate}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 brand-font">
          {loan.name}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
          {loan.shortDescription}
        </p>

        {/* Meta badges: Max amount and tenure */}
        <div className="grid grid-cols-2 gap-2 pt-3 pb-4 border-t border-slate-100 text-xs">
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Max Amount</span>
            <span className="font-bold text-slate-800">{loan.maxAmount}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Max Tenure</span>
            <span className="font-bold text-slate-800">{loan.maxTenure}</span>
          </div>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="grid grid-cols-2 gap-2 pt-3">
        <button
          onClick={() => onViewDetails(loan)}
          className="w-full py-2.5 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-lg transition-colors text-center flex items-center justify-center gap-1"
        >
          <span>View Details</span>
        </button>

        <button
          onClick={() => onApplyNow(loan)}
          className="w-full py-2.5 px-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow-md hover:shadow-blue-600/20 transition-all text-center flex items-center justify-center gap-1"
        >
          <span>Apply Now</span>
          <Icons.ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
