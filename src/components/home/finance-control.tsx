"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { features } from "@/content/homepage";

function AdminLayers() {

  // Helper function to render cards cleanly with matching heights
  const renderCard = (card: any, index: number, containerClass: string, imgClass: string, textMargin: string) => (
    <motion.article
      key={card.title}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: 0.1 * index, ease: "easeOut" }}
      // ADDED: w-full and h-full to force the article to stretch to its grid/flex container height
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[12px] p-8 sm:p-10 shadow-sm ring-1 ring-gray-100 transition-all hover:-translate-y-1 hover:shadow-md w-full h-full ${containerClass}`}
      style={{ backgroundColor: card.bg, color: card.text }}
    >
      {/* Text Content */}
      <div className={`relative z-10 max-w-lg ${textMargin}`}>
        <h3 className="mb-4 text-2xl sm:text-3xl font-serif font-bold leading-tight" style={{ color: card.text }}>
          {card.title}
        </h3>
        <p className="mb-8 text-[15px] sm:text-base font-serif leading-relaxed opacity-95" style={{ color: card.text }}>
          {card.body}
        </p>

        {card.buttonLabel && (
          <button className="inline-block rounded-xl bg-white px-6 py-3 text-sm sm:text-base font-serif font-bold shadow-sm transition-colors hover:bg-gray-100" style={{ color: card.bg }}>
            {card.buttonLabel}
          </button>
        )}

        {card.isCTA && (
          <button className="inline-flex items-center gap-2 rounded-xl bg-[#218350] px-6 py-3 text-sm font-serif font-semibold text-white transition-all hover:bg-black shadow-sm">
            Get Started
            <ArrowUpRight className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Absolute Centered Image */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-end opacity-95 transition-transform duration-500 group-hover:scale-105 pointer-events-none">
        <img
          src={card.imageUrl || `/assets/images/placeholder.png`}
          alt={card.title}
          className={`h-auto object-contain object-bottom drop-shadow-2xl ${imgClass}`}
          loading="lazy"
        />
      </div>
    </motion.article>
  );

  return (
    <section className="bg-neutral-50 py-20 sm:py-24 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 max-w-5xl"
        >
          <h2 className="text-4xl font-serif font-extralight leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            {features.headline}
          </h2>
          <p className="mt-6 max-w-3xl font-serif font-extralight text-lg leading-relaxed text-gray-700 sm:text-xl lg:text-2xl">
            {features.body}
          </p>
        </motion.div>

        {/* --- 5-BOX BENTO GRID LAYOUT --- */}
        <div className="flex flex-col gap-6 sm:gap-8">

          {/* ROW 1: One Full Card (Left) & Two Small Cards (Right) */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-stretch">

            {/* BIG CARD WRAPPER */}
            <div className="w-full lg:w-1/2 flex">
              {renderCard(features.cards[ 0 ], 0, "min-h-[500px]", "max-h-[260px] w-[85%]", "mb-[260px]")}
            </div>

            {/* SMALL CARDS WRAPPER */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex">
                {/* FIXED: Reduced margins (180px) and image heights (180px) so content doesn't break out of 500px */}
                {renderCard(features.cards[ 1 ], 1, "min-h-[400px] lg:min-h-[500px]", "max-h-[160px] sm:max-h-[180px] w-[85%]", "mb-[180px]")}
              </div>
              <div className="flex">
                {renderCard(features.cards[ 2 ], 2, "min-h-[400px] lg:min-h-[500px]", "max-h-[160px] sm:max-h-[180px] w-[85%]", "mb-[180px]")}
              </div>
            </div>

          </div>

          {/* ROW 2: Two Full Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            <div className="flex">
              {renderCard(features.cards[ 3 ], 3, "min-h-[500px]", "max-h-[260px] w-[75%]", "mb-[260px]")}
            </div>
            <div className="flex">
              {renderCard(features.cards[ 4 ], 4, "min-h-[500px]", "max-h-[260px] w-[75%]", "mb-[260px]")}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AdminLayers;