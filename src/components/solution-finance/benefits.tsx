import React from 'react';

function Benefits() {
  const benefits = [
    {
      title: "Synced revenue systems and pricing control",
      description: "Segment and assign merchants to different pricing models and be in sync with your revenue management systems.",
      icon: "https://cdn.prod.website-files.com/62ed2c24cc3a061ae67de630/6318cc938e91391e46ddd4b9_Currency.png"
    },
    {
      title: "Streamline operations",
      description: "Complex processes can be simplified through automated flows, custom rules or intelligent routing for risk, fraud or compliance reviews.",
      icon: "https://cdn.prod.website-files.com/62ed2c24cc3a061ae67de630/6318cd22bb880a65f22f8e16_Control.png"
    },
    {
      title: "Crossborder payments made easy",
      description: "Protect and boost top line growth with flexible markup while allowing your merchants and end customers the choice to pay in their preferred currency.",
      icon: "https://cdn.prod.website-files.com/62ed2c24cc3a061ae67de630/6318cd2d83c47f038f5903cc_Security.png"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900">Additional benefits</h1>
          <div className="hidden md:flex space-x-4">
            <button className="p-3 rounded-full hover:bg-gray-100 transition-colors">
              <img 
                src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62f68113791f0a46cb6d3121_Website-icons-03.png" 
                alt="Previous" 
                className="w-8 h-8"
              />
            </button>
            <button className="p-3 rounded-full hover:bg-gray-100 transition-colors">
              <img 
                src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62f68113bab2af91d561af38_Website-icons-02.png" 
                alt="Next" 
                className="w-8 h-8"
              />
            </button>
          </div>
        </div>

        {/* Mobile horizontal scroll container - scrollbar hidden */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex space-x-6 w-max">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-sm w-[85vw] flex-shrink-0 flex flex-col min-h-[380px]"
                style={{ borderRadius: '20px' }}
              >
                <div className="flex-grow">
                  <h2 className="text-2xl font-light mb-4 text-gray-900">
                    {benefit.title}
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">
                    {benefit.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <img 
                    src={benefit.icon} 
                    alt="" 
                    loading="lazy"
                    className="w-14 h-14 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop grid layout (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow min-h-[400px] flex flex-col"
              style={{ borderRadius: '20px' }}
            >
              <div className="flex-grow">
                <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-900">
                  {benefit.title}
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  {benefit.description}
                </p>
              </div>
              <div className="mt-auto">
                <img 
                  src={benefit.icon} 
                  alt="" 
                  loading="lazy"
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;