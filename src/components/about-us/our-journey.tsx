"use client";

import React, { useState } from 'react';

function OurJourney() {
  const [activeYear, setActiveYear] = useState('2022');

  const timelineData = {
    '2022': [
      {
        month: 'July',
        content: 'Opens new office in Thailand'
      },
      {
        month: 'March',
        content: 'Granted principal member for acquiring with Mastercard'
      }
    ],
    '2021': [
      {
        month: 'November',
        content: 'Secures an investment of $10m to mark the end of Series A funding.'
      },
      {
        month: 'October',
        content: 'Granted global acquirer and processor with Discover'
      },
      {
        month: 'January',
        content: 'Granted principal member for issuing with Mastercard'
      }
    ],
    '2020': [
      {
        month: 'December',
        content: 'Secures a £2.1m investment for further expansion'
      },
      {
        month: 'November',
        content: 'Issued e-money license in the UK by the FCA\n\nObtained PCI DSS Level 1 certification'
      },
      {
        month: 'March',
        content: 'Asia expansion continues with a new office opening in Vietnam'
      }
    ],
    '2019': [
      {
        month: 'November',
        content: 'Signals Asia expansion with new headquarter in Singapore'
      },
      {
        month: 'October',
        content: 'Expanded platform solution with Bank of Maldives'
      },
      {
        month: 'September',
        content: 'Raises £1.2m in seed funding for product and team expansion'
      }
    ],
    '2018': [
      {
        month: 'October',
        content: 'Pilot AliPay with Bank of Maldives'
      },
      {
        month: 'January',
        content: 'Rollout QR code based payments in the UK'
      }
    ],
    '2017': [
      {
        month: 'September',
        content: 'Opens first office in London, UK'
      },
      {
        month: 'August',
        content: 'Founded as Pomelo Pay providing QR code, AliPay and WeChat Pay to UK retailers'
      }
    ]
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-light text-black mb-12">Our journey</h1>
        
        <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex space-x-2">
            {Object.keys(timelineData).map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-6 py-3 rounded-full text-lg font-medium whitespace-nowrap transition-all duration-300 ${
                  activeYear === year
                    ? 'bg-[#d3ff59] text-gray-900 font-semibold shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
        
        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {timelineData[activeYear as keyof typeof timelineData].map((item, index) => (
            <div 
              key={index} 
              className="border-2 border-[#d3ff59] rounded-xl p-8 h-full min-h-[300px] hover:shadow-lg transition-all duration-300"
            >
              <p className="text-gray-500 text-base mb-6">{item.month}</p>
              <p className="text-gray-900 text-xl leading-relaxed whitespace-pre-line">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurJourney;