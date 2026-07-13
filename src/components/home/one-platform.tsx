"use client";
import React, { useState } from "react";

const cards = [
  {
    id: "connect",
    title: (
      <>
        Connect &<br /> Communicate
      </>
    ),
    description:
      "Send SMS, Voice & IVR instantly, reach your audience on any device, any network.",
    gradient: "bg-gradient-to-b from-[#319e5c] to-[#a2d8ba]",
    image: "/assets/images/card-1.webp",
  },
  {
    id: "ussd",
    title: (
      <>
        Interactive<br /> USSD
      </>
    ),
    description:
      "Build mobile menus and real-time services that work on all phones, no app needed.",
    gradient: "bg-gradient-to-b from-[#3bc0f8] to-[#87ddfd]",
    image: "/assets/images/card-2.webp",
  },
  {
    id: "payments",
    title: (
      <>
        Accept<br /> Payments
      </>
    ),
    description:
      "Collect mobile money and card payments securely, with real-time tracking.",
    gradient: "bg-gradient-to-b from-[#c93431] to-[#e0a39e]",
    image: "/assets/images/card-3.webp",
  },
  {
    id: "payouts",
    title: (
      <>
        Bulk Payouts
      </>
    ),
    description:
      "Disburse funds to many recipients quickly and easily for payroll or payouts.",
    gradient: "bg-gradient-to-b from-[#5468ff] to-[#b1c6ff]",
    image: "/assets/images/card-4.webp",
  },
  // 4 New Added Cards below
  {
    id: "identity",
    title: (
      <>
        Identity<br /> Verification
      </>
    ),
    description:
      "Verify user identities quickly and securely with integrated KYC and ID checks.",
    gradient: "bg-gradient-to-b from-[#f59e0b] to-[#fde68a]", // Amber gradient
    image: "/assets/images/card-1.webp",
  },
  {
    id: "ticketing",
    title: (
      <>
        Event<br /> Ticketing
      </>
    ),
    description:
      "Create, sell, and manage tickets for your events with automated QR code scanning.",
    gradient: "bg-gradient-to-b from-[#8b5cf6] to-[#c4b5fd]", // Violet gradient
    image: "/assets/card-2.webp",
  },
  {
    id: "loyalty",
    title: (
      <>
        Customer<br /> Loyalty
      </>
    ),
    description:
      "Reward your best customers and keep them coming back with custom loyalty programs.",
    gradient: "bg-gradient-to-b from-[#ec4899] to-[#fbcfe8]", // Pink gradient
    image: "/assets/images/card-3.webp",
  },
  {
    id: "analytics",
    title: (
      <>
        Advanced<br /> Analytics
      </>
    ),
    description:
      "Get deep insights into your messaging, payments, and audience engagement.",
    gradient: "bg-gradient-to-b from-[#14b8a6] to-[#99f6e4]", // Teal gradient
    image: "/assets/images/card-4.webp",
  },
];

function OnePlatform() {
  const [ showAll, setShowAll ] = useState(false);

  // Slice the array to show 4 or all 8 based on state
  const displayedCards = showAll ? cards : cards.slice(0, 4);

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">

      {/* Top Header Section with the "See All" Button */}
      <div className="flex items-center justify-end mb-6 lg:mb-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-2 text-sm font-semibold text-gray-800 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          {showAll ? "Show Less" : "See All"}
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 transition-all duration-500">
        {displayedCards.map((card) => (
          <div
            key={card.id}
            className={`relative flex flex-col overflow-hidden rounded-2xl h-[400px] sm:h-[420px] lg:h-[420px] pt-8 px-6 shadow-sm ${card.gradient}`}
          >
            {/* Text Content */}
            <div className="z-10 relative">
              <h2 className="text-white text-3xl font-bold mb-4 leading-tight tracking-tight">
                {card.title}
              </h2>
              <p className="text-white/95 text-[15px] sm:text-base leading-snug pr-2">
                {card.description}
              </p>
            </div>

            {/* Bottom Image (Cutouts) */}
            <div className="absolute bottom-0 left-0 w-full h-[55%] flex items-end justify-center pointer-events-none">
              <img
                src={card.image}
                alt={card.id}
                className="w-full h-full object-contain object-bottom"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OnePlatform;