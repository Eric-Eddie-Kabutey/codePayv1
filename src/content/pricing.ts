export const seo = {
  title: 'CodePay Pricing — Starter, Growth, and Enterprise Plans',
  description:
    'CodePay offers flexible pricing for startups, growing fintechs, and enterprise institutions. Contact us for a custom quote.',
};

export const hero = {
  headline: 'Pricing built for infrastructure.',
  subheadline:
    'CodePay is a managed platform, not a SaaS subscription. Pricing is scoped to your products, markets, and volume.',
};

export const tiers = [
  {
    id: 'starter',
    name: 'Starter',
    audience: 'Startups and early-stage fintechs launching their first product.',
    price: 'Custom pricing',
    features: [
      'Single country deployment',
      'Up to 2 product modules',
      'Mobile app and web portal',
      'API access and sandbox',
      'Standard KYC and compliance',
      'Email support',
    ],
    cta: { label: 'Book a Discovery Call', href: '/contact' },
    highlighted: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    audience: 'Growing fintechs and remittance companies operating across multiple markets.',
    price: 'Custom pricing',
    features: [
      'Up to 5 country deployments',
      'Up to 4 product modules',
      'USSD and WhatsApp channels',
      'Agent network module',
      'Advanced KYC with liveness detection',
      'AI fraud monitoring',
      'Priority support',
    ],
    cta: { label: 'Talk to Sales', href: '/contact' },
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    audience: 'Banks, large remittance operators, and institutions launching across 5+ African markets.',
    price: 'Custom enterprise pricing',
    features: [
      'Unlimited country deployments',
      'All product modules',
      'All access channels',
      'Custom compliance configuration',
      'Dedicated infrastructure',
      'SLA guarantees',
      'Dedicated account manager',
      'On-site onboarding support',
    ],
    cta: { label: 'Contact Enterprise Sales', href: '/contact' },
    highlighted: false,
  },
];

export const faqs = [
  {
    question: 'Is CodePay a monthly subscription?',
    answer:
      'No. CodePay is priced based on your deployment scope, markets, and transaction volume. We build a custom commercial agreement for each client.',
  },
  {
    question: 'Are there setup fees?',
    answer:
      'Initial configuration and onboarding is included in the commercial agreement. There are no hidden fees.',
  },
  {
    question: 'How is transaction pricing structured?',
    answer:
      'Transaction fees are negotiated as part of your commercial agreement based on expected volume.',
  },
  {
    question: 'Can I start with one module and expand later?',
    answer:
      'Yes. CodePay is modular. Start with remittance and add banking or agent network as you grow.',
  },
];
