import React from 'react';
import merchangeImg from "../../../public/assets/images/merchange_hero.png"
import Image from 'next/image';

function MerchantHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content - left side */}
          <div className="w-full md:w-1/2 md:pr-8 lg:pr-12 flex flex-col gap-6 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-none mb-6">
              Merchant services that get you ahead
            </h1>
            
            <div className="space-y-4 mb-8">
              {/* Feature list */}
              {[
                "Stay ahead as a valued merchant partner",
                "Full control and intelligent features",
                "Reduce operational friction and complexities"
              ].map((item, index) => (
                <div key={index} className="flex items-start md:items-center">
                  <img 
                    src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62f6801e992cf4a7bbc2302d_Arrow-black.png" 
                    alt="Click here" 
                    className="w-7 h-fit mt-1 md:mt-0 mr-3 flex-shrink-0"
                    loading="lazy"
                  />
                  <p className="text-lg md:text-xl text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center md:text-left">
              <a 
                href="/contact-us" 
                className="inline-block px-8 py-3 text-lg font-medium bg-[#91f8bd] hover:bg-black hover:text-white transition-colors duration-300 rounded-md"
              >
                Book a demo
              </a>
            </div>
          </div>
          
          {/* Image - right side (hidden on mobile) */}
          <div className="hidden md:block w-full md:w-1/2">
            <div className="w-[80%] h-fit ml-auto">
              <Image
                src={merchangeImg}
                sizes="(max-width: 767px) 0px, (max-width: 991px) 50vw, 600px"
                alt="Tap to Pay and QR code payment screens"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MerchantHero;