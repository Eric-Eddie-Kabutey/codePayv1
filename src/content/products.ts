export const seo = {
  title: 'CodePay Products — Remittance, Banking, Agent Network, and Compliance Infrastructure',
  description:
    'Explore CodePay\'s product modules: Remittance Engine, Banking Suite, Agent Network, AI & Compliance, and Access Channels. One platform, every African market.',
};

export const hero = {
  headline: 'Every fintech product. One platform.',
  subheadline:
    'CodePay is modular. Launch one product or all of them. Each module works independently or together.',
};

export const modules = [
  {
    id: 'remittance',
    slug: 'remittance',
    headline: 'Remittance Engine',
    tagline: 'Local and cross-border money movement at scale',
    body: 'CodePay\'s Remittance Engine handles the full payment lifecycle — from customer registration to transfer initiation, exchange rate application, payout rail selection, and settlement. Multi-currency wallets let users hold and send in local currency across borders.',
    features: [
      'Local and international transfers',
      'Multi-currency wallet management',
      'Dynamic exchange rate engine',
      'Blockchain-secured transaction ledger',
      'Payout rail management (mobile money, bank, cash)',
      'Cross-border corridor management',
      'One phone number, multiple currencies',
      'Real-time transfer status and notifications',
    ],
    imageUrl:
      'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187a6b5d483c5a0d6b1067_00__Homepage%20-%20Feat%201.png',
    imageAlt: 'Remittance engine dashboard',
    cta: { label: 'Learn more', href: '/products/remittance' },
  },
  {
    id: 'banking',
    slug: 'banking',
    headline: 'Banking Suite',
    tagline: 'Full banking infrastructure. No legacy constraints.',
    body: 'The Banking Suite gives you everything a digital bank needs. Create accounts, issue virtual and physical cards, handle payroll, originate loans, and process merchant payments. Layer it on top of existing core banking systems or build standalone.',
    features: [
      'Account creation and management',
      'Virtual Visa and Mastercard issuance',
      'Merchant QR payment acceptance',
      'Group savings (Osusu)',
      'Loan and salary advance origination',
      'Payroll management',
      'Utility bills, airtime, data, TV subscriptions',
      'Flight, train, bus, and event ticketing',
      'SOS emergency support',
    ],
    imageUrl:
      'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63248eebe3ce6c477fefd39c_01__Homepage%20-%20Feat%202.png',
    imageAlt: 'Banking suite features',
    cta: { label: 'Learn more', href: '/products/banking' },
  },
  {
    id: 'agents',
    slug: 'agents',
    headline: 'Agent Network',
    tagline: 'Distributed cash networks, built to scale.',
    body: 'Agent banking is the backbone of financial inclusion in Africa. CodePay gives you the infrastructure to recruit, manage, and settle with agents at any scale. Full hierarchy from super admin to sub-agent — all managed from one platform.',
    features: [
      'Master agent and sub-agent hierarchy',
      'Agent onboarding and KYC',
      'Commission structure and automated settlement',
      'Cash-in and cash-out operations',
      'Agent territory management',
      'Agent performance reporting',
      'Customer account registration at agent level',
      'Agent location discovery for end users',
    ],
    imageUrl:
      'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63248de10957f67b02f7882c_01__Homepage%20-%20Feat%203.png',
    imageAlt: 'Agent network management',
    cta: { label: 'Learn more', href: '/products/agents' },
  },
  {
    id: 'compliance',
    slug: 'compliance',
    headline: 'AI & Compliance',
    tagline: 'Compliance that doesn\'t slow you down.',
    body: 'Every African market has different compliance requirements. CodePay automates the KYC, AML, and fraud monitoring processes that typically delay fintech launches by months. Blockchain verification creates an immutable audit trail for every transaction.',
    features: [
      'Automated KYC document verification',
      'Liveness detection (anti-spoofing)',
      'Opix KYC integration',
      'AI-powered fraud monitoring',
      'AML transaction screening',
      'Blockchain transaction ledger',
      'Compliance reporting dashboards',
      'Risk scoring per transaction and user',
      'Audit log export for regulators',
    ],
    imageUrl:
      'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/632c18f1bd8a0d65a6c91685_00_Local%20Solutions.png',
    imageAlt: 'Compliance and KYC platform',
    cta: { label: 'Learn more', href: '/products/compliance' },
  },
  {
    id: 'channels',
    slug: 'channels',
    headline: 'Access Channels',
    tagline: 'Every channel. One backend.',
    body: 'Africa\'s financial users are not all on smartphones. CodePay gives you mobile app, web, USSD, and WhatsApp out of the box — all powered by the same backend. No separate builds. No duplicate logic. One platform.',
    features: [
      'Flutter mobile app (iOS and Android)',
      'Next.js web frontend and admin portal',
      'USSD service for feature phones',
      'WhatsApp banking and customer support bot',
      'AI customer support assistant',
      'REST API for custom channel builds',
      'Webhook support for real-time events',
    ],
    imageUrl:
      'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187a6b5d483c5a0d6b1067_00__Homepage%20-%20Feat%201.png',
    imageAlt: 'Multi-channel access',
    cta: { label: 'Learn more', href: '/products/channels' },
  },
  {
    id: 'payments',
    slug: 'payments',
    headline: 'Payment & Bills',
    tagline: 'Every payment. One integration.',
    body: 'Utilities, airtime, data, subscriptions, tickets, and merchant payments — all in one platform. Give your users the ability to pay for anything without leaving your product.',
    features: [
      'Utility bill payments (electricity, water)',
      'Airtime and data purchase',
      'TV subscriptions',
      'Flight, train, bus, and event tickets',
      'Merchant QR payments',
      'Merchant onboarding and management',
      'Payment request links',
      'Split payment support',
    ],
    imageUrl:
      'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63248eebe3ce6c477fefd39c_01__Homepage%20-%20Feat%202.png',
    imageAlt: 'Bill payments and merchant features',
    cta: { label: 'Learn more', href: '/products/payments' },
  },
];
