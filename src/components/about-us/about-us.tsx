import React from 'react';

export default function AboutUs() {
    return (
        <section className="bg-white py-12 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                {/* Left Column - Text Content */}
                <div className="lg:col-span-8 flex flex-col items-start text-left gap-6">
                    <span className="text-[#6A5EE8] text-xs font-semibold tracking-wider uppercase">
                        About Us
                    </span>
                    <h2 className="text-[2.5rem] md:text-5xl lg:text-[3.25rem] font-serif text-[#1F1F1F] leading-[1.1] mb-2">
                        With MetaMap, anonymous strangers become trustworthy users
                    </h2>

                    <div className="flex flex-col gap-5 text-[#333333] text-[1.125rem] font-light leading-relaxed">
                        <p>
                            MetaMap (formerly Mati) was founded in <strong className="font-medium text-[#1F1F1F]">2017</strong> in San Francisco. We now operate globally and are trusted by <strong className="font-medium text-[#1F1F1F]">600+ companies worldwide</strong>.
                        </p>
                        <p>
                            In <strong className="font-medium text-[#1F1F1F]">2024</strong>, <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">MetaMap joined Incode</a> to build the future of identity verification.
                        </p>
                        <p>
                            We are a team united by our belief that everyone should be able to access <strong className="font-medium text-[#1F1F1F]">inclusive financing</strong>, more meaningful work, and greater upward mobility.
                        </p>
                        <p>
                            MetaMap has created a platform that sources, integrates, and interprets a vast range of data for a <strong className="font-medium text-[#1F1F1F]">truly global population</strong>.
                        </p>
                        <p>
                            The result is a database enabling businesses to yield <strong className="font-medium text-[#1F1F1F]">superior commercial outcomes</strong>.
                        </p>
                    </div>
                </div>

                {/* Right Column - Statistics */}
                <div className="lg:col-span-4 flex flex-col justify-center items-center gap-16 lg:gap-20 mt-8 lg:mt-0 text-center">

                    <div className="flex flex-col items-center gap-2">
                        <span className="text-[5rem] md:text-[6rem] lg:text-[6.5rem] font-light text-[#6A5EE8] leading-none mb-1">
                            600+
                        </span>
                        <span className="text-[#333333] text-lg font-light">
                            companies worldwide
                        </span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <span className="text-[5rem] md:text-[6rem] lg:text-[6.5rem] font-light text-[#6A5EE8] leading-none mb-1">
                            50+
                        </span>
                        <span className="text-[#333333] text-lg font-light">
                            countries availability
                        </span>
                    </div>

                </div>

            </div>
        </section>
    );
}
