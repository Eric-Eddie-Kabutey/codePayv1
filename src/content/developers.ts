export const seo = {
  title: 'CodePay Developer Hub — REST APIs, SDKs, Sandbox, and Integration Guides',
  description:
    'CodePay is built in .NET with REST APIs, SDKs for Next.js and Flutter, a full sandbox environment, and webhooks. Get sandbox access and start building today.',
};

export const hero = {
  headline: 'Built in .NET. Ready for Next.js and Flutter.',
  subheadline:
    'CodePay\'s REST APIs, SDKs, and sandbox environment give your development team everything they need to integrate and go live.',
  primaryCTA: { label: 'Get Sandbox Access', href: '/contact' },
  secondaryCTA: { label: 'View API Reference', href: '#api' },
};

export const techStack = [
  {
    title: '.NET Backend',
    body: 'Enterprise-grade REST API backend. OAuth 2.0 auth, webhook support, role-based access, and blockchain integration.',
  },
  {
    title: 'Next.js Frontend',
    body: 'Production-ready admin dashboard and web portal. White-labeled and fully customizable.',
  },
  {
    title: 'Flutter Mobile',
    body: 'Cross-platform iOS and Android app. White-labeled with full feature parity with web platform.',
  },
];

export const apiCategories = [
  {
    title: 'Authentication',
    endpoints: ['OAuth 2.0', 'API key auth', 'Token refresh', 'Session management'],
  },
  {
    title: 'Payments',
    endpoints: ['Initiate transfers', 'Exchange rates', 'Payout status', 'Refunds'],
  },
  {
    title: 'Users',
    endpoints: ['Create accounts', 'Manage users', 'KYC submission', 'User verification'],
  },
  {
    title: 'Agents',
    endpoints: ['Create agents', 'Manage hierarchy', 'Track float', 'Commission data'],
  },
  {
    title: 'Compliance',
    endpoints: ['KYC status', 'AML screening', 'Fraud flags', 'Audit logs'],
  },
  {
    title: 'Webhooks',
    endpoints: ['Transfer events', 'KYC updates', 'Agent events', 'System alerts'],
  },
];

export const codeExample = {
  title: 'Initiate a transfer',
  request: `POST /api/v1/transfers

{
  "sender_id": "usr_01J...",
  "recipient_phone": "+234XXXXXXXXX",
  "amount": 50000,
  "currency": "NGN",
  "destination_currency": "KES",
  "payout_method": "mobile_money"
}`,
  response: `{
  "transfer_id": "txn_01J...",
  "status": "processing",
  "exchange_rate": 0.285,
  "fee": 250,
  "estimated_arrival": "instant"
}`,
};

export const sdks = [
  {
    title: 'Node.js SDK',
    install: 'npm install @codepay/sdk',
    features: ['Full API coverage', 'TypeScript support', 'Built-in retries', 'Webhook helpers'],
    link: { label: 'View on npm', href: '#' },
  },
  {
    title: 'Flutter SDK',
    install: 'pub add codepay_sdk',
    features: ['Full API coverage', 'Dart-native', 'Platform widgets', 'Biometric auth'],
    link: { label: 'View on pub.dev', href: '#' },
  },
];

export const quickStart = [
  'Create a sandbox account at developers.codepay.io',
  'Generate API keys in your dashboard',
  'Install the SDK or use the REST API directly',
  'Run your first transfer in the sandbox',
  'Request production access when ready',
];

export const sandbox = {
  headline: 'Test everything before you go live.',
  features: [
    'Real API endpoints and responses',
    'Simulated mobile money networks',
    'KYC test flows with dummy documents',
    'Webhook delivery to your test endpoint',
    'Postman collection with every endpoint',
    'No rate limits in sandbox',
    'Separate sandbox API keys',
  ],
  cta: { label: 'Get Sandbox Access', href: '/contact' },
};

export const security = [
  { title: 'OAuth 2.0', body: 'Industry-standard token authentication. API key rotation.' },
  { title: 'Webhook Signatures', body: 'Every webhook is HMAC-signed. Verify delivery with your secret key.' },
  { title: 'End-to-End Encryption', body: 'TLS 1.3 for all data in transit. AES-256 at rest.' },
  { title: 'Role-Based Access Control', body: 'Granular permissions per API key. Restrict by endpoint and operation.' },
  { title: 'Rate Limiting', body: 'Configurable limits per key and endpoint. Burst handling included.' },
  { title: 'Audit Logs', body: 'Every API call logged. Exportable for compliance and incident review.' },
];

export const resources = [
  { title: 'API Reference', description: 'Full endpoint documentation', href: '#' },
  { title: 'Postman Collection', description: 'Ready-to-import API workspace', href: '#' },
  { title: 'SDK Documentation', description: 'Node.js and Flutter guides', href: '#' },
  { title: 'Webhook Reference', description: 'Events, payloads, signatures', href: '#' },
  { title: 'Changelog', description: 'API version history', href: '#' },
  { title: 'Status Page', description: 'Real-time platform status', href: '#' },
];

export const guides = [
  'Remittance Integration Guide',
  'KYC and Onboarding Integration',
  'Agent Network Setup',
  'Webhook Configuration',
  'OAuth 2.0 Authentication',
  'Mobile Money Payout Integration',
  'Error Handling and Retries',
  'Going Live Checklist',
];
