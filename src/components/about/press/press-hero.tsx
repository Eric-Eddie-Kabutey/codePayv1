'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PressHero() {
    return (
        <section className="relative w-full min-h-[400px] md:min-h-[500px] overflow-hidden bg-white flex flex-col items-center justify-center py-24">
            {/* Background Shapes */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
                <svg
                    className="absolute w-[200%] h-[200%] md:w-full md:h-full max-w-[1920px] object-cover"
                    viewBox="0 0 1440 500"
                    preserveAspectRatio="xMidYMid slice"
                >
                    {/* Lines */}
                    <line x1="300" y1="0" x2="-100" y2="500" stroke="#6A5EE8" strokeWidth="0.5" />
                    <line x1="100" y1="500" x2="600" y2="-100" stroke="#6A5EE8" strokeWidth="0.5" />
                    <line x1="1200" y1="-100" x2="1500" y2="400" stroke="#6A5EE8" strokeWidth="0.5" />
                    <line x1="1440" y1="550" x2="950" y2="-50" stroke="#6A5EE8" strokeWidth="0.5" />

                    {/* Left side shapes */}
                    <polygon points="0,0 400,0 50,500 0,500" fill="#EAE5F9" />
                    <polygon points="250,80 450,220 150,450" fill="#6A5EE8" />
                    <polygon points="0,400 60,500 0,500" fill="#6A5EE8" />
                    <polygon points="50,500 350,300 800,500" fill="#EAE5F9" />
                    <polygon points="620,400 800,500 550,500" fill="#6A5EE8" />

                    {/* Right side shapes */}
                    <polygon points="1050,0 1440,0 1440,300" fill="#EAE5F9" />
                    <polygon points="1440,150 1120,210 1300,420" fill="#6A5EE8" />
                    <polygon points="900,500 1500,200 1440,500" fill="#EAE5F9" opacity="0.6" />
                </svg>
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl bg-white/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none py-6 rounded-lg"
            >
                <h1 className="text-[2.5rem] md:text-[3rem] font-serif text-[#1F1F1F] leading-[1.15] mb-6">
                    Press and media
                </h1>
                <p className="text-[1rem] md:text-[1.05rem] text-[#333333] font-light leading-relaxed mb-8 opacity-90 max-w-[500px] mx-auto">
                    Read more about MetaMap coverage in the press, or<br className="hidden md:block" />
                    download our press kit and resources. Please reach out to<br className="hidden md:block" />
                    <a href="mailto:press@metamap.com" className="text-[#3b82f6] hover:underline font-normal">press@codepay.com</a> for press inquiries.
                </p>
                <button className="bg-[#111111] hover:bg-black text-white text-[0.7rem] md:text-[0.75rem] font-bold tracking-[0.15em] uppercase px-8 py-3.5 transition-colors">
                    Press Inquiries
                </button>
            </motion.div>
        </section>
    );
}
