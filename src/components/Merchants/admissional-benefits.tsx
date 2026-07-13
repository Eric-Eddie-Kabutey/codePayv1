import React from 'react';

function MerchantAdditionalBenefits() {
  const benefits = [
    {
      title: "Monitor merchants effortlessly",
      description: "Never miss an important event such as chargebacks, disputes or paid invoices with smart notifications and real-time transaction monitoring.",
      icon: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe607c93a42dd6ac37_Clarity.png",
      iconSrcSet: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe607c93a42dd6ac37_Clarity-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe607c93a42dd6ac37_Clarity.png 962w"
    },
    {
      title: "Fast and reliable onboarding",
      description: "Merchant sign-ups made simple with open banking, customisable onboarding flows complete with automated KYB/KYC to meet local regulations and evolving needs.",
      icon: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe6667e7e2df402487_Innovation.png",
      iconSrcSet: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe6667e7e2df402487_Innovation-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe6667e7e2df402487_Innovation.png 962w"
    },
    {
      title: "Flexible pricing models",
      description: "Set account limits, fees, merchant discount rates, foreign currency markups, and promotional features for different groups of merchants to incentivise sign ups and maximise revenue.",
      icon: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe00801f3b4bf2cfb5_Control.png",
      iconSrcSet: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe00801f3b4bf2cfb5_Control-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbe00801f3b4bf2cfb5_Control.png 962w"
    },
    {
      title: "Customisable risk profiles",
      description: "Protect your business by assigning custom risk profiles to different audiences, cater better to your business risk appetite regardless of the size of your base.",
      icon: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbf2cd2b360ae26fc19_Security.png",
      iconSrcSet: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbf2cd2b360ae26fc19_Security-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbf2cd2b360ae26fc19_Security.png 962w"
    },
    {
      title: "Automate workflows and data management",
      description: "Automate time-consuming tasks such as reconciliation and archival. Channel data in different formats into other workflows or systems seamlessly.",
      icon: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbed354ea80748bd93f_Automate.png",
      iconSrcSet: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbed354ea80748bd93f_Automate-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63219fbed354ea80748bd93f_Automate.png 962w"
    }
  ];

  return (
    <section className="pt-0 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light">Additional benefits</h1>
        </div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-xl lg:text-2xl font-medium mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
              </div>
              <div className="w-12 h-12">
                <img 
                  src={benefit.icon}
                  srcSet={benefit.iconSrcSet}
                  sizes="50px"
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll - Visible on mobile */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex space-x-4 w-max">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 w-[280px] flex-shrink-0 flex flex-col h-[300px]">
                <div className="flex-grow">
                  <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                </div>
                <div className="w-12 h-12">
                  <img 
                    src={benefit.icon}
                    srcSet={benefit.iconSrcSet}
                    sizes="50px"
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MerchantAdditionalBenefits;