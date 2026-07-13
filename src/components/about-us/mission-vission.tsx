import React from 'react';

function MissionVision() {
  return (
    <div className=" bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#016d68] p-12 text-white rounded-2xl min-h-[320px] flex items-center shadow-lg">
            <p className="text-3xl md:text-4xl leading-tight font-light">
              <span className="font-bold text-[#91f8bd]">Our mission</span> is to help businesses 
              propel forward with smart, accessible financial technology solutions.
            </p>
          </div>
          
          <div className="bg-[#91f8bd] p-12 text-gray-800 rounded-2xl min-h-[320px] flex items-center shadow-lg">
            <p className="text-3xl md:text-4xl leading-tight font-light">
              <span className="font-bold text-[#016d68]">Our vision</span> is to build a brighter 
              financial future for all with digital financial technology.
            </p>
          </div>
        </div>
        
        <div className="bg-[#f9f9f9] p-12 rounded-2xl shadow-lg">
          <p className="text-lg leading-relaxed font-light text-gray-700">
            Pomelo builds B2B platform solutions to solve industry and payment challenges across the financial ecosystem. 
            We are driven by our passion for using financial technology to support businesses and drive payment efficiencies 
            and innovation across the financial ecosystem to ultimately benefit merchants and their customers.
            <br/><br/>
            Pomelo works with financial institutions and enterprises providing access to the latest payment rails, acquiring 
            infrastructure, and more. Our presence in Europe and Asia combined with our technology places us in a unique 
            position to support growth by resolving working capital challenges faced by businesses both domestically in 
            these markets and overseas.
            <br/><br/>
            Founded in London, UK in 2017, Pomelo began by helping businesses digitise their payment infrastructure and 
            take payments from anyone, anywhere at a low cost and without the need for expensive point-of-sale hardware. 
            It continues to provide these solutions directly to businesses in the UK as Pomelo Pay and leverages this 
            experience to enhance its Payments Platform as a Service (PPaaS) offering.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;