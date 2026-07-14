import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { hero } from "@/content/homepage";

function HomeHero() {
  return (
    <section className="relative w-full pt-20 pb-28 lg:pt-32 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

        {/* Text Area */}
        <div className="max-w-4xl space-y-7 z-10">
          {/* Kept original font sizes & weight */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
            {hero.headline}
          </h1>
          {/* Kept original font sizes */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {hero.subheadline}
          </p>

          {/* Buttons - Kept original button UI, centered */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
            <Link
              href={hero.primaryCTA.href}
              className="group/link inline-flex items-center justify-between gap-6 rounded-xl border border-white/25 bg-theme-blue-900 py-2 px-6 text-base font-medium text-black backdrop-blur-md transition-all duration-300 hover:border-transparent hover:bg-theme-purple-900 hover:text-[#071B2D] sm:min-w-[240px]"
            >
              <span>{hero.primaryCTA.label}</span>

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
              href={hero.secondaryCTA.href}
              className="group/link inline-flex items-center justify-between gap-6 rounded-xl border border-white/25 bg-theme-green-900 py-2 px-6 text-base font-medium text-black backdrop-blur-md transition-all duration-300 hover:border-transparent hover:bg-theme-purple-900 hover:text-[#071B2D] sm:min-w-[240px]"
            >
              <span>{hero.secondaryCTA.label}</span>

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

        {/* Feature Navigation Links from the Image UI */}
        <div className="hidden w-full mt-24 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left z-10">
          <div className="bg-white/20 rounded-xl-2xl p-6 shadow-sm transition-colors cursor-default">
            <h3 className="font-bold text-lg mb-1.5 text-white">FROG Messaging</h3>
            <p className="text-sm text-white/80 leading-snug">
              Powerful SMS, USSD, Voice & IVR Messaging
            </p>
          </div>
          <div className="rounded-xl-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer">
            <h3 className="font-bold text-lg mb-1.5 text-white">Redde Payments</h3>
            <p className="text-sm text-white/80 leading-snug">
              Secure Online Payments & Collections
            </p>
          </div>
          <div className="rounded-xl-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer">
            <h3 className="font-bold text-lg mb-1.5 text-white">School Management<br className="hidden lg:block" /> Platform</h3>
            <p className="text-sm text-white/80 leading-snug">
              Efficient School Management System
            </p>
          </div>
          <div className="rounded-xl-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer">
            <h3 className="font-bold text-lg mb-1.5 text-white">GH Topups</h3>
            <p className="text-sm text-white/80 leading-snug">
              Buy WASSCE, BECE AND NOVDEC Vouchers
            </p>
          </div>
        </div>

        {/* Replaced standard Image with the Video element */}
        <div className="w-full  mx-auto mt-16 rounded-xl-t-2xl overflow-hidden shadow-2xl translate-y-4 lg:translate-y-8 border-t border-x border-white/20">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          >
            <source src="/assets/videos/new-frog_txzprq.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>
    </section>
  );
}

export default HomeHero;