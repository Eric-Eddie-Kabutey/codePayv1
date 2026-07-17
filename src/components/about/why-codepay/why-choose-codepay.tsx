'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, CheckSquare, Expand, Network, ChevronLeft, ChevronRight } from 'lucide-react';

const accordionData = [
    {
        title: 'Wide set of data',
        icon: <Network className="w-5 h-5 text-[#6A5EE8]" />,
        content: 'One platform with a large variety of sources for a clear picture of your users and prospects.'
    },
    {
        title: 'Better decision-making',
        icon: <CheckSquare className="w-5 h-5 text-[#6A5EE8]" />,
        content: 'Leverage our comprehensive merit graph to make confident, data-driven decisions at scale.'
    },
    {
        title: 'Customize and scale',
        icon: <Expand className="w-5 h-5 text-[#6A5EE8]" />,
        content: 'Adapt the workflows and data sources to perfectly match your specific business requirements.'
    }
];

export default function WhyChooseCodePay() {
    const [ openIndex, setOpenIndex ] = useState(0);
    const [ sliderPos, setSliderPos ] = useState(50);
    const [ isDragging, setIsDragging ] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!isDragging || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPos(percentage);
    };

    useEffect(() => {
        const handleMouseUp = () => setIsDragging(false);
        const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
        const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[ 0 ].clientX);

        if (isDragging) {
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('touchend', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMove);
        }

        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchend', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [ isDragging ]);

    return (
        <section className="w-full bg-white flex flex-col items-center pt-24 pb-12">
            {/* Top Section */}
            <div className="w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-24">
                {/* Title Side */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h4 className="text-[#6A5EE8] text-[0.65rem] font-bold tracking-wider uppercase mb-6">Why choose MetaMap</h4>
                    <h2 className="text-[2.25rem] md:text-[2.75rem] font-serif text-[#1F1F1F] leading-tight">
                        We build solutions where<br />clarity meets accuracy
                    </h2>
                </motion.div>

                {/* Accordion Side */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col gap-3"
                >
                    {accordionData.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-sm overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-[#F4F4F4] shadow-sm' : 'bg-white border border-gray-100 hover:bg-gray-50'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(index)}
                                className="w-full flex items-center justify-between p-5 text-left"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="text-gray-500">{item.icon}</div>
                                    <span className={`text-[1.1rem] transition-colors ${openIndex === index ? 'text-[#1F1F1F] font-medium' : 'text-[#555555]'}`}>
                                        {item.title}
                                    </span>
                                </div>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-gray-400" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-5 pb-5 pl-[3.25rem] text-[0.95rem] text-[#555555] leading-relaxed">
                                            {item.content}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Middle Text */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-4xl px-6 text-center mb-16"
            >
                <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[#A197F4] to-transparent mx-auto mb-16"></div>
                <p className="text-[1.25rem] md:text-[1.5rem] font-light text-[#1F1F1F] leading-relaxed">
                    Our approach is to break user identity into atomic attributes called &apos;merits&apos;.<br />
                    A merit is an individual piece of information about a user that can be used to <strong className="font-medium">improve a prediction of their future behavior.</strong>
                </p>
            </motion.div>

            {/* Interactive Slider */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full max-w-[1400px] px-0 sm:px-6 mb-24"
            >
                <div
                    ref={containerRef}
                    className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1] sm:rounded-sm overflow-hidden select-none cursor-ew-resize group shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
                >
                    {/* Layer 1: Right Side (MetaMap Graph) */}
                    <div className="absolute inset-0 bg-[#E0DFE5]">
                        <div className="absolute top-6 right-6 md:top-12 md:right-12 text-right z-0">
                            <h3 className="text-[#6A5EE8] text-[1rem] md:text-[1.25rem] font-medium mb-1 md:mb-2">MetaMap&apos;s flexible and<br />customizable Merit Graph</h3>
                            <p className="text-[#777777] text-[0.75rem] md:text-[0.85rem]">Flexible data and workflows</p>
                        </div>
                        <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 text-right z-0">
                            <p className="text-[#777777] text-[0.75rem] md:text-[0.85rem]">Flexible conditional logic<br />and a growing network</p>
                        </div>

                        {/* Graph Nodes SVG & Elements */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            <svg className="absolute inset-0 w-full h-full" style={{ strokeDasharray: '4 4' }}>
                                <path d="M 50% 50% L 65% 35% L 75% 25%" stroke="#6A5EE8" strokeWidth="1" fill="none" opacity="0.4" />
                                <path d="M 50% 50% L 75% 55% L 85% 70%" stroke="#6A5EE8" strokeWidth="1" fill="none" opacity="0.4" />
                                <path d="M 65% 35% L 80% 40%" stroke="#6A5EE8" strokeWidth="1" fill="none" opacity="0.4" />
                                <path d="M 75% 55% L 85% 45%" stroke="#6A5EE8" strokeWidth="1" fill="none" opacity="0.4" />
                            </svg>

                            <div className="absolute top-[30%] right-[32%] w-16 h-16 md:w-20 md:h-20 bg-[#6A5EE8] text-white text-[0.6rem] md:text-[0.7rem] p-2 flex flex-col shadow-sm">
                                <span className="opacity-70 mb-0.5">—</span>
                                Background<br />Check
                            </div>

                            <div className="absolute top-[20%] right-[18%] w-14 h-14 md:w-16 md:h-16 bg-[#6A5EE8] text-white text-[0.55rem] md:text-[0.65rem] p-2 flex flex-col shadow-sm">
                                <span className="opacity-70 mb-0.5">—</span>
                                Criminal<br />Record
                            </div>

                            <div className="absolute top-[48%] right-[22%] w-18 h-18 md:w-24 md:h-24 bg-[#6A5EE8] text-white text-[0.65rem] md:text-[0.75rem] p-3 flex flex-col shadow-sm">
                                <span className="opacity-70 mb-0.5">—</span>
                                Credit<br />Score
                            </div>

                            <div className="absolute top-[40%] right-[10%] w-14 h-14 md:w-16 md:h-16 bg-[#6A5EE8] text-white text-[0.55rem] md:text-[0.65rem] p-2 flex flex-col shadow-sm">
                                <span className="opacity-70 mb-0.5">—</span>
                                Court<br />Records
                            </div>

                            <div className="absolute bottom-[20%] right-[30%] w-16 h-16 md:w-20 md:h-20 bg-[#6A5EE8] text-white text-[0.6rem] md:text-[0.7rem] p-2 flex flex-col shadow-sm">
                                <span className="opacity-70 mb-0.5">—</span>
                                Loan<br />Payment
                            </div>

                            <div className="absolute bottom-[28%] right-[12%] w-16 h-16 md:w-20 md:h-20 bg-[#6A5EE8] text-white text-[0.6rem] md:text-[0.7rem] p-2 flex flex-col shadow-sm">
                                <span className="opacity-70 mb-0.5">—</span>
                                Tax<br />Data
                            </div>
                        </div>
                    </div>

                    {/* Layer 2: Left Side (Regular DB) */}
                    <div
                        className="absolute inset-0 bg-[#F4F4F4] border-r-2 border-white/50"
                        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                    >
                        <div className="absolute top-6 left-6 md:top-12 md:left-12 z-0 whitespace-nowrap">
                            <h3 className="text-[#1F1F1F] text-[1rem] md:text-[1.25rem] font-medium mb-1 md:mb-2">Regular inflexible<br />identity database</h3>
                            <p className="text-[#777777] text-[0.75rem] md:text-[0.85rem]">Rigid data and workflows</p>
                        </div>
                        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-0 whitespace-nowrap">
                            <p className="text-[#777777] text-[0.75rem] md:text-[0.85rem]">Linear sequence<br />of steps</p>
                        </div>

                        {/* Sequence Nodes */}
                        <div className="absolute inset-0 pointer-events-none flex items-center justify-start pl-[5%] md:pl-[12%] gap-4 md:gap-8 min-w-[800px]">
                            <div className="w-16 h-16 md:w-24 md:h-24 bg-white border border-[#6A5EE8] text-[#6A5EE8] text-[0.65rem] md:text-[0.75rem] p-2 flex flex-col shadow-sm">
                                <span className="mb-1 text-[0.6rem] opacity-50">—</span>
                                Full<br />Name
                            </div>
                            <div className="w-4 h-[1px] bg-[#6A5EE8] relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-[#6A5EE8] rotate-45"></div></div>

                            <div className="w-16 h-16 md:w-24 md:h-24 bg-white border border-[#6A5EE8] text-[#6A5EE8] text-[0.65rem] md:text-[0.75rem] p-2 flex flex-col shadow-sm">
                                <span className="mb-1 text-[0.6rem] opacity-50">—</span>
                                Address
                            </div>
                            <div className="w-4 h-[1px] bg-[#6A5EE8] relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-[#6A5EE8] rotate-45"></div></div>

                            <div className="w-16 h-16 md:w-24 md:h-24 bg-white border border-[#6A5EE8] text-[#6A5EE8] text-[0.65rem] md:text-[0.75rem] p-2 flex flex-col shadow-sm">
                                <span className="mb-1 text-[0.6rem] opacity-50">—</span>
                                Phone 1
                            </div>
                            <div className="w-4 h-[1px] bg-[#6A5EE8] relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-[#6A5EE8] rotate-45"></div></div>

                            <div className="w-16 h-16 md:w-24 md:h-24 bg-white border border-[#6A5EE8] text-[#6A5EE8] text-[0.65rem] md:text-[0.75rem] p-2 flex flex-col shadow-sm">
                                <span className="mb-1 text-[0.6rem] opacity-50">—</span>
                                Phone 2
                            </div>
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-0.5 bg-white/50 pointer-events-none flex items-center justify-center z-10 shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                        style={{ left: `${sliderPos}%` }}
                    >
                        <div
                            className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center overflow-hidden border-4 border-white pointer-events-auto touch-none cursor-grab active:cursor-grabbing hover:scale-105 transition-transform"
                            onMouseDown={() => setIsDragging(true)}
                            onTouchStart={() => setIsDragging(true)}
                        >
                            <img src="https://picsum.photos/seed/avatar5/150/150" alt="Avatar" className="w-full h-full object-cover" draggable={false} />
                            <div className="absolute inset-0 flex items-center justify-between px-2 text-white/90 pointer-events-none">
                                <ChevronLeft className="w-5 h-5 drop-shadow-md" />
                                <ChevronRight className="w-5 h-5 drop-shadow-md" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
