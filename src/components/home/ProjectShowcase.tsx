"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const base = "/projects/1/base.png";

const showcaseCopy = {
  eyebrow: "Built for every partner",
  title: "Customized for the way each business actually operates.",
  body: "From multi-currency wallets to agent networks and full banking infrastructure, we shape CodePay around what each partner needs — not the other way around.",
};

const projects = [
  {
    id: 1,
    mockup: "/projects/1/mockup.png",
    accent1: "/projects/1/accent1.svg",
    accent2: "/projects/1/accent2.svg",
  },
  {
    id: 2,
    mockup: "/projects/1/mockup.png",
    accent1: "/projects/2/accent1.svg",
    accent2: "/projects/2/accent2.svg",
  },
  {
    id: 3,
    mockup: "/projects/1/mockup.png",
    accent1: "/projects/3/accent1.svg",
    accent2: "/projects/3/accent2.svg",
  },
];

function ProjectShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalTransitions = projects.length - 1;

    const rawProgress = latest * totalTransitions;
    const baseIndex = Math.floor(rawProgress);
    const localProgress = rawProgress - baseIndex;

    const safeBaseIndex = Math.min(baseIndex, projects.length - 1);
    const nextIndex = Math.min(safeBaseIndex + 1, projects.length - 1);

    // Rotate mockup only: 0deg → 90deg → 0deg
    const rotate =
      localProgress < 0.5 ? localProgress * 180 : (1 - localProgress) * 180;

    const currentProjectIndex = localProgress < 0.5 ? safeBaseIndex : nextIndex;

    setActiveIndex(currentProjectIndex);
    setRotation(rotate);
  });

  const activeProject = projects[activeIndex];

  // Accents only show when mockup is almost fully facing front.
  const showAccents = rotation < 10;

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-[#F7F7FB]">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-6 px-4 py-10 sm:gap-0 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-20 lg:py-28">
          {/* Left content */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="max-w-2xl lg:max-w-xl text-center lg:text-start">
              <p className="mb-2 lg:mb-5 text-sm font-medium uppercase tracking-[0.22em] text-black/40">
                {showcaseCopy.eyebrow}
              </p>

              <h2 className="text-4xl font-light leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
                {showcaseCopy.title}
              </h2>

              <p className="mt-2 lg:mt-6 text-lg leading-relaxed text-gray-700 sm:text-xl">
                {showcaseCopy.body}
              </p>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative flex min-h-[560px] flex-col items-center justify-center gap-6 lg:col-span-7">
            <div className="relative h-[380px] w-full max-w-[680px] lg:h-[560px]">
              {/* Static base image */}
              <motion.div
                className="absolute left-[58%] -bottom-8 z-10 h-[70px] w-[300px] translate-x-[-34%] sm:-bottom-24 sm:h-[130px] sm:w-[520px] lg:left-[56%] lg:-bottom-32 lg:h-[170px] lg:w-[640px]"
              >
                <Image
                  src={base}
                  alt=""
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* Mockup rotates only */}
              <motion.div
                key={`mockup-${activeProject.id}`}
                style={{
                  rotateY: rotation,
                  transformPerspective: 1200,
                  transformStyle: "preserve-3d",
                }}
                className="absolute left-[52%] top-[43%] z-30 h-[300px] w-[200px] -translate-x-1/2 -translate-y-1/2 sm:h-[490px] lg:left-[51%] lg:top-[43%] lg:h-[550px] lg:w-[365px]"
              >
                <Image
                  src={activeProject.mockup}
                  alt="Product mockup"
                  fill
                  priority
                  className="object-contain"
                />
              </motion.div>

              {/* Accent 1 - shows only when mockup is fully visible */}
              <motion.div
                key={`accent1-${activeProject.id}`}
                initial={{ opacity: 0, x: 30, y: 20, scale: 0.96 }}
                animate={{
                  opacity: showAccents ? 1 : 0,
                  x: showAccents ? 0 : 30,
                  y: showAccents ? 0 : 20,
                  scale: showAccents ? 1 : 0.96,
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute right-0 top-[20%] z-40 h-[90px] w-[150px] sm:h-[150px] sm:w-[250px] lg:-right-4 lg:top-[18%] lg:h-[175px] lg:w-[290px]"
              >
                <Image
                  src={activeProject.accent1}
                  alt=""
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Accent 2 - shows only when mockup is fully visible */}
              <motion.div
                key={`accent2-${activeProject.id}`}
                initial={{ opacity: 0, x: -30, y: 20, scale: 0.96 }}
                animate={{
                  opacity: showAccents ? 1 : 0,
                  x: showAccents ? 0 : -30,
                  y: showAccents ? 0 : 20,
                  scale: showAccents ? 1 : 0.96,
                }}
                transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
                className="absolute bottom-[18%] left-4 z-40 h-[85px] w-[140px] sm:bottom-[16%] sm:h-[145px] sm:w-[240px] lg:bottom-[18%] lg:left-10 lg:h-[165px] lg:w-[280px]"
              >
                <Image
                  src={activeProject.accent2}
                  alt=""
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>
            </div>

            {/* Indicator */}
            <div className="mt-10 flex w-full max-w-[680px] z-20 items-center justify-center gap-2 sm:mt-16 lg:mt-28">
              {projects.map((project, index) => (
                <span
                  key={project.id}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "w-8 bg-black" : "w-2 bg-black/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectShowcase;
