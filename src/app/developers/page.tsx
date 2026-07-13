import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/shared/navbar';
import {
  seo, hero, techStack, apiCategories, codeExample,
  sdks, quickStart, sandbox, security, resources, guides
} from '@/content/developers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
};

export default function DevelopersPage() {
  return (
    <div>
      <div className="bg-navy-900">
        <Navbar />
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            {hero.headline}
          </h1>
          <p className="mt-5 text-lg text-neutral-300 max-w-xl">{hero.subheadline}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href={hero.primaryCTA.href} className="inline-block text-center bg-white text-navy-900 text-base font-semibold px-7 py-3.5 rounded-lg hover:bg-neutral-100 transition-colors">
              {hero.primaryCTA.label}
            </Link>
            <Link href={hero.secondaryCTA.href} className="inline-block text-center border border-white/30 text-white text-base font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors">
              {hero.secondaryCTA.label}
            </Link>
          </div>
        </section>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 space-y-20">

        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-8">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {techStack.map((item) => (
              <div key={item.title} className="border border-neutral-200 rounded-xl p-6 space-y-3">
                <h3 className="text-base font-semibold text-navy-900">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* API Capabilities */}
        <section id="api">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-3">API Capabilities</h2>
          <p className="text-base text-neutral-500 mb-8">A REST API for every operation.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {apiCategories.map((cat) => (
              <div key={cat.title} className="bg-neutral-50 rounded-xl p-4 border border-neutral-100">
                <div className="text-sm font-semibold text-navy-900 mb-3">{cat.title}</div>
                <ul className="space-y-1.5">
                  {cat.endpoints.map((ep) => (
                    <li key={ep} className="text-xs text-neutral-500">{ep}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Code Example */}
          <div className="bg-navy-900 rounded-xl overflow-hidden border border-navy-700">
            <div className="px-5 py-3 border-b border-navy-700 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
              <div className="w-3 h-3 rounded-full bg-green-400/60" />
              <span className="ml-2 text-xs text-neutral-400">{codeExample.title}</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-navy-700">
              <div className="p-6">
                <div className="text-xs text-neutral-500 mb-3 font-mono">Request</div>
                <pre className="text-xs text-neutral-300 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
                  {codeExample.request}
                </pre>
              </div>
              <div className="p-6">
                <div className="text-xs text-neutral-500 mb-3 font-mono">Response</div>
                <pre className="text-xs text-neutral-300 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
                  {codeExample.response}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* SDKs */}
        <section id="sdks">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-8">SDKs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {sdks.map((sdk) => (
              <div key={sdk.title} className="border border-neutral-200 rounded-xl p-7 space-y-4">
                <h3 className="text-lg font-semibold text-navy-900">{sdk.title}</h3>
                <div className="bg-neutral-900 rounded-lg px-4 py-2.5 font-mono text-sm text-neutral-300">
                  {sdk.install}
                </div>
                <ul className="space-y-1.5">
                  {sdk.features.map((f) => (
                    <li key={f} className="text-sm text-neutral-500 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={sdk.link.href} className="inline-flex items-center gap-1 text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors">
                  {sdk.link.label}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Start */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-8">Quick Start</h2>
          <div className="space-y-3">
            {quickStart.map((step, i) => (
              <div key={i} className="flex items-start gap-5 py-3">
                <div className="w-7 h-7 rounded-full bg-navy-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="text-base text-neutral-600">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href={sandbox.cta.href} className="inline-block bg-teal-500 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors">
              {sandbox.cta.label}
            </Link>
          </div>
        </section>

        {/* Sandbox */}
        <section id="sandbox" className="bg-navy-50 border border-navy-100 rounded-2xl p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-navy-900 mb-3">{sandbox.headline}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-6">
            {sandbox.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-600">
                <svg className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
        </section>

        {/* Security */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-8">Security</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {security.map((item) => (
              <div key={item.title} className="border border-neutral-200 rounded-xl p-6 space-y-2">
                <h3 className="text-sm font-semibold text-navy-900">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Integration Guides */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-8">Integration Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {guides.map((g) => (
              <a
                key={g}
                href="#"
                className="flex items-center justify-between border border-neutral-200 rounded-lg px-5 py-4 hover:border-navy-300 hover:bg-neutral-50 transition-colors group"
              >
                <span className="text-sm font-medium text-neutral-700 group-hover:text-navy-900">{g}</span>
                <svg className="w-4 h-4 text-neutral-400 group-hover:text-navy-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-8">Developer Resources</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {resources.map((r) => (
              <a key={r.title} href={r.href} className="border border-neutral-200 rounded-xl p-5 hover:border-navy-300 hover:bg-neutral-50 transition-colors group space-y-1.5">
                <div className="text-sm font-semibold text-navy-900">{r.title}</div>
                <div className="text-xs text-neutral-400">{r.description}</div>
              </a>
            ))}
          </div>
          <p className="mt-8 text-sm text-neutral-500">
            Developer support: <a href="mailto:developer@codepay.io" className="text-navy-600 hover:underline">developer@codepay.io</a>
          </p>
        </section>
      </main>
    </div>
  );
}
