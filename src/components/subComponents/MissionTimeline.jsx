"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DM_Sans } from "next/font/google";
import { Timeline } from "@/components/ui/timeline";
import { timelineData } from "@/lib/data/data";

gsap.registerPlugin(ScrollTrigger);

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const MissionTimeline = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // No-op or clean up local triggers if any were created
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-visible"
      suppressHydrationWarning
    >

      <div className="relative z-10">
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default MissionTimeline;
