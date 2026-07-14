import React from "react";
import Link from "next/link";
import { finalCTA } from "@/content/homepage";
import { ArrowUpRight } from "lucide-react";

function FooterCTA() {
  return (
    <section className="relative w-full bg-[#323232] overflow-hidden py-24 sm:py-32 flex items-center justify-center min-h-[500px] lg:min-h-[600px]">

      {/* CSS Yellow Pyramid */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180%] sm:w-[120%] lg:w-[1000px] xl:w-[1200px] h-[85%] sm:h-[95%] bg-[#F2BD41]"
        style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
      />

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-4 mt-16 sm:mt-24">
        <h2 className="text-4xl leading-tight tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
          {/* {finalCTA.headline} */}
          
          Your Fintech. <br />
          Our Infrastructure. <br />
          Africa's Future.
        </h2>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#222222] sm:text-xl lg:text-2xl">
          {finalCTA.subheadline}
        </p>

        {/* CTA Button matched to design */}
        <div className="mt-8 flex justify-center gap-4 sm:gap-6 flex-wrap">         
          <Link
            href={finalCTA.primaryCTA.href}
            className="group/link inline-flex items-center justify-between gap-6 bg-[#1a1a1a] text-white px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-black transition-colors rounded-xl"
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
            className="group/link inline-flex items-center justify-between gap-6 bg-[#1a1a1a] text-white px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-black transition-colors rounded-xl"
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

        {/* Bottom Feature Text */}
        <div className="mt-8 text-sm text-[#222222] flex flex-wrap justify-center items-center gap-2 sm:gap-3 font-medium">
          <span>300 verifications</span>
          <span className="w-px h-4 bg-[#1a1a1a]/40 hidden sm:block"></span>
          <span className="hidden sm:inline">|</span>
          <span>3 month access</span>
          <span className="w-px h-4 bg-[#1a1a1a]/40 hidden sm:block"></span>
          <span className="hidden sm:inline">|</span>
          <span>Customer support</span>
        </div>
      </div>

    </section>
  );
}

export default FooterCTA;