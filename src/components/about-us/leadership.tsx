'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function LeadershipTeam() {
    return (
        <section className="bg-white py-24 px-6 md:px-12 flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl flex flex-col items-center gap-6 mb-16"
            >
                <span className="text-[#6A5EE8] text-xs font-semibold tracking-widest uppercase">
                    Leadership Team
                </span>
                <h2 className="text-[2.25rem] md:text-[3rem] lg:text-[3.5rem] font-serif text-[#1F1F1F] leading-[1.15]">
                    Meet the team unlocking new possibilities for customer data
                </h2>
                <p className="text-lg md:text-xl text-[#333333] font-light max-w-3xl leading-relaxed">
                    Our mission started in 2017 in San Francisco. We&apos;re now a global team working to empower businesses.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-start w-full max-w-[340px] mb-20"
            >
                <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden bg-gray-100">
                    <Image
                        src="/assets/images/juan-carlos-velasquez-metamap.jpg"
                        alt="Juan Carlos Velasquez"
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                    />
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-medium text-[#1F1F1F]">Juan Carlos Velasquez</h3>
                    <a href="#" className="text-gray-400 hover:text-[#0077b5] transition-colors">
                        <FaLinkedin className="w-5 h-5" />
                    </a>
                </div>
                <span className="text-sm text-gray-500 uppercase tracking-wider">CEO</span>
            </motion.div>

            <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="px-8 py-3 border border-gray-400 text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors text-sm font-medium tracking-wider uppercase mb-32"
            >
                Visit Our Careers Site
            </motion.button>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl w-full border-y border-gray-300 py-16 md:py-20 flex flex-col items-center text-center"
            >
                <span className="text-[#6A5EE8] text-xs font-semibold tracking-widest uppercase mb-6 block">
                    About Our Name
                </span>
                <h2 className="text-[2.25rem] md:text-[3rem] lg:text-[3.5rem] font-serif text-[#1F1F1F] leading-[1.15] mb-8">
                    The meaning of MetaMap
                </h2>
                <div className="flex flex-col gap-8 text-lg md:text-xl text-[#333333] font-light max-w-4xl leading-relaxed">
                    <p>
                        The prefix <em className="italic">meta</em> comes from the word <strong className="font-medium text-[#1F1F1F]">beyond</strong>, making MetaMap mean a map beyond other maps.
                    </p>
                    <p>
                        In other words, a MetaMap provides an <strong className="font-medium text-[#1F1F1F]">interface for virtual strangers to enter into trust-based interactions</strong>. Without a map, users remain invisible.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
