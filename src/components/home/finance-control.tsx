"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { adminLayers } from "@/content/homepage";

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
            {adminLayers.headline}
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-700 sm:text-xl lg:text-2xl">
            {adminLayers.body}
          </p>
        </motion.div>

        {/* 6-Card Grid (2 Columns per row) */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">

          {/* Render the 5 layers from content */}
          {adminLayers.layers.slice(0, 5).map((layer, index) => (
            <motion.article
              key={layer.number || index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: (index % 2) * 0.15, // Stagger left/right columns
                ease: "easeOut",
              }}
              className="group relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 sm:p-10 shadow-sm ring-1 ring-gray-100 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              {/* Text Content */}
              <div className="relative z-10 mb-12">
                <h3 className="mb-4 text-3xl font-light leading-tight text-black sm:text-4xl">
                  {layer.title}
                </h3>
                <p className="max-w-md text-base leading-relaxed text-gray-600 sm:text-lg">
                  {layer.body}
                </p>
              </div>

              {/* Placeholder Image (Bottom Right) */}
              <div className="absolute bottom-0 right-0 w-4/5 sm:w-2/3 flex justify-end opacity-90 transition-transform duration-500 group-hover:scale-105 pointer-events-none">
                <img
                  src={`/assets/images/placeholder-layer-${index + 1}.png`} // Swap with actual images
                  alt={layer.title}
                  className="w-full h-auto max-h-[200px] sm:max-h-[240px] object-contain object-bottom"
                  loading="lazy"
                />
              </div>
            </motion.article>
          ))}

          {/* 6th Card: Call To Action (CTA) */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: 0.15, // Delay to match the right column stagger
              ease: "easeOut",
            }}
            className="group relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl bg-theme-blue-900 p-8 sm:p-10 text-white shadow-lg transition-all hover:-translate-y-1"
          >
            {/* CTA Content */}
            <div className="relative z-10 mb-12 flex h-full flex-col items-start">
              <h3 className="mb-4 text-3xl font-medium leading-tight text-white sm:text-4xl">
                Ready to take control?
              </h3>
              <p className="mb-8 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
                Join our unified platform and start building your custom operational ecosystem today.
              </p>

              <div className="mt-auto">
                <button className="inline-flex items-center gap-2 rounded-full bg-theme-green-900 px-7 py-3.5 text-base font-semibold text-black transition-all hover:bg-white hover:text-black shadow-sm">
                  Get Started
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Background Image/Illustration for CTA */}
            <div className="absolute bottom-0 right-0 w-3/4 sm:w-2/3 flex justify-end opacity-90 transition-transform duration-500 group-hover:scale-105 pointer-events-none">
              <img
                src="/assets/images/welcome-cta-placeholder.png" // Swap with actual CTA image
                alt="Welcome to the ecosystem"
                className="w-full h-auto max-h-[220px] sm:max-h-[260px] object-contain object-bottom"
                loading="lazy"
              />
            </div>
          </motion.article>

        </div>
      </div>
    </section>
  );
}

export default AdminLayers;