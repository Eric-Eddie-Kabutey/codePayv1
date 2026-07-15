"use client";

import React from "react";
import { whyChooseData } from "@/content/why-choose-data"; 

function WhyChooseUs() {
    return (
        <section className="w-full bg-[#f8f9fa] py-20 lg:py-28 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                {/* Header */}
                <div className="text-center max-w-4xl mb-16 lg:mb-24">
                    <p className="text-[11px] sm:text-xs font-bold text-[#E91E63] uppercase tracking-widest mb-4">
                        {whyChooseData.tagline}
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-[44px] text-[#222222] font-serif leading-tight">
                        {whyChooseData.headline}
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10 lg:gap-y-12">
                    {whyChooseData.benefits.map((benefit) => (
                        <div key={benefit.id} className="flex items-start gap-4">

                            {/* Checkmark Icon (Matching the lime-green stroke style) */}
                            <svg
                                className="w-7 h-7 text-[#7CB342] flex-shrink-0 mt-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            {/* Benefit Text with targeted strong tag styling */}
                            <p className="text-[17px] text-[#444444] leading-relaxed [&>strong]:font-semibold [&>strong]:text-[#1a1a1a]">
                                {benefit.text}
                            </p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default WhyChooseUs;