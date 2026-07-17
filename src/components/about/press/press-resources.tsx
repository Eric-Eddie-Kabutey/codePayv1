'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PressResources() {
    return (
        <section className="w-full bg-[#F4F4F4] flex flex-col items-center py-24 px-6 md:px-12">
            <div className="w-full max-w-4xl flex flex-col items-center">
                <h2 className="text-[2.25rem] md:text-[2.75rem] font-serif text-[#1F1F1F] leading-tight mb-16 text-center">
                    Press resources
                </h2>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Logo and Brand Assets */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col group cursor-pointer"
                    >
                        <div className="w-full aspect-[4/3] bg-white flex items-center justify-center mb-6 relative overflow-hidden shadow-sm">
                            <Image
                                src="/assets/images/press_asset_logo-metamap.png"
                                alt="Logo and Brand Assets"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <a href="#" className="text-[#3b82f6] hover:text-blue-700 transition-colors text-[0.95rem] font-medium px-2">
                            Logo and Brand Assets
                        </a>
                    </motion.div>

                    {/* Company One Pager */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-col group cursor-pointer"
                    >
                        <div className="w-full aspect-[4/3] bg-[#E8E8E8] flex items-center justify-center mb-6 relative overflow-hidden shadow-sm">
                            <Image
                                src="/assets/images/press-metamap-company-one-pager.png"
                                alt="Company One Pager"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <a href="#" className="text-[#3b82f6] hover:text-blue-700 transition-colors text-[0.95rem] font-medium px-2">
                            Company One Pager
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
