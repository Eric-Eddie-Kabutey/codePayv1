"use client"
import React, { useState } from 'react';
import Navbar from '@/components/shared/navbar';
import Link from 'next/link';
import { hero, faqs } from '@/content/faq';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-neutral-100">
      <button
        className="w-full flex items-center justify-between text-left py-5 gap-6"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base font-medium text-navy-900">{question}</span>
        <svg
          className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <p className="pb-5 text-sm text-neutral-500 leading-relaxed max-w-2xl">{answer}</p>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div>
      <div className="bg-white border-b border-neutral-100">
        <Navbar />
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy-900">{hero.headline}</h1>
          <p className="mt-4 text-lg text-neutral-500 max-w-lg">{hero.subheadline}</p>
        </section>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="space-y-0">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-navy-50 border border-navy-100 rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-xl font-bold text-navy-900">Still have questions?</h2>
          <p className="text-sm text-neutral-500">Talk to our team — we&apos;ll give you a straight answer.</p>
          <Link href="/contact" className="inline-block bg-navy-900 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-navy-700 transition-colors">
            Contact Us
          </Link>
        </div>
      </main>
    </div>
  );
}
