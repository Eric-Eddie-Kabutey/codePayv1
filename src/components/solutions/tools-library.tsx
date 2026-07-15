"use client";

import React, { useState } from "react";
import Link from "next/link";
import { toolsData } from "@/content/tools-data"; 

function ToolsLibrary() {
    // Set the first category to be open by default
    const [ openSection, setOpenSection ] = useState<string | null>(toolsData.categories[ 0 ].id);

    const toggleSection = (id: string) => {
        setOpenSection(openSection === id ? null : id);
    };

    return (
        <section className="relative w-full bg-[#f4f5f7] py-20 lg:py-28 px-4 sm:px-6 overflow-hidden">

            {/* Subtle Background pattern mimicking the floating squares in your design */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-1/4 left-10 w-4 h-4 bg-gray-200"></div>
                <div className="absolute top-1/3 left-32 w-2 h-2 bg-gray-300"></div>
                <div className="absolute bottom-20 left-20 w-6 h-6 bg-gray-200"></div>
                <div className="absolute top-1/2 right-20 w-3 h-3 bg-gray-300"></div>
                <div className="absolute bottom-1/3 right-40 w-5 h-5 bg-gray-200"></div>
            </div>

            <div className="relative max-w-6xl mx-auto flex flex-col items-center z-10">

                {/* Header Section */}
                <div className="text-center max-w-3xl mb-12 sm:mb-16">
                    <p className="text-[11px] sm:text-xs font-bold text-[#6058F3] uppercase tracking-widest mb-4">
                        {toolsData.tagline}
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-[40px] text-[#222222] font-serif leading-tight mb-5">
                        {toolsData.headline}
                    </h2>
                    <p className="text-[15px] sm:text-[17px] text-gray-500 leading-relaxed max-w-2xl mx-auto">
                        {toolsData.subheadline}
                    </p>
                </div>

                {/* Accordion Container */}
                <div className="w-full shadow-lg rounded-md overflow-hidden bg-white border border-gray-200">
                    {toolsData.categories.map((category, index) => {
                        const isOpen = openSection === category.id;

                        return (
                            <div key={category.id} className="flex flex-col">

                                {/* Accordion Header (Tab) */}
                                <button
                                    onClick={() => toggleSection(category.id)}
                                    className={`w-full flex items-center justify-between px-6 py-4 transition-colors focus:outline-none ${isOpen
                                            ? "bg-white border-b border-gray-100"
                                            : "bg-[#EAECEF] hover:bg-[#E2E4E8] border-b border-white shadow-[inset_0_-2px_4px_rgba(0,0,0,0.03)]"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">{category.icon}</span>
                                        <h3 className={`text-[17px] font-medium ${isOpen ? "text-black" : "text-gray-700"}`}>
                                            {category.title}
                                        </h3>
                                    </div>

                                    {/* Chevron Icon */}
                                    <svg
                                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Accordion Body (Cards Grid) */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out bg-white ${isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {category.items.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className={`flex flex-col border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow bg-white border-l-[3px] ${category.borderColor}`}
                                            >
                                                <h4 className="text-[14px] font-semibold text-[#1a1a1a] mb-2 leading-snug">
                                                    {item.title}
                                                </h4>

                                                <p className="text-[12px] text-gray-500 leading-relaxed flex-grow">
                                                    {item.description}
                                                </p>

                                                <Link
                                                    href="/contact"
                                                    className="text-[#38BDF8] text-[12px] font-medium mt-4 hover:underline"
                                                >
                                                    Learn more {'>'}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-12 sm:mt-16">
                    <Link
                        href="/platform"
                        className="inline-block border border-gray-400 bg-transparent text-gray-600 px-6 py-3 text-[11px] sm:text-xs font-bold uppercase tracking-widest hover:border-black hover:text-black hover:bg-white transition-all shadow-sm"
                    >
                        {toolsData.ctaText}
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default ToolsLibrary;