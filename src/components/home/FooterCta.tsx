import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { finalCTA } from "@/content/homepage";

function FooterCTA() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="group relative overflow-hidden rounded-lg px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          {/* Base background */}
          <div className="absolute inset-0 bg-[#071B2D]" />

          {/* Soft blurred gradient circles */}
          <div className="absolute -left-24 -top-28 h-80 w-80 rounded-full bg-[#0F766E]/80 blur-3xl" />
          <div className="absolute left-1/4 top-10 h-196 w-196 rounded-full bg-[#12355B]/40 blur-3xl" />
          <div className="absolute -right-20 -top-20 h-196 w-196 rounded-full bg-[#38BDF8]/45 blur-3xl" />
          <div className="absolute -bottom-36 right-12 h-80 w-80 rounded-full bg-[#F1EAFE]/45 blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-[#ECFAF1]/20 blur-3xl" />

          {/* Soft overlay for readability */}
          <div className="absolute inset-0 bg-black/25" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-12 lg:items-end">
            {/* Content */}
            <div className="lg:col-span-8">
              <p className="mb-5 text-sm font-light uppercase tracking-[0.18em] text-white/55">
                Ready to build?
              </p>

              <h2 className="max-w-4xl text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                {finalCTA.headline}
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl lg:text-2xl">
                {finalCTA.subheadline}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row lg:col-span-4 lg:flex-col lg:items-end">
              <Link
                href={finalCTA.primaryCTA.href}
                className="group/link inline-flex items-center justify-between gap-6 rounded-full bg-white py-2 px-6 text-base font-medium text-[#071B2D] shadow-sm transition-all duration-300 hover:bg-theme-blue-900 hover:text-black sm:min-w-[240px]"
              >
                <span>{finalCTA.primaryCTA.label}</span>

                <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden">
                  {/* Arrow entering */}
                  <ArrowUpRight
                    className="text-theme-amber-900 absolute translate-y-5 -translate-x-5 text-app-secondary opacity-0 transition-all duration-500 ease-out group-hover/link:translate-x-0 group-hover/link:translate-y-0 group-hover/link:opacity-100"
                    size={28}
                  />

                  {/* Arrow leaving */}
                  <ArrowUpRight
                    className="absolute text-app-secondary transition-all duration-500 ease-out group-hover/link:translate-x-5 group-hover/link:-translate-y-5 group-hover/link:opacity-0"
                    size={28}
                  />
                </div>
              </Link>

              <Link
                href={finalCTA.secondaryCTA.href}
                className="group/link inline-flex items-center justify-between gap-6 rounded-full border border-white/25 bg-white/10 py-2 px-6 text-base font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-transparent hover:bg-theme-purple-900 hover:text-[#071B2D] sm:min-w-[240px]"
              >
                <span>{finalCTA.secondaryCTA.label}</span>

                <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden">
                  {/* Arrow entering */}
                  <ArrowUpRight
                    className="text-theme-amber-900 absolute translate-y-5 -translate-x-5 text-app-secondary opacity-0 transition-all duration-500 ease-out group-hover/link:translate-x-0 group-hover/link:translate-y-0 group-hover/link:opacity-100"
                    size={28}
                  />

                  {/* Arrow leaving */}
                  <ArrowUpRight
                    className="absolute text-app-secondary transition-all duration-500 ease-out group-hover/link:translate-x-5 group-hover/link:-translate-y-5 group-hover/link:opacity-0"
                    size={28}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterCTA;
