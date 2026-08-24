import React, { useState, useEffect } from 'react';
import { Icons } from './Icons.js';
import { BRAND_INFO } from '../data/loansData.js';

export const Navbar = ({ currentRoute, setCurrentRoute, onOpenLeadModal, onOpenLoginModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", route: "/" },
    { label: "Categories", route: "/categories" },
    { label: "Our Services", route: "/services" },
    { label: "Our Charges", route: "/charges" },
    { label: "About", route: "/about" },
    { label: "Contact Us", route: "/contact" }
  ];

  const handleNavClick = (route) => {
    setCurrentRoute(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100' : 'bg-white py-4 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('/')}
            className="flex items-center space-x-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Icons.Logo className="w-7 h-7" />
            </div>
            <div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-900 brand-font flex items-center">
                ANDROMEDA
                <span className="w-2 h-2 rounded-full bg-blue-600 ml-1"></span>
              </span>
              <span className="block text-[10px] font-semibold text-slate-500 tracking-wider uppercase -mt-1">
                Loan Services
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive 
                      ? 'text-blue-600 bg-blue-50 font-bold' 
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:7396962063"
              className="px-4 py-2 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-all flex items-center gap-1.5 active:scale-95"
            >
              <Icons.Phone className="w-4 h-4" />
              <span>Call: 7396962063</span>
            </a>
            <button
              onClick={() => onOpenLeadModal()}
              className="px-5 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm hover:shadow-md hover:shadow-blue-600/20 transition-all flex items-center gap-2"
            >
              <span>Apply Now</span>
              <Icons.ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => onOpenLeadModal()}
              className="px-3 py-1.5 text-xs font-bold text-white bg-blue-600 rounded-md shadow-sm"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-xl">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-semibold text-left transition-colors ${
                    isActive 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <Icons.ChevronRight className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="tel:7396962063"
              className="w-full py-3 px-4 text-center font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm flex items-center justify-center gap-2 active:scale-95"
            >
              <Icons.Phone className="w-4 h-4" />
              <span>Call Advisor: 7396962063</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLeadModal();
              }}
              className="w-full py-3 px-4 text-center font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md shadow-blue-600/20 flex items-center justify-center gap-2"
            >
              <span>Apply for a Loan</span>
              <Icons.ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
