import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/shared/navbar';
import { seo, hero, tiers, faqs } from '@/content/pricing';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
};

export default function PricingPage() {
  return (
    <div>
      <div className="bg-white border-b border-neutral-100">
        <Navbar />
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-16 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight">
            {hero.headline}
          </h1>
          <p className="mt-5 text-lg text-neutral-500 max-w-lg mx-auto">{hero.subheadline}</p>
        </section>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl border p-8 space-y-6 flex flex-col ${
                tier.highlighted
                  ? 'bg-navy-900 border-navy-900 shadow-xl shadow-navy-900/20'
                  : 'bg-white border-neutral-200'
              }`}
            >
              <div className="space-y-2">
                <div className={`text-xs font-semibold uppercase tracking-widest ${tier.highlighted ? 'text-teal-400' : 'text-teal-600'}`}>
                  {tier.name}
                </div>
                <div className={`text-2xl font-bold ${tier.highlighted ? 'text-white' : 'text-navy-900'}`}>
                  {tier.price}
                </div>
                <p className={`text-sm leading-relaxed ${tier.highlighted ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  {tier.audience}
                </p>
              </div>

              <ul className="space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${tier.highlighted ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.highlighted ? 'text-teal-400' : 'text-teal-500'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={tier.cta.href}
                className={`block w-full text-center text-sm font-semibold px-6 py-3.5 rounded-lg transition-colors ${
                  tier.highlighted
                    ? 'bg-white text-navy-900 hover:bg-neutral-100'
                    : 'bg-navy-900 text-white hover:bg-navy-700'
                }`}
              >
                {tier.cta.label}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-8">Pricing questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-neutral-100 pb-6">
                <h3 className="text-base font-semibold text-navy-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
