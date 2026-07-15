"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { features } from "@/content/homepage";

function AdminLayers() {
  return (
    <section className="bg-neutral-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 max-w-5xl"
        >
          <h2 className="text-4xl font-light leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            {features.headline}
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-700 sm:text-xl lg:text-2xl">
            {features.body}
          </p>
        </motion.div>

        {/* Rows Container */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {features.rows.map((row, rowIndex) => (
            <div key={row.id} className="flex flex-col lg:flex-row gap-6 sm:gap-8">

              {/* 1. Large Box (Left Half) */}
              <motion.article
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
                className="group w-full lg:w-1/2 relative flex min-h-[500px] flex-col justify-between overflow-hidden rounded-[12px] p-8 sm:p-10 lg:p-12 shadow-sm ring-1 ring-gray-100 transition-all hover:-translate-y-1 hover:shadow-md"
                style={{ backgroundColor: row.largeBox.bg, color: row.largeBox.text }}
              >
                {/* Text Content */}
                <div className="relative z-10 mb-[260px] max-w-lg">
                  <h3 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl" style={{ color: row.largeBox.text }}>
                    {row.largeBox.title}
                  </h3>
                  <p className="mb-8 text-base leading-relaxed sm:text-lg opacity-95" style={{ color: row.largeBox.text }}>
                    {row.largeBox.body}
                  </p>

                  {row.largeBox.buttonLabel && (
                    <button className="inline-block rounded-xl bg-white px-6 py-3 text-sm sm:text-base font-bold shadow-sm transition-colors hover:bg-gray-100" style={{ color: row.largeBox.bg }}>
                      {row.largeBox.buttonLabel}
                    </button>
                  )}
                </div>

                {/* Large Centered Image (Laptop style) */}
                <div className="absolute bottom-0 left-0 w-full flex justify-center items-end opacity-95 transition-transform duration-500 group-hover:scale-105 pointer-events-none">
                  <img
                    src={row.largeBox.imageUrl || `/assets/images/placeholder-large.png`}
                    alt={row.largeBox.title}
                    className="w-[85%] sm:w-[75%] h-auto max-h-[280px] object-contain object-bottom drop-shadow-2xl"
                    loading="lazy"
                  />
                </div>
              </motion.article>

              {/* 2. Small Boxes Container (Right Half - 2 Columns) */}
              <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {row.smallBoxes.map((box, boxIndex) => (
                  <motion.article
                    key={box.title}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65, delay: 0.2 + (boxIndex * 0.15), ease: "easeOut" }}
                    className="group relative flex min-h-[460px] lg:min-h-[500px] flex-col justify-between overflow-hidden rounded-[12px] p-6 sm:p-8 shadow-sm ring-1 ring-gray-100 transition-all hover:-translate-y-1 hover:shadow-md"
                    style={{ backgroundColor: box.bg, color: box.text }}
                  >
                    {/* Text Content */}
                    <div className="relative z-10 mb-[220px]">
                      <h3 className="mb-3 text-2xl font-bold leading-tight" style={{ color: box.text }}>
                        {box.title}
                      </h3>
                      <p className="mb-6 text-[15px] sm:text-base leading-relaxed opacity-95" style={{ color: box.text }}>
                        {box.body}
                      </p>

                      {/* Render special CTA button if marked as CTA */}
                      {box.isCTA && (
                        <div className="mt-auto">
                          <button className="inline-flex items-center gap-2 rounded-xl bg-[#218350] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-black shadow-sm">
                            Get Started
                            <ArrowUpRight className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Small Centered Image (Phone/Person style) */}
                    <div className="absolute bottom-0 left-0 w-full flex justify-center items-end opacity-95 transition-transform duration-500 group-hover:scale-105 pointer-events-none">
                      <img
                        src={box.imageUrl || `/assets/images/placeholder-small.png`}
                        alt={box.title}
                        className="w-[85%] h-auto max-h-[220px] object-contain object-bottom drop-shadow-xl"
                        loading="lazy"
                      />
                    </div>
                  </motion.article>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AdminLayers;