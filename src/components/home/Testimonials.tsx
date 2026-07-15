"use client";

import React, { useRef, useState } from "react";
import { Quote } from "lucide-react";
import { testimonialsData } from "@/content/testimonials-data"; 

function Testimonials() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [ activeIndex, setActiveIndex ] = useState(0);

  // Update active dot based on scroll position
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth / (window.innerWidth >= 768 ? 2 : 1);
    const newIndex = Math.round(scrollPosition / cardWidth);

    setActiveIndex(newIndex);
  };

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const child = container.children[ index ] as HTMLElement | undefined;
    if (!child) return;

    container.scrollTo({
      left: child.offsetLeft,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    scrollToIndex(Math.max(activeIndex - 1, 0));
  };

  const handleNext = () => {
    const maxIndex = testimonialsData.items.length - (window.innerWidth >= 768 ? 2 : 1);
    scrollToIndex(Math.min(activeIndex + 1, maxIndex));
  };

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <div className="mb-16 lg:mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif text-[#222222] leading-tight">
            {testimonialsData.headline}
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonialsData.items.map((item, index) => (
              <article
                key={item.id}
                className="w-full md:w-1/2 min-w-full md:min-w-[50%] shrink-0 snap-start flex flex-col justify-between items-start px-4 sm:px-8 border-r border-gray-200 last:border-r-0"
              >
                <div>
                  {/* Quote Icon */}
                  <Quote
                    className={`h-8 w-8 mb-6 opacity-60 ${item.iconColor}`}
                    fill="currentColor"
                    stroke="none"
                  />

                  {/* Quote Text */}
                  <p className="text-[15px] sm:text-base text-gray-500 leading-relaxed font-light mb-12">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-auto">
                  <p className="text-[13px] font-bold text-[#1a1a1a]">
                    {item.author}
                  </p>
                  <p className="text-[12px] text-gray-400 mt-1">
                    {item.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="mt-16 flex items-center justify-center gap-6">
          <button
            onClick={handlePrev}
            className="text-[13px] font-medium text-gray-500 hover:text-black transition-colors focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={activeIndex === 0}
          >
            &lt; Prev
          </button>

          <div className="flex items-center gap-2.5">
            {testimonialsData.items.map((_, index) => {
              // Hide dots that exceed the viewable max index on desktop
              const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
              if (isDesktop && index > testimonialsData.items.length - 2) return null;

              return (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${activeIndex === index ? "bg-gray-400" : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              );
            })}
          </div>

          <button
            onClick={handleNext}
            className="text-[13px] font-medium text-gray-500 hover:text-black transition-colors focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
            // Disable next if we've reached the end
            disabled={
              typeof window !== 'undefined'
                ? activeIndex >= testimonialsData.items.length - (window.innerWidth >= 768 ? 2 : 1)
                : false
            }
          >
            Next &gt;
          </button>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;