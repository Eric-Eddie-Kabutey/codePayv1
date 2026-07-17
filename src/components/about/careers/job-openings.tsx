'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';

const HealthIcon = () => (
    <div className="relative w-16 h-16 flex items-center justify-center">
        <svg width="60" height="66" viewBox="0 0 24 24" fill="none" stroke="#1F1F1F" strokeWidth="1">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12h6m-3-3v6" />
        </svg>
        <div className="absolute bottom-[-6px] right-[-10px] bg-[#FFC045] rounded-full w-8 h-8 flex items-center justify-center border-[3px] border-[#F4F4F4]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1F1F1F" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
            </svg>
        </div>
    </div>
);

const LifeIcon = () => (
    <div className="relative w-16 h-16 flex items-center justify-center">
        <svg width="60" height="66" viewBox="0 0 24 24" fill="none" stroke="#1F1F1F" strokeWidth="1">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M12 15s-3.5-2.5-3.5-4.5a2.25 2.25 0 0 1 4.5-1.5A2.25 2.25 0 0 1 15.5 10.5C15.5 12.5 12 15 12 15z" />
        </svg>
        <div className="absolute bottom-[-6px] right-[-10px] bg-[#FFC045] rounded-full w-8 h-8 flex items-center justify-center border-[3px] border-[#F4F4F4]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1F1F1F" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
            </svg>
        </div>
    </div>
);

const ParentalIcon = () => (
    <div className="relative w-[80px] h-[80px] flex items-center justify-center mt-2">
        <svg width="80" height="80" viewBox="0 0 60 60" fill="none" stroke="#1F1F1F" strokeWidth="1.2">
            <path d="M10 45 A 20 20 0 0 1 50 45" strokeWidth="1.2" />
            <circle cx="28" cy="25" r="6" strokeWidth="1.2" />
            <path d="M18 45 V 37 A 6 6 0 0 1 38 37 V 45" strokeWidth="1.2" />
            <rect x="34" y="32" width="8" height="13" rx="4" fill="#FFC045" stroke="#1F1F1F" strokeWidth="1.2" />
            <circle cx="38" cy="27" r="4" fill="#FFC045" stroke="#1F1F1F" strokeWidth="1.2" />
        </svg>
    </div>
);

const LearningIcon = () => (
    <div className="relative w-16 h-16 flex items-center justify-center">
        <svg width="56" height="64" viewBox="0 0 42 52" fill="none" stroke="#1F1F1F" strokeWidth="1.2">
            <rect x="4" y="4" width="34" height="44" rx="2" strokeWidth="1.2" />
            <path d="M4 44 h 34" strokeWidth="1.2" />
            <path d="M22 4 L 22 22 L 27 18 L 32 22 L 32 4 Z" fill="#FFC045" stroke="#1F1F1F" strokeWidth="1.2" />
            <line x1="12" y1="28" x2="22" y2="28" strokeWidth="1.2" />
            <line x1="12" y1="34" x2="26" y2="34" strokeWidth="1.2" />
        </svg>
    </div>
);

const WellnessIcon = () => (
    <div className="relative w-[80px] h-16 flex items-center justify-center">
        <svg width="80" height="52" viewBox="0 0 56 40" fill="none" stroke="#1F1F1F" strokeWidth="1.2">
            <rect x="18" y="16" width="20" height="8" strokeWidth="1.2" />
            <rect x="12" y="10" width="6" height="20" strokeWidth="1.2" fill="#FFC045" />
            <rect x="38" y="10" width="6" height="20" strokeWidth="1.2" fill="#FFC045" />
            <rect x="8" y="14" width="4" height="12" strokeWidth="1.2" />
            <rect x="44" y="14" width="4" height="12" strokeWidth="1.2" />

            <line x1="28" y1="5" x2="28" y2="1" strokeWidth="1.2" />
            <line x1="28" y1="35" x2="28" y2="39" strokeWidth="1.2" />
            <line x1="16" y1="5" x2="18" y2="7" strokeWidth="1.2" />
            <line x1="40" y1="5" x2="38" y2="7" strokeWidth="1.2" />
            <line x1="16" y1="35" x2="18" y2="33" strokeWidth="1.2" />
            <line x1="40" y1="35" x2="38" y2="33" strokeWidth="1.2" />
        </svg>
    </div>
);

const CalendarIcon = () => (
    <div className="relative w-16 h-[72px] flex items-center justify-center pt-2">
        <svg width="68" height="62" viewBox="0 0 48 48" fill="none" stroke="#1F1F1F" strokeWidth="1.2">
            <rect x="4" y="8" width="40" height="36" rx="2" strokeWidth="1.2" />
            <path d="M4 16 h 40" strokeWidth="1.2" />
            <line x1="12" y1="4" x2="12" y2="12" strokeWidth="1.2" />
            <line x1="36" y1="4" x2="36" y2="12" strokeWidth="1.2" />

            <line x1="4" y1="24" x2="44" y2="24" strokeWidth="1.2" />
            <line x1="4" y1="32" x2="44" y2="32" strokeWidth="1.2" />
            <line x1="4" y1="40" x2="44" y2="40" strokeWidth="1.2" />
            <line x1="14" y1="16" x2="14" y2="44" strokeWidth="1.2" />
            <line x1="24" y1="16" x2="24" y2="44" strokeWidth="1.2" />
            <line x1="34" y1="16" x2="34" y2="44" strokeWidth="1.2" />
        </svg>
        <div className="absolute bottom-[-2px] right-[-14px] bg-[#FFC045] rounded-full w-8 h-8 flex items-center justify-center border-[3px] border-[#F4F4F4]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1F1F1F" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
            </svg>
        </div>
    </div>
);

export default function JobOpenings() {
    const jobs = [
        {
            title: "Full Stack Engineer, Customer Experience",
            department: "Engineering",
            location: "Mexico City, Mexico"
        },
        {
            title: "Senior Full Stack Engineer, Customer Experience",
            department: "Engineering",
            location: "Mexico City, Mexico"
        }
    ];

    const benefits = [
        { title: "Health insurance", icon: <HealthIcon /> },
        { title: "Life insurance", icon: <LifeIcon /> },
        { title: "Parental leave", icon: <ParentalIcon /> },
        { title: "Learning stipend", icon: <LearningIcon /> },
        { title: "Wellness stipend", icon: <WellnessIcon /> },
        { title: "Flexible work & unlimited paid time off", icon: <CalendarIcon /> }
    ];

    return (
        <section className="bg-white py-24 px-6 md:px-12 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl flex flex-col items-center gap-6 mb-16 text-center"
            >
                <h2 className="text-[2.25rem] md:text-[3.25rem] font-serif text-[#1F1F1F] leading-[1.15]">
                    Job Openings
                </h2>
                <p className="text-lg md:text-[1.15rem] text-[#333333] font-light max-w-3xl leading-relaxed">
                    Create more opportunities for everyone, everywhere. Dive into our diverse range of opportunities<br className="hidden md:block" /> to find the perfect fit for your skills and aspirations.
                </p>
            </motion.div>

            <div className="w-full max-w-5xl flex flex-col border-t border-gray-200">
                {jobs.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-center py-6 border-b border-gray-200"
                    >
                        <div className="md:col-span-5 lg:col-span-5 pr-4">
                            <h3 className="text-[#6A5EE8] text-[1.1rem] md:text-[1.15rem] font-normal leading-snug">
                                {job.title}
                            </h3>
                        </div>

                        <div className="md:col-span-3 flex items-center text-[#999999] gap-3">
                            <Briefcase className="w-[18px] h-[18px] stroke-[1.5]" />
                            <span className="font-light text-[0.95rem] text-[#777777]">{job.department}</span>
                        </div>

                        <div className="md:col-span-2 lg:col-span-3 flex items-center text-[#999999] gap-3">
                            <MapPin className="w-[18px] h-[18px] stroke-[1.5]" />
                            <span className="font-light text-[0.95rem] text-[#777777]">{job.location}</span>
                        </div>

                        <div className="md:col-span-2 flex md:justify-end mt-4 md:mt-0">
                            <button className="border border-[#777777] text-[#1F1F1F] hover:bg-gray-50 hover:text-black transition-colors text-[0.7rem] font-bold tracking-widest uppercase px-6 py-2 w-full md:w-auto min-w-[120px]">
                                Apply
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl flex flex-col items-center gap-4 mt-40 mb-12 text-center"
            >
                <h2 className="text-[2.25rem] md:text-[2.75rem] font-serif text-[#1F1F1F] leading-[1.15]">
                    Beyond your salary
                </h2>
                <p className="text-[1.05rem] md:text-[1.1rem] text-[#333333] font-light max-w-2xl leading-relaxed">
                    We&apos;re proud to offer benefits that make you feel valued and appreciated. Here are some of the benefits and perks we offer all MetaMap employees:
                </p>
            </motion.div>

            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-full aspect-[1.5/1] bg-[#F4F4F4] flex items-center justify-center mb-6">
                            {benefit.icon}
                        </div>
                        <h4 className="text-[1.05rem] text-[#1F1F1F] font-normal text-center max-w-[220px]">
                            {benefit.title}
                        </h4>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
