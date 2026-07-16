'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CtaSection() {
    return (
        <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center bg-[#363636] overflow-hidden">

            {/* Background Left Half */}
            <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden z-0 bg-[#363636]">
                {/* Main Cyan Circle Half */}
                <div className="absolute top-1/2 right-0 w-[160%] sm:w-[140%] md:w-[130%] aspect-square rounded-full bg-[#3BC2EE] -translate-y-1/2 translate-x-1/2"></div>

                {/* Far Left Teal Circle */}
                <div className="absolute top-1/2 left-[-70%] md:left-[-60%] w-[100%] md:w-[80%] lg:w-[70%] aspect-square rounded-full bg-[#457482] -translate-y-1/2"></div>
            </div>

            {/* Background Right Half */}
            <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden z-0 bg-[#363636]">
                {/* Main Teal Circle Half */}
                <div className="absolute top-1/2 left-0 w-[160%] sm:w-[140%] md:w-[130%] aspect-square rounded-full bg-[#457482] -translate-y-1/2 -translate-x-1/2"></div>
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl"
            >
                <h2 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] font-serif text-[#151515] leading-tight mb-4">
                    Clarity drives power
                </h2>
                <p className="text-lg md:text-[1.25rem] text-[#151515] font-light max-w-2xl mx-auto leading-relaxed mb-10 opacity-90">
                    Elevate your business operations with<br className="hidden md:block" /> our tailored customer identity platform
                </p>
                <button className="bg-[#111111] hover:bg-black text-white text-[0.75rem] font-bold tracking-[0.15em] uppercase px-8 py-4 transition-colors">
                    Talk to an expert now
                </button>
            </motion.div>
        </section>
    );
}
