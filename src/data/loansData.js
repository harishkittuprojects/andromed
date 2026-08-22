// Andromeda Loan Services - Comprehensive Data Store & Configurable Lead Charges

export const BRAND_INFO = {
  name: "Andromeda",
  tagline: "Connecting You with Premier Financial & Loan Solutions",
  phone: "+1 (800) 456-ANDRO",
  supportEmail: "contact@andromeda.in",
  salesEmail: "contact@andromeda.in",
  address: "158, Dani Corporate Park, C.S.T Road Kalina, Santacruz (E), Mumbai - 400098",
  workingHours: "Mon - Sat: 9:00 AM - 7:00 PM IST"
};

export const LOAN_CATEGORIES = [
  {
    id: "personal-loans",
    name: "Personal Loans",
    slug: "personal-loans",
    shortDescription: "Flexible personal loan solutions for individual financial needs, medical emergencies, and debt consolidation.",
    fullDescription: "Get instant access to multi-purpose personal financing with minimal documentation, competitive interest rates, and customized repayment tenures tailored to your income profile.",
    icon: "UserCheck",
    interestRate: "10.49% p.a.",
    maxAmount: "$50,000",
    maxTenure: "5 Years",
    processingFee: "Up to 1.5%",
    leadChargeUSD: 35,
    minCreditScore: 650,
    highlights: [
      "No collateral or security required",
      "Instant in-principle approval within 15 minutes",
      "Flexible tenures from 12 to 60 months",
      "Direct disbursement into your bank account"
    ],
    eligibility: [
      "Age between 21 and 58 years",
      "Minimum monthly net income of $2,500",
      "Salaried or self-employed individual",
      "Minimum 6 months in current employment"
    ],
    documents: [
      "Government-issued Photo ID (Passport/DL)",
      "Last 3 months salary slips or bank statements",
      "Current proof of address (utility bill)",
      "Form W-2 or recent tax returns"
    ]
  },
  {
    id: "business-loans",
    name: "Business Loans",
    slug: "business-loans",
    shortDescription: "Loan solutions designed to fuel business growth, capital expenditure, and working capital needs.",
    fullDescription: "Empower your enterprise with customized business credit lines, expansion loans, and working capital solutions structured to boost cash flow and accelerate revenue growth.",
    icon: "Briefcase",
    interestRate: "12.25% p.a.",
    maxAmount: "$500,000",
    maxTenure: "7 Years",
    processingFee: "Up to 2.0%",
    leadChargeUSD: 65,
    minCreditScore: 680,
    highlights: [
      "High loan limits up to $500K with flexible collateral terms",
      "Working capital and equipment financing options",
      "Tax-deductible interest on qualifying loans",
      "Dedicated corporate loan relationship manager"
    ],
    eligibility: [
      "Business operating history of minimum 2 years",
      "Annual turnover of at least $100,000",
      "Profitable track record for the past financial year",
      "Registered business entity with valid EIN/Tax ID"
    ],
    documents: [
      "Business registration and incorporation documents",
      "Last 2 years audited financial statements & tax returns",
      "Bank statements for the past 6 to 12 months",
      "Ownership & director KYC documentation"
    ]
  },
  {
    id: "home-loans",
    name: "Home Loans",
    slug: "home-loans",
    shortDescription: "Affordable financing solutions for purchasing, constructing, or renovating your dream home.",
    fullDescription: "Make homeownership a seamless reality with Andromeda's tailored home mortgage plans, offering low down-payment programs, attractive fixed/floating rates, and extended tenures.",
    icon: "Home",
    interestRate: "8.15% p.a.",
    maxAmount: "$1,500,000",
    maxTenure: "30 Years",
    processingFee: "0.5% - 1.0%",
    leadChargeUSD: 75,
    minCreditScore: 700,
    highlights: [
      "Up to 90% property value financing (LTV)",
      "Zero prepayment penalties on floating interest rates",
      "Flexible balance transfer options with top-up facility",
      "Legal and technical property assessment support"
    ],
    eligibility: [
      "Resident individual aged 21 to 65 years",
      "Stable source of regular income (Salaried / Professional)",
      "Sound repayment history with clean credit record",
      "Clear, marketable property title without legal encumbrances"
    ],
    documents: [
      "Property purchase agreement & title deeds",
      "Approved construction plan or builder allotment letter",
      "Last 6 months bank statements and salary certificates",
      "KYC documents and tax return filings"
    ]
  },
  {
    id: "loan-against-property",
    name: "Loan Against Property",
    slug: "loan-against-property",
    shortDescription: "Unlock substantial funds at low interest by leveraging your residential or commercial property equity.",
    fullDescription: "Monetize the hidden equity of your residential, commercial, or industrial real estate to raise substantial capital for debt consolidation, major investments, or business scaling.",
    icon: "Building2",
    interestRate: "9.20% p.a.",
    maxAmount: "$1,000,000",
    maxTenure: "15 Years",
    processingFee: "1.0%",
    leadChargeUSD: 70,
    minCreditScore: 670,
    highlights: [
      "Significantly lower interest rates than unsecured loans",
      "Continue using and owning the mortgaged property",
      "High LTV ratios up to 70% of market valuation",
      "Repay comfortably with long-term amortizations"
    ],
    eligibility: [
      "Owner/co-owner of clear titled freehold property",
      "Age limit: 23 to 65 years at maturity",
      "Demonstrable debt-servicing capacity",
      "Property located within municipal limits"
    ],
    documents: [
      "Original Title Deed and Chain of Title documents",
      "Latest property tax paid receipts and occupancy certificate",
      "Income proof (ITR / audited balance sheets / pay stubs)",
      "Identity and address verification"
    ]
  },
  {
    id: "vehicle-loans",
    name: "Vehicle Loans",
    slug: "vehicle-loans",
    shortDescription: "Quick, hassle-free financing solutions for purchasing new or certified pre-owned vehicles.",
    fullDescription: "Drive away with your dream personal car, commercial transport vehicle, or two-wheeler with swift on-road financing, zero hidden charges, and structured EMI schedules.",
    icon: "Car",
    interestRate: "8.75% p.a.",
    maxAmount: "$120,000",
    maxTenure: "7 Years",
    processingFee: "0.75%",
    leadChargeUSD: 40,
    minCreditScore: 660,
    highlights: [
      "Up to 100% on-road financing available for select models",
      "Minimal turnaround time with pre-approved dealer tie-ups",
      "Special discounts on electric and hybrid vehicles",
      "Customized balloon and step-up EMI structures"
    ],
    eligibility: [
      "Minimum age 21 years with valid driving license",
      "Stable employment with at least 1 year in current job",
      "Minimum annual income of $24,000",
      "Satisfactory credit rating"
    ],
    documents: [
      "Vehicle proforma invoice or dealership quotation",
      "Valid Driving License and Identity Proof",
      "Last 3 months salary slips or bank statements",
      "Proof of residence and utility statement"
    ]
  },
  {
    id: "educational-loans",
    name: "Educational Loans",
    slug: "educational-loans",
    shortDescription: "Comprehensive financial assistance for domestic and international higher education programs.",
    fullDescription: "Invest in academic dreams with education loans covering 100% of tuition fees, accommodation, books, travel, and laptop expenses with flexible moratorium grace periods.",
    icon: "GraduationCap",
    interestRate: "9.10% p.a.",
    maxAmount: "$200,000",
    maxTenure: "15 Years",
    processingFee: "Up to 1.0%",
    leadChargeUSD: 45,
    minCreditScore: 650,
    highlights: [
      "Moratorium period: Course duration + 6 to 12 months grace",
      "Coverage for global top universities and institutes",
      "Tax deduction benefits on interest paid",
      "Collateral-free options available for premier institutions"
    ],
    eligibility: [
      "Secured admission in recognized university/degree program",
      "Co-applicant (parent/guardian/spouse) with stable income",
      "Valid student visa for overseas courses",
      "Good academic track record"
    ],
    documents: [
      "Letter of admission from academic institution",
      "Detailed fee breakdown and cost of living estimate",
      "Academic mark sheets and standardized test scores (GRE/GMAT/IELTS)",
      "Co-borrower income documents and KYC"
    ]
  },
  {
    id: "gold-loans",
    name: "Gold Loans",
    slug: "gold-loans",
    shortDescription: "Instant short-term liquidity secured against your gold ornaments with safe vault storage.",
    fullDescription: "Access rapid cash liquidity in as fast as 30 minutes by pledging gold jewelry or coins. Enjoy complete security in insured bank-grade vaults with flexible bullet repayment options.",
    icon: "Coins",
    interestRate: "7.90% p.a.",
    maxAmount: "$150,000",
    maxTenure: "3 Years",
    processingFee: "0.25% - 0.5%",
    leadChargeUSD: 30,
    minCreditScore: 600,
    highlights: [
      "Fastest loan disbursal in under 30 minutes",
      "Zero income verification or complex paperwork",
      "Gold stored safely in certified bank lockers with full insurance",
      "Option to pay interest monthly and principal at maturity"
    ],
    eligibility: [
      "Individual age 18 years and above",
      "Owner of gold ornaments or eligible coins (18k - 24k)",
      "Valid government ID proof",
      "No mandatory credit score requirement"
    ],
    documents: [
      "Government Photo ID & Address Proof",
      "Passport size photograph",
      "Gold purity certification (completed on-site)"
    ]
  },
  {
    id: "msme-loans",
    name: "MSME Loans",
    slug: "msme-loans",
    shortDescription: "Specialized credit lines and equipment financing for Micro, Small, and Medium Enterprises.",
    fullDescription: "Designed specifically for growing MSMEs looking to expand factory capacity, upgrade machinery, purchase inventory, or fulfill large institutional client contracts.",
    icon: "Factory",
    interestRate: "11.50% p.a.",
    maxAmount: "$750,000",
    maxTenure: "10 Years",
    processingFee: "1.25%",
    leadChargeUSD: 60,
    minCreditScore: 670,
    highlights: [
      "Government-backed scheme benefits and subsidies where applicable",
      "Overdraft, term loan, and letter of credit facilities",
      "Quick credit assessment based on GST & banking inflows",
      "Flexible repayment aligned with your cash generation cycles"
    ],
    eligibility: [
      "MSME / Udyam registered enterprise",
      "Minimum 18 months of continuous business operation",
      "Positive net worth and sound GST return history",
      "Clear banking conduct without recurring cheque bounces"
    ],
    documents: [
      "MSME / Business registration certificates",
      "Last 12 months GST returns and bank statements",
      "PAN Card of the firm/directors and address proof",
      "Project report for machinery or expansion financing"
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: "Layers",
    title: "Multiple Loan Options",
    description: "Access a wide spectrum of 8+ tailored financing categories covering personal, commercial, secured, and education needs."
  },
  {
    icon: "Zap",
    title: "Simple Lead Process",
    description: "Submit your requirement in under 60 seconds with our streamlined digital form and instant pre-qualification."
  },
  {
    icon: "Users",
    title: "Professional Assistance",
    description: "Our certified loan advisors assist you every step of the way, negotiating the best rates with top lending institutions."
  },
  {
    icon: "Clock",
    title: "Fast Response Time",
    description: "Get connected with a dedicated loan specialist within 15 minutes of submitting your application inquiry."
  },
  {
    icon: "ShieldCheck",
    title: "Transparent & Secure",
    description: "No hidden charges, zero unexpected fees. Bank-grade 256-bit encryption safeguards your personal and financial details."
  }
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Choose Your Loan",
    description: "Select the loan category that matches your exact financial goals, whether personal, business, home, or education.",
    icon: "MousePointerClick"
  },
  {
    step: "02",
    title: "Submit Your Details",
    description: "Fill out the quick, secure lead generation form with your desired amount, contact details, and requirements.",
    icon: "FileText"
  },
  {
    step: "03",
    title: "Get Connected",
    description: "Our financial experts review your profile, match you with top lending partners, and present tailored loan proposals.",
    icon: "PhoneCall"
  },
  {
    step: "04",
    title: "Proceed With Your Loan",
    description: "Complete fast documentation verification and receive direct funds disbursed straight to your bank account.",
    icon: "BadgeDollarSign"
  }
];

export const STATS = [
  { value: "$420M+", label: "Total Loan Value Facilitated", icon: "TrendingUp" },
  { value: "48,500+", label: "Satisfied Borrowers & Businesses", icon: "Smile" },
  { value: "98.4%", label: "Lead Matching & Approval Rate", icon: "CheckCircle2" },
  { value: "45+", label: "Premier Banking & NBFC Partners", icon: "Landmark" }
];

export const TESTIMONIALS = [
  {
    name: "Marcus Vance",
    role: "Founder, Apex Logistics",
    loanType: "Business Loan ($250,000)",
    comment: "Andromeda streamlined our commercial expansion financing. Within 48 hours of submitting the lead, we had three competitive lender offers with lower interest rates than our local bank.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    name: "Sarah & David Chen",
    role: "First-Time Home Buyers",
    loanType: "Home Loan ($480,000)",
    comment: "Securing our mortgage through Andromeda was straightforward and stress-free. The loan advisor walked us through all paperwork and secured an 8.15% fixed rate.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    name: "Elena Rostova",
    role: "Graduate Scholar",
    loanType: "Educational Loan ($65,000)",
    comment: "The moratorium period and zero-collateral option for my Master's program made my overseas education possible. Truly grateful for Andromeda's prompt support!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
  }
];

export const FAQS = [
  {
    q: "How does Andromeda connect me with loan providers?",
    a: "Andromeda operates as an advanced financial matchmaker. When you submit your loan requirements, our algorithm and loan specialists analyze your credit profile and match you with the top-tier banks and NBFCs offering the lowest interest rates and highest approval probability."
  },
  {
    q: "Are there any upfront charges for borrowers to submit an inquiry?",
    a: "No, submitting a loan request and exploring options through Andromeda is 100% free for individual and business borrowers. We do not charge borrowers any upfront advisory fees."
  },
  {
    q: "How are the Per-Lead charges structured for financial partners?",
    a: "For verified lending partners and brokers purchasing qualified leads, Andromeda charges a clear, transparent per-lead rate based on the loan category complexity (ranging from $30 to $75 per validated lead). These rates are easily customizable in our system."
  },
  {
    q: "What is the typical turnaround time for loan disbursal?",
    a: "Gold loans and instant personal loans can disburse in as little as 30 minutes to 24 hours. Business, MSME, and Home loans generally take between 2 to 5 business days depending on property and legal valuation."
  },
  {
    q: "Can I apply if I have an average credit score?",
    a: "Yes! Andromeda works with a diverse network of institutional lenders. While prime rates require higher scores, we have specialized partner programs catering to credit scores starting from 600, as well as secured loan options like Gold and Loan Against Property."
  }
];
