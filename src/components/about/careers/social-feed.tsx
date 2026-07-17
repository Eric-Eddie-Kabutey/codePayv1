'use client';

import React from 'react';
import { motion } from 'framer-motion'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export default function SocialFeed() {
    const posts = [
        {
            author: {
                name: "Filip Victor",
                title: "Getting back to science. Ex-CEO\\fndr @MetaMap",
                time: "2y",
                avatar: "https://picsum.photos/seed/filip/100/100", // Placeholder
            },
            content: (
                <div className="flex flex-col gap-4 text-[0.95rem] text-[#333333] leading-relaxed">
                    <p>
                        We're building out an engineering team in Mexico City and looking for our
                        first Engineering Manager to own Product Engineering. This role will report to our
                        VP of Engineering but will work directly with me.
                    </p>
                    <p>
                        If you're interested in learning more (or know someone who may be) apply
                        through our website here or reach out to <a href="#" className="text-[#0a66c2] hover:underline font-medium">andrea.bow@metamap.com</a>. Looking
                        forward to meeting you!
                    </p>
                    <div className="flex flex-col">
                        <a href="#" className="text-[#0a66c2] hover:underline font-medium">https://lnkd.in/dQtAkmen</a>
                        <a href="#" className="text-[#0a66c2] hover:underline font-medium">https://lnkd.in/dsUZt43r</a>
                    </div>
                </div>
            ),
            image: "https://picsum.photos/seed/post1/600/400" // Placeholder
        },
        {
            author: {
                name: "MetaMap",
                title: "17,709 followers",
                time: "2y",
                avatar: "https://picsum.photos/seed/metamaplogo/100/100", // Placeholder
            },
            content: (
                <div className="flex flex-col gap-4 text-[0.95rem] text-[#333333] leading-relaxed">
                    <p>On-Demand Webinar: Digital Payments in 2024: Three Security Challenges</p>
                    <p>
                        In the last few years, the finance industry has witnessed a significant shift towards
                        digital payments, which has emerged as a booming multi-billion sub-sector.
                    </p>
                    <p>
                        Countries in Africa, in particular, have seen a remarkable evolution in digital
                        payments over the last decade. The massification of mobile technology and the
                        increase in internet connectivity have been vital in fighting against financial
                        exclusion.
                    </p>
                    <p>
                        Digital payments have revolutionized the African market, transforming it into a
                        dynamic industry. The advent of digital payments has made a significant impact by
                        enabling safe, fast, and convenient transactions.
                    </p>
                    <p>
                        Learn more on this <a href="#" className="text-[#0a66c2] hover:underline font-medium">#webinar</a> support your business in <a href="#" className="text-[#0a66c2] hover:underline font-medium">#Africa</a> to be compliant,
                        prevent fraud and cyber attacks, and and how <a href="#" className="text-[#0a66c2] hover:underline font-medium">#MetaMap</a> can enhance verification
                        systems.
                    </p>
                    <p className="text-[#0a66c2] font-medium">
                        #MetaChat #africanbusiness #business #2024trends #payments<br />
                        #digitalpayments
                    </p>
                </div>
            ),
            image: "https://picsum.photos/seed/post2/600/400" // Placeholder
        }
    ];

    return (
        <section className="bg-[#F5F5F5] py-24 px-6 md:px-12 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-[2.25rem] md:text-[3rem] font-serif text-[#1F1F1F] leading-tight">
                    More about MetaMap work life at LinkedIn
                </h2>
            </motion.div>

            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {posts.map((post, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col h-[600px] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-6 flex items-start justify-between shrink-0">
                            <div className="flex items-start gap-3">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 shrink-0">
                                    <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1.5 text-[0.95rem] font-bold text-[#1F1F1F]">
                                        {post.author.name}
                                        {index === 0 && <span className="text-gray-400 font-normal text-sm">&middot; 3rd</span>}
                                    </div>
                                    <div className="text-[0.8rem] text-gray-500 font-light max-w-[280px] leading-snug">
                                        {post.author.title}
                                    </div>
                                    <div className="text-[0.75rem] text-gray-400 font-light mt-0.5">
                                        {post.author.time}
                                    </div>
                                </div>
                            </div>
                            <div className="text-[#0a66c2] font-bold text-xl tracking-tighter flex items-center shrink-0">
                                Linked<div className="bg-[#0a66c2] text-white rounded-[2px] ml-1 px-1 h-5 flex items-center justify-center text-[15px]">in</div>
                            </div>
                        </div>

                        {/* Scrollable Content */}
                        <ScrollArea className="flex-grow w-full h-72 px-6 pb-6">
                            <div className="pb-4">
                                {post.content}
                            </div>
                            <div className="w-full aspect-[1.5/1] relative bg-gray-100 overflow-hidden mt-2">
                                <img src={post.image} alt="Post content" className="w-full h-full object-cover" />
                            </div>
                            <ScrollBar orientation="vertical" />
                        </ScrollArea>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
