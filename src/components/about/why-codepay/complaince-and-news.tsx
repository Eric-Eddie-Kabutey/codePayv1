'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Compliance Logos
const SocLogos = () => (
    <div className="flex gap-2">
        <div className="w-16 h-16 rounded-full bg-[#0081C6] text-white flex flex-col items-center justify-center p-1 border-[3px] border-white shadow-sm ring-1 ring-gray-200">
            <span className="text-[0.4rem] uppercase font-bold text-center leading-[0.8] mb-0.5">AICPA</span>
            <span className="text-[0.85rem] font-black leading-none">SOC 2</span>
        </div>
        <div className="w-16 h-16 rounded-full bg-[#0081C6] text-white flex flex-col items-center justify-center p-1 border-[3px] border-white shadow-sm ring-1 ring-gray-200">
            <span className="text-[0.4rem] uppercase font-bold text-center leading-[0.8] mb-0.5">AICPA</span>
            <span className="text-[0.85rem] font-black leading-none">SOC 3</span>
        </div>
    </div>
);

const IsoLogo = () => (
    <div className="w-16 h-16 rounded-full bg-white text-[#5C89C1] flex flex-col items-center justify-center p-1 border-[1.5px] border-[#5C89C1]">
        <span className="text-[0.85rem] font-black leading-none">ISO</span>
        <span className="text-[0.6rem] font-bold">27001</span>
    </div>
);

const CsaLogo = () => (
    <div className="w-16 h-16 rounded-full bg-[#1F548C] text-white flex flex-col items-center justify-center p-1 border-[3px] border-white ring-1 ring-gray-200">
        <span className="text-[0.85rem] font-black leading-none">STAR</span>
        <span className="text-[0.35rem] font-bold mt-1 tracking-tighter">LEVEL ONE</span>
    </div>
);

// News Logos
const TechCrunchLogo = () => (
    <div className="font-bold text-[1.4rem] text-[#333333] tracking-tighter flex items-center gap-1">
        <div className="flex text-white font-sans">
            <span className="bg-[#1F1F1F] px-1 leading-none h-6 flex items-center pt-0.5">T</span>
            <span className="leading-none text-[1.6rem] -ml-0.5 tracking-tighter text-[#1F1F1F]">C</span>
        </div>
        TechCrunch
    </div>
);

const YahooLogo = () => (
    <div className="flex flex-col text-[#720e9e] font-bold tracking-tight">
        <div className="text-[1.5rem] leading-none">yahoo<span className="text-[1.1rem]">!</span></div>
        <div className="text-[0.75rem] leading-none text-[#1F1F1F] font-black tracking-tighter">finance</div>
    </div>
);

const ForbesLogo = () => (
    <div className="font-serif font-bold text-[1.75rem] text-[#333333] tracking-tight leading-none">
        Forbes
    </div>
);

export default function ComplianceAndNews() {
    return (
        <section className="w-full bg-white flex flex-col items-center pt-16 pb-24 px-6 md:px-12">
            <div className="w-full max-w-5xl flex flex-col items-center">

                {/* Compliance Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full flex flex-col items-center mb-20"
                >
                    <h3 className="text-[1.15rem] md:text-[1.25rem] font-medium text-[#1F1F1F] mb-12">
                        MetaMap is fully compliant
                    </h3>

                    <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-16">
                        <div className="flex flex-col items-center gap-4">
                            <SocLogos />
                            <span className="text-center text-[0.95rem] font-medium text-[#333333]">
                                SOC2 Type II<br />& SOC3
                            </span>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <IsoLogo />
                            <span className="text-center text-[0.95rem] font-medium text-[#333333]">
                                ISO 27001:<br />2013
                            </span>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <CsaLogo />
                            <span className="text-center text-[0.95rem] font-medium text-[#333333]">
                                CSA Star Level<br />One CAIQ
                            </span>
                        </div>
                    </div>
                </motion.div>

                <div className="w-full h-[1px] bg-gray-200 mb-20 max-w-4xl"></div>

                {/* News Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full flex flex-col items-center"
                >
                    <h2 className="text-[2.25rem] md:text-[2.75rem] font-serif text-[#1F1F1F] leading-tight mb-4">
                        MetaMap in the news
                    </h2>
                    <p className="text-[1.05rem] text-[#555555] font-light text-center max-w-3xl leading-relaxed mb-14">
                        Discover more about our identity verification platform and our work to enable businesses to interact with a much larger pool of potential customers confidently.
                    </p>

                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-8 mb-16 px-4 md:px-0">

                        {/* TechCrunch Card */}
                        <div className="bg-white border-2 border-[#6A5EE8] p-8 flex flex-col justify-between min-h-[300px]" style={{ boxShadow: '8px 8px 0px #6A5EE8' }}>
                            <div>
                                <div className="mb-6 h-10 flex items-center">
                                    <TechCrunchLogo />
                                </div>
                                <p className="text-[0.95rem] text-[#333333] leading-relaxed mb-8 font-light">
                                    MetaMap reshapes online trust and reputation.
                                </p>
                            </div>
                            <a href="#" className="text-[0.85rem] text-[#555555] hover:text-[#1F1F1F] transition-colors">
                                Read the full article &gt;
                            </a>
                        </div>

                        {/* Yahoo Finance Card */}
                        <div className="bg-white border-2 border-[#43CAEF] p-8 flex flex-col justify-between min-h-[300px]" style={{ boxShadow: '8px 8px 0px #43CAEF' }}>
                            <div>
                                <div className="mb-6 h-10 flex items-center">
                                    <YahooLogo />
                                </div>
                                <p className="text-[0.95rem] text-[#333333] leading-relaxed mb-8 font-light">
                                    MetaMap Expands Executive Leadership Team with Strategic Hires from Shopify and Block (formerly Square).
                                </p>
                            </div>
                            <a href="#" className="text-[0.85rem] text-[#555555] hover:text-[#1F1F1F] transition-colors">
                                Read the full article &gt;
                            </a>
                        </div>

                        {/* Forbes Card */}
                        <div className="bg-white border-2 border-[#FFC444] p-8 flex flex-col justify-between min-h-[300px]" style={{ boxShadow: '8px 8px 0px #FFC444' }}>
                            <div>
                                <div className="mb-6 h-10 flex items-center">
                                    <ForbesLogo />
                                </div>
                                <p className="text-[0.95rem] text-[#333333] leading-relaxed mb-8 font-light">
                                    MetaMap is one of the next Billion-Dollar Startups and one of the companies on the 2022 AI 50 list.
                                </p>
                            </div>
                            <a href="#" className="text-[0.85rem] text-[#555555] hover:text-[#1F1F1F] transition-colors">
                                Read the full article &gt;
                            </a>
                        </div>

                    </div>

                    <button className="bg-[#111111] hover:bg-black text-white text-[0.75rem] font-bold tracking-[0.15em] uppercase px-8 py-3.5 transition-colors">
                        Visit our press site
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
