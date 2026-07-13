import React from 'react';

function OurValues() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-light text-black mb-12 text-left">Our values</h1>
        
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer min-h-[450px] flex flex-col">
              <div className="flex-grow">
                <h2 className="text-3xl font-medium mb-6">Collaboration</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  The whole is greater than the sum of its parts. We have an in-office culture that elevates our knowledge together.
                </p>
              </div>
              <div className="mt-auto pt-6">
                <img 
                  src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219baf9298aad1801ef49f_Collaboration.png" 
                  loading="lazy" 
                  alt="Collaboration" 
                  className="w-16 h-16"
                />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer min-h-[450px] flex flex-col">
              <div className="flex-grow">
                <h2 className="text-3xl font-medium mb-6">Consistent learning</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  The only constant is change. To keep pace with change, we keep learning to ensure we are never left behind.
                </p>
              </div>
              <div className="mt-auto pt-6">
                <img 
                  src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219baff3f0f61d542389b8_Innovation-1.png" 
                  loading="lazy" 
                  alt="Consistent Learning" 
                  className="w-16 h-16"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer min-h-[450px] flex flex-col">
              <div className="flex-grow">
                <h2 className="text-3xl font-medium mb-6">Clarity</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our transparency helps us build trust. The trust we have in each other is vital for us in achieving our goals, objectives and mission.
                </p>
              </div>
              <div className="mt-auto pt-6">
                <img 
                  src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219baf00801fdb18f2b08b_Clarity.png" 
                  loading="lazy" 
                  alt="Clarity" 
                  className="w-16 h-16"
                />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer min-h-[450px] flex flex-col">
              <div className="flex-grow">
                <h2 className="text-3xl font-medium mb-6">Collectiveness</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We win together and lose together. Failure is only another opportunity to learn and is never the fault of one person or thing.
                </p>
              </div>
              <div className="mt-auto pt-6">
                <img 
                  src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219bb041e05112cbe902bc_World.png" 
                  loading="lazy" 
                  alt="Collectiveness" 
                  className="w-16 h-16"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurValues;