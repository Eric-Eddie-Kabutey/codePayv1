'use client';

import React from 'react';
import { motion } from 'framer-motion';

const LogoSpero = () => (
    <div className="flex flex-col items-center justify-center font-sans font-bold text-black tracking-tight leading-none gap-1">
        <div className="w-8 h-8 border-[1.5px] border-black rounded-[2px] relative overflow-hidden flex items-end justify-center pb-0.5">
            <div className="w-[120%] h-[70%] border-[1.5px] border-black rounded-t-[50%] absolute bottom-[-10%]"></div>
            <div className="w-[70%] h-[40%] border-[1.5px] border-black rounded-t-[50%] absolute bottom-[-5%] bg-white"></div>
        </div>
        <span className="text-[0.6rem] lowercase">spero</span>
    </div>
);

const LogoTribe = () => (
    <div className="font-serif font-bold text-[1.1rem] tracking-tight flex items-center justify-center h-10">
        TRIBE CAPITAL
    </div>
);

const LogoKima = () => (
    <div className="flex items-center justify-center relative">
        <div className="bg-black text-white text-[0.65rem] font-bold px-1.5 py-1 leading-none rounded-sm relative z-10 -mr-1.5 mb-2 border-[1.5px] border-black">kima</div>
        <div className="border-[1.5px] border-black text-black text-[0.55rem] font-bold px-1.5 py-0.5 leading-none rounded-sm bg-white pb-1 pt-1.5">ventures</div>
    </div>
);

const LogoDRF = () => (
    <div className="flex items-center gap-1.5 font-sans font-bold text-[1.05rem] tracking-tight">
        <div className="w-7 h-7 rounded-full border-[1.5px] border-black flex items-center justify-center text-[0.45rem] leading-none">
            DRF
        </div>
        Dorm Room Fund
    </div>
);

const LogoOperator = () => (
    <div className="font-sans font-bold text-[1.1rem] tracking-widest relative">
        <span className="absolute -top-1 left-0 right-0 h-[2px] bg-black"></span>
        OPERATOR
    </div>
);

const LogoLeaf = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 22V12M12 12C9 12 7 9 7 9s2-3 5-3 5 3 5 3-2 3-5 3z" />
    </svg>
);

const LogoAglae = () => (
    <div className="flex items-center gap-2">
        <div className="flex items-baseline gap-1">
            <span className="font-serif font-bold text-[1.2rem]">Aglaé</span>
            <span className="text-[0.45rem] tracking-widest uppercase">Ventures</span>
        </div>
    </div>
);

const LogoBlackhorn = () => (
    <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <path d="M12 2L3 22h18L12 2z" />
            </svg>
        </div>
        <div className="flex flex-col leading-none">
            <span className="font-bold text-[0.65rem] uppercase tracking-wider">Blackhorn</span>
            <span className="text-[0.45rem] uppercase tracking-widest text-gray-500">Ventures</span>
        </div>
    </div>
);

const LogoTitan = () => (
    <div className="flex flex-col items-center leading-none gap-1">
        <span className="font-bold text-[0.95rem] tracking-[0.2em] uppercase">Titan</span>
        <span className="text-[0.45rem] tracking-[0.2em] uppercase text-gray-800 font-medium">Capital</span>
    </div>
);

const LogoCraft = () => (
    <div className="font-sans font-black text-[1.2rem] tracking-wider uppercase relative overflow-hidden h-6 flex items-center justify-center">
        CRAFT
    </div>
);

export default function Investors() {
    return (
        <section className="w-full bg-white py-24 px-6 md:px-12 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-6xl flex flex-col items-center text-center gap-16"
            >
                <h2 className="text-[1.15rem] md:text-[1.3rem] font-medium text-[#1F1F1F]">
                    We&apos;re backed by the best investors in Silicon Valley and beyond
                </h2>

                <div className="w-full flex flex-wrap justify-center items-center gap-x-8 gap-y-10 md:gap-x-12 md:gap-y-12 opacity-80 grayscale">
                    <LogoSpero />
                    <LogoTribe />
                    <LogoKima />
                    <LogoDRF />
                    <LogoOperator />
                    <LogoLeaf />
                    <LogoAglae />
                    <LogoBlackhorn />
                    <LogoTitan />
                    <LogoCraft />
                </div>

                <button className="mt-6 border border-gray-400 text-gray-500 hover:text-black hover:border-black transition-colors text-[0.75rem] font-light tracking-wider uppercase px-8 py-3.5">
                    Read more about our company
                </button>
            </motion.div>
        </section>
    );
}
