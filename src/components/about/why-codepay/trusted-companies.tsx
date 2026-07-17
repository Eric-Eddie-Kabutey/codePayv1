'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BundleLogo = () => (
    <div className="flex items-center gap-1 font-sans text-[#4a4a4a] mb-6">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
        <span className="text-[1.75rem] font-medium tracking-tighter ml-1">bundle</span>
    </div>
);

const CreditasLogo = () => (
    <div className="flex items-center gap-2 font-sans text-[#4a4a4a] mb-6">
        <div className="flex items-center -space-x-2.5">
            <div className="w-6 h-6 border-[2.5px] border-[#4a4a4a] rounded-full"></div>
            <div className="w-6 h-6 border-[2.5px] border-[#4a4a4a] rounded-full bg-[#F5F5F5]"></div>
        </div>
        <span className="text-[1.5rem] font-medium tracking-tight ml-1">creditas</span>
    </div>
);

const AllianzLogo = () => (
    <div className="flex items-center font-serif text-[1.75rem] font-bold text-[#4a4a4a] mb-6 tracking-tight">
        Allianz
    </div>
);

const VodafoneLogo = () => (
    <div className="flex items-center font-sans text-[1.75rem] font-bold text-[#4a4a4a] mb-6 tracking-tighter">
        Vodafone
    </div>
);

const testimonials = [
    {
        logo: <BundleLogo />,
        text: "The company reduced friction and speed in onboarding with the help of MetaMap. In addition, it was able to optimize the user experience."
    },
    {
        logo: <CreditasLogo />,
        text: "Thanks to MetaMap tools, the company reduced the loan default rate by more than 50%."
    },
    {
        logo: <AllianzLogo />,
        text: "MetaMap provided the identity infrastructure needed to scale globally with minimal friction and maximum security."
    },
    {
        logo: <VodafoneLogo />,
        text: "Reduced manual review times by 80% while maintaining compliance across multiple regions and user bases."
    },
    {
        logo: <div className="text-[1.5rem] font-bold text-[#4a4a4a] mb-6">FintechX</div>,
        text: "With MetaMap, we were able to launch in 3 new countries within a month, relying completely on their compliance engine."
    },
    {
        logo: <div className="text-[1.5rem] font-bold text-[#4a4a4a] mb-6">BankCorp</div>,
        text: "Our customer acquisition cost dropped significantly once we streamlined the KYC process through MetaMap."
    },
    {
        logo: <div className="text-[1.5rem] font-bold text-[#4a4a4a] mb-6">CryptoNet</div>,
        text: "AML compliance is no longer a bottleneck. We process thousands of verifications daily with zero downtime."
    },
    {
        logo: <div className="text-[1.5rem] font-bold text-[#4a4a4a] mb-6">PayStream</div>,
        text: "The customizable workflows allowed us to build the exact risk profile assessment we needed for our specific market."
    }
];

export default function TrustedCompanies() {
    const [ currentPage, setCurrentPage ] = useState(0);
    const itemsPerPage = 2; // For desktop
    const totalPages = Math.ceil(testimonials.length / itemsPerPage);

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    return (
        <section className="w-full bg-[#F5F5F5] py-24 px-6 md:px-12 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-5xl flex flex-col items-center"
            >
                <h2 className="text-[1.75rem] md:text-[2.25rem] font-serif text-[#1F1F1F] text-center leading-tight mb-16 max-w-2xl">
                    Top-tier companies trust MetaMap for KYC and AML compliance
                </h2>

                <div className="w-full relative min-h-[200px] mb-12 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPage}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 w-full"
                        >
                            {/* Left Item */}
                            <div className="flex flex-col md:pr-12 lg:pr-16 md:border-r border-gray-300 relative">
                                {/* Visual vertical line indicator for design fidelity (only on md+) */}
                                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[1px] bg-gray-300/50"></div>

                                {testimonials[ currentPage * itemsPerPage ].logo}
                                <p className="text-[1.05rem] text-[#333333] font-light leading-relaxed">
                                    {testimonials[ currentPage * itemsPerPage ].text}
                                </p>
                            </div>

                            {/* Right Item (if exists) */}
                            {testimonials[ currentPage * itemsPerPage + 1 ] && (
                                <div className="flex flex-col md:pl-12 lg:pl-16">
                                    {testimonials[ currentPage * itemsPerPage + 1 ].logo}
                                    <p className="text-[1.05rem] text-[#333333] font-light leading-relaxed">
                                        {testimonials[ currentPage * itemsPerPage + 1 ].text}
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-6 text-gray-400">
                    <button
                        onClick={prevPage}
                        className="flex items-center gap-1.5 text-[0.9rem] hover:text-gray-800 transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Prev
                    </button>

                    <div className="flex items-center gap-2.5">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i)}
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${currentPage === i ? 'bg-gray-400' : 'bg-gray-200 hover:bg-gray-300'
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextPage}
                        className="flex items-center gap-1.5 text-[0.9rem] hover:text-gray-800 transition-colors"
                    >
                        Next
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
