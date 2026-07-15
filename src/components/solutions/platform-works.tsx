"use client";

import React, { useState } from "react";
import { platformWorksData } from "./platform-works-data";

function PlatformWorks() {
    // Set default active step to 4 to match your screenshot
    const [ activeStep, setActiveStep ] = useState(4);

    // Find the currently active step data
    const currentStepData = platformWorksData.steps.find(
        (step) => step.id === activeStep
    );

    return (
        <section className="w-full bg-white py-20 lg:py-32 px-4 sm:px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Top Header */}
                <div className="text-center mb-16 lg:mb-24">
                    <p className="text-[11px] sm:text-xs font-bold text-[#6058F3] uppercase tracking-widest mb-4">
                        {platformWorksData.tagline}
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#222222] font-serif tracking-tight">
                        {platformWorksData.headline}
                    </h2>
                </div>

                {/* Two-Column Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Interactive Stepper & Text */}
                    <div className="flex flex-col justify-center max-w-lg mx-auto lg:mx-0 w-full">

                        {/* Changing Description Text */}
                        <div className="min-h-[120px]">
                            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed transition-opacity duration-300">
                                {currentStepData?.description}
                            </p>
                        </div>

                        {/* Stepper Component */}
                        <div className="relative mt-12 sm:mt-16 w-full max-w-md">
                            {/* Horizontal Connecting Line */}
                            <div className="absolute top-4 left-0 w-full h-[2px] bg-[#6058F3]" />

                            <div className="relative flex justify-between items-start z-10">
                                {platformWorksData.steps.map((step) => (
                                    <div key={step.id} className="relative flex flex-col items-center">

                                        {/* Step Node Button */}
                                        <button
                                            onClick={() => setActiveStep(step.id)}
                                            className={`w-8 h-8 flex items-center justify-center text-sm font-bold transition-all duration-300 ${activeStep === step.id
                                                    ? "bg-[#6058F3] text-white scale-110 shadow-lg" // Active state
                                                    : "bg-[#6058F3] text-white hover:bg-[#4a42d4]" // Inactive state
                                                }`}
                                            aria-label={`Go to step ${step.id}`}
                                        >
                                            {step.id}
                                        </button>

                                        {/* Step Title (Only shows when active) */}
                                        <div
                                            className={`absolute top-12 w-28 sm:w-32 text-center transition-all duration-300 ${activeStep === step.id
                                                    ? "opacity-100 translate-y-0"
                                                    : "opacity-0 -translate-y-2 pointer-events-none"
                                                }`}
                                        >
                                            <span className="text-[13px] sm:text-sm font-medium text-[#6058F3] leading-tight block">
                                                {step.title}
                                            </span>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Diagram Images Carousel */}
                    {/* Note: Added explicit heights here because absolute images pull out of the document flow */}
                    <div className="relative flex justify-center items-center w-full mt-12 lg:mt-0 h-[300px] sm:h-[400px] lg:h-[500px]">

                        {/* Optional subtle glow behind the diagram */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#6058F3]/5 rounded-full blur-3xl -z-10"></div>

                        {/* Map over all images and smoothly transition them in/out */}
                        {platformWorksData.steps.map((step) => (
                            <img
                                key={`img-${step.id}`}
                                src={step.imageUrl}
                                alt={step.title}
                                className={`absolute w-full h-full max-w-lg lg:max-w-xl object-contain drop-shadow-xl transition-all duration-700 ease-in-out ${activeStep === step.id
                                        ? "opacity-100 translate-y-0 scale-100 z-10"
                                        : "opacity-0 translate-y-4 scale-95 z-0 pointer-events-none"
                                    }`}
                                loading="lazy"
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default PlatformWorks;