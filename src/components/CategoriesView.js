import React, { useState } from 'react';
import { LoanCategoryCard } from './LoanCategoryCard.js';
import { LOAN_CATEGORIES } from '../data/loansData.js';
import { Icons } from './Icons.js';

export const CategoriesView = ({ isPage = false, onViewDetails, onApplyNow }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Loans' },
    { id: 'personal', label: 'Personal & Edu' },
    { id: 'business', label: 'Business & MSME' },
    { id: 'secured', label: 'Secured & Property' }
  ];

  const filteredLoans = LOAN_CATEGORIES.filter((loan) => {
    const matchesSearch = loan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loan.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;

    if (selectedFilter === 'personal') {
      return ['personal-loans', 'educational-loans', 'vehicle-loans'].includes(loan.id);
    }
    if (selectedFilter === 'business') {
      return ['business-loans', 'msme-loans'].includes(loan.id);
    }
    if (selectedFilter === 'secured') {
      return ['home-loans', 'loan-against-property', 'gold-loans'].includes(loan.id);
    }
    return true;
  });

  return (
    <section className={`py-16 sm:py-20 ${isPage ? 'bg-slate-50 min-h-screen' : 'bg-white'}`} id="loan-categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Icons.Layers className="w-4 h-4" />
            <span>Tailored Financial Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight brand-font">
            Explore Loan Categories
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Choose the loan category that best matches your financial requirements. Compare rates, terms, and eligibility with Andromeda.
          </p>
        </div>

        {/* Filter and Search Bar for Category Discovery */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm" data-aos="fade-up">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedFilter(opt.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedFilter === opt.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Icons.Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search loan types..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Responsive Grid: Desktop 4 cols, Tablet 2 cols, Mobile 1 col */}
        {filteredLoans.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredLoans.map((loan) => (
              <LoanCategoryCard
                key={loan.id}
                loan={loan}
                onViewDetails={onViewDetails}
                onApplyNow={onApplyNow}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
              <Icons.Search className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-800">No matching loan categories found</h4>
            <p className="text-sm text-slate-500 mt-1">Try resetting your search query or selecting "All Loans".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedFilter('all'); }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
