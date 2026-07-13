import React from 'react';
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      title: 'Acceptance at scale',
      description: 'Merchants can accept popular international payment schemes, wallets and alternative payment methods at the flick of a switch.',
      icon: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219baf00801f01aaf2b08a_Acceptance.png'
    },
    {
      title: 'Omnichannel solutions',
      description: 'Be it online, in-person or on the go, merchants can accept payments with the latest secure technology such as NFC, QR codes, payment links, and more.',
      icon: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219bb041e05112cbe902bc_World.png'
    },
    {
      title: 'Unified view',
      description: 'A complete view of you and your merchants\' business - manage and track all online and offline transactions including cash payments on the same platform.',
      icon: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219baf00801fdb18f2b08b_Clarity.png'
    }
  ];

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 relative">
                  <Image 
                    src={service.icon} 
                    alt={service.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden overflow-x-auto pb-4">
          <div className="flex space-x-4 w-max">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm w-72 flex-shrink-0">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 relative">
                    <Image 
                      src={service.icon} 
                      alt={service.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;