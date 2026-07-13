"use client";

import React, { useState } from 'react';

function PaymentHero() {
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    "Suite of international payments methods",
    "Mobile-friendly and ready to use",
    "Stay at pace with evolving trends"
  ];

  return (
    <section className="relative py-12">

      <div className="max-w-7xl container mx-auto ">
        <div className="flex flex-col lg:flex-row items-center gap-7 lg:gap-6">
          {/* Left content */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-5xl md:text-6xl lg:text-5xl font-normal text-black mb-10 leading-tight">
                Drive digital payment acceptance at scale
              </h1>
              
              <div className="space-y-2 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-5">
                    <img 
                      src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62f6801e992cf4a7bbc2302d_Arrow-black.png" 
                      loading="lazy" 
                      alt="Click here" 
                      className="w-7 h-fit mt-1.5 flex-shrink-0"
                    />
                    <p className="text-xl md:text-2xl font-normal text-gray-800">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
              
              <div>
                <a 
                  href="/contact-us" 
                  className={`inline-block px-8 py-4 text-base font-normal rounded-lg transition-all duration-300 cursor-pointer ${
                    isHovered ? 'bg-black text-white' : 'bg-[#91f8bd] text-gray-900'
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{
                    cursor: isHovered ? 'pointer' : 'default'
                  }}
                >
                  Book a demo
                </a>
              </div>
            </div>
          </div>
          
          {/* Right image - Hidden on mobile, larger on desktop */}
          <div className="hidden md:block w-full lg:w-1/2">
            <div className=" w-full h-fit">
              <img 
                src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6318cc3b99f9a133e59474b8_02__Payments%20-%20Hero.png" 
                loading="lazy" 
                alt="Merchant app and a selection of currencies to pay in" 
                className="w-full h-full object-contain"
                srcSet="
                  https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6318cc3b99f9a133e59474b8_02__Payments%20-%20Hero-p-500.png 500w,
                  https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6318cc3b99f9a133e59474b8_02__Payments%20-%20Hero-p-800.png 800w,
                  https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6318cc3b99f9a133e59474b8_02__Payments%20-%20Hero-p-1080.png 1080w,
                  https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6318cc3b99f9a133e59474b8_02__Payments%20-%20Hero-p-1600.png 1600w,
                  https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6318cc3b99f9a133e59474b8_02__Payments%20-%20Hero-p-2000.png 2000w,
                  https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6318cc3b99f9a133e59474b8_02__Payments%20-%20Hero.png 2418w
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

export default PaymentHero;