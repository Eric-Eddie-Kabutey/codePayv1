'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Triangle = ({ filled = false, className = "" }) => (
    <svg
        viewBox="0 0 100 86.6"
        className={`absolute ${className}`}
        fill={filled ? "#6A5EE8" : "none"}
        stroke={filled ? "none" : "#A197F4"}
        strokeWidth={filled ? "0" : "1.5"}
    >
        <polygon points="50,1 98,85 2,85" />
    </svg>
);

export default function WhyCodePayHero() {
    return (
        <section className="relative w-full min-h-[500px] md:min-h-[600px] overflow-hidden bg-[#F6F6F6] flex flex-col items-center justify-center py-24">
            {/* Background Triangles Left */}
            <div className="absolute inset-y-0 left-0 w-[40%] md:w-[35%] pointer-events-none opacity-80 hidden sm:block">
                <Triangle className="w-16 md:w-20 top-[5%] left-[30%]" />

                <Triangle className="w-16 md:w-20 top-[15%] left-[55%]" />

                <Triangle className="w-16 md:w-20 top-[35%] left-[5%]" />
                <Triangle filled className="w-[4.5rem] md:w-24 top-[28%] left-[35%]" />

                <Triangle className="w-16 md:w-20 top-[48%] left-[0%]" />
                <Triangle className="w-16 md:w-20 top-[48%] left-[22%]" />
                <Triangle className="w-16 md:w-20 top-[48%] left-[44%]" />

                <Triangle className="w-16 md:w-20 top-[60%] left-[22%]" />
                <Triangle className="w-16 md:w-20 top-[68%] left-[55%]" />

                <Triangle filled className="w-20 md:w-[6.5rem] bottom-[15%] left-[5%]" />

                <Triangle className="w-16 md:w-20 bottom-[5%] left-[30%]" />
                <Triangle className="w-16 md:w-20 bottom-[5%] left-[52%]" />
            </div>

            {/* Background Triangles Right */}
            <div className="absolute inset-y-0 right-0 w-[40%] md:w-[35%] pointer-events-none opacity-80 hidden sm:block">
                <Triangle className="w-16 md:w-20 top-[2%] right-[30%]" />
                <Triangle className="w-16 md:w-20 top-[12%] right-[30%]" />

                <Triangle className="w-16 md:w-20 top-[25%] right-[5%]" />
                <Triangle filled className="w-[4.5rem] md:w-24 top-[28%] right-[35%]" />

                <Triangle className="w-16 md:w-20 top-[52%] right-[30%]" />
                <Triangle className="w-16 md:w-20 top-[62%] right-[30%]" />

                <Triangle className="w-16 md:w-20 bottom-[25%] right-[5%]" />
                <Triangle className="w-16 md:w-20 bottom-[25%] right-[27%]" />

                <Triangle filled className="w-20 md:w-[6.5rem] bottom-[5%] right-[10%]" />
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl"
            >
                <h1 className="text-[2.5rem] md:text-[3.75rem] font-serif text-[#1F1F1F] leading-[1.15] mb-6">
                    Elevate your success<br />
                    journey with MetaMap
                </h1>
                <p className="text-[1rem] md:text-[1.15rem] text-[#333333] font-light leading-relaxed mb-10 opacity-90 max-w-2xl mx-auto">
                    Partner with MetaMap and transform possibilities into realities.<br className="hidden md:block" />
                    Let&apos;s embark on a journey to greatness together
                </p>
                <button className="bg-[#111111] hover:bg-black text-white text-[0.75rem] font-bold tracking-[0.15em] uppercase px-8 py-4 transition-colors">
                    Talk to an expert
                </button>
            </motion.div>
        </section>
    );
}
