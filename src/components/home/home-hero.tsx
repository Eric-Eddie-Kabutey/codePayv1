import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { hero } from "@/content/homepage";

function HomeHero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-40">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text */}
        <div className="lg:w-1/2 space-y-7">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
            {hero.headline}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed">
            {hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            {/* <Link
              href={hero.primaryCTA.href}
              className="inline-block text-center bg-navy-900 text-white text-base font-semibold px-7 py-3.5 rounded-lg hover:bg-navy-700 transition-colors"
            >
              {hero.primaryCTA.label}
            </Link>
            <Link
              href={hero.secondaryCTA.href}
              className="inline-block text-center border border-navy-200 text-navy-900 text-base font-semibold px-7 py-3.5 rounded-lg hover:bg-navy-50 transition-colors"
            >
              {hero.secondaryCTA.label}
            </Link> */}

            <Link
              href={hero.primaryCTA.href}
              className="group/link inline-flex items-center justify-between gap-6 rounded-full border border-white/25 bg-theme-blue-900 py-2 px-6 text-base font-medium text-black backdrop-blur-md transition-all duration-300 hover:border-transparent hover:bg-theme-purple-900 hover:text-[#071B2D] sm:min-w-[240px]"
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
              className="group/link inline-flex items-center justify-between gap-6 rounded-full border border-white/25 bg-theme-green-900 py-2 px-6 text-base font-medium text-black backdrop-blur-md transition-all duration-300 hover:border-transparent hover:bg-theme-purple-900 hover:text-[#071B2D] sm:min-w-[240px]"
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

        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src={hero.imageUrl}
            alt={hero.imageAlt}
            className="w-full h-auto max-h-[460px] object-contain"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
