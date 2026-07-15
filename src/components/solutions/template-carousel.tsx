"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { templatesData } from "@/content/templates-data"; 

function TemplatesCarousel() {
    const [ activeStep, setActiveStep ] = useState(1);

    // Auto-play carousel logic
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep((prev) => (prev === 1 ? 2 : 1));
        }, 5000); // Swaps every 5 seconds

        // Cleanup timer on unmount
        return () => clearInterval(timer);
    }, [ activeStep ]); // Re-binds timer if user manually clicks

    return (
        <section className="w-full bg-white pt-20 pb-12 sm:pt-28 sm:pb-16 px-4 sm:px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Header Section */}
                <div className="text-center max-w-3xl mb-16 lg:mb-24">
                    <p className="text-[11px] sm:text-xs font-bold text-[#6058F3] uppercase tracking-widest mb-4">
                        {templatesData.header.tagline}
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-[40px] text-[#222222] font-serif leading-tight mb-6">
                        {templatesData.header.headline}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        {templatesData.header.description}
                    </p>
                </div>

                {/* Carousel Area */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">

                    {/* Step 1 (Left) */}
                    <div
                        onClick={() => setActiveStep(1)}
                        className={`lg:col-span-3 cursor-pointer transition-all duration-300 ${activeStep === 1 ? "opacity-100" : "opacity-50 hover:opacity-80"}`}
                    >
                        <div className={`w-7 h-7 flex items-center justify-center text-xs font-bold mb-4 transition-colors ${activeStep === 1 ? "bg-[#6058F3] text-white" : "border border-[#6058F3] text-[#6058F3] bg-transparent"}`}>
                            1
                        </div>
                        <h3 className="text-[17px] font-semibold text-[#1a1a1a] mb-3">
                            {templatesData.carousel[ 0 ].title}
                        </h3>
                        <p className="text-[15px] text-gray-600 leading-relaxed">
                            {templatesData.carousel[ 0 ].description}
                        </p>
                    </div>

                    {/* Center Image Container */}
                    <div className="lg:col-span-6 relative w-full h-[250px] sm:h-[400px] lg:h-[450px] flex justify-center items-center">
                        {templatesData.carousel.map((item) => (
                            <img
                                key={item.id}
                                src={item.imageUrl}
                                alt={item.title}
                                className={`absolute w-full h-full object-contain transition-all duration-700 ease-in-out drop-shadow-2xl ${activeStep === item.id
                                        ? "opacity-100 translate-y-0 scale-100 z-10"
                                        : "opacity-0 translate-y-4 scale-95 z-0 pointer-events-none"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Step 2 (Right) */}
                    <div
                        onClick={() => setActiveStep(2)}
                        className={`lg:col-span-3 cursor-pointer transition-all duration-300 ${activeStep === 2 ? "opacity-100" : "opacity-50 hover:opacity-80"}`}
                    >
                        <div className={`w-7 h-7 flex items-center justify-center text-xs font-bold mb-4 transition-colors ${activeStep === 2 ? "bg-[#6058F3] text-white" : "border border-[#6058F3] text-[#6058F3] bg-transparent"}`}>
                            2
                        </div>
                        <h3 className="text-[17px] font-semibold text-[#1a1a1a] mb-3">
                            {templatesData.carousel[ 1 ].title}
                        </h3>
                        <p className="text-[15px] text-gray-600 leading-relaxed">
                            {templatesData.carousel[ 1 ].description}
                        </p>
                    </div>

                </div>

                {/* Explore Button */}
                <div className="mt-16 sm:mt-24 mb-16 sm:mb-20">
                    <Link
                        href={templatesData.exploreButton.href}
                        className="inline-block border border-gray-400 text-[#1a1a1a] text-xs font-bold uppercase tracking-widest px-8 py-3.5 hover:border-[#1a1a1a] hover:bg-gray-50 transition-colors"
                    >
                        {templatesData.exploreButton.label}
                    </Link>
                </div>

                {/* Yellow Bottom CTA Banner */}
                <div className="w-full max-w-5xl bg-[#FDBF3A] py-16 px-6 sm:px-12 text-center flex flex-col items-center shadow-sm">
                    <h2 className="text-3xl sm:text-4xl text-[#1a1a1a] font-serif mb-4">
                        {templatesData.ctaBanner.headline}
                    </h2>
                    <p className="text-[17px] text-[#222222] max-w-lg mb-8 font-medium">
                        {templatesData.ctaBanner.description}
                    </p>
                    <Link
                        href={templatesData.ctaBanner.button.href}
                        className="bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 hover:bg-black transition-colors"
                    >
                        {templatesData.ctaBanner.button.label}
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default TemplatesCarousel;