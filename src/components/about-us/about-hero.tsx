"use client";

import React from "react";
import { aboutHeroData } from "@/content/about/about-hero-data";

// ----------------------------------------------------------------------
// Custom SVG Graphic to replicate the geometric diamond lattice
// Built using mathematically offset rotated squares.
// ----------------------------------------------------------------------
const DiamondLattice = ({ className }: { className?: string }) => (
  <svg
    className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${className}`}
    width="500"
    height="500"
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Translate to center, rotate 45deg to create diamonds */}
    <g transform="translate(250, 250) rotate(45)">

      {/* Outer and Inner nested outlines */}
      <rect x="-175" y="-175" width="350" height="350" fill="none" stroke="#00E5FF" strokeWidth="1.5" opacity="0.6" />
      <rect x="-125" y="-125" width="250" height="250" fill="none" stroke="#00E5FF" strokeWidth="1.5" opacity="0.6" />
      <rect x="-75" y="-75" width="150" height="150" fill="none" stroke="#00E5FF" strokeWidth="1.5" opacity="0.6" />

      {/* Intersecting grid outlines */}
      <rect x="-175" y="-75" width="100" height="150" fill="none" stroke="#00E5FF" strokeWidth="1.5" opacity="0.6" />
      <rect x="75" y="-75" width="100" height="150" fill="none" stroke="#00E5FF" strokeWidth="1.5" opacity="0.6" />
      <rect x="-75" y="-175" width="150" height="100" fill="none" stroke="#00E5FF" strokeWidth="1.5" opacity="0.6" />
      <rect x="-75" y="75" width="150" height="100" fill="none" stroke="#00E5FF" strokeWidth="1.5" opacity="0.6" />

      {/* Solid Center Diamond */}
      <rect x="-90" y="-90" width="180" height="180" fill="#29B6F6" />
    </g>
  </svg>
);

function AboutHero() {
  return (
    <section className="relative w-full bg-[#685CF6] overflow-hidden sm:py-28  lg:pt-44 lg:pb-24">

      {/* Left Geometric Graphic */}
      <DiamondLattice className="-left-48 sm:-left-32 lg:-left-12" />

      {/* Right Geometric Graphic */}
      <DiamondLattice className="-right-48 sm:-right-32 lg:-right-12" />

      {/* Text Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">

        {/* whitespace-pre-line ensures the \n in your data file creates a line break */}
        <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-serif text-white leading-[1.15] mb-6 tracking-tight whitespace-pre-line">
          {aboutHeroData.headline}
        </h1>

        <p className="text-[15px] sm:text-[17px] text-white/95 max-w-[400px] leading-relaxed whitespace-pre-line">
          {aboutHeroData.subheadline}
        </p>

      </div>
    </section>
  );
}

export default AboutHero;