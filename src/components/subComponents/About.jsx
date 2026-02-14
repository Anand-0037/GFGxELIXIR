import { useRef, useEffect } from "react";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { aboutData } from "@/lib/data/data";
import { animatePinnedSection } from "@/lib/gsap-utils";

gsap.registerPlugin(ScrollTrigger);

const sectionHeadingFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const aboutBodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  // Drag state
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Pass null for videoElement if it doesn't exist
      animatePinnedSection(sectionRef.current, null, contentRef.current);
    }, sectionRef);

    // Scroll reset listener
    const handleScroll = () => {
      if (x.get() !== 0 || y.get() !== 0) {
        // Smoothly animate back to 0
        // We can use x.set(0) for instant, or animate for smooth. 
        // Let's try simple set first as regular spring might fight drag.
        // Actually, animate() from framer-motion is better but hook usage is cleaner.
        // For simplicity and robustness with useMotionValue, we'll just set to 0.
        // If we want smooth return, we could use a spring, but that complicates drag.
        // Let's use a small timeout or just set it to reset immediately on scroll.
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden text-white flex items-center justify-center p-4 md:p-10"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        
        {/* Astronaut Image - Visible on large screens, hidden or smaller on mobile if needed */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          drag
          dragConstraints={sectionRef}
          dragElastic={0.2}
          style={{ 
            x, 
            y,
            cursor: "url('/asteroid-cursor.svg') 16 16, move" 
          }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="/astro.2.png" 
            alt="Astronaut" 
            className="w-full max-w-[650px] object-contain drop-shadow-[0_0_15px_rgba(0,128,255,0.3)] animate-astro-float brightness-85 pointer-events-none"
          />
        </motion.div>

        {/* Mission Briefing Card */}
        <div ref={contentRef} className="w-full md:w-1/2">
            <Card className="bg-black/60 backdrop-blur-xl border-white/10 text-white shadow-2xl">
                <CardHeader>
                <CardTitle
                    className={`${sectionHeadingFont.className} text-4xl md:text-5xl mb-4 tracking-[0.08em] uppercase font-bold text-white`}
                >
                    Mission{" "}
                    <span className="bg-gradient-to-r from-[#0080FF] via-[#0D52BD] to-[#1C05B3] bg-clip-text text-transparent">
                    Briefing
                    </span>
                </CardTitle>
                <Separator className="bg-white/20 mb-4" />
                </CardHeader>

                <CardContent className="space-y-6 text-gray-300">
                <p className={`${aboutBodyFont.className} text-base md:text-lg leading-relaxed`}>
                    <span className="font-semibold bg-gradient-to-r from-[#0080FF] via-[#0D52BD] to-[#1C05B3] bg-clip-text text-transparent">
                    CLASSIFIED: SCOUT REGIMENT HEADQUARTERS
                    </span>
                    <br />
                    <br />
                    The{" "}
                    <span className="font-semibold bg-gradient-to-r from-[#0080FF] via-[#0D52BD] to-[#1C05B3] bg-clip-text text-transparent">
                    GeeksforGeeks X Elixir Scout Regiment
                    </span>{" "}
                    commences its mission to reclaim humanity’s digital realm, a
                    36-hour operation to push past the limits of innovation.
                </p>

                <p className={`${aboutBodyFont.className} text-base md:text-lg leading-relaxed`}>
                    This is{" "}
                    <span className="font-semibold bg-gradient-to-r from-[#0080FF] via-[#0D52BD] to-[#1C05B3] bg-clip-text text-transparent">
                    humanity’s last stand
                    </span>{" "}
                    against the titans of outdated code and creative stagnation.
                    Developers unite, adapt, and rise beyond all boundaries.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                    {aboutData.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-3 bg-white/5 p-3 rounded-md border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden"
                    >
                        <div className="flex-shrink-0">{item.icon}</div>
                        <div className="min-w-0">
                        <h3 className="font-semibold text-white text-md md:text-base truncate">
                            {item.title}
                        </h3>
                        <p
                            className={`${aboutBodyFont.className} text-gray-400 text-xs md:text-sm line-clamp-2`}
                        >
                            {item.text}
                        </p>
                        </div>
                    </div>
                    ))}
                </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
