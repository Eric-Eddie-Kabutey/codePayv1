import React from 'react';

function Services() {
  const services = [
    {
      title: "Drive and grow your base",
      description: "Drive more revenue as you launch new payment services and easy to use acquiring features to onboard and manage merchants at scale.",
      icon: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219baf74ed9a42eb965ef8_Growth.png"
    },
    {
      title: "Intelligent control",
      description: "You decide which services or features to switch on, complete with automated tasks, intelligent routing, and instant notifications.",
      icon: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219baf1900d233e1360a4e_Control.png",
      iconSrcSet: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219baf1900d233e1360a4e_Control-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219baf1900d233e1360a4e_Control-p-800.png 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219baf1900d233e1360a4e_Control.png 962w",
      iconSizes: "(max-width: 1439px) 50px, (max-width: 1919px) 3vw, 50px"
    },
    {
      title: "Easy merchant management",
      description: "Onboard, configure, manage, and monitor all merchants, payments, transaction flows and data under the same view.",
      icon: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219bb06b18c7c28654b745_Person.png"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[50vh]">
        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-3 gap-8 h-full">
          {services.map((service, index) => (
            <div key={index} className="bg-[#f9f9f9] p-8 rounded-4xl flex flex-col h-100">
              <div className="w-16 h-16 mb-8 bg-white rounded-lg flex items-center justify-center p-3">
                <img
                  src={service.icon}
                  srcSet={service.iconSrcSet}
                  sizes={service.iconSizes}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-4xl font-normal mb-6 text-left">
                {service.title}
              </h2>
              <p className="text-xl text-gray-600 text-left">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide h-full">
          <div className="flex space-x-4 h-full items-center">
            {services.map((service, index) => (
              <div key={index} className="bg-[#f9f9f9] p-6 rounded-2xl w-[300px] flex-shrink-0 h-[80%] flex flex-col">
                <div className="w-14 h-14 mb-6 bg-white rounded-lg flex items-center justify-center p-2">
                  <img
                    src={service.icon}
                    srcSet={service.iconSrcSet}
                    sizes={service.iconSizes}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-2xl font-medium mb-4 text-left">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 text-left">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;