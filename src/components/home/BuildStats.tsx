"use client";

import { useRef, useState } from "react";
import {
  Rocket,
  Globe2,
  WalletCards,
  BrainCircuit,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { stats } from "@/content/homepage";

function BuildStats() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const statStyles = [
    {
      icon: Rocket,
      bg: "bg-theme-amber-900",
      border: "bg-theme-amber-700",
      cardBorder: "border-transparent",
      isTransparent: false,
    },
    {
      icon: Globe2,
      bg: "bg-gray-50",
      border: "bg-theme-blue-900",
      cardBorder: "border-transparent",
      isTransparent: false,
    },
    {
      icon: WalletCards,
      bg: "bg-theme-purple-900",
      border: "bg-theme-purple-700",
      cardBorder: "border-transparent",
      isTransparent: false,
    },
    {
      icon: BrainCircuit,
      bg: "bg-gray-50",
      border: "bg-theme-blue-900",
      cardBorder: "border-transparent",
      isTransparent: false,
    },
    {
      icon: ShieldCheck,
      bg: "bg-theme-green-900",
      border: "bg-theme-green-700",
      cardBorder: "border-transparent",
      isTransparent: false,
    },
    {
      icon: Smartphone,
      bg: "bg-theme-blue-900",
      border: "bg-theme-blue-700",
      cardBorder: "border-transparent",
      isTransparent: false,
    },
  ];

  const handleMobileScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.clientWidth * 0.82;
    const gap = 16;
    const index = Math.round(container.scrollLeft / (cardWidth + gap));

    setActiveIndex(Math.min(index, stats.items.length - 1));
  };

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.clientWidth * 0.82;
    const gap = 16;

    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  const renderStatCard = (
    item: (typeof stats.items)[number],
    index: number,
    isMobile = false,
  ) => {
    const style = statStyles[index % statStyles.length];
    const Icon = style.icon;

    return (
      <div
        key={`${item.value}-${index}`}
        className={`group relative min-h-[290px] rounded-md border ${style.cardBorder} ${style.bg} px-6 py-7 transition-all duration-300 sm:px-8 sm:py-8 ${
          isMobile ? "w-[82vw] max-w-[340px] shrink-0 snap-start" : ""
        }`}
      >
        {/* 
  Border animation rules:
  - Mobile transparent cards: no animated border
  - Tablet/Desktop transparent cards: animated border
  - Colored cards: animated border
*/}
        {(!style.isTransparent || !isMobile) && (
          <>
            {/* Left border */}
            <span
              className={`absolute left-0 top-0 h-0 w-[2px] ${style.border} transition-all duration-300 ease-out group-hover:h-full`}
            />

            {/* Top border */}
            <span
              className={`absolute left-0 top-0 h-[2px] w-0 ${style.border} transition-all delay-300 duration-300 ease-out group-hover:w-full`}
            />

            {/* Right border */}
            <span
              className={`absolute right-0 top-0 h-0 w-[2px] ${style.border} transition-all delay-[600ms] duration-300 ease-out group-hover:h-full`}
            />

            {/* Bottom border */}
            <span
              className={`absolute bottom-0 left-0 h-[2px] w-0 ${style.border} transition-all delay-[900ms] duration-300 ease-out group-hover:w-full`}
            />
          </>
        )}

        <div className="relative z-10 flex h-full flex-col justify-between">
          {/* Icon */}
          <Icon className="h-8 w-8 text-black/75 transition-transform duration-500 ease-out group-hover:scale-125" />

          <div className="mt-16">
            <div className="text-4xl font-light capitalize tracking-tight text-black sm:text-5xl lg:text-6xl">
              {item.value}
            </div>

            <p className="mt-4 max-w-[18rem] text-base leading-relaxed text-gray-700 sm:text-lg">
              {item.label}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 max-w-4xl">
          <h2 className="text-4xl font-light leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            {stats.headline}
          </h2>
        </div>

        {/* Mobile: Swipe carousel */}
        <div className="sm:hidden">
          <div
            ref={scrollRef}
            onScroll={handleMobileScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-6 pr-4 [scrollbar-width:none] "
          >
            {stats.items.map((item, index) =>
              renderStatCard(item, index, true),
            )}
          </div>

          {/* Index indicator */}
          <div className="mt-2 flex items-center justify-center gap-2">
            {stats.items.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to stat ${index + 1}`}
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

        {/* Tablet/Desktop: Grid */}
        <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {stats.items.map((item, index) => renderStatCard(item, index))}
        </div>
      </div>
    </section>
  );
}

export default BuildStats;
