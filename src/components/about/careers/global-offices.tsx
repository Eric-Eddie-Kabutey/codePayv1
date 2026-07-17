'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GlobalOffices() {
    return (
        <section className="bg-[#F6F6F6] py-24 px-6 md:px-12 flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl flex flex-col items-center gap-6 mb-16"
            >
                <h2 className="text-[2.25rem] md:text-[3.25rem] font-serif text-[#1F1F1F] leading-[1.15]">
                    Be part of a global network
                </h2>
                <p className="text-lg md:text-[1.15rem] text-[#333333] font-light max-w-4xl leading-relaxed">
                    We are a multicultural team that extends across the globe, nurturing a network eager to create<br className="hidden md:block" /> more opportunities for everyone, everywhere.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full max-w-5xl relative aspect-[4/3] md:aspect-[16/9] mb-16 flex items-center justify-center"
            >
                {/* Map Image Placeholder */}
                <div className="w-full h-full relative">
                    <img
                        src="/assets/images/metamap_world_offices.png"
                        alt="Global Network Map"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://picsum.photos/seed/globalmap/1200/800`;
                        }}
                    />
                </div>
            </motion.div>

            <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-[#050505] hover:bg-black text-white text-xs font-bold tracking-[0.1em] uppercase px-10 py-4 transition-colors"
            >
                Find Job Opportunities
            </motion.button>
        </section>
    );
}
