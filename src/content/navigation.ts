export const navigation = {
  brand: { name: 'CodePay', href: '/' },

  // Updated CTAs to loosely match the MetaMap image style
  primaryCTA: { label: 'Book a Demo', href: '/contact' },
  secondaryCTA: { label: 'Stack Suite', href: '/developer' },

  links: [
    {
      id: 'platform',
      label: 'Platform',
      href: '/platform',
      dropdownColumns: [
        {
          heading: null,
          items: [
            { label: 'Platform', href: '/platform#platform', description: 'Explore how our platform packs many solutions in a single place' },
            { label: 'How it works', href: '/platform#how-it-works', description: 'Discover how CodePay works' },
          ]
        },
        {
          heading: null,
          items: [
            { label: 'Screen Review', href: '/platform#screen-review', description: 'Take a look at the screens and see how they look' },
            { label: 'Security and certifications', href: '/platform#security', description: 'Examine our certifications and stringent security measures' },
          ]
        },
        {
          heading: null,
          items: [
            { label: 'Integration', href: '/platform#integration', description: 'See how effortlessly you can integrate CodePay' },
            { label: 'Frequently Asked Questions', href: '/platform#faq', description: 'Find a comprehensive collection of resources designed to answer all your question' },
          ]
        }
      ],
    },
    {
      id: 'solutions',
      label: 'Solutions',
      href: '/solutions',
      dropdownColumns: [
        {
          heading: 'BY FEATURES',
          items: [
            { label: 'Remittance Engine', href: '/solutions#remittance', description: 'Local and cross-border money movement across 15+ African countries' },
            { label: 'Banking Suite', href: '/solutions#banking', description: 'Account, Card Management, Loan, Merchant Payments' },
            { label: 'Agent Network', href: '/solutions#agents', description: 'Distributed cash network management at any scale.' },
            { label: 'AI & Compliance', href: '/solutions#compliance', description: 'KYC, Liveness detection, fraud monitoring, and verification' },
            { label: 'Access Channels', href: '/solutions#channels', description: 'USSD, WhatsApp, Mobile App, Web and Rest API' },
          ]
        },
        {
          heading: 'BY USE CASE',
          items: [
            { label: 'For Startups', href: '/solutions#startups', description: 'Launch a fintech product in weeks, not years' },
            { label: 'For Banks', href: '/solutions#banks', description: 'Add digital channels without replacing core banking' },
            { label: 'For Remittance Companies', href: '/solutions#remittance', description: 'One platform for every corridor you serve' },
            { label: 'For Agent Networks', href: '/solutions#agent-networks', description: 'Scale your agent network without scaling your team' },
            { label: 'For Businesses', href: '/solutions#business', description: 'Payroll, bulk payments, and financial services for teams' },
          ]
        },
        {
          heading: 'BY REGION',
          items: [
            { label: 'Africa', href: '/solutions#africa', description: 'Easy to launch, scale or integrate - designed with Africa in mind for Africa.' },
          ]
        }
      ],
    },
    {
      id: 'about',
      label: 'About us',
      href: '/about',
      dropdownColumns: [
        {
          heading: null,
          items: [
            { label: 'Our Company', href: '/about#company', description: 'Learn more about CodePay history' },
            { label: 'Why CodePay', href: '/about#why', description: 'Find out why businesses around the world trust us' },
          ]
        },
        {
          heading: null,
          items: [
            { label: 'Careers', href: '/about#careers', description: 'Visit our career page and unfold your potential' },
            { label: 'Press', href: '/about#press', description: 'Browse our news feed and enrich your stories with our dedicated press kit' },
          ]
        }
      ],
    },
  ],
};