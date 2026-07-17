'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PressCTA() {
    return (
        <section className="relative w-full min-h-[500px] md:min-h-[600px] overflow-hidden flex flex-col items-center justify-center py-24 px-6">
            {/* Background Shapes */}
            <div className="absolute inset-0 pointer-events-none bg-[#3A3A3A] flex items-center justify-center overflow-hidden">
                <svg
                    className="absolute w-full h-full object-cover min-w-[1000px]"
                    viewBox="0 0 1440 600"
                    preserveAspectRatio="xMidYMid slice"
                >
                    {/* Yellow Circle */}
                    <circle cx="720" cy="300" r="450" fill="#FFC444" />

                    {/* Left Purple Triangle */}
                    <polygon points="0,0 480,300 0,600" fill="#6A5EE8" />

                    {/* Right Purple Triangle */}
                    <polygon points="1440,0 960,300 1440,600" fill="#6A5EE8" />
                </svg>
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto"
            >
                <h2 className="text-[2.5rem] md:text-[3.25rem] font-serif text-[#1F1F1F] leading-[1.1] mb-6">
                    Where clarity meets<br />accuracy
                </h2>

                <p className="text-[1.05rem] md:text-[1.15rem] text-[#1F1F1F] font-light leading-relaxed mb-8 max-w-[420px]">
                    Build deeper connections with your customers and prospects and foster powerful business relations.
                </p>

                <button className="bg-[#111111] hover:bg-black text-white text-[0.7rem] md:text-[0.75rem] font-bold tracking-[0.15em] uppercase px-8 py-4 transition-colors">
                    Talk to an expert now
                </button>
            </motion.div>
        </section>
    );
}
