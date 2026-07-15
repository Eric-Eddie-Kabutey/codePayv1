import React from "react";
import Link from "next/link";
import { solutionsCTAData } from "@/content/faq-and-solutions-cta";

function SolutionsFooterCTA() {
    return (        
        <section className="relative w-full bg-[#5e53e5] pt-24 pb-28 lg:py-32 px-4 sm:px-6 mt-16 lg:mt-32">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">

                {/* Left Column: Text & CTA */}
                <div className="w-full md:w-1/2 lg:w-5/12 text-left mb-12 md:mb-0">
                    <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif text-white leading-tight mb-10">
                        {solutionsCTAData.headline}
                    </h2>

                    <Link
                        href={solutionsCTAData.buttonHref}
                        className="inline-block bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors shadow-sm"
                    >
                        {solutionsCTAData.buttonLabel}
                    </Link>
                </div>

                {/* Right Column: Overlapping Globe Graphic */}
                {/* 
            Absolute positioning pulls it out of the container so it overlaps 
            the section above it (The FAQ section). 
        */}
                <div className="md:absolute md:-top-32 lg:-top-48 md:right-0 w-full md:w-1/2 lg:w-7/12 flex justify-center md:justify-end pointer-events-none">
                    <img
                        src={solutionsCTAData.imageUrl}
                        alt="Global Coverage Graphic"
                        className="w-full max-w-sm md:max-w-md lg:max-w-xl object-contain opacity-90 md:opacity-100"
                        loading="lazy"
                    />
                </div>

            </div>
        </section>
    );
}

export default SolutionsFooterCTA;