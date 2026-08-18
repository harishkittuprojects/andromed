import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.js';
import { HeroSection } from './components/HeroSection.js';
import { CategoriesView } from './components/CategoriesView.js';
import { ServicesView } from './components/ServicesView.js';
import { ChargesView } from './components/ChargesView.js';
import { EMICalculator } from './components/EMICalculator.js';
import { WhyChooseUs } from './components/WhyChooseUs.js';
import { HowItWorks } from './components/HowItWorks.js';
import { TrustStats } from './components/TrustStats.js';
import { AboutView } from './components/AboutView.js';
import { ContactView } from './components/ContactView.js';
import { LoginView } from './components/LoginView.js';
import { LeadModal } from './components/LeadModal.js';
import { LoanDetailModal } from './components/LoanDetailModal.js';
import { CTASection } from './components/CTASection.js';
import { Footer } from './components/Footer.js';
import { Toast } from './components/Toast.js';
import { LOAN_CATEGORIES } from './data/loansData.js';

export function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    if (['/categories', '/services', '/charges', '/about', '/contact', '/login'].includes(hash)) {
      return hash;
    }
    return '/';
  });

  const [leadModalState, setLeadModalState] = useState({
    isOpen: false,
    category: 'Personal Loans',
    isPartnerInquiry: false,
    amount: 25000
  });

  const [detailModalState, setDetailModalState] = useState({
    isOpen: false,
    loan: null
  });

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Configurable lead charges store
  const [customCharges, setCustomCharges] = useState(() => {
    try {
      const saved = localStorage.getItem('andromeda_custom_charges');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  const handleUpdateCharge = (id, newCharge) => {
    const updated = { ...customCharges, [id]: newCharge };
    setCustomCharges(updated);
    try {
      localStorage.setItem('andromeda_custom_charges', JSON.stringify(updated));
    } catch (e) {}
    setToast({
      type: 'success',
      title: 'Rate Updated',
      message: `Lead charge for ${id} set to $${newCharge}.`
    });
  };

  // Sync route with hash
  useEffect(() => {
    window.location.hash = currentRoute;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.AOS) {
      setTimeout(() => {
        window.AOS.refresh();
      }, 100);
    }
  }, [currentRoute]);

  // Listen to hash change from browser buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || '/';
      if (['/', '/categories', '/services', '/charges', '/about', '/contact', '/login'].includes(hash)) {
        setCurrentRoute(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Initialize AOS scroll animations
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 700,
        easing: 'ease-out-cubic',
        once: true,
        offset: 40
      });
    }
  }, []);

  const openLeadModal = (options = {}) => {
    setLeadModalState({
      isOpen: true,
      category: options.defaultCategory || options.loanCategory || 'Personal Loans',
      isPartnerInquiry: !!options.isPartnerInquiry,
      amount: options.amount || 25000
    });
  };

  const closeLeadModal = () => {
    setLeadModalState(prev => ({ ...prev, isOpen: false }));
  };

  const handleApplyFromCalculator = (calcData) => {
    openLeadModal({
      amount: calcData.loanAmount,
      defaultCategory: 'Personal Loans'
    });
  };

  const handleViewDetails = (loan) => {
    setDetailModalState({
      isOpen: true,
      loan: loan
    });
  };

  const handleLeadSubmit = (data) => {
    setToast({
      type: 'success',
      title: 'Application Received',
      message: `Thank you ${data.fullName}! Our financial advisor will contact you shortly.`
    });
  };

  const handleLoginSuccess = (user) => {
    setLoginModalOpen(false);
    setToast({
      type: 'success',
      title: 'Authentication Success',
      message: `Logged in as ${user.identifier} (${user.role}).`
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Sticky Header Navbar */}
      <Navbar
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
        onOpenLeadModal={openLeadModal}
        onOpenLoginModal={() => setLoginModalOpen(true)}
      />

      {/* Main Content Pages */}
      <main className="flex-1">
        {currentRoute === '/' && (
          <div>
            {/* 1. Hero Section */}
            <HeroSection
              onOpenLeadModal={openLeadModal}
              onExploreLoans={() => {
                const el = document.getElementById('loan-categories');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setCurrentRoute('/categories');
              }}
              onSelectLoan={(loan) => handleViewDetails(loan)}
            />

            {/* 2. Loan Categories Preview */}
            <CategoriesView
              isPage={false}
              onViewDetails={handleViewDetails}
              onApplyNow={(loan) => openLeadModal({ defaultCategory: loan.name })}
            />

            {/* 3. EMI Loan Calculator */}
            <EMICalculator onApplyWithCalculation={handleApplyFromCalculator} />

            {/* 4. Why Choose Andromeda */}
            <WhyChooseUs />

            {/* 5. How It Works (4-Step visual) */}
            <HowItWorks onOpenLeadModal={openLeadModal} />

            {/* 6. Trust & Statistics */}
            <TrustStats />

            {/* 7. Call To Action Banner */}
            <CTASection
              onOpenLeadModal={openLeadModal}
              onSpeakAdvisor={() => setCurrentRoute('/contact')}
            />
          </div>
        )}

        {currentRoute === '/categories' && (
          <div>
            <CategoriesView
              isPage={true}
              onViewDetails={handleViewDetails}
              onApplyNow={(loan) => openLeadModal({ defaultCategory: loan.name })}
            />
            <CTASection
              onOpenLeadModal={openLeadModal}
              onSpeakAdvisor={() => setCurrentRoute('/contact')}
            />
          </div>
        )}

        {currentRoute === '/services' && (
          <div>
            <ServicesView
              onApplyNow={(loan) => openLeadModal({ defaultCategory: loan.name })}
              onViewDetails={handleViewDetails}
            />
            <CTASection
              onOpenLeadModal={openLeadModal}
              onSpeakAdvisor={() => setCurrentRoute('/contact')}
            />
          </div>
        )}

        {currentRoute === '/charges' && (
          <div>
            <ChargesView
              onOpenLeadModal={openLeadModal}
              customCharges={customCharges}
              onUpdateCharge={handleUpdateCharge}
            />
            <CTASection
              onOpenLeadModal={openLeadModal}
              onSpeakAdvisor={() => setCurrentRoute('/contact')}
            />
          </div>
        )}

        {currentRoute === '/about' && (
          <div>
            <AboutView onOpenLeadModal={openLeadModal} />
            <CTASection
              onOpenLeadModal={openLeadModal}
              onSpeakAdvisor={() => setCurrentRoute('/contact')}
            />
          </div>
        )}

        {currentRoute === '/contact' && (
          <div>
            <ContactView
              onFormSubmitted={(msg) => {
                setToast({
                  type: 'success',
                  title: 'Inquiry Sent',
                  message: `Thanks ${msg.name}, our team has received your message.`
                });
              }}
            />
          </div>
        )}

        {currentRoute === '/login' && (
          <div>
            <LoginView onLoginSuccess={handleLoginSuccess} />
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={setCurrentRoute}
        onSelectLoanCategory={(cat) => {
          handleViewDetails(cat);
        }}
      />

      {/* Global Modals */}
      <LeadModal
        isOpen={leadModalState.isOpen}
        onClose={closeLeadModal}
        initialCategory={leadModalState.category}
        initialAmount={leadModalState.amount}
        isPartnerInquiry={leadModalState.isPartnerInquiry}
        onSubmitLead={handleLeadSubmit}
      />

      <LoanDetailModal
        loan={detailModalState.loan}
        isOpen={detailModalState.isOpen}
        onClose={() => setDetailModalState({ isOpen: false, loan: null })}
        onApplyNow={(loan) => openLeadModal({ defaultCategory: loan.name })}
      />

      {loginModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-4">
          <LoginView
            isModal={true}
            onClose={() => setLoginModalOpen(false)}
            onLoginSuccess={handleLoginSuccess}
          />
        </div>
      )}

      {/* Toast Notifications */}
      <Toast toast={toast} onClose={() => setToast(null)} />

    </div>
  );
}
