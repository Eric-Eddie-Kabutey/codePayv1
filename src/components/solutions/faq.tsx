"use client";

import React, { useState } from "react";
import Link from "next/link";
import { faqData } from "@/content/faq-and-solutions-cta";

function FAQ() {
    const [ openId, setOpenId ] = useState<number | null>(null);

    const toggleQuestion = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="w-full bg-white py-20 lg:py-28 px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-[40px] text-[#222222] font-serif leading-tight mb-4">
                        {faqData.headline}
                    </h2>
                    <p className="text-[15px] sm:text-[17px] text-gray-500">
                        {faqData.subheadline}
                    </p>
                </div>

                {/* Accordion List */}
                <div className="w-full max-w-3xl border-t border-gray-100">
                    {faqData.questions.map((q) => (
                        <div key={q.id} className="border-b border-gray-100">
                            <button
                                onClick={() => toggleQuestion(q.id)}
                                className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
                            >
                                <span className="text-[14px] sm:text-[15px] text-[#222222] font-medium group-hover:text-[#6058F3] transition-colors pr-6">
                                    {q.question}
                                </span>

                                {/* Chevron Icon */}
                                <svg
                                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openId === q.id ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Expandable Answer */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openId === q.id ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="text-[14px] text-gray-500 leading-relaxed pr-8">
                                    {q.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Link */}
                <div className="mt-10 text-center">
                    <p className="text-[13px] text-gray-500">
                        {faqData.footerText}
                        <Link
                            href={faqData.footerLinkHref}
                            className="text-[#6058F3] hover:underline"
                        >
                            {faqData.footerLinkText}
                        </Link>
                        {" "}for more information
                    </p>
                </div>

            </div>
        </section>
    );
}

export default FAQ;