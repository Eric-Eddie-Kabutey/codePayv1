export const seo = {
  title: 'CodePay Solutions — For Banks, Fintechs, Remittance Companies, and Agents',
  description:
    'CodePay provides fintech infrastructure for banks, startups, remittance companies, agent networks, and businesses launching in Africa.',
};

export const hero = {
  headline: 'Built for your business model.',
  subheadline:
    'Whether you\'re a bank, a startup, or a remittance company, CodePay gives you the infrastructure that fits your operation.',
};

export const solutions = [
  {
    id: 'startups',
    slug: 'startups',
    audience: 'For Startups',
    headline: 'Launch a fintech product in weeks, not years.',
    problem:
      'Building fintech infrastructure from scratch takes 18–24 months. Most startups can\'t afford it. CodePay removes the infrastructure problem entirely so you can focus on product and growth.',
    body: 'Founders and product teams building their first remittance, wallet, or banking product in Africa get a full-stack infrastructure platform with white-label branding, API access, and compliance built in.',
    features: [
      'Full-stack fintech infrastructure out of the box',
      'White-label branding from day one',
      'API-first architecture for fast integration',
      'Sandbox environment for development',
      'Compliance and KYC built in',
      'Multi-country coverage without multi-country builds',
    ],
    products: ['Remittance Engine', 'Banking Suite', 'AI & Compliance', 'Access Channels'],
    primaryCTA: { label: 'Book a Demo', href: '/contact' },
    secondaryCTA: { label: 'Get Sandbox Access', href: '/developers' },
  },
  {
    id: 'banks',
    slug: 'banks',
    audience: 'For Banks',
    headline: 'Add digital channels without replacing your core system.',
    problem:
      'Core banking replacements take years and cost millions. Most banks need a faster path to digital — one that works alongside existing infrastructure.',
    body: 'Banks and financial institutions launching digital banking, mobile money, or agent banking products get an API layer that sits on top of existing core banking, without disrupting live operations.',
    features: [
      'API layer on top of existing core banking',
      'Digital account and card issuance',
      'Agent banking network management',
      'USSD and WhatsApp channel deployment',
      'Regulatory compliance tools built in',
      'Multi-country administration for regional banks',
    ],
    products: ['Banking Suite', 'Agent Network', 'AI & Compliance', 'Access Channels'],
    primaryCTA: { label: 'Talk to Sales', href: '/contact' },
    secondaryCTA: null,
  },
  {
    id: 'remittance',
    slug: 'remittance',
    audience: 'For Remittance Companies',
    headline: 'One platform for every corridor you serve.',
    problem:
      'Each corridor has different payout rails, currencies, compliance requirements, and exchange rate providers. Managing them separately creates operational complexity and delays.',
    body: 'Remittance operators handling cross-border transfers between African markets — or between diaspora populations and African recipients — get a single integration that covers every corridor.',
    features: [
      'Single integration for multiple corridors',
      'Dynamic exchange rate management',
      'Mobile money, bank, and cash payout rails',
      'Multi-currency wallet infrastructure',
      'Automated AML and KYC compliance',
      'Blockchain-verified transaction records',
    ],
    products: ['Remittance Engine', 'AI & Compliance', 'Access Channels'],
    primaryCTA: { label: 'Book a Demo', href: '/contact' },
    secondaryCTA: null,
  },
  {
    id: 'agents',
    slug: 'agents',
    audience: 'For Agent Networks',
    headline: 'Scale your agent network without scaling your team.',
    problem:
      'Managing hundreds or thousands of agents manually — onboarding, float management, commissions, compliance — does not scale without the right infrastructure.',
    body: 'Agent banking operators, mobile money companies, and super-agent businesses get full agent hierarchy management, automated commissions, and real-time float monitoring from a single admin interface.',
    features: [
      'Full agent hierarchy management (super admin → sub-agent)',
      'Automated commission calculation and settlement',
      'Agent onboarding with built-in KYC',
      'Real-time float and liquidity monitoring',
      'Cash-in and cash-out transaction tracking',
      'Agent performance analytics',
    ],
    products: ['Agent Network', 'AI & Compliance', 'Access Channels'],
    primaryCTA: { label: 'Talk to Sales', href: '/contact' },
    secondaryCTA: null,
  },
  {
    id: 'business',
    slug: 'business',
    audience: 'For Businesses',
    headline: 'Financial services for your employees and customers.',
    problem:
      'Businesses managing payroll, expense control, and payment collection across Africa deal with fragmented tools, manual processes, and unreliable transfers.',
    body: 'Businesses, employers, and merchant networks needing payroll management, expense control, payment collection, and employee financial services get everything on one platform.',
    features: [
      'Payroll management and salary disbursement',
      'Salary advance for employees',
      'Merchant QR payment collection',
      'Group savings (Osusu) programs',
      'Utility and bill payments',
      'Business account management',
    ],
    products: ['Banking Suite', 'Payment & Bills', 'Access Channels'],
    primaryCTA: { label: 'Contact Us', href: '/contact' },
    secondaryCTA: null,
  },
];
