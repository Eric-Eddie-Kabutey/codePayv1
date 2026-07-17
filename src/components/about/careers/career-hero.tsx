'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CareerHero() {
    return (
        <section className="relative w-full min-h-[600px] md:min-h-[750px] overflow-hidden bg-[#F5F5F5] flex items-center justify-center py-24">

            {/* Background Shapes */}

            {/* 1. Large Top Left Outlined Circle */}
            <div className="absolute top-[-30%] left-[-15%] w-[60%] md:w-[45%] aspect-square rounded-full border-[1.5px] border-[#A197F4] opacity-80 pointer-events-none"></div>

            {/* 2. Small Far Left Outlined Circle */}
            <div className="absolute top-[45%] left-[-5%] w-[15%] md:w-[12%] aspect-square rounded-full border-[1.5px] border-[#A197F4] opacity-80 pointer-events-none"></div>

            {/* 3. Bottom Left Outlined Circle */}
            <div className="absolute bottom-[-15%] left-[5%] w-[35%] md:w-[28%] aspect-square rounded-full border-[1.5px] border-[#A197F4] opacity-80 pointer-events-none"></div>

            {/* 4. Large Top Right Outlined Circle */}
            <div className="absolute top-[-25%] right-[-10%] w-[50%] md:w-[42%] aspect-square rounded-full border-[1.5px] border-[#A197F4] opacity-80 pointer-events-none"></div>

            {/* 5. Small Top Right Outlined Circle */}
            <div className="absolute top-[2%] right-[12%] w-[18%] md:w-[16%] aspect-square rounded-full border-[1.5px] border-[#A197F4] opacity-80 pointer-events-none"></div>

            {/* 6. Bottom Right Outlined Circle */}
            <div className="absolute bottom-[-20%] right-[-5%] w-[45%] md:w-[35%] aspect-square rounded-full border-[1.5px] border-[#A197F4] opacity-80 pointer-events-none"></div>

            {/* 7. Central Solid Purple Circle */}
            {/* Using a very large aspect square to create the curved background effect */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[45%] w-[180%] sm:w-[140%] md:w-[110%] lg:w-[85%] aspect-square rounded-full bg-[#6A5EE8] pointer-events-none"></div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl text-white mt-12 md:mt-20"
            >
                <h1 className="text-[2.75rem] md:text-[4.5rem] font-serif mb-6 md:mb-8 leading-[1.1]">
                    Join us to map the world
                </h1>
                <div className="flex flex-col gap-6 text-[1.1rem] md:text-[1.25rem] font-light mb-10 md:mb-12 max-w-[50rem] leading-relaxed">
                    <p>
                        If you possess the passion, ambition, and expertise to shape the future of personal identity, we invite you to be a part of our journey!
                    </p>
                    <p>
                        Join us in redefining the landscape and making a lasting impact on the evolution of personal identity. Together, let&apos;s build the future!
                    </p>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#FF5A8F] hover:bg-[#f04c80] text-white text-xs md:text-sm font-bold tracking-widest uppercase px-8 py-3.5 transition-colors shadow-lg"
                >
                    Work with us
                </motion.button>
            </motion.div>
        </section>
    );
}
