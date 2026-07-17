'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function IncodePayPartnership() {
    return (
        <section className="w-full bg-[#FFC444] flex flex-col md:flex-row items-center justify-between overflow-hidden relative min-h-[600px] md:min-h-[800px] py-24 px-6 md:px-12 lg:px-24">
            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-[60%] lg:w-1/2 max-w-2xl z-10 relative flex flex-col items-start text-[#1F1F1F]"
            >
                <div className="flex items-center gap-2 font-bold text-xl md:text-2xl tracking-tight mb-8">
                    <span>incode</span>
                    <span className="font-light text-black/30">|</span>
                    <span className="font-normal">MetaMap</span>
                </div>

                <h2 className="text-[2.25rem] md:text-[3rem] lg:text-[3.25rem] font-serif leading-[1.1] mb-8">
                    MetaMap joins Incode to build<br className="hidden lg:block" /> the future of identity verification
                </h2>

                <div className="flex flex-col gap-6 text-[1rem] md:text-[1.05rem] font-light leading-relaxed mb-12 max-w-[90%] text-[#1F1F1F]/90">
                    <p>
                        As <strong className="font-medium text-[#1F1F1F]">MetaMap is now part of Incode</strong>, our combined company is set to deliver even more powerful identity verification services.
                    </p>
                    <p>
                        — <strong className="font-medium text-[#1F1F1F]">Incode</strong> leads fraud detection with an <strong className="font-medium text-[#1F1F1F]">in-house AI and Fraud Lab</strong>, deterministic verifications through exclusive government connections, and a future-proof deepfake prevention system.
                    </p>
                    <p>
                        — <strong className="font-medium text-[#1F1F1F]">MetaMap</strong> allows businesses to build verification journeys through an <strong className="font-medium text-[#1F1F1F]">easy-to-integrate platform</strong>, accessing various identity data points.
                    </p>
                    <p>
                        Together, we are committed to powering a world of trust, ensuring every interaction is secure, efficient, and reliable.
                    </p>
                </div>

                <button className="border border-[#1F1F1F] text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-[#FFC444] transition-colors text-[0.75rem] font-bold tracking-[0.1em] uppercase px-10 py-3.5">
                    Learn More
                </button>
            </motion.div>

            {/* Right Graphic */}
            <div className="w-full md:w-[40%] lg:w-1/2 absolute right-0 top-0 bottom-0 pointer-events-none opacity-30 md:opacity-100 flex items-center justify-end overflow-hidden">
                <svg
                    className="absolute right-[-100px] md:right-[-50px] lg:right-0 top-1/2 -translate-y-1/2 h-[900px] w-[500px]"
                    viewBox="0 0 400 900"
                >
                    {/* Curved Line */}
                    <path d="M 350 -50 Q 50 450 350 950" fill="none" stroke="#1F1F1F" strokeWidth="1.5" />

                    {/* Top Node (273.5, 100) */}
                    <g transform="translate(273.5, 100)">
                        <circle r="90" fill="rgba(0,0,0,0.15)" />
                        <circle r="60" fill="#6A5EE8" />
                        <rect x="-14" y="-14" width="28" height="28" fill="#1F1F1F" transform="rotate(45)" />
                    </g>

                    {/* Middle Node (200, 450) */}
                    <g transform="translate(200, 450)">
                        <circle r="120" fill="rgba(0,0,0,0.15)" />
                        <circle r="75" fill="#6A5EE8" />
                        <rect x="-18" y="-18" width="36" height="36" fill="#1F1F1F" />
                    </g>

                    {/* Bottom Node (273.5, 800) */}
                    <g transform="translate(273.5, 800)">
                        <circle r="90" fill="rgba(0,0,0,0.15)" />
                        <circle r="60" fill="#6A5EE8" />
                        <rect x="-14" y="-14" width="28" height="28" fill="#1F1F1F" transform="rotate(45)" />
                    </g>
                </svg>
            </div>
        </section>
    );
}
