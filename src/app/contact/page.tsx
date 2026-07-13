"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/shared/navbar';

const contactOptions = [
  { title: 'Book a Demo', body: 'See CodePay in action. 30-minute live walkthrough.', email: 'demo@codepay.io', href: 'mailto:demo@codepay.io' },
  { title: 'Talk to Sales', body: 'Discuss pricing, commercial terms, and deployment.', email: 'sales@codepay.io', href: 'mailto:sales@codepay.io' },
  { title: 'Developer Support', body: 'API questions, sandbox access, integration help.', email: 'developer@codepay.io', href: 'mailto:developer@codepay.io' },
  { title: 'Press & Partnerships', body: 'Media inquiries and partnership discussions.', email: 'partnerships@codepay.io', href: 'mailto:partnerships@codepay.io' },
];

const roleOptions = ['CEO / Founder', 'CTO', 'Product Manager', 'Business Development', 'Developer', 'Other'];
const useCaseOptions = ['Remittance', 'Digital Banking', 'Agent Network', 'KYC / Compliance', 'Payments', 'Other'];
const contactMethodOptions = ['Email', 'WhatsApp', 'Phone call'];

const offices = [
  { city: 'Nairobi, Kenya', label: 'Headquarters', detail: 'Africa-first fintech infrastructure' },
  { city: 'Lagos, Nigeria', label: 'West Africa', detail: 'West African operations' },
  { city: 'Johannesburg, South Africa', label: 'Southern Africa', detail: 'Southern African hub' },
  { city: 'Kigali, Rwanda', label: 'East Africa', detail: 'East African growth center' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <div className="bg-white border-b border-neutral-100">
        <Navbar />
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy-900">Talk to the team.</h1>
        </section>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">

        {/* Contact options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {contactOptions.map((opt) => (
            <div key={opt.title} className="border border-neutral-200 rounded-xl p-6 space-y-3 hover:border-navy-300 transition-colors">
              <h3 className="text-base font-semibold text-navy-900">{opt.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{opt.body}</p>
              <a href={opt.href} className="inline-flex items-center gap-1 text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors">
                {opt.email}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Form */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-8">Send a message</h2>

            {submitted ? (
              <div className="bg-teal-50 border border-teal-100 rounded-xl p-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-navy-900">Message sent.</h3>
                <p className="text-sm text-neutral-500">We respond within 1 business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Name *</label>
                    <input required type="text" className="w-full border border-neutral-200 rounded-lg px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-navy-400 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Email *</label>
                    <input required type="email" className="w-full border border-neutral-200 rounded-lg px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-navy-400 transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Company *</label>
                    <input required type="text" className="w-full border border-neutral-200 rounded-lg px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-navy-400 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Role *</label>
                    <select required className="w-full border border-neutral-200 rounded-lg px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-navy-400 transition-colors bg-white">
                      <option value="">Select role</option>
                      {roleOptions.map((r) => <option key={r}>{r}</option>)}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Country *</label>
                    <input required type="text" className="w-full border border-neutral-200 rounded-lg px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-navy-400 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Use Case *</label>
                    <select required className="w-full border border-neutral-200 rounded-lg px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-navy-400 transition-colors bg-white">
                      <option value="">Select use case</option>
                      {useCaseOptions.map((u) => <option key={u}>{u}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">How can we help? *</label>
                  <textarea required rows={4} className="w-full border border-neutral-200 rounded-lg px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-navy-400 transition-colors resize-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">Preferred contact method</label>
                  <div className="flex flex-wrap gap-3">
                    {contactMethodOptions.map((m) => (
                      <label key={m} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="contact_method" value={m} className="accent-navy-600" />
                        <span className="text-sm text-neutral-600">{m}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <button type="submit" className="w-full bg-navy-900 text-white text-base font-semibold px-6 py-3.5 rounded-lg hover:bg-navy-700 transition-colors">
                  Send Message
                </button>
                <p className="text-xs text-neutral-400 text-center">
                  We respond within 1 business day. Enterprise inquiries receive a response within 4 hours.
                </p>
              </form>
            )}
          </section>

          {/* Offices */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-8">Office locations</h2>
            <div className="space-y-4">
              {offices.map((o) => (
                <div key={o.city} className="flex items-start gap-4 p-5 border border-neutral-200 rounded-xl">
                  <div className="w-9 h-9 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy-900">{o.city}</div>
                    <div className="text-xs text-teal-600 font-medium mt-0.5">{o.label}</div>
                    <div className="text-xs text-neutral-400 mt-0.5">{o.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
