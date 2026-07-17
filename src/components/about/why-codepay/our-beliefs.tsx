'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function OurBeliefs() {
    const beliefs = [
        {
            title: "Better customer understanding",
            description: "We provide businesses with access to a comprehensive data set to understand their customers as quickly and accurately as possible."
        },
        {
            title: "Customizable and automated workflows",
            description: "We enable companies to improve decision-making and reduce risk. The modularity of our solutions allows businesses to customize and automate workflows at scale."
        },
        {
            title: "Borderless growth for businesses",
            description: "Major enterprises choose to partner with us because we enable workflows that lead to informed decisions, fewer user rejections, and high-quality growth"
        }
    ];

    return (
        <section className="w-full bg-[#6A5EE8] py-24 px-6 md:px-12 flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-6xl flex flex-col items-center"
            >
                <span className="text-[#FFC444] text-[0.65rem] font-bold tracking-widest uppercase mb-4">
                    Our Beliefs
                </span>

                <h2 className="text-[2rem] md:text-[2.75rem] font-serif text-white leading-tight mb-16 max-w-3xl">
                    MetaMap builds trust between<br className="hidden md:block" /> businesses and people
                </h2>

                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 mb-16">
                    {beliefs.map((belief, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-white"
                        >
                            <div className="w-8 h-[2px] bg-white/40 mb-6"></div>
                            <h3 className="text-[1.25rem] md:text-[1.35rem] font-medium leading-snug mb-4 max-w-[240px]">
                                {belief.title}
                            </h3>
                            <p className="text-[0.95rem] font-light leading-relaxed opacity-90">
                                {belief.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="w-full h-[1px] bg-white/20 mb-12"></div>

                <p className="text-white text-[1.15rem] md:text-[1.35rem] font-medium leading-relaxed max-w-4xl">
                    Our end goal is to empower businesses to focus on their operations<br className="hidden md:block" /> by completely abstracting the identity and reputation infrastructure.
                </p>
            </motion.div>
        </section>
    );
}
