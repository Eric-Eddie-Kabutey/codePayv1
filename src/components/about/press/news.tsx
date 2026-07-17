'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Featured Logos
const IncodeMetaMapLogo = () => (
    <div className="flex items-center gap-1 font-bold text-[1.1rem] tracking-tight text-[#1F1F1F]">
        <span>incode</span>
        <span className="font-light text-gray-300">|</span>
        <span className="font-normal text-gray-500">MetaMap</span>
    </div>
);

const TechCrunchLogo = () => (
    <div className="font-bold text-[1.1rem] text-[#333333] tracking-tighter flex items-center gap-1">
        <div className="flex text-white font-sans">
            <span className="bg-[#1F1F1F] px-1 leading-none h-5 flex items-center pt-0.5">T</span>
            <span className="leading-none text-[1.3rem] -ml-0.5 tracking-tighter text-[#1F1F1F]">C</span>
        </div>
        TechCrunch
    </div>
);

const YahooFinanceLogo = () => (
    <div className="flex flex-col text-[#720e9e] font-bold tracking-tight">
        <div className="text-[1.3rem] leading-none">yahoo<span className="text-[0.9rem]">!</span></div>
        <div className="text-[0.65rem] leading-none text-[#1F1F1F] font-black tracking-tighter">finance</div>
    </div>
);

const ForbesLogo = () => (
    <div className="font-serif font-bold text-[1.5rem] text-[#333333] tracking-tight leading-none">
        Forbes
    </div>
);

// Grid Logos (Simple text/SVG representations for fidelity)
const SiliconAngleLogo = () => (
    <div className="flex items-center gap-1 text-gray-500 font-bold tracking-widest text-[0.6rem] uppercase">
        <div className="w-3 h-3 bg-gray-400 rotate-45 transform scale-75"></div>
        silicon<span className="font-light">ANGLE</span>
    </div>
);

const LatinAmericanPostLogo = () => (
    <div className="text-gray-500 font-serif tracking-widest text-[0.65rem] uppercase">
        LatinAmerican <span className="font-bold">Post</span>
    </div>
);

const IndigoLogo = () => (
    <div className="flex items-center gap-1 text-gray-600 font-black text-[1.1rem] tracking-tighter">
        <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-gray-600"></div>
        indigo
    </div>
);

const ElSolDeMexicoLogo = () => (
    <div className="font-serif text-gray-500 italic font-bold text-[0.8rem]">
        El Sol de México
    </div>
);

const ClarinLogo = () => (
    <div className="bg-gray-400 text-white font-serif font-black px-1 text-[0.8rem] tracking-tight">
        CLARÍN
    </div>
);

const MilenioLogo = () => (
    <div className="font-serif text-gray-500 font-bold text-[1.1rem] tracking-widest">
        MILENIO<span className="text-[0.5rem] align-super">&reg;</span>
    </div>
);

const AxisNegociosLogo = () => (
    <div className="flex flex-col text-gray-500">
        <span className="font-sans font-light tracking-[0.2em] text-[0.8rem] leading-none">AXIS</span>
        <span className="font-sans font-bold tracking-wider text-[0.5rem] leading-none">negocios</span>
    </div>
);

const SacraLogo = () => (
    <div className="flex flex-col text-gray-600 font-bold text-[0.5rem] tracking-[0.2em] uppercase w-8">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 mb-1">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <path d="M8 12h8" />
        </svg>
        SACRA
    </div>
);

const PymntsLogo = () => (
    <div className="font-sans text-gray-600 font-light text-[1.4rem] tracking-widest">
        PYMNTS
    </div>
);

const ContxtoLogo = () => (
    <div className="font-sans text-gray-600 font-medium text-[1.2rem] tracking-tighter flex items-center gap-0.5">
        cont<span className="text-[0.8rem]">x</span>to
    </div>
);

const YourStoryLogo = () => (
    <div className="font-sans text-gray-600 font-black text-[1.1rem] tracking-tighter">
        YOURSTORY
    </div>
);

export default function News() {
    const featuredNews = [
        {
            logo: <IncodeMetaMapLogo />,
            color: "#FF5A8F",
            content: <><strong className="font-bold text-[#1F1F1F]">Incode Acquires MetaMap</strong> to Lead the Future of Identity Verification</>
        },
        {
            logo: <TechCrunchLogo />,
            color: "#6A5EE8",
            content: <>“[MetaMap] believes it has found the <strong className="font-bold text-[#1F1F1F]">right balance between privacy and trust.</strong>”</>
        },
        {
            logo: <YahooFinanceLogo />,
            color: "#43CAEF",
            content: <>“<strong className="font-bold text-[#1F1F1F]">MetaMap</strong> is the digital trust and reputation layer that powers <strong className="font-bold text-[#1F1F1F]">borderless growth.</strong>”</>
        },
        {
            logo: <ForbesLogo />,
            color: "#FFC444",
            content: <>“Filip Victor [CEO] founded <strong className="font-bold text-[#1F1F1F]">MetaMap</strong> to solve the problem of online identity verification by aggregating <strong className="font-bold text-[#1F1F1F]">dozens of data points.</strong>”</>
        }
    ];

    const gridNews = [
        {
            logo: <SiliconAngleLogo />,
            content: "Incode and MetaMap to tackle the evolving challenges in identity verification"
        },
        {
            logo: <LatinAmericanPostLogo />,
            content: "Incode acquires MetaMap to strengthen security and trust in digital interactions"
        },
        {
            logo: <IndigoLogo />,
            content: "Incode and MetaMap advance identity verification beyond borders"
        },
        {
            logo: <ElSolDeMexicoLogo />,
            content: "Incode and MetaMap aim to dominate the market in Latin America and the Caribbean"
        },
        {
            logo: <ClarinLogo />,
            content: "Incode and MetaMap strengthen Identity Verification"
        },
        {
            logo: <MilenioLogo />,
            content: "Incode and MetaMap strengthen their presence in Latin America"
        },
        {
            logo: <AxisNegociosLogo />,
            content: "Incode and MetaMap seek synergy in Latin America"
        },
        {
            logo: <YahooFinanceLogo />,
            content: "Incode and MetaMap Unite to Lead the Future in Identity Verification",
            scale: 0.8
        },
        {
            logo: <SacraLogo />,
            content: "MetaMap, Ontop and Base10 Partners insights on LatAm startup ecosystem"
        },
        {
            logo: <PymntsLogo />,
            content: "MetaMap: a digital trust and reputation management platform"
        },
        {
            logo: <ContxtoLogo />,
            content: "MetaMap: Seeking fair access to financial services"
        },
        {
            logo: <YourStoryLogo />,
            content: "MetaMap, a reputation and digital trust management service"
        },
        {
            logo: <TechCrunchLogo />,
            content: "Spero Ventures invests in MetaMap, a startup pitching ID-verification",
            scale: 0.9
        }
    ];

    return (
        <section className="w-full bg-white flex flex-col items-center py-24 px-6 md:px-12 lg:px-24">
            <div className="w-full max-w-7xl flex flex-col items-center">

                <h2 className="text-[2.25rem] md:text-[3rem] font-serif text-[#1F1F1F] leading-tight mb-16 text-center">
                    MetaMap in the news
                </h2>

                {/* Featured News Cards */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-24">
                    {featuredNews.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white border-2 p-8 flex flex-col justify-between min-h-[320px] transition-transform hover:-translate-y-1"
                            style={{
                                borderColor: item.color,
                                boxShadow: `8px 8px 0px ${item.color}`
                            }}
                        >
                            <div>
                                <div className="mb-8 h-10 flex items-center">
                                    {item.logo}
                                </div>
                                <p className="text-[0.95rem] text-[#555555] leading-relaxed mb-8 font-light">
                                    {item.content}
                                </p>
                            </div>
                            <a href="#" className="text-[0.8rem] text-[#555555] hover:text-[#1F1F1F] transition-colors mt-auto">
                                Read the full article &gt;
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Grid News Items */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-16">
                    {gridNews.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
                            className="flex flex-col border-t border-gray-200 pt-6"
                        >
                            <div className="mb-4 h-10 flex items-center" style={item.scale ? { transform: `scale(${item.scale})`, transformOrigin: 'left center' } : {}}>
                                {item.logo}
                            </div>
                            <p className="text-[0.85rem] text-[#555555] font-light leading-relaxed mb-6 flex-grow pr-4">
                                {item.content}
                            </p>
                            <a href="#" className="text-[0.75rem] text-[#555555] hover:text-[#1F1F1F] transition-colors mt-auto">
                                Read the full article &gt;
                            </a>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
