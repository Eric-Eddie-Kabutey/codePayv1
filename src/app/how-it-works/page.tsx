import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/shared/navbar';
import { seo, hero, steps, adminHierarchy, cta } from '@/content/how-it-works';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
};

export default function HowItWorksPage() {
  return (
    <div>
      <div className="bg-white border-b border-neutral-100">
        <Navbar />
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight max-w-3xl">
            {hero.headline}
          </h1>
          <p className="mt-5 text-lg text-neutral-500 max-w-xl">{hero.subheadline}</p>
        </section>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">

        {/* Launch Steps */}
        <section className="mb-20 sm:mb-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-12">
            Six steps from start to live.
          </h2>
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="flex flex-col sm:flex-row gap-6 sm:gap-10 py-8 border-b border-neutral-100 last:border-0"
              >
                {/* Number */}
                <div className="sm:w-20 flex-shrink-0">
                  <span className="text-4xl font-bold text-neutral-200">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold text-navy-900">{step.title}</h3>
                  <p className="text-base text-neutral-500 leading-relaxed">{step.body}</p>
                </div>

                {/* Outcome */}
                <div className="sm:w-72 flex-shrink-0">
                  <div className="bg-teal-50 border border-teal-100 rounded-lg px-4 py-3">
                    <div className="text-xs font-semibold text-teal-600 uppercase tracking-wide mb-1">Outcome</div>
                    <p className="text-sm text-neutral-600">{step.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Admin Hierarchy */}
        <section className="mb-20">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-3">{adminHierarchy.headline}</h2>
            <p className="text-base text-neutral-500">{adminHierarchy.subheadline}</p>
          </div>

          <div className="space-y-3">
            {adminHierarchy.roles.map((role, i) => (
              <div
                key={role.title}
                className="flex flex-col sm:flex-row gap-4 sm:gap-10 bg-neutral-50 border border-neutral-100 rounded-xl px-6 py-5"
                style={{ marginLeft: `${i * 24}px` }}
              >
                <div className="sm:w-40 flex-shrink-0">
                  <div className="flex items-center gap-2">
                    {i > 0 && <div className="w-3 h-px bg-navy-300" />}
                    <span className="text-sm font-semibold text-navy-900">{role.title}</span>
                  </div>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed">{role.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy-900 rounded-2xl px-8 sm:px-12 py-12 sm:py-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{cta.headline}</h2>
          <p className="text-neutral-300 max-w-md mx-auto mb-8">{cta.subheadline}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={cta.primaryCTA.href}
              className="inline-block bg-white text-navy-900 text-base font-semibold px-8 py-3.5 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              {cta.primaryCTA.label}
            </Link>
            <Link
              href={cta.secondaryCTA.href}
              className="inline-block border border-white/30 text-white text-base font-semibold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              {cta.secondaryCTA.label}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
