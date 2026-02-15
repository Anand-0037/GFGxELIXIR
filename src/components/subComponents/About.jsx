import { useRef, useEffect, useState } from "react";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { motion, useMotionValue } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { aboutData } from "@/lib/data/data";

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
  const containerRef = useRef(null);
  const astronautRef = useRef(null);
  const contentRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Drag state
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || isMobile) return;

    const ctx = gsap.context(() => {
      // Kill any existing ScrollTriggers for this section
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === sectionRef.current) {
          trigger.kill();
        }
      });

      // Set will-change for performance
      gsap.set([astronautRef.current, contentRef.current], {
        willChange: "transform, opacity",
      });

      // Create timeline for synchronized animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });

      // Astronaut animation: enters from left with subtle elastic effect
      tl.fromTo(
        astronautRef.current,
        {
          opacity: 0,
          x: -120,
          scale: 0.96,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          ease: "back.out(1.2)",
          duration: 1,
        },
        0,
      );

      // Right content animation: enters from right with slight overlap
      tl.fromTo(
        contentRef.current,
        {
          opacity: 0,
          x: 120,
          scale: 0.96,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          ease: "back.out(1.1)",
          duration: 1,
        },
        0.2, // Slight overlap for balance
      );

      // Clean up will-change after animation
      tl.eventCallback("onComplete", () => {
        gsap.set([astronautRef.current, contentRef.current], {
          willChange: "auto",
        });
      });
    }, sectionRef);

    // Scroll reset listener for drag
    const handleScroll = () => {
      if (x.get() !== 0 || y.get() !== 0) {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, x, y]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden text-white flex items-center justify-center p-4 md:p-10 min-h-screen"
    >
      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12"
      >
        {/* Astronaut Image */}
        <motion.div
          ref={astronautRef}
          className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-1"
          drag={!isMobile}
          dragConstraints={{
            left: -100,
            right: 100,
            top: -50,
            bottom: 50,
          }}
          dragElastic={0.15}
          dragTransition={{
            bounceStiffness: 300,
            bounceDamping: 30,
            power: 0.3,
            timeConstant: 200,
          }}
          dragMomentum={false}
          style={{
            x,
            y,
            cursor: isMobile ? "default" : "url('/cursor.png') 12 12, auto",
            touchAction: "none",
          }}
          whileDrag={{
            scale: 1.05,
            rotate: 2,
            transition: { duration: 0.2 },
            cursor: "url('/cursor.png') 12 12, grabbing",
          }}
          whileTap={
            !isMobile
              ? {
                  scale: 0.95,
                  transition: { duration: 0.1 },
                }
              : {}
          }
          onDragStart={() => {
            if (!isMobile) {
              document.body.style.cursor = "url('/cursor.png') 12 12, grabbing";
            }
          }}
          onDragEnd={() => {
            if (!isMobile) {
              document.body.style.cursor = "auto";
            }
          }}
        >
          <img
            src="/astro.2.webp"
            alt="Astronaut"
            className={`w-full object-contain drop-shadow-[0_0_15px_rgba(0,128,255,0.3)] animate-astro-float brightness-85 pointer-events-none ${
              isMobile ? "max-w-[300px]" : "max-w-[650px]"
            }`}
          />
        </motion.div>

        {/* Mission Briefing Card */}
        <div ref={contentRef} className="w-full md:w-1/2 order-2 md:order-2">
          <Card className="bg-white/1 backdrop-blur-xl border-white/10 text-white shadow-2xl">
            <CardHeader>
              <CardTitle
                className={`${sectionHeadingFont.className} ${
                  isMobile ? "text-3xl" : "text-4xl md:text-5xl"
                } mb-4 tracking-[0.08em] uppercase font-bold text-white`}
              >
                Mission{" "}
                <span className="bg-gradient-to-r from-[#0080FF] via-[#0D52BD] to-[#1C05B3] bg-clip-text text-transparent">
                  Briefing
                </span>
              </CardTitle>
              <Separator className="bg-white/20 mb-4" />
            </CardHeader>

            <CardContent className="space-y-6 text-gray-300">
              <p
                className={`${aboutBodyFont.className} ${
                  isMobile ? "text-sm" : "text-base md:text-lg"
                } leading-relaxed`}
              >
                <span className="font-semibold bg-gradient-to-r from-[#0080FF] via-[#0D52BD] to-[#1C05B3] bg-clip-text text-transparent">
                  CLASSIFIED: Stellar Corps
                </span>
                <br />
                <br />
                The{" "}
                <span className="font-semibold bg-gradient-to-r from-[#0080FF] via-[#0D52BD] to-[#1C05B3] bg-clip-text text-transparent">
                  GeeksforGeeks X Elixir Space Station
                </span>{" "}
                commences it&apos;s mission to find mankind&apos;s new frontier-
                a 36 hours voyage to push past limits of innovation.
              </p>

              <p
                className={`${aboutBodyFont.className} text-sm md:text-base leading-relaxed`}
              >
                This is{" "}
                <span className="font-semibold bg-gradient-to-r from-[#0080FF] via-[#0D52BD] to-[#1C05B3] bg-clip-text text-transparent">
                  humanity&apos;s last stand
                </span>{" "}
                against the gravity of code and creative void. Developers unite,
                adapt, and rise beyond all horizons.
              </p>

              <div
                className={`grid ${
                  isMobile ? "grid-cols-1" : "grid-cols-2"
                } gap-3 text-left`}
              >
                {aboutData.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-white/5 p-3 rounded-md border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden"
                  >
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div className="min-w-0">
                      <h3
                        className={`font-semibold text-white ${
                          isMobile ? "text-sm" : "text-md md:text-base"
                        } truncate`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`${aboutBodyFont.className} text-gray-400 ${
                          isMobile ? "text-xs" : "text-xs md:text-sm"
                        } line-clamp-2`}
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
