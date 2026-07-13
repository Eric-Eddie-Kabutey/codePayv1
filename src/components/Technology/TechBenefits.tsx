import React from 'react';

function TechBenefits() {
  const features = [
    {
      title: "The best with one platform",
      description: "Combining the latest and most secure payment technologies and payment methods under one platform - tokenisation, blockchain, cloud, QR codes, near-field communication and more.",
      imageUrl: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63188007ee26356cfb5d7160_04__Tech%20-%20Feat%201.png",
      imageSrcSet: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63188007ee26356cfb5d7160_04__Tech%20-%20Feat%201-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63188007ee26356cfb5d7160_04__Tech%20-%20Feat%201-p-800.png 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63188007ee26356cfb5d7160_04__Tech%20-%20Feat%201-p-1080.png 1080w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63188007ee26356cfb5d7160_04__Tech%20-%20Feat%201-p-1600.png 1600w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63188007ee26356cfb5d7160_04__Tech%20-%20Feat%201-p-2000.png 2000w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63188007ee26356cfb5d7160_04__Tech%20-%20Feat%201.png 2334w",
      imageAlt: "Merchant payment gateway with crypto and NFC payment icons",
      reverse: false
    },
    {
      title: "Encrypted serverless architecture",
      description: "Our virtual private cloud infrastructure ensures no single point of failure with state-of-the-art encryption on all data and transactions.",
      imageUrl: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/631880077a27da235e312d0c_04__Tech%20-%20Feat%202.png",
      imageSrcSet: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/631880077a27da235e312d0c_04__Tech%20-%20Feat%202-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/631880077a27da235e312d0c_04__Tech%20-%20Feat%202-p-800.png 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/631880077a27da235e312d0c_04__Tech%20-%20Feat%202-p-1080.png 1080w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/631880077a27da235e312d0c_04__Tech%20-%20Feat%202-p-1600.png 1600w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/631880077a27da235e312d0c_04__Tech%20-%20Feat%202-p-2000.png 2000w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/631880077a27da235e312d0c_04__Tech%20-%20Feat%202.png 2334w",
      imageAlt: "Transactions status with encryption and cloud solution icons",
      reverse: true
    },
    {
      title: "Intuitive APIs suite",
      description: "Connect to existing systems, add on custom integrations, sync with other accounting or reporting tools seamlessly and securely using our bank grade API. Your data and connections are safe.",
      imageUrl: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63188007a15eef178c171b37_04__Tech%20-%20Feat%203.png",
      imageSrcSet: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63188007a15eef178c171b37_04__Tech%20-%20Feat%203-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63188007a15eef178c171b37_04__Tech%20-%20Feat%203-p-800.png 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63188007a15eef178c171b37_04__Tech%20-%20Feat%203-p-1080.png 1080w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63188007a15eef178c171b37_04__Tech%20-%20Feat%203-p-1600.png 1600w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63188007a15eef178c171b37_04__Tech%20-%20Feat%203-p-2000.png 2000w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63188007a15eef178c171b37_04__Tech%20-%20Feat%203.png 2334w",
      imageAlt: "Integrations via API for billing and payment link status report",
      reverse: false
    },
    {
      title: "Ready to use merchant connectors",
      description: "There's flexibility for your merchants to connect with other accounting or eCommerce tools such as WooCommerce, OpenCart, Quickbooks, Xero too.",
      imageUrl: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6318800704abef9812c2e3a2_04__Tech%20-%20Feat%204.png",
      imageSrcSet: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6318800704abef9812c2e3a2_04__Tech%20-%20Feat%204-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6318800704abef9812c2e3a2_04__Tech%20-%20Feat%204-p-800.png 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6318800704abef9812c2e3a2_04__Tech%20-%20Feat%204-p-1080.png 1080w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6318800704abef9812c2e3a2_04__Tech%20-%20Feat%204-p-1600.png 1600w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6318800704abef9812c2e3a2_04__Tech%20-%20Feat%204-p-2000.png 2000w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6318800704abef9812c2e3a2_04__Tech%20-%20Feat%204.png 2334w",
      imageAlt: "Xero and Quickbooks connectors",
      reverse: true
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 md:space-y-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`flex flex-col ${feature.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-stretch`}
            >
              {/* Text Content */}
              <div className="w-full md:w-1/2 flex items-center">
                <div className='self-start'>
                  <h3 className="text-3xl sm:text-4xl font-light leading-tight">
                    {feature.title}. <span className="text-gray-600 text-xl sm:text-3xl font-normal">{feature.description}</span>
                  </h3>
                </div>
              </div>
              
              {/* Image Container */}
              <div className="w-full md:w-1/2">
                <div className="bg-[#e8e8e2] rounded-2xl p-4 h-full flex items-center justify-center min-h-[300px]">
                  <img
                    src={feature.imageUrl}
                    srcSet={feature.imageSrcSet}
                    sizes="(max-width: 767px) 100vw, 50vw"
                    alt={feature.imageAlt}
                    className="w-full h-full object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechBenefits;