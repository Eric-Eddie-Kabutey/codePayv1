'use client';

import React from 'react';
import { motion } from 'framer-motion';

const resources = [
    {
        type: 'BLOG',
        time: '3 MIN',
        title: 'Introducing auto-capture for Web SDK: A smoother biometric and document capture experience'
    },
    {
        type: 'BLOG',
        time: '5 MIN',
        title: 'MetaMap’s enhanced OCR and formatting update: boosting identity verification efficiency'
    },
    {
        type: 'BLOG',
        time: '4 MIN',
        title: 'Introducing Incode’s Passive Liveness technology: a new era of selfie verification'
    }
];

export default function MoreResources() {
    return (
        <section className="w-full bg-white flex flex-col items-center py-24 px-6 md:px-12 lg:px-24">
            <div className="w-full max-w-6xl flex flex-col items-center">

                {/* Top Separator */}
                <div className="w-[300px] md:w-[400px] h-[1px] bg-gray-200 mb-16"></div>

                <h2 className="text-[2rem] md:text-[2.5rem] font-serif text-[#1F1F1F] leading-tight mb-16 text-center">
                    More MetaMap resources
                </h2>

                {/* Resources Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
                    {resources.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#F6F6F6] p-8 md:p-10 flex flex-col min-h-[320px] md:min-h-[380px] group cursor-pointer hover:bg-[#f0f0f0] transition-colors"
                        >
                            <div className="text-[0.65rem] text-gray-400 font-medium tracking-widest uppercase mb-6">
                                {item.type} | {item.time}
                            </div>
                            <h3 className="text-[1.15rem] md:text-[1.25rem] font-serif text-[#333333] leading-snug mb-8 group-hover:text-[#1F1F1F] transition-colors">
                                {item.title}
                            </h3>

                            <div className="mt-auto pt-8">
                                <span className="text-[0.75rem] text-gray-500 group-hover:text-[#1F1F1F] transition-colors">
                                    Read more &gt;
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Explore Button */}
                <button className="border border-gray-400 text-gray-500 hover:text-[#1F1F1F] hover:border-[#1F1F1F] transition-colors text-[0.75rem] font-medium tracking-widest uppercase px-8 py-3.5">
                    Explore more resources
                </button>

            </div>
        </section>
    );
}
