import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/shared/navbar';
import { seo, hero, story, mission, values, technology, presence, careersCTA } from '@/content/about';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
};

export default function AboutPage() {
  return (
    <div>
      <div className="bg-navy-900">
        <Navbar />
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-24">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            {hero.headline}
          </h1>
          <p className="mt-6 text-lg text-neutral-300 max-w-xl">{hero.subheadline}</p>
        </section>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 space-y-20">

        {/* Story */}
        <section className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-8">{story.headline}</h2>
          <div className="space-y-5">
            {story.paragraphs.map((p, i) => (
              <p key={i} className={`leading-relaxed ${i === 0 ? 'text-xl font-medium text-navy-900' : 'text-base text-neutral-500'}`}>
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="bg-navy-50 border border-navy-100 rounded-2xl p-10 sm:p-14 text-center">
          <div className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">{mission.headline}</div>
          <blockquote className="text-3xl sm:text-4xl font-bold text-navy-900 max-w-2xl mx-auto leading-tight">
            &ldquo;{mission.statement}&rdquo;
          </blockquote>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-10">Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="border border-neutral-200 rounded-xl p-7 space-y-3">
                <div className="w-8 h-1 bg-teal-500 rounded" />
                <h3 className="text-lg font-semibold text-navy-900">{v.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology */}
        <section className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-5">{technology.headline}</h2>
          <p className="text-base text-neutral-500 leading-relaxed">{technology.body}</p>
        </section>

        {/* Presence */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-8">{presence.headline}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {presence.items.map((item) => (
              <div key={item.label} className="border border-neutral-200 rounded-xl p-6 space-y-1">
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">{item.label}</div>
                <div className="text-sm font-medium text-navy-900">{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Careers CTA */}
        <section className="bg-navy-900 rounded-2xl px-8 sm:px-12 py-12 sm:py-14">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{careersCTA.headline}</h2>
            <p className="text-neutral-300 leading-relaxed mb-8">{careersCTA.body}</p>
            <Link
              href={careersCTA.cta.href}
              className="inline-block bg-white text-navy-900 text-base font-semibold px-7 py-3.5 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              {careersCTA.cta.label}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
