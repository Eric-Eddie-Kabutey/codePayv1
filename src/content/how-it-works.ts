export const seo = {
  title: 'How CodePay Works — From Onboarding to Launch in 8–12 Weeks',
  description:
    'CodePay gets you from scoping to live product in 8–12 weeks. See the 6-step launch process and the administrative hierarchy that powers multi-country operations.',
};

export const hero = {
  headline: 'From agreement to launch in 8–12 weeks.',
  subheadline:
    'CodePay is not a self-serve tool. It\'s a managed infrastructure platform. Our team configures it with you.',
};

export const steps = [
  {
    number: '01',
    title: 'Define Scope',
    body: 'We work with your team to map out what you\'re building, which countries you\'ll operate in, what products you need, and what integrations are required.',
    outcome: 'Signed scope of work and technical specification.',
  },
  {
    number: '02',
    title: 'Configure Platform',
    body: 'CodePay configures the platform for your specific market, products, currencies, compliance rules, and payout rail connections.',
    outcome: 'Platform instance configured and ready for brand customization.',
  },
  {
    number: '03',
    title: 'Customize Brand',
    body: 'Your brand is applied to the mobile app, web portal, USSD flows, and WhatsApp bot. Everything users see carries your brand identity.',
    outcome: 'White-labeled product ready for testing.',
  },
  {
    number: '04',
    title: 'Integrate Partners',
    body: 'Mobile money providers, banks, KYC vendors, and payment networks are connected to your instance.',
    outcome: 'All payment rails and data providers live.',
  },
  {
    number: '05',
    title: 'Test in Sandbox',
    body: 'Your development and QA teams test the full product in a live sandbox environment with real API responses and simulated transactions.',
    outcome: 'Signed off for production deployment.',
  },
  {
    number: '06',
    title: 'Launch and Scale',
    body: 'Go live with full deployment support. CodePay stays with you — monitoring, infrastructure management, and ongoing feature releases.',
    outcome: 'Live product, paying customers, supported operations.',
  },
];

export const adminHierarchy = {
  headline: 'Built for complex organizations.',
  subheadline:
    'CodePay supports a multi-tier permission model for enterprises, banks, and agent networks of any size.',
  roles: [
    {
      title: 'Super Admin',
      body: 'Full platform access. Configure products, manage countries, set global compliance rules, oversee all operations, and manage platform integrations.',
    },
    {
      title: 'Country Admin',
      body: 'Manage operations within an assigned country. Set local exchange rates, manage agents, oversee country-level compliance and reporting.',
    },
    {
      title: 'Master Agent',
      body: 'Manage a network of sub-agents within a territory. Handle float management, onboarding, settlement, and commission tracking for their network.',
    },
    {
      title: 'Sub-Agent',
      body: 'Serve customers directly. Register users, process cash-in and cash-out, and assist with account management at the point of contact.',
    },
    {
      title: 'User / Business',
      body: 'End customer or business account. Access platform features via mobile app, web portal, USSD, or WhatsApp depending on configuration.',
    },
  ],
};

export const cta = {
  headline: 'Ready to define your scope?',
  subheadline: 'Talk to our team. We\'ll map out what you\'re building and give you a realistic launch plan.',
  primaryCTA: { label: 'Book a Discovery Call', href: '/contact' },
  secondaryCTA: { label: 'Get Sandbox Access', href: '/developers' },
};
