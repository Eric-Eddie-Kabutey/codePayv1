'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function MoreAbout() {
    const cards = [
        {
            title: "Why MetaMap?",
            description: "Dive into our core values and vision of the company",
            lineColor: "bg-[#D6CFFF]" // Light purple
        },
        {
            title: "MetaMap in the news",
            description: "Visit our press site and read the media coverage",
            lineColor: "bg-[#BFE9E6]" // Light teal
        },
        {
            title: "Platform",
            description: "Explore the heart of our technology and see how we can help your business",
            lineColor: "bg-[#D6CFFF]" // Light purple
        },
        {
            title: "Solutions",
            description: "Navigate by industry or by use case and find the right solution for your business",
            lineColor: "bg-[#BFE9E6]" // Light teal
        }
    ];

    return (
        <section className="bg-white py-24 px-6 md:px-12 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl flex flex-col items-center text-center gap-6 mb-16"
            >
                <h2 className="text-[2.25rem] md:text-[3rem] font-serif text-[#1F1F1F] leading-[1.15]">
                    More about MetaMap
                </h2>
                <p className="text-lg md:text-xl text-[#333333] font-light leading-relaxed max-w-3xl">
                    Discover more about our identity verification platform and our work to enable businesses to interact with a much larger pool of potential customers confidently.
                </p>
            </motion.div>

            <div className="w-full max-w-[75rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="border border-gray-200 p-8 flex flex-col h-full hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-shadow duration-300 bg-white"
                    >
                        <h3 className="text-[1.35rem] font-serif text-[#1F1F1F] mb-5">{card.title}</h3>
                        <div className={`w-full h-[2px] ${card.lineColor} mb-6`}></div>
                        <p className="text-[#555555] font-light text-[0.95rem] leading-relaxed mb-12 flex-grow">
                            {card.description}
                        </p>
                        <a href="#" className="inline-flex items-center text-[#555555] hover:text-[#1F1F1F] transition-colors text-[0.95rem] font-light mt-auto group">
                            Learn more
                            <ChevronRight className="w-[18px] h-[18px] ml-1 text-gray-400 group-hover:text-[#1F1F1F] transition-colors" strokeWidth={1.5} />
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
