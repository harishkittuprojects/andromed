import React from 'react';
import { BRAND_INFO, LOAN_CATEGORIES } from '../data/loansData.js';
import { Icons } from './Icons.js';

export const Footer = ({ onNavigate, onSelectLoanCategory }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div 
              onClick={() => onNavigate('/')} 
              className="flex items-center space-x-3 cursor-pointer select-none group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <Icons.Logo className="w-7 h-7" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white brand-font">
                ANDROMEDA
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Andromeda is a premier financial technology and loan services matchmaker. We connect prospective individual and enterprise borrowers with accredited banking institutions and tailored capital solutions.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                <Icons.ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ISO 27001 & SOC-2 Compliant</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/categories')} className="hover:text-white transition-colors">
                  Categories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/services')} className="hover:text-white transition-colors">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/charges')} className="hover:text-white transition-colors">
                  Our Charges (Per Lead)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contact')} className="hover:text-white transition-colors">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/login')} className="hover:text-white transition-colors">
                  User Login
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Loan Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Loan Categories
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {LOAN_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      if (onSelectLoanCategory) onSelectLoanCategory(cat);
                    }}
                    className="hover:text-white transition-colors text-left flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Support (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact & Support
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start space-x-2.5">
                <Icons.Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{BRAND_INFO.phone}</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Icons.Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{BRAND_INFO.supportEmail}</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Icons.MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{BRAND_INFO.address}</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Icons.Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{BRAND_INFO.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Andromeda Financial Services Inc. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Andromeda Privacy Policy: We respect your privacy and never sell unconsented personal data."); }} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Andromeda Terms of Service: Loan approvals are subject to partner credit guidelines and regulatory verifications."); }} className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </a>
            <a href="#security" onClick={(e) => { e.preventDefault(); alert("Andromeda Security: 256-bit encrypted data transit with bank-grade security protocols."); }} className="hover:text-slate-300 transition-colors">
              Security Notice
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
