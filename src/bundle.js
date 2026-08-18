// Andromeda - Modern Clean Financial Web & Mobile Platform
// Full Integration of Process Infographic & Trust & Transparency Banner (Exact Match to 2nd Image)

const { useState, useEffect, useRef } = React;

// 1. CLEAN VECTOR SVG ICONS
const SVG = {
  LogoDelta: () => (
    <svg className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 drop-shadow-sm" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4L44 38H4L24 4Z" stroke="#0B4DA2" strokeWidth="4.5" strokeLinejoin="round" fill="none" />
      <path d="M24 14L35 34H13L24 14Z" fill="#0B4DA2" />
      <path d="M24 23L30 33H18L24 23Z" fill="#FFFFFF" />
    </svg>
  ),
  Phone: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  ),
  Menu: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  Close: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  Check: ({ className = "w-4 h-4 text-emerald-500" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  Star: ({ className = "w-5 h-5 text-amber-400" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  ),
  Shield: ({ className = "w-10 h-10 text-white" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  ArrowLeft: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  ),
  ArrowRight: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  ),
  StepArrow: () => (
    <svg className="w-4 h-4 text-slate-400 shrink-0 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  ),
  // Step Circular Icons (from 2nd image)
  Step1Consult: () => (
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#4A154B] text-white flex items-center justify-center shadow-md shrink-0">
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    </div>
  ),
  Step2Verify: () => (
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0288D1] text-white flex items-center justify-center shadow-md shrink-0">
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    </div>
  ),
  Step3Select: () => (
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#00897B] text-white flex items-center justify-center shadow-md shrink-0">
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    </div>
  ),
  Step4Apply: () => (
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#EF6C00] text-white flex items-center justify-center shadow-md shrink-0">
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    </div>
  ),
  Step5Approve: () => (
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#C2185B] text-white flex items-center justify-center shadow-md shrink-0">
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    </div>
  ),
  Step6Disburse: () => (
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#4A148C] text-white flex items-center justify-center shadow-md shrink-0 text-xl font-black">
      ₹
    </div>
  ),
  // Trust Box Icons
  Smiley: () => (
    <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" strokeWidth="2.5" />
    </svg>
  ),
  Handshake: () => (
    <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5l3-3m-3 3l-3-3m6 0l2.5 2.5a2.5 2.5 0 003.536 0l4.95-4.95a2.5 2.5 0 000-3.536L18 3.5M7 11.5L9.5 14a2.5 2.5 0 003.536 0l4.95-4.95" />
    </svg>
  ),
  DocFile: () => (
    <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  Headset: () => (
    <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
    </svg>
  ),
  // Service Icons
  User: ({ className = "w-9 h-9 text-[#0B4DA2]" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  ),
  Briefcase: ({ className = "w-9 h-9 text-[#0B4DA2]" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
    </svg>
  ),
  Home: ({ className = "w-9 h-9 text-[#0B4DA2]" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  ),
  Building: ({ className = "w-9 h-9 text-[#0B4DA2]" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" />
    </svg>
  ),
  Car: ({ className = "w-9 h-9 text-[#0B4DA2]" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
    </svg>
  ),
  Graduation: ({ className = "w-9 h-9 text-[#0B4DA2]" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
    </svg>
  ),
  Gold: ({ className = "w-9 h-9 text-[#D4AF37]" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-9-1c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-6v11c0 1.1-.9 2-2 2H4v-2h17V7h2z" />
    </svg>
  ),
  Gear: ({ className = "w-9 h-9 text-[#0B4DA2]" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
    </svg>
  ),
  NavHome: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  NavGrid: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ),
  NavUsers: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  NavPin: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
};

// 2. SERVICES ARRAY
const SERVICES = [
  { id: "personal", title: "Personal Loan", icon: <SVG.User />, desc: "Instant funds for personal needs" },
  { id: "business", title: "Business Loan", icon: <SVG.Briefcase />, desc: "Grow your business with low interest" },
  { id: "home", title: "Home Loan", icon: <SVG.Home />, desc: "Purchase, build or renovate" },
  { id: "lap", title: "Loan Against Property", icon: <SVG.Building />, desc: "Unlock value from property equity" },
  { id: "vehicle", title: "Vehicle Loan", icon: <SVG.Car />, desc: "Drive home your dream vehicle" },
  { id: "education", title: "Education Loan", icon: <SVG.Graduation />, desc: "Invest in higher education" },
  { id: "gold", title: "Gold Loan", icon: <SVG.Gold />, desc: "Instant liquidity against gold" },
  { id: "msme", title: "MSME Loan", icon: <SVG.Gear />, desc: "Special micro & small enterprise loans" }
];

// 3. CHARGES ARRAY
const CHARGES = [
  { title: "Personal Loan", amount: "Rs. 1,300", pct: "(1.3%)", icon: <SVG.User className="w-5 h-5 text-[#0B4DA2]" /> },
  { title: "Business Loan", amount: "Rs. 1,200", pct: "(1.2%)", icon: <SVG.Briefcase className="w-5 h-5 text-[#0B4DA2]" /> },
  { title: "LAP", amount: "Rs. 1,000", pct: "(1%)", icon: <SVG.Building className="w-5 h-5 text-[#0B4DA2]" /> },
  { title: "Vehicle Loan", amount: "Rs. 1,000", pct: "(1%)", icon: <SVG.Car className="w-5 h-5 text-[#0B4DA2]" /> },
  { title: "Home Loan", amount: "Rs. 600", pct: "(1.6%)", icon: <SVG.Home className="w-5 h-5 text-[#0B4DA2]" /> },
  { title: "Education Loan", amount: "Rs. 500", pct: "(0.5%)", icon: <SVG.Graduation className="w-5 h-5 text-[#0B4DA2]" /> }
];

// 4. WHY CHOOSE US POINTS
const WHY_CHOOSE_POINTS = [
  "100+ Bank & NBFC Partners",
  "Multiple Loan Options",
  "Fast Processing",
  "Expert Guidance",
  "100% Transparent",
  "Free Consultation"
];

// 5. 6-STEP PROCESS DATA (Exact match to 2nd image)
const PROCESS_STEPS_INFOGRAPHIC = [
  { num: "1", label: "Consultation", icon: <SVG.Step1Consult /> },
  { num: "2", label: "Document Verification", icon: <SVG.Step2Verify /> },
  { num: "3", label: "Loan Selection", icon: <SVG.Step3Select /> },
  { num: "4", label: "Application", icon: <SVG.Step4Apply /> },
  { num: "5", label: "Approval", icon: <SVG.Step5Approve /> },
  { num: "6", label: "Disbursement", icon: <SVG.Step6Disburse /> }
];

// 6. MAIN APP COMPONENT
function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState('Personal Loan');
  const [toast, setToast] = useState(null);

  const servicesTrackRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: 'Nalgonda',
    amount: 'Rs. 5,00,000'
  });

  const scrollServices = (distance) => {
    if (servicesTrackRef.current) {
      servicesTrackRef.current.scrollBy({ left: distance, behavior: 'smooth' });
    }
  };

  const openApply = (loanName) => {
    setSelectedLoan(loanName);
    setModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(false);
    setToast(`Thank you, ${formData.name}! Your application for ${selectedLoan} has been received. Our team will contact you at ${formData.mobile}.`);
    setTimeout(() => setToast(null), 5000);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] text-slate-800 font-sans antialiased pb-24 md:pb-8">
      
      {/* Toast Alert */}
      {toast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-[#0B2545] text-white px-6 py-4 rounded-2xl shadow-2xl border-2 border-blue-400 text-sm sm:text-base font-bold max-w-md w-[92%] animate-bounce text-center flex items-center justify-center space-x-2.5">
          <span className="text-emerald-400 font-black text-xl">✓</span>
          <span>{toast}</span>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-[500px] md:max-w-[780px] lg:max-w-[980px] mx-auto bg-white min-h-screen shadow-2xl overflow-hidden">
        
        {/* ========================================================================= */}
        {/* 1. TOP HEADER */}
        {/* ========================================================================= */}
        <header className="px-4 sm:px-6 py-3.5 bg-white flex items-center justify-between border-b-2 border-slate-100 sticky top-0 z-40">
          
          <div
            className="flex items-center space-x-3 cursor-pointer select-none"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <SVG.LogoDelta />
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#0B4DA2] tracking-tight leading-none brand-font">
                ANDROMEDA
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-[#0B4DA2] tracking-normal leading-tight mt-0.5">
                India's Largest Loan Distributor
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-bold leading-tight">
                Andromeda Sales & Distribution Pvt. Ltd.
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <a
              href="tel:7396962063"
              className="flex items-center space-x-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#0B4DA2] hover:bg-[#083a7c] text-white text-xs sm:text-sm font-black shadow-md active:scale-95 transition-all"
            >
              <SVG.Phone className="w-4 h-4" />
              <span>Call</span>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 rounded-full bg-[#0B4DA2] text-white flex items-center justify-center shadow-md active:scale-95 transition-all"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <SVG.Close className="w-5 h-5" /> : <SVG.Menu className="w-5 h-5" />}
            </button>
          </div>

        </header>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="bg-white border-b-2 border-slate-200 px-6 py-4 space-y-3 text-sm font-bold text-slate-800 animate-fade-in shadow-inner">
            <button onClick={() => { scrollTo('hero-sec'); }} className="block w-full text-left py-1.5 hover:text-[#0B4DA2] text-base">🏠 Home</button>
            <button onClick={() => { scrollTo('about-sec'); }} className="block w-full text-left py-1.5 hover:text-[#0B4DA2] text-base">👥 About Andromeda</button>
            <button onClick={() => { scrollTo('services-sec'); }} className="block w-full text-left py-1.5 hover:text-[#0B4DA2] text-base">⊞ Our Services</button>
            <button onClick={() => { scrollTo('charges-sec'); }} className="block w-full text-left py-1.5 hover:text-[#0B4DA2] text-base">💵 Our Charges (Per Lead)</button>
            <button onClick={() => { scrollTo('contact-sec'); }} className="block w-full text-left py-1.5 hover:text-[#0B4DA2] text-base">📞 Contact Details</button>
          </div>
        )}

        {/* Main Content Body */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6" id="hero-sec">

          {/* ========================================================================= */}
          {/* 2. HERO BANNER CARD */}
          {/* ========================================================================= */}
          <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#071E3D] via-[#0B3A75] to-[#1565D8] text-white p-5 sm:p-7 shadow-lg relative">
            <div className="space-y-3 max-w-[95%] relative z-10">
              
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight uppercase brand-font leading-tight">
                INDIA'S LARGEST
                <span className="block text-[#00E5FF] mt-1 text-3xl sm:text-5xl">
                  LOAN DISTRIBUTOR'S
                </span>
                <span className="block text-2xl sm:text-4xl mt-0.5">
                  COMPANY
                </span>
              </h1>

              <div className="flex items-center space-x-2 text-xs sm:text-sm font-extrabold text-amber-300 pt-1">
                <SVG.Star className="w-5 h-5 text-amber-300" />
                <span>Authorised Channel Partner for Leading Banks & NBFCs</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openApply('General Loan Application')}
                  className="px-6 py-3 bg-white text-[#0B4DA2] hover:bg-blue-50 font-black text-sm sm:text-base rounded-2xl shadow-lg transition-all active:scale-95 flex items-center space-x-2"
                >
                  <span>Apply Now</span>
                  <span>→</span>
                </button>
              </div>

            </div>
          </div>

          {/* ========================================================================= */}
          {/* 3. SPECIAL OFFER CARD */}
          {/* ========================================================================= */}
          <div className="rounded-3xl border-2 border-amber-300 bg-[#FFF9E6] p-4 sm:p-5 shadow-sm flex items-center space-x-4">
            <div className="shrink-0">
              <div className="w-22 h-22 sm:w-26 sm:h-26 rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#FFD700] to-[#F3E5AB] p-1.5 shadow-md flex items-center justify-center text-center">
                <div className="w-full h-full rounded-full border-2 border-dashed border-[#8B6508] bg-gradient-to-b from-[#FFFDF0] to-[#FFE8A3] flex flex-col items-center justify-center p-1.5 text-[#5C4033]">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider leading-tight">TRUST</span>
                  <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-tight leading-tight">TRANSPARENCY</span>
                  <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-tight leading-tight">SPEED SERVICE</span>
                  <div className="flex space-x-0.5 mt-0.5">
                    <SVG.Star className="w-3 h-3 text-[#8B6508]" />
                    <SVG.Star className="w-3 h-3 text-[#8B6508]" />
                    <SVG.Star className="w-3 h-3 text-[#8B6508]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-1 text-left">
              <div className="text-xs sm:text-sm font-extrabold text-slate-700">
                For 1 Lakh Disbursement
              </div>

              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-[#D32F2F] tracking-tight brand-font">
                  Rs. 1000
                </span>
                <span className="text-sm sm:text-base font-black text-[#D32F2F]">
                  Cash Incentive
                </span>
              </div>

              <p className="text-xs text-slate-600 font-bold leading-snug">
                On Personal Loans, Home Loans, Business Loans & Other Non-Finance Leads
              </p>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 4. PARTNER WITH US & EARN MORE! CARD */}
          {/* ========================================================================= */}
          <div className="rounded-3xl bg-gradient-to-r from-[#071E3D] via-[#0B3A75] to-[#071E3D] text-white p-4 sm:p-6 shadow-md flex items-center space-x-4">
            <div className="w-13 h-13 rounded-full bg-[#D32F2F] text-white flex items-center justify-center shrink-0 shadow-md">
              <SVG.Phone className="w-6 h-6" />
            </div>

            <div className="flex-1 space-y-1">
              <h3 className="text-base sm:text-lg font-black text-white brand-font leading-tight">
                Partner With Us & Earn More!
              </h3>
              <div className="text-xs sm:text-sm font-black text-[#FFD700]">
                Unlimited Earning Opportunities!
              </div>
              <div className="text-[11px] sm:text-xs text-slate-200 font-semibold leading-tight">
                Refer leads & earn high incentives... More leads, more income!
              </div>
            </div>

            <button
              onClick={() => openApply('Partner Application')}
              className="shrink-0 px-4 py-2.5 bg-[#0B4DA2] hover:bg-blue-600 text-white font-black text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-95"
            >
              Join →
            </button>
          </div>

          {/* ========================================================================= */}
          {/* 5. OUR SERVICES (Horizontal Scrollable Carousel) */}
          {/* ========================================================================= */}
          <div className="py-2" id="services-sec">
            
            <div className="flex items-center justify-between mb-3 px-1">
              <h2 className="text-lg sm:text-2xl font-black text-[#0B4DA2] tracking-wide brand-font flex items-center space-x-2">
                <span className="text-slate-300 font-light">—</span>
                <span>Our Services</span>
                <span className="text-slate-300 font-light">—</span>
              </h2>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => scrollServices(-240)}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-[#0B4DA2] hover:text-white text-slate-700 flex items-center justify-center border border-slate-300 shadow-xs transition-colors active:scale-95"
                  aria-label="Previous service"
                >
                  <SVG.ArrowLeft />
                </button>
                <button
                  onClick={() => scrollServices(240)}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-[#0B4DA2] hover:text-white text-slate-700 flex items-center justify-center border border-slate-300 shadow-xs transition-colors active:scale-95"
                  aria-label="Next service"
                >
                  <SVG.ArrowRight />
                </button>
              </div>
            </div>

            <div
              ref={servicesTrackRef}
              className="flex items-stretch space-x-3.5 overflow-x-auto pb-4 pt-1 px-1 scroll-smooth snap-x snap-mandatory no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {SERVICES.map((srv) => (
                <div
                  key={srv.id}
                  onClick={() => openApply(srv.title)}
                  className="snap-start shrink-0 w-[170px] sm:w-[200px] bg-white rounded-2xl border-2 border-slate-200 p-4 sm:p-5 flex flex-col justify-between items-center text-center hover:shadow-xl hover:border-[#0B4DA2] hover:-translate-y-1 transition-all duration-200 cursor-pointer group active:scale-95"
                >
                  <div className="flex flex-col items-center">
                    <div className="mb-2.5 group-hover:scale-110 transition-transform">
                      {srv.icon}
                    </div>
                    <h3 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-[#0B4DA2] transition-colors leading-tight mb-1">
                      {srv.title}
                    </h3>
                    <p className="text-[10.5px] text-slate-500 font-semibold leading-tight line-clamp-2">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-100 w-full flex items-center justify-center text-xs font-black text-[#0B4DA2] group-hover:text-blue-700 space-x-1">
                    <span>Apply</span>
                    <span>→</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center px-1 text-[11px] text-slate-400 font-bold">
              <span>← Swipe horizontally to explore all 8 services →</span>
              <span className="text-[#0B4DA2]">8 Loans</span>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* 6. 100% FREE SERVICE BANNER */}
          {/* ========================================================================= */}
          <div className="rounded-2xl bg-[#0B3A75] text-white p-4 sm:p-5 shadow-md flex items-center space-x-3.5 sm:space-x-4">
            <div className="shrink-0">
              <SVG.Shield />
            </div>
            <div>
              <div className="text-base sm:text-lg font-black text-[#FFD700] brand-font uppercase">
                100% FREE SERVICE
              </div>
              <div className="text-xs sm:text-sm text-blue-100 font-semibold leading-tight mt-0.5">
                Free Lead, Processing, Pre-Disbursal, Disbursal & Post Disbursal Support
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 7. OUR CHARGES (PER LEAD) */}
          {/* ========================================================================= */}
          <div className="py-2" id="charges-sec">
            <div className="text-center mb-4">
              <h2 className="text-lg sm:text-2xl font-black text-[#0B4DA2] tracking-wide brand-font flex items-center justify-center space-x-2">
                <span className="text-slate-300 font-light">—</span>
                <span>Our Charges (Per Lead)</span>
                <span className="text-slate-300 font-light">—</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {CHARGES.map((ch, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border-2 border-slate-200 p-3.5 sm:p-4 flex flex-col justify-between hover:shadow-md hover:border-blue-300 transition-all"
                >
                  <div className="flex items-center space-x-2">
                    {ch.icon}
                    <span className="text-xs sm:text-sm font-extrabold text-slate-800 leading-none">{ch.title}</span>
                  </div>

                  <div className="mt-2.5 text-center">
                    <div className="text-lg sm:text-xl font-black text-[#D32F2F] tracking-tight">
                      {ch.amount}
                    </div>
                    <div className="text-xs font-black text-[#D32F2F]">
                      {ch.pct}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-2xl bg-white border-2 border-slate-200 p-4 flex items-center justify-between hover:shadow-md hover:border-blue-300 transition-all">
              <div className="flex items-center space-x-3">
                <SVG.Shield className="w-7 h-7 text-[#0B4DA2]" />
                <div>
                  <div className="text-sm font-black text-slate-800 leading-none">Insurance</div>
                  <div className="text-[11px] text-slate-500 font-semibold leading-tight mt-0.5">(Per 1 Lakh Sum Assured)</div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-lg sm:text-xl font-black text-[#D32F2F] tracking-tight">
                  Rs. 10,000
                </div>
                <div className="text-xs font-black text-[#D32F2F]">
                  (10%)
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 8. ABOUT ANDROMEDA + OUR PROCESS & TRUST (EXACT 2ND IMAGE INFOGRAPHIC) */}
          {/* ========================================================================= */}
          <div className="bg-white rounded-3xl p-5 sm:p-7 border-2 border-slate-200 shadow-md space-y-6" id="about-sec">
            
            {/* Header / Intro */}
            <div className="text-center space-y-2">
              <div className="inline-block px-3 py-1 bg-blue-50 text-[#0B4DA2] rounded-full text-xs font-black uppercase tracking-wider">
                Who We Are
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B4DA2] brand-font">
                About Andromeda
              </h2>
              <h3 className="text-base sm:text-lg font-black text-slate-800">
                Your Trusted Loan Partner
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto leading-relaxed">
                We connect you with the right loan solutions from leading Banks & NBFCs, with simple and transparent support.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-2xl p-4 sm:p-5 border border-blue-200 text-center space-y-1.5">
              <div className="text-xs font-black text-[#0B4DA2] uppercase tracking-wider">Our Mission</div>
              <div className="text-base sm:text-lg font-black text-slate-900 brand-font">
                Simple. Transparent. Hassle-Free.
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Helping you choose the right loan and guiding you from application to approval.
              </p>
            </div>

            {/* Why Choose Us? (6 Points) */}
            <div className="space-y-3">
              <h4 className="text-base sm:text-lg font-black text-[#0B4DA2] text-center brand-font">
                Why Choose Us?
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {WHY_CHOOSE_POINTS.map((pt, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center space-x-2">
                    <SVG.Check />
                    <span className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Loan Solutions */}
            <div className="space-y-2.5">
              <h4 className="text-base sm:text-lg font-black text-[#0B4DA2] text-center brand-font">
                Our Loan Solutions
              </h4>
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-bold text-slate-700">
                <span className="px-3 py-1.5 bg-slate-100 rounded-lg">Personal</span>
                <span>•</span>
                <span className="px-3 py-1.5 bg-slate-100 rounded-lg">Business</span>
                <span>•</span>
                <span className="px-3 py-1.5 bg-slate-100 rounded-lg">Home</span>
                <span>•</span>
                <span className="px-3 py-1.5 bg-slate-100 rounded-lg">LAP</span>
                <span>•</span>
                <span className="px-3 py-1.5 bg-slate-100 rounded-lg">Vehicle</span>
                <span>•</span>
                <span className="px-3 py-1.5 bg-slate-100 rounded-lg">Education</span>
                <span>•</span>
                <span className="px-3 py-1.5 bg-slate-100 rounded-lg">Insurance</span>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* EXACT MATCH: OUR PROCESS INFOGRAPHIC (6 CIRCULAR STEPS WITH ARROWS) */}
            {/* ========================================================================= */}
            <div className="pt-4 border-t border-slate-200 space-y-4">
              
              <h3 className="text-xl sm:text-2xl font-black text-[#0B2545] brand-font text-left sm:text-center">
                Our Process
              </h3>

              {/* Responsive Flow: 6 Circular Steps with connecting arrows */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-2 items-start justify-between">
                {PROCESS_STEPS_INFOGRAPHIC.map((stepItem, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-2 rounded-2xl hover:bg-slate-50 transition-colors">
                    
                    {/* Circle Icon */}
                    <div className="mb-2">
                      {stepItem.icon}
                    </div>

                    {/* Step Number */}
                    <div className="text-sm font-black text-slate-900 mt-1">
                      {stepItem.num}
                    </div>

                    {/* Step Label */}
                    <div className="text-xs sm:text-[13px] font-extrabold text-slate-800 leading-tight mt-0.5">
                      {stepItem.label}
                    </div>

                  </div>
                ))}
              </div>

            </div>

            {/* ========================================================================= */}
            {/* EXACT MATCH: TRUST & TRANSPARENCY DARK NAVY 4-COLUMN BOX */}
            {/* ========================================================================= */}
            <div className="pt-2 space-y-3">
              
              <h3 className="text-lg sm:text-xl font-black text-[#0B2545] brand-font text-center">
                Trust & Transparency
              </h3>

              {/* Dark Navy 4-Pillar Box matching 2nd image */}
              <div className="bg-[#0A1633] text-white rounded-3xl p-5 sm:p-6 shadow-xl border border-blue-900/60">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-700/60">
                  
                  {/* Pillar 1: 1000+ Happy Clients */}
                  <div className="flex items-center space-x-3 pt-2 sm:pt-0 sm:px-2">
                    <SVG.Smiley />
                    <div>
                      <div className="text-lg sm:text-xl font-black text-white brand-font leading-none">
                        1000+
                      </div>
                      <div className="text-xs text-slate-300 font-semibold mt-0.5 leading-tight">
                        Happy Clients
                      </div>
                    </div>
                  </div>

                  {/* Pillar 2: 100+ Lending Partners */}
                  <div className="flex items-center space-x-3 pt-2 sm:pt-0 sm:px-3">
                    <SVG.Handshake />
                    <div>
                      <div className="text-lg sm:text-xl font-black text-white brand-font leading-none">
                        100+
                      </div>
                      <div className="text-xs text-slate-300 font-semibold mt-0.5 leading-tight">
                        Lending Partners
                      </div>
                    </div>
                  </div>

                  {/* Pillar 3: Multiple Loan Products */}
                  <div className="flex items-center space-x-3 pt-2 sm:pt-0 sm:px-3">
                    <SVG.DocFile />
                    <div>
                      <div className="text-base sm:text-lg font-black text-white brand-font leading-none">
                        Multiple
                      </div>
                      <div className="text-xs text-slate-300 font-semibold mt-0.5 leading-tight">
                        Loan Products
                      </div>
                    </div>
                  </div>

                  {/* Pillar 4: Fast & Professional Support */}
                  <div className="flex items-center space-x-3 pt-2 sm:pt-0 sm:px-3">
                    <SVG.Headset />
                    <div>
                      <div className="text-base sm:text-lg font-black text-white brand-font leading-none">
                        Fast &
                      </div>
                      <div className="text-xs text-slate-300 font-semibold mt-0.5 leading-tight">
                        Professional Support
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Our Team */}
            <div className="text-center space-y-1 bg-slate-50 rounded-2xl p-4 border border-slate-200">
              <h4 className="text-base sm:text-lg font-black text-slate-900 brand-font">Our Team</h4>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Experienced professionals dedicated to helping you find the right loan.
              </p>
            </div>

            {/* Get Started CTA */}
            <div className="bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] text-white rounded-2xl p-5 text-center space-y-2 shadow-lg">
              <h4 className="text-lg sm:text-xl font-black brand-font">Get Started</h4>
              <div className="text-sm sm:text-base font-bold text-yellow-200">Need a Loan? We’re Here to Help.</div>
              <p className="text-xs text-white/90">Get your Free Consultation today.</p>
              <button
                onClick={() => openApply('Free Consultation')}
                className="mt-2 px-6 py-2.5 bg-white text-[#B71C1C] hover:bg-yellow-50 font-black text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-95"
              >
                Get Free Consultation Now →
              </button>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* 9. CALL FOR MORE DETAILS ACTION CARD */}
          {/* ========================================================================= */}
          <div className="rounded-2xl bg-white border-2 border-blue-300 p-4 sm:p-5 shadow-sm" id="contact-sec">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-[#0B4DA2] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <SVG.Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-black text-[#0B4DA2]">Call for More Details</div>
                  <div className="text-xs text-slate-500 font-bold">We're Here to Help!</div>
                </div>
              </div>

              <div className="h-10 w-px bg-slate-200 mx-2 sm:mx-4"></div>

              <div className="text-right">
                <a
                  href="tel:7396962063"
                  className="text-lg sm:text-2xl font-black text-[#0B4DA2] hover:underline brand-font block leading-tight tracking-tight"
                >
                  7396962063
                </a>
                <div className="text-xs font-extrabold text-slate-700 mt-0.5">
                  M. Swapna (Search Manager)
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 10. MOBILE BOTTOM FIXED DOCK */}
      {/* ========================================================================= */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-slate-200 shadow-2xl px-4 py-2.5 flex items-center justify-between max-w-[500px] md:max-w-[780px] lg:max-w-[980px] mx-auto">
        <button
          onClick={() => { setActiveTab('Home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center text-xs font-black ${activeTab === 'Home' ? 'text-[#0B4DA2]' : 'text-slate-500'}`}
        >
          <SVG.NavHome />
          <span className="mt-0.5">Home</span>
        </button>

        <button
          onClick={() => { setActiveTab('Services'); scrollTo('services-sec'); }}
          className={`flex flex-col items-center justify-center text-xs font-black ${activeTab === 'Services' ? 'text-[#0B4DA2]' : 'text-slate-500'}`}
        >
          <SVG.NavGrid />
          <span className="mt-0.5">Services</span>
        </button>

        <div className="-mt-9">
          <a
            href="tel:7396962063"
            className="w-15 h-15 rounded-full bg-[#0B4DA2] hover:bg-[#083a7c] text-white flex flex-col items-center justify-center shadow-2xl border-4 border-white active:scale-95 transition-transform"
          >
            <SVG.Phone className="w-5 h-5" />
            <span className="text-[10px] font-black uppercase mt-0.5">Call Now</span>
          </a>
        </div>

        <button
          onClick={() => { setActiveTab('About'); scrollTo('about-sec'); }}
          className={`flex flex-col items-center justify-center text-xs font-black ${activeTab === 'About' ? 'text-[#0B4DA2]' : 'text-slate-500'}`}
        >
          <SVG.NavUsers />
          <span className="mt-0.5">About Us</span>
        </button>

        <button
          onClick={() => { setActiveTab('Contact'); scrollTo('contact-sec'); }}
          className={`flex flex-col items-center justify-center text-xs font-black ${activeTab === 'Contact' ? 'text-[#0B4DA2]' : 'text-slate-500'}`}
        >
          <SVG.NavPin />
          <span className="mt-0.5">Contact</span>
        </button>
      </nav>

      {/* ========================================================================= */}
      {/* 11. LEAD APPLICATION MODAL */}
      {/* ========================================================================= */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700"
            >
              <SVG.Close className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B4DA2] bg-blue-50 px-3 py-1 rounded-full">
                Instant Loan Lead Form
              </span>
              <h3 className="text-2xl font-black text-slate-900 brand-font mt-2">
                Apply for {selectedLoan}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-black text-slate-700 uppercase mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#0B4DA2]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="9876543210"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#0B4DA2]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#0B4DA2]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-slate-700 uppercase mb-1">Loan Amount</label>
                <input
                  type="text"
                  required
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#0B4DA2]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#0B4DA2] hover:bg-[#083a7c] text-white font-black rounded-xl text-sm sm:text-base shadow-lg transition-all mt-2 active:scale-95"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

// 7. MOUNT ROOT
const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<App />);
}
