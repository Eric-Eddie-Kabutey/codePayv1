import React from 'react';

function AboutHero() {
  return (
    <div className="relative flex items-center justify-center min-h-[650px]">
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-[3.5rem] mb-8 font-normal text-black leading-tight">
          Fresh thinking for a brighter <br /> financial future
        </h1>

        <div className="mt-6">
          <a
            href="/contact-us"
            className="inline-block px-10 py-4 bg-black text-white font-medium rounded-lg tracking-wide transition-all duration-300 hover:bg-green-600 cursor-pointer"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;