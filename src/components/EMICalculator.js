import React, { useState } from 'react';
import { Icons } from './Icons.js';

export const EMICalculator = ({ onApplyWithCalculation }) => {
  const [loanAmount, setLoanAmount] = useState(25000);
  const [interestRate, setInterestRate] = useState(9.5);
  const [tenureYears, setTenureYears] = useState(3);

  // EMI Calculation: P * r * (1+r)^n / ((1+r)^n - 1)
  const principal = Number(loanAmount);
  const monthlyRate = Number(interestRate) / (12 * 100);
  const totalMonths = Number(tenureYears) * 12;

  const emi = monthlyRate > 0
    ? (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1)
    : principal / totalMonths;

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - principal;

  const principalPercentage = Math.round((principal / totalPayment) * 100) || 50;
  const interestPercentage = 100 - principalPercentage;

  return (
    <section className="py-16 bg-white border-y border-slate-100" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Icons.Calculator className="w-4 h-4" />
            <span>Interactive Financial Planning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight brand-font">
            Loan EMI Calculator
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Estimate your monthly payments, overall interest payout, and choose the most comfortable tenure for your budget.
          </p>
        </div>

        <div className="bg-slate-50/80 rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Sliders Area (Left) */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Slider 1: Loan Amount */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Required Loan Amount
                  </label>
                  <div className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm font-extrabold text-blue-600 shadow-xs">
                    ${principal.toLocaleString()}
                  </div>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="200000"
                  step="1000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>$2,000</span>
                  <span>$50,000</span>
                  <span>$100,000</span>
                  <span>$200,000+</span>
                </div>
              </div>

              {/* Slider 2: Interest Rate */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Interest Rate (% p.a.)
                  </label>
                  <div className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm font-extrabold text-blue-600 shadow-xs">
                    {interestRate}%
                  </div>
                </div>
                <input
                  type="range"
                  min="6.5"
                  max="18.0"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>6.5% (Low)</span>
                  <span>10.5% (Average)</span>
                  <span>14.5%</span>
                  <span>18.0% (Max)</span>
                </div>
              </div>

              {/* Slider 3: Loan Tenure */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Repayment Tenure
                  </label>
                  <div className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm font-extrabold text-blue-600 shadow-xs">
                    {tenureYears} Years ({totalMonths} Months)
                  </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>1 Year</span>
                  <span>3 Years</span>
                  <span>5 Years</span>
                  <span>10 Years</span>
                </div>
              </div>

            </div>

            {/* Results & Breakdown Card (Right) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Estimated Monthly EMI
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white brand-font mt-1">
                  ${Math.round(emi).toLocaleString()}
                  <span className="text-sm font-normal text-slate-400"> / month</span>
                </div>
              </div>

              {/* Breakdown Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Principal: {principalPercentage}%</span>
                  <span>Interest: {interestPercentage}%</span>
                </div>
                <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden flex">
                  <div style={{ width: `${principalPercentage}%` }} className="bg-blue-500"></div>
                  <div style={{ width: `${interestPercentage}%` }} className="bg-indigo-400"></div>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-800 text-xs sm:text-sm">
                <div className="flex justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Principal Amount
                  </span>
                  <span className="font-bold text-white">${principal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                    Total Interest Payable
                  </span>
                  <span className="font-bold text-white">${Math.round(totalInterest).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-200 font-bold pt-2 border-t border-slate-800">
                  <span>Total Repayment</span>
                  <span className="text-blue-300">${Math.round(totalPayment).toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={() => onApplyWithCalculation({ loanAmount, interestRate, tenureYears, emi: Math.round(emi) })}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 transition-all text-sm flex items-center justify-center gap-2"
              >
                <span>Apply for this Loan ($ {principal.toLocaleString()})</span>
                <Icons.ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
