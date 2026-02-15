"use client";
import { useScroll, useTransform, motion, useSpring } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { DM_Sans } from "next/font/google";

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const updateHeight = () => {
        if (ref.current) {
          setHeight(ref.current.offsetHeight);
        }
      };

      updateHeight();
      const observer = new ResizeObserver(updateHeight);
      observer.observe(ref.current);

      const timer = setTimeout(updateHeight, 500);

      return () => {
        observer.disconnect();
        clearTimeout(timer);
      };
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 80%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const heightTransform = useTransform(smoothProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(smoothProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full flex justify-center items-center flex-col bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-5xl lg:text-7xl mb-4 text-center text-white max-w-4xl font-extralight">
          Mission{" "}
          <span className="bg-gradient-to-r from-[#0080FF] via-[#0D52BD] to-[#1C05B3] bg-clip-text text-transparent italic font-bold">
            Timeline
          </span>
        </h2>
        <p className="text-neutral-400 text-center text-sm md:text-base max-w-sm mx-auto">
          The Survey Corps battle plans and key milestones.
        </p>
      </div>

      {/* Mobile Cards Layout */}
      <div className="md:hidden relative max-w-7xl mx-auto pb-20 px-4 pt-4">
        <div className="space-y-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white/1 backdrop-blur-xl border border-white/10 rounded-md p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-full flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white">
                  {item.content.props.children[0].props.children}
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.content.props.children[1].props.children}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Timeline Layout */}
      <div
        ref={ref}
        className="hidden md:block relative max-w-7xl mx-auto pb-20 px-4 md:px-0"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 md:pt-40 md:gap-15 lg:gap-35"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 md:top-40 self-start w-full md:max-w-xs lg:max-w-sm">
              <div className="h-8 absolute left-4 md:left-3 w-8 rounded-full bg-black dark:bg-white flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-neutral-800 dark:bg-neutral-200 border border-neutral-700 dark:border-neutral-300" />
              </div>
              <h3 className="md:hidden text-lg font-bold text-white pl-12 pt-2">
                {item.title}
              </h3>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="flex-1 max-w-full md:max-w-[600px] space-y-3 pl-12 md:pl-0">
              <h4 className="text-lg md:text-2xl font-semibold text-white">
                {item.content.props.children[0].props.children}
              </h4>
              <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
                {item.content.props.children[1].props.children}
              </p>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-4 md:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-yellow-200 via-white to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
