'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function JoinUsBanner() {
    const circles = [
        { r: 0, c: 1, color: '#6A5EE8' },
        { r: 0, c: 4, color: '#363548' },
        { r: 0, c: 7, color: '#444359' },
        { r: 1, c: 0, color: '#6A5EE8' },
        { r: 1, c: 5, color: '#363548' },
        { r: 1, c: 6, color: '#6A5EE8' },
        { r: 2, c: 2, color: '#363548' },
        { r: 2, c: 5, color: '#444359' },
        { r: 2, c: 7, color: '#6A5EE8' },
        { r: 3, c: 1, color: '#6A5EE8' },
        { r: 3, c: 4, color: '#444359' },
        { r: 3, c: 7, color: '#363548' },
    ];

    return (
        <section className="relative w-full overflow-hidden flex items-center justify-center bg-[#363548]">
            {/* Grid Pattern Background */}
            <div className="w-full grid grid-cols-4 sm:grid-cols-8 border-t border-l border-[#2C2B3E]">
                {Array.from({ length: 32 }).map((_, i) => {
                    // Calculate desktop row and col to match the intended pattern
                    const col = i % 8;
                    const row = Math.floor(i / 8);

                    // Checkerboard colors
                    const bg = (col + row) % 2 === 0 ? '#444359' : '#363548';

                    const circleObj = circles.find(c => c.r === row && c.c === col);

                    return (
                        <div
                            key={i}
                            className="w-full aspect-square border-r border-b border-[#2C2B3E] flex items-center justify-center relative"
                            style={{ backgroundColor: bg }}
                        >
                            {circleObj && (
                                <div
                                    className="w-[85%] h-[85%] rounded-full"
                                    style={{ backgroundColor: circleObj.color }}
                                />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Central Content Box */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] sm:w-[25%] max-w-[400px] sm:max-w-none aspect-square bg-[#6A5EE8] flex flex-col items-center justify-center text-center p-6 md:p-8 z-10 shadow-2xl"
            >
                <h2 className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] font-serif text-white leading-tight mb-4">
                    Join us at MetaMap
                </h2>
                <p className="text-white text-[0.85rem] md:text-[0.95rem] font-light leading-relaxed mb-8 opacity-90 px-2 md:px-4">
                    Dive into our diverse range of opportunities to find the perfect fit for your skills and aspirations
                </p>
                <button className="bg-[#FF5A8F] hover:bg-[#f04c80] text-white text-[0.7rem] font-bold tracking-[0.15em] uppercase px-6 py-3 transition-colors shadow-sm">
                    Work with us
                </button>
            </motion.div>
        </section>
    );
}
