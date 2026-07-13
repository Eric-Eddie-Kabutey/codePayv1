"use client"
import React, { useState } from 'react'

interface TabItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageSources?: {
    srcSet: string;
    sizes: string;
  };
}

function PaymentsSection() {
  const [activeTab, setActiveTab] = useState<string>('tab1');

  const tabs: TabItem[] = [
    {
      id: 'tab1',
      title: 'Tap to Pay',
      description: 'Reduce cost and maintenance of POS terminal fleet by using Android smartphones as card readers - accept secure contactless payments using NFC technology anytime anywhere.',
      imageUrl: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187ee551f6ff2607e88894_02__Payments%20-%20Tab%201.png',
      imageAlt: 'Tap to pay mobile app screen',
      imageSources: {
        srcSet: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187ee551f6ff2607e88894_02__Payments%20-%20Tab%201-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187ee551f6ff2607e88894_02__Payments%20-%20Tab%201-p-800.png 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187ee551f6ff2607e88894_02__Payments%20-%20Tab%201-p-1080.png 1080w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187ee551f6ff2607e88894_02__Payments%20-%20Tab%201.png 1847w',
        sizes: '(max-width: 479px) 0px, 100vw'
      }
    },
    {
      id: 'tab2',
      title: 'QR Codes',
      description: 'Enable digital payments securely via QR codes with ready access to popular payment schemes and alternative payment methods - such as Mastercard, Visa, Alipay, WeChat Pay, your banking app and more.',
      imageUrl: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6329794c9a90f854194f2cc9_02__Payments%20-%20Tab%202.png',
      imageAlt: 'Example of scan and pay with AliPay QR code',
      imageSources: {
        srcSet: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6329794c9a90f854194f2cc9_02__Payments%20-%20Tab%202-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6329794c9a90f854194f2cc9_02__Payments%20-%20Tab%202-p-800.png 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6329794c9a90f854194f2cc9_02__Payments%20-%20Tab%202-p-1080.png 1080w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6329794c9a90f854194f2cc9_02__Payments%20-%20Tab%202.png 1847w',
        sizes: '(max-width: 479px) 0px, 100vw'
      }
    },
    {
      id: 'tab3',
      title: 'Payment links',
      description: 'Send payment links to request payments faster, customers can pay online securely with their preferred payment methods whilst merchants are kept up to date on the payment status with smart notifications.',
      imageUrl: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f0497bf09f9bb7537fd_02__Payments%20-%20Tab%203.png',
      imageAlt: 'Payment link screen and expiry date settings',
      imageSources: {
        srcSet: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f0497bf09f9bb7537fd_02__Payments%20-%20Tab%203-p-500.png 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f0497bf09f9bb7537fd_02__Payments%20-%20Tab%203-p-800.png 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f0497bf09f9bb7537fd_02__Payments%20-%20Tab%203-p-1080.png 1080w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f0497bf09f9bb7537fd_02__Payments%20-%20Tab%203-p-1600.png 1600w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187f0497bf09f9bb7537fd_02__Payments%20-%20Tab%203.png 1847w',
        sizes: '(max-width: 479px) 0px, 100vw'
      }
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 sm:mb-12 text-left">Payments that just work</h1>
        
        {/* Desktop Layout */}
        <div className="hidden md:block bg-[#f9f9f9] rounded-2xl p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 space-y-8">
              {tabs.map((tab) => (
                <div 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex flex-col gap-4 pl-8 cursor-pointer transition-opacity ${activeTab === tab.id ? 'opacity-100' : 'opacity-50 hover:opacity-70'}`}
                >
                  {activeTab === tab.id && (
                    <div className="absolute left-0 top-0 h-full w-1 bg-[#b4ed0f] rounded-full"></div>
                  )}
                  <h2 className="text-2xl lg:text-3xl font-normal">{tab.title}</h2>
                  {activeTab === tab.id && (
                    <p className="text-lg lg:text-xl text-gray-700">{tab.description}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="w-full h-[550px] flex items-center justify-center">
                <img
                  src={activeTabData.imageUrl}
                  srcSet={activeTabData.imageSources?.srcSet}
                  sizes={activeTabData.imageSources?.sizes}
                  alt={activeTabData.imageAlt}
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex space-x-4 w-max">
            {tabs.map((tab) => (
              <div 
                key={tab.id}
                className="bg-[#f9f9f9] p-6 rounded-2xl w-[300px] flex-shrink-0 flex flex-col"
              >
                {/* Image container at the top */}
                <div className="h-[180px] flex items-center justify-center mb-6">
                  <img
                    src={tab.imageUrl}
                    srcSet={tab.imageSources?.srcSet}
                    sizes={tab.imageSources?.sizes}
                    alt={tab.imageAlt}
                    className="h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                
                {/* Text content below the image */}
                <div className="flex flex-col">
                  <h2 className="text-2xl font-normal mb-3">{tab.title}</h2>
                  <p className="text-gray-700">{tab.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentsSection