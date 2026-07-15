"use client";

import React from "react";
import Link from "next/link";
import { supportData } from "@/content/integrations-and-support";

function CustomerSupport() {
    return (
        <section className="w-full bg-white py-20 lg:py-28 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto flex flex-col items-center">

                {/* Header Section */}
                <div className="text-center max-w-2xl mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-[42px] text-[#222222] font-serif leading-tight mb-5">
                        {supportData.headline}
                    </h2>
                    <p className="text-[15px] sm:text-[17px] text-gray-600 leading-relaxed">
                        {supportData.subheadline}
                    </p>
                </div>

                {/* 3-Column Grid with Vertical Dividers */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-12 md:divide-x md:divide-gray-100 mb-16">
                    {supportData.features.map((feature) => (
                        <div key={feature.id} className="flex flex-col items-start px-4 sm:px-8">

                            {/* Colored Underline Title */}
                            <h3 className="text-lg font-medium text-[#1a1a1a] mb-4">
                                <span className={`pb-1 border-b-[2px] ${feature.underlineColor}`}>
                                    {feature.title}
                                </span>
                            </h3>

                            <p className="text-[14px] text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <Link
                    href={supportData.cta.href}
                    className="inline-block bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 hover:bg-black transition-colors shadow-sm"
                >
                    {supportData.cta.label}
                </Link>

            </div>
        </section>
    );
}

export default CustomerSupport;