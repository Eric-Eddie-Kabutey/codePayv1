"use client";

import React, { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { trustBar, whatIsCodePay } from "@/content/homepage";

const trustValues: {
  target?: number;
  suffix?: string;
  color: string;
}[] = [
  { target: 15, suffix: "+", color: "text-theme-green-900" },
  { target: 100, suffix: "%", color: "text-theme-purple-900" },
  { color: "text-theme-blue-900" },
];

function CountUpStat({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, target, {
      duration: 1.4,
      ease: "easeOut",
    });
    return controls.stop;
  }, [isInView, count, target]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const aiLetters = "AI".split("");

function AnimatedAI() {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <span ref={ref} className="inline-flex">
      {aiLetters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 24, rotateX: -90 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : undefined}
          transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
          style={{ display: "inline-block", transformPerspective: 400 }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}

function TrustAndIdentity() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-20 sm:py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            {/* Left headline */}
            <div className="lg:col-span-5">
              <h2 className="max-w-xl text-4xl font-light leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
                {whatIsCodePay.headline}
              </h2>
            </div>

            {/* Right trust stats */}
            <div className="lg:col-span-7 mt-4">
              <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:gap-x-10">
                {trustBar.items.slice(0, 3).map((item, index) => {
                  const stat = trustValues[index];

                  return (
                    <div key={item.text} className="min-w-0">
                      <h3
                        className={`text-5xl font-light leading-none tracking-tight sm:text-5xl lg:text-6xl ${stat.color}`}
                      >
                        {stat.target !== undefined ? (
                          <CountUpStat
                            target={stat.target}
                            suffix={stat.suffix ?? ""}
                          />
                        ) : (
                          <AnimatedAI />
                        )}
                      </h3>

                      <p className="mt-4 max-w-[12rem] text-lg leading-snug text-gray-700 sm:text-xl lg:text-2xl">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Optional body text below */}
          {/* <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="hidden lg:col-span-5 lg:block" />

            <div className="lg:col-span-7">
              <div className="max-w-3xl space-y-5">
                {whatIsCodePay.body.split("\n\n").map((para, index) => (
                  <p
                    key={index}
                    className="text-lg leading-relaxed text-gray-700 sm:text-xl"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default TrustAndIdentity;