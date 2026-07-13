import React from 'react';

function TechHero() {
  return (
    <section className="relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="w-full flex flex-col md:flex-row items-center gap-16">
          {/* Text content - left side */}
          <div className="w-full md:w-1/2 md:pr-8 lg:pr-12 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-6">
              Smart technology that works
            </h1>
            
            <div className="space-y-4 mb-8">
              {/* Feature list */}
              {[
                "Plug and innovate at speed",
                "Encrypted and reliable",
                "Ready for your future"
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
                className="inline-block px-8 py-3 text-base font-normal bg-[#91f8bd] hover:bg-black hover:text-white transition-colors duration-300 rounded-md"
              >
                Book a demo
              </a>
            </div>
          </div>
          
          {/* Image - right side (hidden on mobile) */}
          <div className="hidden md:block w-full md:w-1/2">
            <div className="relative">
              <img
                src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6329735d61fe6a1a4eb6a185_04__Tech%20-%20Hero.png"
                srcSet="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6329735d61fe6a1a4eb6a185_04__Tech%20-%20Hero-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6329735d61fe6a1a4eb6a185_04__Tech%20-%20Hero-p-800.png 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6329735d61fe6a1a4eb6a185_04__Tech%20-%20Hero-p-1080.png 1080w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6329735d61fe6a1a4eb6a185_04__Tech%20-%20Hero-p-1600.png 1600w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6329735d61fe6a1a4eb6a185_04__Tech%20-%20Hero-p-2000.png 2000w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6329735d61fe6a1a4eb6a185_04__Tech%20-%20Hero.png 2418w"
                sizes="(max-width: 767px) 0px, (max-width: 991px) 50vw, 600px"
                alt="Example list of customisable features including admin roles. Label says sync successful."
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

export default TechHero;