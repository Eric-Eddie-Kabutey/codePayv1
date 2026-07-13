import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/shared/navbar';
import { seo, hero, modules } from '@/content/products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
};

export default function ProductsPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-navy-900">
        <Navbar />
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            {hero.headline}
          </h1>
          <p className="mt-5 text-lg text-neutral-300 max-w-xl">{hero.subheadline}</p>

          {/* Quick-jump module pills */}
          <div className="mt-10 flex flex-wrap gap-2">
            {modules.map((mod) => (
              <a
                key={mod.id}
                href={`#${mod.slug}`}
                className="text-xs font-medium border border-white/20 text-white/70 hover:text-white hover:border-white/50 px-4 py-2 rounded-full transition-colors"
              >
                {mod.headline}
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Module sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 space-y-24">
        {modules.map((mod, i) => (
          <section
            key={mod.id}
            id={mod.slug}
            className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-start scroll-mt-8`}
          >
            {/* Text */}
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block text-xs font-semibold text-teal-600 bg-teal-50 border border-teal-100 px-3 py-1 rounded-full tracking-wide uppercase">
                {mod.headline}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
                {mod.tagline}
              </h2>
              <p className="text-base text-neutral-500 leading-relaxed">{mod.body}</p>
              <ul className="space-y-2.5">
                {mod.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-neutral-700">
                    <svg className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block mt-2 bg-navy-900 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-navy-700 transition-colors"
              >
                Book a Demo
              </Link>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 bg-neutral-50 rounded-2xl border border-neutral-200 p-8 flex items-center justify-center min-h-[280px]">
              <img
                src={mod.imageUrl}
                alt={mod.imageAlt}
                className="w-full h-auto max-h-[320px] object-contain"
                loading="lazy"
              />
            </div>
          </section>
        ))}
      </main>

      {/* CTA */}
      <section className="bg-navy-50 border-t border-neutral-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">Ready to launch?</h2>
          <p className="text-neutral-500 max-w-lg mx-auto mb-8">
            Book a demo to see any product module in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-navy-900 text-white text-base font-semibold px-8 py-3.5 rounded-lg hover:bg-navy-700 transition-colors">
              Book a Demo
            </Link>
            <Link href="/developers" className="inline-block border border-navy-300 text-navy-900 text-base font-semibold px-8 py-3.5 rounded-lg hover:bg-navy-50 transition-colors">
              Get Sandbox Access
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
