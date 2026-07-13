"use client";

import React, { useRef, useState } from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/content/homepage";

function Testimonials() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonialHighlight2 = [
    "bg-theme-amber-900",
    "bg-theme-green-900",
    "bg-theme-purple-900",
  ];

  const testimonialHighlightIcon = [
    "text-theme-amber-900",
    "text-theme-green-900",
    "text-theme-purple-900",
  ];

  const handleMobileScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];

    let closestIndex = 0;
    let closestDistance = Infinity;

    children.forEach((child, index) => {
      const distance = Math.abs(child.offsetLeft - container.scrollLeft);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(Math.min(closestIndex, testimonials.items.length - 1));
  };

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const child = container.children[index] as HTMLElement | undefined;
    if (!child) return;

    container.scrollTo({
      left: child.offsetLeft,
      behavior: "smooth",
    });
  };

  const renderTestimonialCard = (
    t: (typeof testimonials.items)[number],
    index: number,
    isMobile = false
  ) => {
    return (
      <article
        key={`${t.author}-${index}`}
        className={`group relative z-0 flex min-h-[360px] flex-col justify-between overflow-hidden rounded-md bg-gray-100 px-6 py-7 transition-all duration-300 sm:px-8 sm:py-8 ${
          isMobile ? "w-[78vw] max-w-[330px] shrink-0 snap-start" : ""
        }`}
      >
        {/* Icon */}
        <div className="relative h-8 w-8">
          <Quote
            className={`transition-transform duration-500 ease-out group-hover:scale-125 ${
              testimonialHighlightIcon[index % testimonialHighlightIcon.length]
            }`}
          />
        </div>

        {/* Quote */}
        <blockquote className="mt-16 text-xl font-light leading-relaxed tracking-tight text-black sm:text-2xl">
          “{t.quote}”
        </blockquote>

        {/* Author */}
        <div className="mt-10 pt-6">
          {/* Animated author line */}
          <div className="mb-6 h-1 w-full overflow-hidden rounded-full">
            <div
              className={`h-full w-0 rounded-full transition-all duration-700 ease-out group-hover:w-full ${
                testimonialHighlight2[index % testimonialHighlight2.length]
              }`}
            />
          </div>

          <div className="text-base font-medium text-black">{t.author}</div>

          <div className="mt-1 text-sm text-black/50">{t.location}</div>
        </div>
      </article>
    );
  };

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14 max-w-4xl">
          <h2 className="text-4xl font-light leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            {testimonials.headline}
          </h2>
        </div>

        {/* Mobile: Swipe carousel */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            onScroll={handleMobileScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-6 pr-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.items.map((t, index) =>
              renderTestimonialCard(t, index, true)
            )}
          </div>

          {/* Index indicator */}
          <div className="mt-2 flex items-center justify-center gap-2">
            {testimonials.items.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => scrollToIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-black"
                    : "w-2 bg-black/20 hover:bg-black/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden grid-cols-1 gap-6 md:grid md:grid-cols-3">
          {testimonials.items.map((t, index) =>
            renderTestimonialCard(t, index)
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;