import React from 'react';

function AdditionalBenefits() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Left-aligned heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-12 text-left">
          Additional benefits
        </h1>

        {/* Cards container with horizontal scroll on mobile */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex space-x-4 w-max">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl w-[280px] flex-shrink-0 flex flex-col border border-gray-200 h-[320px]">
              <div className="flex-grow">
                <h3 className="text-2xl font-normal mb-4">Crossborder payments made easy</h3>
                <p className="text-gray-600 mb-6">
                  Provide merchants and their end customers the choice to pay in different currencies, while boosting revenue through foreign exchange mark ups for financial institutions.
                </p>
              </div>
              <div className="w-12 h-12">
                <img 
                  src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe64813e672a3234ac_Growth.png"
                  srcSet="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe64813e672a3234ac_Growth-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe64813e672a3234ac_Growth-p-800.png 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe64813e672a3234ac_Growth.png 962w"
                  sizes="50px"
                  alt="Growth icon"
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl w-[280px] flex-shrink-0 flex flex-col border border-gray-200 h-[320px]">
              <div className="flex-grow">
                <h3 className="text-2xl font-normal mb-4">Digital currency of the future</h3>
                <p className="text-gray-600 mb-6">
                  Enable merchants to tap into the spending power of more than 300 million cryptocurrency owners globally, increasing market share and opening new revenue streams for financial institutions.
                </p>
              </div>
              <div className="w-12 h-12">
                <img 
                  src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe2930be7c0c900b9d_Currency.png"
                  srcSet="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe2930be7c0c900b9d_Currency-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe2930be7c0c900b9d_Currency-p-800.png 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe2930be7c0c900b9d_Currency.png 962w"
                  sizes="50px"
                  alt="Currency icon"
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop grid layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl flex flex-col border border-gray-200 h-[350px]">
            <div className="flex-grow">
              <h3 className="text-2xl font-normal mb-4">Crossborder payments made easy</h3>
              <p className="text-gray-600">
                Provide merchants and their end customers the choice to pay in different currencies, while boosting revenue through foreign exchange mark ups for financial institutions.
              </p>
            </div>
            <div className="mt-auto w-12 h-12">
              <img 
                src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe64813e672a3234ac_Growth.png"
                srcSet="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe64813e672a3234ac_Growth-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe64813e672a3234ac_Growth-p-800.png 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe64813e672a3234ac_Growth.png 962w"
                sizes="50px"
                alt="Growth icon"
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl flex flex-col border border-gray-200 h-[350px]">
            <div className="flex-grow">
              <h3 className="text-2xl font-normal mb-4">Digital currency of the future</h3>
              <p className="text-gray-600">
                Enable merchants to tap into the spending power of more than 300 million cryptocurrency owners globally, increasing market share and opening new revenue streams for financial institutions.
              </p>
            </div>
            <div className="mt-auto w-12 h-12">
              <img 
                src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe2930be7c0c900b9d_Currency.png"
                srcSet="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe2930be7c0c900b9d_Currency-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe2930be7c0c900b9d_Currency-p-800.png 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe2930be7c0c900b9d_Currency.png 962w"
                sizes="50px"
                           alt="Currency icon"
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Empty card (to maintain 3-column layout) */}
          <div className="p-8 rounded-xl flex flex-col h-[300px]">
            {/* Empty space to match height */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdditionalBenefits;