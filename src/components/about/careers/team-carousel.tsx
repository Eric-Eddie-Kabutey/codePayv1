'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, MoveHorizontal } from 'lucide-react';
import Image from 'next/image';

const teamImages = [
    "/assets/images/metamap_team_1-1.jpg",
    "/assets/images/metamap_team_2-1.jpg",
    "/assets/images/metamap_team_1-1.jpg",
    "/assets/images/metamap_team_1-1.jpg",
    "/assets/images/metamap_team_1-1.jpg",
];

export default function TeamCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [ activeIndex, setActiveIndex ] = useState(0);

    const scrollNext = () => {
        if (scrollRef.current) {
            const itemWidth = scrollRef.current.children[ 0 ].clientWidth;
            scrollRef.current.scrollBy({ left: itemWidth + 24, behavior: 'smooth' }); // 24 is gap (1.5rem)
        }
    };

    const scrollPrev = () => {
        if (scrollRef.current) {
            const itemWidth = scrollRef.current.children[ 0 ].clientWidth;
            scrollRef.current.scrollBy({ left: -(itemWidth + 24), behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const itemWidth = scrollRef.current.children[ 0 ].clientWidth + 24;
            const index = Math.round(scrollLeft / itemWidth);
            setActiveIndex(index);
        }
    };

    // Nudge animation for indication
    const [ isNudged, setIsNudged ] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[ 0 ].isIntersecting && !isNudged) {
                setIsNudged(true);
                setTimeout(() => {
                    if (scrollRef.current) {
                        scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
                        setTimeout(() => {
                            if (scrollRef.current) {
                                scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' });
                            }
                        }, 400);
                    }
                }, 1000);
            }
        }, { threshold: 0.5 });

        if (scrollRef.current) {
            observer.observe(scrollRef.current);
        }

        return () => observer.disconnect();
    }, [ isNudged ]);

    return (
        <section className="bg-white py-24 flex flex-col items-center overflow-hidden">
            <style dangerouslySetInnerHTML={{
                __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
            >
                <h2 className="text-[2.25rem] md:text-[3rem] font-serif text-[#1F1F1F] leading-tight">
                    Our team
                </h2>
            </motion.div>

            {/* Swipe Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-2 text-gray-400 mb-6 md:hidden"
            >
                <MoveHorizontal className="w-5 h-5 animate-pulse" />
                <span className="text-sm font-light">Swipe to explore</span>
            </motion.div>

            <div className="relative w-full">
                {/* Navigation Arrows */}
                <div className="hidden md:flex absolute inset-y-0 left-0 right-0 items-center justify-between px-8 z-20 pointer-events-none">
                    <button
                        onClick={scrollPrev}
                        disabled={activeIndex === 0}
                        className="w-14 h-14 rounded-full bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center text-gray-800 hover:bg-white hover:scale-105 active:scale-95 disabled:opacity-0 disabled:scale-100 transition-all pointer-events-auto"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                        onClick={scrollNext}
                        disabled={activeIndex === teamImages.length - 1}
                        className="w-14 h-14 rounded-full bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center text-gray-800 hover:bg-white hover:scale-105 active:scale-95 disabled:opacity-0 disabled:scale-100 transition-all pointer-events-auto"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>
                </div>

                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-6 hide-scrollbar"
                    style={{
                        paddingLeft: 'calc(50vw - min(42.5vw, 450px))',
                        paddingRight: 'calc(50vw - min(42.5vw, 450px))',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    {teamImages.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0.8, scale: 0.95 }}
                            animate={{
                                opacity: activeIndex === index ? 1 : 0.6,
                                scale: activeIndex === index ? 1 : 0.95
                            }}
                            transition={{ duration: 0.4 }}
                            className="snap-center shrink-0 w-[85vw] max-w-[900px] aspect-[4/3] md:aspect-[16/9] relative bg-gray-100"
                        >
                            <Image
                                src={src}
                                alt={`Team member ${index + 1}`}
                                fill
                                className="object-cover"
                                referrerPolicy="no-referrer"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-3 mt-10">
                {teamImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            if (scrollRef.current) {
                                const itemWidth = scrollRef.current.children[ 0 ].clientWidth + 24;
                                scrollRef.current.scrollTo({ left: itemWidth * index, behavior: 'smooth' });
                            }
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-[#1F1F1F] w-6' : 'bg-gray-300 w-2 hover:bg-gray-400'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
