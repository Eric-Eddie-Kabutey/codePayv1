import React from "react";
import Link from "next/link";

import { hero, solutions } from "@/content/solutions";

function SolutionsHero() {
    return (
        <section className="relative w-full bg-[#5e53e5] overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
            {/* Optional: Subtle background pattern/gradient can go here */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-12 relative z-10">

                {/* Left Column: Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left">

                    <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium text-white leading-[1.15] max-w-2xl tracking-tight font-serif">
                        {hero.headline}
                    </h1>

                    <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-xl leading-relaxed">
                        {hero.subheadline}
                    </p>

                    {/* Main CTA - Styled like the yellow button in the reference */}
                    <div className="mt-10">
                        <Link
                            href="/contact" // Swap with your actual CTA link
                            className="inline-block bg-[#FDBF3A] hover:bg-[#f6b426] text-[#1a1a1a] px-8 py-3.5 text-sm font-bold tracking-wider uppercase transition-colors rounded-sm shadow-sm"
                        >
                            Start For Free
                        </Link>
                    </div>

                    {/* Quick-jump audience pills - Restyled for the dark background */}
                    <div className="mt-12 pt-8 border-t border-white/20 w-full">
                        <p className="text-[13px] text-white/70 mb-4 font-semibold uppercase tracking-widest">
                            Jump to solution
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {solutions.map((sol) => (
                                <a
                                    key={sol.id}
                                    href={`#${sol.slug}`}
                                    className="text-xs sm:text-sm font-medium border border-white/30 text-white bg-white/5 hover:bg-white hover:text-[#5e53e5] px-5 py-2.5 rounded-full transition-all duration-300"
                                >
                                    {sol.audience}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Hero Image (Industry Standard Visual) */}
                <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
                    {/* Decorative glow behind the image to make it pop */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-white/10 rounded-full blur-3xl -z-10"></div>

                    <img
                        src="/assets/images/solutions-hero-mockup.png" // Replace with your actual UI mockup
                        alt="CodePay Solutions Platform"
                        className="w-full h-auto max-w-lg lg:max-w-2xl object-contain drop-shadow-2xl lg:translate-x-6"
                        loading="eager"
                    />
                </div>

            </div>
        </section>
    );
}

export default SolutionsHero;