'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SecurityCompliance() {
    return (
        <section className="bg-[#F6F6F6] py-24 px-6 md:px-12 flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl flex flex-col items-center gap-6 mb-16"
            >
                <span className="text-[#6A5EE8] text-xs font-semibold tracking-widest uppercase">
                    Data Protection
                </span>
                <h2 className="text-[2.25rem] md:text-[3rem] lg:text-[3.5rem] font-serif text-[#1F1F1F] leading-[1.15]">
                    Security and Compliance
                </h2>
                <p className="text-lg md:text-xl text-[#333333] font-light max-w-[54rem] leading-relaxed">
                    At MetaMap, we&apos;re dedicated to digital trust, ensuring a borderless, secure world. We maintain top-tier certifications, robust security, and advanced tech to protect your data. Your privacy is our priority, providing a reliable, trustworthy experience for all.
                </p>
            </motion.div>

            <div className="w-full max-w-[70rem] grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
                {/* Card 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white p-10 md:p-12 flex flex-col items-center shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                >
                    <div className="flex gap-4 mb-8">
                        <div className="relative w-20 h-20">
                            <Image
                                src="/assets/images/security_certificate_aicpa.png"
                                alt="SOC 2 Certification"
                                fill
                                className="object-contain rounded-full grayscale opacity-80"
                                referrerPolicy="no-referrer"
                            />
                        </div>                       
                       
                    </div>
                    <h3 className="text-[1.35rem] font-medium text-[#1F1F1F] mb-4">SOC2 Type II & SOC3</h3>
                    <p className="text-[#555555] font-light leading-relaxed text-base">
                        We are certified in Security, Availability, and Confidentiality standards.
                    </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white p-10 md:p-12 flex flex-col items-center shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                >
                    <div className="relative w-24 h-24 mb-6">
                        <Image
                            src="/assets/images/Mask-group-1.png"
                            alt="ISO 27001 Certification"
                            fill
                            className="object-contain rounded-full grayscale opacity-80"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    <h3 className="text-[1.35rem] font-medium text-[#1F1F1F] mb-4">ISO 27001:2013</h3>
                    <p className="text-[#555555] font-light leading-relaxed text-base">
                        Certification centered around information security at the infrastructural level.
                    </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white p-10 md:p-12 flex flex-col items-center shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                >
                    <div className="relative w-24 h-24 mb-6">
                        <Image
                            src="/assets/images/security_certificate_star.png"
                            alt="CSA Star Level One CAIQ"
                            fill
                            className="object-contain rounded-full grayscale opacity-80"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    <h3 className="text-[1.35rem] font-medium text-[#1F1F1F] mb-4">CSA Star Level One CAIQ</h3>
                    <p className="text-[#555555] font-light leading-relaxed text-base">
                        Certification focused on transparency, cloud security, and privacy best practices.
                    </p>
                </motion.div>
            </div>

            <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="px-8 py-3 border border-gray-400 text-gray-500 hover:bg-white hover:text-gray-900 transition-colors text-sm font-medium tracking-widest uppercase"
            >
                Learn More About Security At MetaMap
            </motion.button>
        </section>
    );
}
