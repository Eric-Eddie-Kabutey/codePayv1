import React from "react";

function NewsroomSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto pt-20">
        <h1 className="text-4xl md:text-[3.5rem] font-light text-center mb-12 font-sans">
          Newsroom
        </h1>
        <div className="mt-24 flex flex-col justify-between mb-10 bg-[#91f8bd] rounded-lg p-8 h-100 md:p-12  w-full">
          <div className=" flex justify-end ">
            <span className="bg-teal-600 text-white px-6 py-4 rounded-md text-base font-medium">
              Featured Post
            </span>
          </div>

          <div className="flex flex-col justify-end">
            <h2 className="text-3xl md:text-3xl lg:text-4xl leading-snug  text-left p-10">
              Pomelo Group acquires fellow Singaporean FinTech Arrow Checkout
            </h2>
            <div className="text-lg text-gray-700 font-medium">
              January 23, 2025
            </div>
          </div>
        </div>

        {/* Two Cards Below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Press Contact Card */}
          <div className="border-2 border-[#d3ff59] h-100 rounded-lg p-6 flex flex-col justify-between bg-white">
            <div>
              <h3 className="text-3xl  mb-3">Press & Media Contact</h3>
              <p className="text-gray-600 text-2xl">
                Reach out to us if you have any questions.
              </p>
            </div>
            <div className="flex justify-start mt-4">
              <a
                href="mailto:press@pomelogroup.com"
                className="px-6 py-3 bg-[#91f8bd]  border-gray-800 rounded-md hover:bg-black hover:text-white hover:border-black transition-colors font-medium"
              >
                Contact PR Team
              </a>
            </div>
          </div>

          {/* Media Resources Card */}
          <div className="bg-teal-600 h-100 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl  mb-3 text-green-200">Media Resources</h3>
              <p className="text-gray-100 text-2xl">
                Download logo, view guides and other resources.
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <a
                href="/company/press-media-kit"
                className="px-6 py-3 bg-[#91f8bd] text-gray-900 rounded-md hover:bg-gray-900 hover:text-white transition-colors font-medium"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default NewsroomSection;
