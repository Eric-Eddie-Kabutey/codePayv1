"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { adminLayers } from "@/content/homepage";

function AdminLayers() {
  return (
    <section className="bg-neutral-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 max-w-5xl"
        >
          <h2 className="text-4xl font-light leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            {adminLayers.headline}
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-gray-700 sm:text-xl lg:text-2xl">
            {adminLayers.body}
          </p>
        </motion.div>

        {/* Full-width layers */}
        <div className="w-full space-y-4">
          {adminLayers.layers.map((layer, index) => (
            <motion.article
              key={layer.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="group relative w-full py-8 pl-5 transition-all duration-300 hover:-translate-y-1 sm:py-10"
            >
              {/* Hover left line */}
              <div className="absolute left-0 top-0 h-0 w-1 bg-theme-green-900 rounded-full transition-all duration-700 ease-out group-hover:h-full" />

              <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-2">
                {/* Number */}
                {/* <div className="lg:col-span-1">
                  <span className="text-sm font-medium text-[#c6abfa] transition-colors duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div> */}

                {/* Title */}
                <div className="lg:col-span-4">
                  <h3 className="text-3xl font-light leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
                    {layer.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="lg:col-span-8">
                  <p className="max-w-3xl text-base leading-8 text-gray-700 sm:text-lg lg:text-xl">
                    {layer.body}
                  </p>
                </div>

                {/* Arrow */}
                {/* <div className="absolute right-0 top-8 sm:top-10">
                  <ArrowUpRight className="h-8 w-8 text-black transition-all duration-500 ease-out group-hover:scale-150 group-hover:rotate-45 group-hover:translate-x-2 group-hover:-translate-y-2" />
                </div> */}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdminLayers;
