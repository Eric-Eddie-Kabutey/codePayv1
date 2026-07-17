'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function WhyCodePayCTA() {
    return (
        <section className="relative w-full py-24 md:py-32 px-6 flex justify-center items-center overflow-hidden bg-[#3F3F3F]">
            {/* Dotted pattern */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)',
                    backgroundSize: '12px 12px'
                }}
            ></div>

            {/* Circular Graphic Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] md:w-[650px] md:h-[650px] flex justify-center items-center z-10"
            >
                {/* Yellow Crescent Offset */}
                <div className="absolute inset-0 bg-[#FFC444] rounded-full translate-x-6 sm:translate-x-10 md:translate-x-16"></div>

                {/* Inner Dark Circle */}
                <div className="absolute inset-0 bg-[#3F3F3F] rounded-full flex flex-col items-center justify-center text-center p-8 sm:p-16 md:p-24 shadow-2xl">
                    <h2 className="text-[1.75rem] sm:text-[2.5rem] md:text-[3.25rem] font-serif text-white leading-[1.15] mb-6 md:mb-8">
                        Clarity to unlock the<br />power of customer<br />data
                    </h2>

                    <p className="text-[0.9rem] sm:text-[1rem] md:text-[1.15rem] text-white/90 font-light leading-relaxed mb-8 md:mb-10 max-w-[280px] sm:max-w-[360px] md:max-w-[420px] mx-auto">
                        Transform customer data into business intelligence. Make informed decisions and
                        unlock new opportunities.
                    </p>

                    <button className="bg-[#111111] hover:bg-black text-white text-[0.7rem] md:text-[0.75rem] font-bold tracking-[0.15em] uppercase px-6 py-3.5 md:px-8 md:py-4 transition-colors">
                        Talk to an expert now
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
