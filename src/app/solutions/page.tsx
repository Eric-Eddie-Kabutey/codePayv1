import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/shared/navbar';
import { seo, hero, solutions } from '@/content/solutions';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
};

export default function SolutionsPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-white border-b border-neutral-100">
        <Navbar />
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight max-w-3xl">
            {hero.headline}
          </h1>
          <p className="mt-5 text-lg text-neutral-500 max-w-xl">{hero.subheadline}</p>

          {/* Quick-jump audience pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {solutions.map((sol) => (
              <a
                key={sol.id}
                href={`#${sol.slug}`}
                className="text-xs font-medium border border-neutral-200 text-neutral-600 hover:border-navy-400 hover:text-navy-900 px-4 py-2 rounded-full transition-colors"
              >
                {sol.audience}
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Solution sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 space-y-0 divide-y divide-neutral-100">
        {solutions.map((sol) => (
          <section key={sol.id} id={sol.slug} className="py-14 sm:py-16 scroll-mt-8">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">

              {/* Left: label + headline */}
              <div className="lg:w-5/12 space-y-4">
                <div className="text-xs font-semibold text-teal-600 uppercase tracking-widest">
                  {sol.audience}
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 leading-tight">
                  {sol.headline}
                </h2>
                <p className="text-sm font-medium text-neutral-400 leading-relaxed border-l-2 border-teal-500 pl-4">
                  {sol.problem}
                </p>
              </div>

              {/* Right: body + features + CTA */}
              <div className="lg:w-7/12 space-y-6">
                <p className="text-base text-neutral-600 leading-relaxed">{sol.body}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {sol.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <svg className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-1">
                  {sol.products.map((p) => (
                    <span key={p} className="text-xs bg-navy-50 text-navy-700 border border-navy-100 px-3 py-1.5 rounded-full font-medium">
                      {p}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  <Link
                    href={sol.primaryCTA.href}
                    className="inline-block bg-navy-900 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-navy-700 transition-colors"
                  >
                    {sol.primaryCTA.label}
                  </Link>
                  {sol.secondaryCTA && (
                    <Link
                      href={sol.secondaryCTA.href}
                      className="inline-block border border-navy-300 text-navy-900 text-sm font-semibold px-6 py-3 rounded-lg hover:bg-navy-50 transition-colors"
                    >
                      {sol.secondaryCTA.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* CTA */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Not sure which solution fits?
          </h2>
          <p className="text-neutral-300 max-w-lg mx-auto mb-8">
            Talk to our team. We&apos;ll map out the right configuration for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-navy-900 text-base font-semibold px-8 py-3.5 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}
