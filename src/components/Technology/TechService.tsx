import React from 'react';

function TechService() {
  const services = [
    {
      title: "Ready to use",
      description: "Switch on the services and features you need – it's that easy to use.",
      icon: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219bb07ccb99701f018934_Ready%20to%20use.png"
    },
    {
      title: "Scalable modules",
      description: "Our modern approach ensures each microservices, function and feature are modular and configurable to suit your needs.",
      icon: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219baf74ed9a42eb965ef8_Growth.png",
      iconSrcSet: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219baf74ed9a42eb965ef8_Growth-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219baf74ed9a42eb965ef8_Growth-p-800.png 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219baf74ed9a42eb965ef8_Growth.png 962w",
      iconSizes: "(max-width: 1439px) 50px, (max-width: 1919px) 3vw, 50px"
    },
    {
      title: "Instant connectivity",
      description: "Our API-based smart tech fits seamlessly into your business – without putting a dent in your profits.",
      icon: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219bafddd87dd469aa2ff9_Connectivity.png"
    }
  ];

  return (
    <div className="bg-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Grid Layout - 3 columns */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 mb-6">
                  <img
                    src={service.icon}
                    srcSet={service.iconSrcSet}
                    sizes={service.iconSizes}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-normal mb-4 text-left">{service.title}</h3>
                <p className="text-gray-600 text-left flex-grow">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll Layout */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex space-x-4 w-max">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg w-[280px] flex-shrink-0">
                <div className="w-12 h-12 mb-4">
                  <img
                    src={service.icon}
                    srcSet={service.iconSrcSet}
                    sizes={service.iconSizes}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-normal mb-3 text-left">{service.title}</h3>
                <p className="text-gray-600 text-left">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechService;