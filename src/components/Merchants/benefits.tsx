import React from 'react';

function FeatureSection() {
  const features = [
    {
      title: "Robust settlement engine",
      description: "You have full control of your pay in and pay out flows – set custom or automatic settlement flows with daily settlements, balance checks and reports.",
      imageUrl: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f8fd370762f6e6dabbb_03__Merchant%20-%20Feat%201.png",
      imageSrcSet: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f8fd370762f6e6dabbb_03__Merchant%20-%20Feat%201-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f8fd370762f6e6dabbb_03__Merchant%20-%20Feat%201-p-800.png 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f8fd370762f6e6dabbb_03__Merchant%20-%20Feat%201-p-1080.png 1080w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f8fd370762f6e6dabbb_03__Merchant%20-%20Feat%201-p-1600.png 1600w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f8fd370762f6e6dabbb_03__Merchant%20-%20Feat%201-p-2000.png 2000w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f8fd370762f6e6dabbb_03__Merchant%20-%20Feat%201.png 2334w",
      imageAlt: "Merchant transaction dashboard showing pending and confirmed payments",
      reverse: false
    },
    {
      title: "360 merchant management",
      description: "Intuitive control via an integrated online portal with smart management tools and features for all your merchant acquiring and management needs.",
      imageUrl: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/632aed79d427e97cd9b5a413_03__Merchant%20-%20Feat%202.png",
      imageSrcSet: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/632aed79d427e97cd9b5a413_03__Merchant%20-%20Feat%202-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/632aed79d427e97cd9b5a413_03__Merchant%20-%20Feat%202-p-800.png 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/632aed79d427e97cd9b5a413_03__Merchant%20-%20Feat%202-p-1080.png 1080w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/632aed79d427e97cd9b5a413_03__Merchant%20-%20Feat%202-p-1600.png 1600w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/632aed79d427e97cd9b5a413_03__Merchant%20-%20Feat%202-p-2000.png 2000w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/632aed79d427e97cd9b5a413_03__Merchant%20-%20Feat%202.png 2334w",
      imageAlt: "Customisable merchant onboarding flow",
      reverse: true
    },
    {
      title: "Real-time fraud detection",
      description: "Protect your revenue with fraud detection connected to a global database and machine learning model.",
      imageUrl: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6335671abb31b39fec20e544_03__Merchant%20-%20Feat%203.png",
      imageSrcSet: "https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6335671abb31b39fec20e544_03__Merchant%20-%20Feat%203-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6335671abb31b39fec20e544_03__Merchant%20-%20Feat%203-p-800.png 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6335671abb31b39fec20e544_03__Merchant%20-%20Feat%203-p-1080.png 1080w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6335671abb31b39fec20e544_03__Merchant%20-%20Feat%203.png 1168w",
      imageAlt: "Payment approval dashboard",
      reverse: false
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
                  <h3 className="text-3xl sm:text-4xl font-light-top leading-tight">
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

export default FeatureSection;