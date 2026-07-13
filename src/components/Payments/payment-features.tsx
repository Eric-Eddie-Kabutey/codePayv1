import React from 'react';

function PaymentsFeatures() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* First Row */}
        <div className="flex flex-col lg:flex-row items-start gap-16 mb-20">
          <div className="lg:w-1/2 w-full lg:pt-8 flex flex-col justify-center">
            <p className="text-3xl lg:text-4xl font-light leading-relaxed">
              Connected with international payment rails. <span className="text-gray-500 text-2xl lg:text-3xl">Enable acceptance to 15+ popular schemes, wallets and payment methods with just a few clicks, other preferred payment methods can be added too.</span>
            </p>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="bg-[#e8e8e2] rounded-2xl p-8 w-full max-w-2xl">
              <img 
                src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f197e340579ae79d25b_02__Payments%20-%20Feat%201.png"
                sizes="(max-width: 479px) 0px, 100vw"
                srcSet="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f197e340579ae79d25b_02__Payments%20-%20Feat%201-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f197e340579ae79d25b_02__Payments%20-%20Feat%201-p-800.png 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f197e340579ae79d25b_02__Payments%20-%20Feat%201-p-1080.png 1080w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f197e340579ae79d25b_02__Payments%20-%20Feat%201-p-1600.png 1600w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f197e340579ae79d25b_02__Payments%20-%20Feat%201-p-2000.png 2000w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f197e340579ae79d25b_02__Payments%20-%20Feat%201.png 2334w"
                alt="A collection of payment method logos including schemes, APMs and cryptocurrency" 
                loading="lazy"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Second Row (reversed on mobile) */}
        <div className="flex flex-col lg:flex-row-reverse items-start gap-16 mb-20">
          <div className="lg:w-1/2 w-full lg:pt-8 flex flex-col justify-center">
            <p className="text-3xl lg:text-4xl font-light leading-relaxed">
              Smart invoicing for merchants. <span className="text-gray-500 text-2xl lg:text-3xl">Sync with 3<sup>rd</sup> party accounting software such as Quickbooks or Xero for automated invoice payment requests and updates through payment links.</span>
            </p>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <div className="bg-[#e8e8e2] rounded-2xl p-8 w-full max-w-2xl">
              <img 
                src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f19ee2635dd025d6448_02__Payments%20-%20Feat%202.png"
                sizes="(max-width: 479px) 0px, 100vw"
                srcSet="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f19ee2635dd025d6448_02__Payments%20-%20Feat%202-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f19ee2635dd025d6448_02__Payments%20-%20Feat%202-p-800.png 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f19ee2635dd025d6448_02__Payments%20-%20Feat%202-p-1080.png 1080w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f19ee2635dd025d6448_02__Payments%20-%20Feat%202-p-1600.png 1600w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f19ee2635dd025d6448_02__Payments%20-%20Feat%202-p-2000.png 2000w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f19ee2635dd025d6448_02__Payments%20-%20Feat%202.png 2334w"
                alt="Invoicing screens with payment status" 
                loading="lazy"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="lg:w-1/2 w-full lg:pt-8 flex flex-col justify-center">
            <p className="text-3xl lg:text-4xl font-light leading-relaxed">
              Ready online. <span className="text-gray-500 text-2xl lg:text-3xl">On top of ready-to-use checkout and payment gateways, extend API connectivity to your merchants for easy integrations with other eCommerce services too.</span>
            </p>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="bg-[#e8e8e2] rounded-2xl p-8 w-full max-w-2xl">
              <img 
                src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f19e1295379746852ce_02__Payments%20-%20Feat%203.png"
                sizes="(max-width: 479px) 0px, 100vw"
                srcSet="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f19e1295379746852ce_02__Payments%20-%20Feat%203-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f19e1295379746852ce_02__Payments%20-%20Feat%203-p-800.png 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f19e1295379746852ce_02__Payments%20-%20Feat%203-p-1080.png 1080w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f19e1295379746852ce_02__Payments%20-%20Feat%203-p-1600.png 1600w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f19e1295379746852ce_02__Payments%20-%20Feat%203-p-2000.png 2000w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f19e1295379746852ce_02__Payments%20-%20Feat%203.png 2334w"
                alt="Merchant online shop including product images, shop url and payment confirmation example." 
                loading="lazy"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentsFeatures;