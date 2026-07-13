export const navigation = {
  brand: { name: 'CodePay', href: '/' },

  primaryCTA: { label: 'Book a Demo', href: '/contact' },
  secondaryCTA: { label: 'Stack Suite', href: '/developers' },

  links: [
    {
      id: 'products',
      label: 'Products',
      href: '/products',
      dropdown: [
        { label: 'Remittance Engine', href: '/products#remittance', description: 'Local and cross-border money movement across 15+ African countries' },
        { label: 'Banking Suite', href: '/products#banking', description: 'Accounts, cards, wallets, loans, and merchant payments' },
        { label: 'Agent Network', href: '/products#agents', description: 'Distributed cash network management at any scale' },
        { label: 'AI & Compliance', href: '/products#compliance', description: 'KYC, liveness detection, fraud monitoring, and verification' },
        { label: 'Access Channels', href: '/products#channels', description: 'USSD, WhatsApp, mobile app, web, and REST API' },
      ],
    },
    {
      id: 'solutions',
      label: 'Solutions',
      href: '/solutions',
      dropdown: [
        { label: 'For Startups', href: '/solutions#startups', description: 'Launch a fintech product in weeks, not years' },
        { label: 'For Banks', href: '/solutions#banks', description: 'Add digital channels without replacing core banking' },
        { label: 'For Remittance Companies', href: '/solutions#remittance', description: 'One platform for every corridor you serve' },
        { label: 'For Agent Networks', href: '/solutions#agents', description: 'Scale your agent network without scaling your team' },
        { label: 'For Businesses', href: '/solutions#business', description: 'Payroll, payments, and financial services for teams' },
      ],
    },
    // {
    //   id: 'how-it-works',
    //   label: 'How It Works',
    //   href: '/how-it-works',
    // },
    {
      id: 'developers',
      label: 'Developers',
      href: '/developers',
    },
    {
      id: 'pricing',
      label: 'Pricing',
      href: '/pricing',
    },
    {
      id: 'company',
      label: 'Company',
      href: '/about',
      dropdown: [
        { label: 'About', href: '/about', description: 'Our story, mission, and values' },
        { label: 'Blog', href: '/blog', description: 'Insights on fintech infrastructure in Africa' },
        { label: 'Careers', href: '/careers', description: 'Build Africa\'s financial infrastructure' },
        { label: 'Contact', href: '/contact', description: 'Talk to sales, support, or our team' },
      ],
    },
  ],
};
