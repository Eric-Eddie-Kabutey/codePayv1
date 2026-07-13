import React from 'react';

function Revenue() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* First Row */}
        <div className="flex flex-col lg:flex-row items-start gap-16 mb-20">
          <div className="lg:w-1/2 w-full lg:pt-8 flex flex-col justify-center">
            <p className="text-3xl lg:text-4xl font-light leading-relaxed">
              Revenue boosting payments solutions. <span className="text-gray-500 text-2xl lg:text-3xl">Reduce costs and elevate your payments acquiring business with new payments technology such as NFC, cryptocurrencies, QR codes, and payment links.</span>
            </p>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="bg-[#e8e8e2] rounded-2xl p-8 w-full max-w-2xl">
              <img 
                src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/631880aa0094ad816732c7ed_05__Financial%20-%20Feat%201.png" 
                alt="Merchant app screen with QR code payments" 
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
              Ready to use payments rails and gateways. <span className="text-gray-500 text-2xl lg:text-3xl">Boost your revenue with easy access to popular card schemes and alternative payment methods such as crypto, digital or mobile wallets, pay later, local or region-specific APMs.</span>
            </p>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <div className="bg-[#e8e8e2] rounded-2xl p-8 w-full max-w-2xl">
              <img 
                src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/631880aa55a297771a8b02c6_05__Financial%20-%20Feat%202.png" 
                alt="Payment method logos" 
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
              Real-time risk management. <span className="text-gray-500 text-2xl lg:text-3xl">Manage business risk with smart notifications, real-time fraud detection, transaction monitoring and more.</span>
            </p>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="bg-[#e8e8e2] rounded-2xl p-8 w-full max-w-2xl">
              <img 
                src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/631880ab5f30c8ce6570c93e_05__Financial%20-%20Feat%203.png" 
                alt="Transaction dashboard" 
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

export default Revenue;