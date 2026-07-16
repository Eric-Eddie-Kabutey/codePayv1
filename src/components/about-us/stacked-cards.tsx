'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function StackedCards() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: [ "start start", "end end" ]
    });

    // Calculate transform for Card 1 when scrolling past 33% (Card 2 covers it)
    const scaleCard1 = useTransform(scrollYProgress, [ 0, 0.33 ], [ 1, 0.95 ]);
    const opacityCard1 = useTransform(scrollYProgress, [ 0, 0.33 ], [ 1, 0.4 ]);

    // Calculate transform for Card 2 when scrolling past 66% (Card 3 covers it)
    const scaleCard2 = useTransform(scrollYProgress, [ 0.33, 0.66 ], [ 1, 0.95 ]);
    const opacityCard2 = useTransform(scrollYProgress, [ 0.33, 0.66 ], [ 1, 0.4 ]);

    return (
        <div ref={containerRef} className="relative w-6xl mx-auto py-8 md:py-16 lg:py-24">
            {/* 
        The container height is naturally determined by the total height 
        of the non-absolute, sticky children. Since each is min-h-screen, 
        the container will be at least 300vh.
      */}

            {/* CARD 1 - PINK */}
            <motion.section
                className="sticky top-0 w-full min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 bg-[#E61C7A] text-white z-10 overflow-hidden"
            >
                <motion.div
                    className="max-w-7xl w-full mx-auto"
                    style={{ scale: scaleCard1, opacity: opacityCard1 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        <div className="lg:col-span-7 flex flex-col items-start text-left">
                            <span className="text-sm font-bold tracking-widest uppercase opacity-80 mb-6 block">Our Mission</span>
                            <h2 className="text-[2.25rem] md:text-[3rem] lg:text-[3.5rem] font-serif leading-[1.15] mb-8">
                                A borderless world where everyone has access to the services they need
                            </h2>
                            <div className="flex flex-col gap-6 text-lg md:text-xl font-light leading-relaxed opacity-90">
                                <p>
                                    Our mission is to develop a borderless customer identity platform that enables businesses to predict who they should serve and to what extent accurately.
                                </p>
                                <p>
                                    Our ambition is to host the most comprehensive data catalog. We launched our platform by indexing every type of verifiable data that is valuable to most customers. In the next phase, we will diversify by depth and breadth of data, so our platform can become increasingly connected.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-5 flex justify-center items-center mt-12 lg:mt-0">
                            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full bg-[#FFD166] opacity-20"></div>
                                <div className="absolute inset-6 md:inset-8 rounded-full bg-[#FFC045] opacity-40"></div>
                                <div className="absolute inset-12 md:inset-16 rounded-full bg-[#FF9F1C] opacity-60"></div>
                                <div className="absolute inset-18 md:inset-24 rounded-full bg-[#F77F00] opacity-80"></div>
                                <div className="absolute inset-24 md:inset-32 rounded-full bg-[#D62828]"></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 lg:mt-24 border-t border-white/20 pt-10">
                        <p className="text-sm font-semibold mb-8 opacity-90 text-center lg:text-left">We're backed by the best investors in Silicon Valley and beyond</p>
                        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 md:gap-12 opacity-80">
                            <span className="font-bold text-lg md:text-xl tracking-widest uppercase">Tribe Capital</span>
                            <span className="font-bold text-lg md:text-xl tracking-widest uppercase">Susa Ventures</span>
                            <span className="font-bold text-lg md:text-xl tracking-widest uppercase">Creator</span>
                            <span className="font-bold text-lg md:text-xl tracking-widest uppercase">Aglaé</span>
                        </div>
                    </div>
                </motion.div>
            </motion.section>

            {/* CARD 2 - YELLOW */}
            <motion.section
                className="sticky top-0 w-full min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 bg-[#F4CD46] text-[#1F1F1F] z-20 overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.15)]"
            >
                <motion.div
                    className="max-w-7xl w-full mx-auto"
                    style={{ scale: scaleCard2, opacity: opacityCard2 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        <div className="lg:col-span-7 flex flex-col items-start text-left">
                            <span className="text-sm font-bold tracking-widest uppercase opacity-70 mb-6 block">The Problem We Solve</span>
                            <h2 className="text-[2.25rem] md:text-[3rem] lg:text-[3.5rem] font-serif leading-[1.15] mb-8">
                                Businesses can't work with 2/3 of the world's population
                            </h2>
                            <div className="flex flex-col gap-6 text-lg md:text-xl font-light leading-relaxed text-[#333333]">
                                <p>
                                    Why? Because they don't have the information to find them, understand them, and be confident they can work with them. The data they need is inaccessible, fragmented, and difficult to interpret, particularly in developing regions.
                                </p>
                                <p>
                                    This problem cannot be understated. It affects every business, in every industry, across every aspect of life. As a result, <strong className="font-medium text-[#1F1F1F]">businesses today operate at a fraction of their true potential.</strong>
                                </p>
                                <p className="font-medium text-xl mt-2 text-[#1F1F1F]">
                                    MetaMap enables businesses to access, understand, and work with the world population.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-5 flex justify-center items-center mt-12 lg:mt-0">
                            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                                <div className="absolute top-1/4 right-1/4 w-32 h-32 md:w-40 md:h-40 bg-[#E61C7A] opacity-90 transform -rotate-12 translate-x-4 -translate-y-4"></div>
                                <div className="relative w-40 h-40 md:w-56 md:h-56 bg-[#6C5CE7] transform rotate-45 shadow-xl flex items-center justify-center">
                                    <div className="absolute top-4 left-4 w-3 h-3 bg-white rounded-full"></div>
                                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-white rounded-full"></div>
                                </div>
                                <div className="absolute bottom-1/4 left-1/4 w-12 h-12 md:w-16 md:h-16 bg-[#00CEC9] rounded-full transform -translate-x-6 translate-y-6"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.section>

            {/* CARD 3 - PURPLE */}
            <motion.section
                className="sticky top-0 w-full min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 bg-[#6C5CE7] text-white z-30 overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.15)]"
            >
                <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
                    <span className="text-sm font-bold tracking-widest uppercase opacity-80 mb-6 block">How MetaMap Can Help Your Business</span>
                    <h2 className="text-[2.25rem] md:text-[3rem] lg:text-[4rem] font-serif leading-[1.1] mb-10">
                        Simplify identity verification and understand your customers. All in one powerful platform
                    </h2>
                    <div className="flex flex-col gap-6 text-lg md:text-xl font-light leading-relaxed opacity-90 max-w-3xl mx-auto mb-20">
                        <p>
                            MetaMap allows your business to implement customized verification flows to meet your onboarding, compliance, and verification needs.
                        </p>
                        <p>
                            Discover a curated catalog of tools designed to streamline your verification processes, elevate your efficiency, and scale your operations, all on the same platform.
                        </p>
                    </div>

                    <div className="w-full pt-16 border-t border-white/20">
                        <p className="text-sm font-semibold mb-10 opacity-90 tracking-widest uppercase">Top-tier enterprises across diverse sectors trust our verification platform</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-90">
                            <span className="font-bold text-2xl tracking-wide">Kuda.</span>
                            <span className="font-bold text-2xl tracking-wide">sparkle</span>
                            <span className="font-bold text-2xl tracking-wide">Bundle</span>
                            <span className="font-bold text-2xl tracking-wide">creditas</span>
                            <span className="font-bold text-2xl tracking-wide">WIBOND</span>
                            <span className="font-bold text-2xl tracking-wide">buenbit</span>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
