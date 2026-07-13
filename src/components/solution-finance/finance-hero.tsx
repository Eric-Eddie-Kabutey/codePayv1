"use client";

import React, { useState } from 'react';

function FinanceHero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-16 md:py-24">
     

      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left content */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-black mb-8 leading-none">
                Unify your financial ecosystem
              </h1>
              
              <div className="space-y-5 mb-10">
                <div className="flex items-center space-x-4">
                  <img 
                    src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62f6801e992cf4a7bbc2302d_Arrow-black.png" 
                    loading="lazy" 
                    alt="Click here" 
                    className="w-6 h-fit mt-1 flex-shrink-0"
                  />
                  <p className="text-lg md:text-xl font-normal text-gray-800">
                    Centralised payments and merchant services
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62f6801e992cf4a7bbc2302d_Arrow-black.png" 
                    loading="lazy" 
                    alt="Click here" 
                    className="w-6 h-fit mt-1 flex-shrink-0"
                  />
                  <p className="text-lg md:text-xl font-normal text-gray-800">
                    Innovative solutions to legacy challenges
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62f6801e992cf4a7bbc2302d_Arrow-black.png" 
                    loading="lazy" 
                    alt="Click here" 
                    className="w-6 h-fit mt-1 flex-shrink-0"
                  />
                  <p className="text-lg md:text-xl font-normal text-gray-800">
                    Step towards a digital economy
                  </p>
                </div>
              </div>
              
              <div>
                <a 
                  href="/contact-us" 
                  className={`inline-block px-8 py-4 text-base font-normal rounded-lg transition-colors duration-300 ${
                    isHovered ? 'bg-black text-white' : 'bg-[#91f8bd] text-gray-900'
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Book a demo
                </a>
              </div>
            </div>
          </div>
          
          {/* Right image - larger size */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <img 
                src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/632492eac4daaa211e4fccf1_05__Financial%20-%20Hero.png" 
                loading="lazy" 
                alt="Unified institution portal dashboard with merchant report" 
                className="w-full h-full object-contain"
                srcSet="
                  https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/632492eac4daaa211e4fccf1_05__Financial%20-%20Hero-p-500.png 500w,
                  https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/632492eac4daaa211e4fccf1_05__Financial%20-%20Hero-p-800.png 800w,
                  https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/632492eac4daaa211e4fccf1_05__Financial%20-%20Hero-p-1080.png 1080w,
                  https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/632492eac4daaa211e4fccf1_05__Financial%20-%20Hero-p-1600.png 1600w,
                  https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/632492eac4daaa211e4fccf1_05__Financial%20-%20Hero-p-2000.png 2000w,
                  https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/632492eac4daaa211e4fccf1_05__Financial%20-%20Hero.png 2417w
                "
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinanceHero;