"use client";
import React, { useState } from "react";

const cards = [
  {
    id: "connect",
    title: (
      <>
        Multi Currency
      </>
    ),
    description:
      "Hold, spend, and switch between currencies natively. No manual conversion. No hidden markup. Just one wallet, many currencies.",
    gradient: "bg-gradient-to-b from-[#319e5c] to-[#a2d8ba]",
    image: "/assets/images/card-1.webp",
  },
  {
    id: "ussd",
    title: (
      <>
        Virtual Cards
      </>
    ),
    description:
      "Generate a card in seconds. Freeze it, top it up, or kill it just as fast. Built for online spending, not paper forms.",
    gradient: "bg-gradient-to-b from-[#3bc0f8] to-[#87ddfd]",
    image: "/assets/images/card-2.webp",
  },
  {
    id: "payments",
    title: (
      <>
        Send and Receive
      </>
    ),
    description:
      "Move money instantly, across accounts, banks, or borders. No queues. No waiting on 'processing.' Just sent, and received.",
    gradient: "bg-gradient-to-b from-[#c93431] to-[#e0a39e]",
    image: "/assets/images/card-3.webp",
  },
  {
    id: "payouts",
    title: (
      <>
        Buy Utilities
      </>
    ),
    description:
      "Pay electricity, water, and bills in one tap. No receipts to keep. No lines to stand in.",
    gradient: "bg-gradient-to-b from-[#5468ff] to-[#b1c6ff]",
    image: "/assets/images/card-4.webp",
  },
  // 4 New Added Cards below
  {
    id: "identity",
    title: (
      <>
        Mobile Credit
      </>
    ),
    description:
      "Top up airtime or data instantly, for yourself or anyone else. Any network. Any time.",
    gradient: "bg-gradient-to-b from-[#f59e0b] to-[#fde68a]", // Amber gradient
    image: "/assets/images/card-1.webp",
  },
  {
    id: "ticketing",
    title: (
      <>
        Group Osusu
      </>
    ),
    description:
      "Digitize the trust circle you already run. Automated contributions, transparent payouts, zero spreadsheets.",
    gradient: "bg-gradient-to-b from-[#8b5cf6] to-[#c4b5fd]", // Violet gradient
    image: "/assets/card-2.webp",
  },
  {
    id: "loyalty",
    title: (
      <>
        USSD (Offline Transfers)
      </>
    ),
    description:
      "No internet? No problem. Send money, check balances, and pay bills straight from any phone, smart or not.",
    gradient: "bg-gradient-to-b from-[#ec4899] to-[#fbcfe8]", // Pink gradient
    image: "/assets/images/card-3.webp",
  },
  {
    id: "analytics",
    title: (
      <>
        WhatsApp Banking
      </>
    ),
    description:
      "Bank from the chat you already have open. Check balances, send money, pay bills, all inside WhatsApp.",
    gradient: "bg-gradient-to-b from-[#14b8a6] to-[#99f6e4]", // Teal gradient
    image: "/assets/images/card-4.webp",
  },  
  {
    id: "analytics",
    title: (
      <>
        Buy Tickets
      </>
    ),
    description:
      "Book travel, events, or transport tickets without leaving the app. No third-party redirects. No lost confirmations.",
    gradient: "bg-gradient-to-b from-[#14b8a6] to-[#99f6e4]", // Teal gradient
    image: "/assets/images/card-4.webp",
  },
  {
    id: "analytics",
    title: (
      <>
        Loan & Salary Advance
      </>
    ),
    description:
      "Access funds before payday, based on real transaction history, not paperwork. Approved in minutes, not weeks.",
    gradient: "bg-gradient-to-b from-[#14b8a6] to-[#99f6e4]", // Teal gradient
    image: "/assets/images/card-4.webp",
  },
  {
    id: "analytics",
    title: (
      <>
        AI Powered Support
      </>
    ),
    description:
      "Get answers instantly, day or night. No hold music. No ticket numbers. Just a resolution.",
    gradient: "bg-gradient-to-b from-[#14b8a6] to-[#99f6e4]", // Teal gradient
    image: "/assets/images/card-4.webp",
  },
  {
    id: "analytics",
    title: (
      <>
        Automated KYC 
      </>
    ),
    description:
      "Verify identity in minutes, not days. Scan, confirm, done. No branch visit required.",
    gradient: "bg-gradient-to-b from-[#14b8a6] to-[#99f6e4]", // Teal gradient
    image: "/assets/images/card-4.webp",
  },
  {
    id: "analytics",
    title: (
      <>
        Agent Locator
      </>
    ),
    description:
      "Find the nearest cash-in, cash-out point on a live map. No guessing. No wasted trips.",
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
          className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-2 text-sm font-semibold text-gray-800 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
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