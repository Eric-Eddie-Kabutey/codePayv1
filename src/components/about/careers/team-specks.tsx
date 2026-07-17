'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TeamSpeaks() {
    const testimonials = [
        {
            name: "Victor Anjos",
            title: "Customer Support Manager, Brazil",
            text: (
                <>
                    MetaMap is a company full of brilliant, talented and welcoming people. The level of <strong className="font-medium text-[#1F1F1F]">transparency and collaboration</strong> is incredible, and all teams are willing to know your thoughts and feedback to create the best possible product.
                </>
            ),
            image: "/assets/images/metamap_victor_anjos_brazil.png"
        },
        {
            name: "Anup Rajput",
            title: "Director, Engineering, India",
            text: (
                <>
                    The most exciting thing about working at MetaMap has been the <strong className="font-medium text-[#1F1F1F]">ability to bring about a difference to the lives of real people</strong>, in underserved markets. AI has been the enabler to serve so many of our end users across continents, at scale.
                </>
            ),
            image: "/assets/images/metamap_anuj_rajput_india.png"
        },
        {
            name: "Briza Juarez",
            title: "HRBP, LatAM",
            text: (
                <>
                    From my first day, what has impressed me most about the team at MetaMap is <strong className="font-medium text-[#1F1F1F]">how generous everyone is with their knowledge</strong>. The focus on success being a team effort as we work together to continue our mission of unlocking a borderless world inspires me daily.
                </>
            ),
            image: "/assets/images/metamap_briza_juarez_latam.png"
        }
    ];

    return (
        <section className="bg-white py-24 px-6 md:px-12 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-24 text-center"
            >
                <h2 className="text-[2.25rem] md:text-[3rem] font-serif text-[#1F1F1F] leading-tight">
                    The team speaks
                </h2>
            </motion.div>

            <div className="w-full max-w-[75rem] grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 pt-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="border border-gray-200 p-8 pt-12 relative flex flex-col h-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                    >
                        {/* Avatar */}
                        <div className="absolute -top-11 left-8 w-[88px] h-[88px] rounded-full overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.15)] bg-white p-1">
                            <div className="w-full h-full rounded-full overflow-hidden relative">
                                {/* Fallback to picsum if local image fails, to avoid broken image icons */}
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover bg-gray-100"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = `https://picsum.photos/seed/avatar${index + 10}/150/150`;
                                    }}
                                />
                            </div>
                        </div>

                        {/* Quote Icon */}
                        <div className="flex justify-end mb-6">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FF5A8F]">
                                <path d="M9.75 12.25V19H3V12.25L6 7H9.75L6.75 12.25H9.75ZM20.25 12.25V19H13.5V12.25L16.5 7H20.25L17.25 12.25H20.25Z" fill="currentColor" />
                            </svg>
                        </div>

                        {/* Text */}
                        <p className="text-[#555555] font-light text-[0.95rem] leading-[1.7] mb-12 flex-grow">
                            {testimonial.text}
                        </p>

                        {/* Author */}
                        <div className="mt-auto">
                            <h4 className="text-[#1F1F1F] font-bold text-[0.85rem] mb-0.5">{testimonial.name}</h4>
                            <p className="text-[#777777] text-[0.8rem] font-light">{testimonial.title}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
