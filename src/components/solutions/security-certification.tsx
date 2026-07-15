"use client";

import React from "react";
import { securityData } from "@/content/security-data"; 

function SecurityCertifications() {
    return (
        <section className="w-full bg-[#f4f5f7] py-20 lg:py-28 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                {/* Header Section */}
                <div className="text-center max-w-3xl mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-[42px] text-[#222222] font-serif leading-tight mb-5">
                        {securityData.headline}
                    </h2>
                    <p className="text-[15px] sm:text-[17px] text-gray-600 leading-relaxed">
                        {securityData.subheadline}
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {securityData.certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className="bg-white p-10 flex flex-col items-center text-center shadow-sm transition-shadow hover:shadow-md"
                        >

                            {/* Badges Container */}
                            <div className="flex items-center justify-center gap-3 mb-8 h-16">
                                {cert.images.map((imgSrc, idx) => (
                                    <img
                                        key={idx}
                                        src={imgSrc}
                                        alt={`${cert.title} badge ${idx + 1}`}
                                        className="h-full w-auto object-contain"
                                        loading="lazy"
                                    />
                                ))}
                            </div>

                            {/* Text Content */}
                            <h3 className="text-[17px] lg:text-lg font-medium text-[#1a1a1a] mb-4">
                                {cert.title}
                            </h3>

                            <p className="text-[14px] text-gray-500 leading-relaxed">
                                {cert.description}
                            </p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default SecurityCertifications;