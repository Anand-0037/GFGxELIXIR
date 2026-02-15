"use client";

import { cloneElement, useEffect, useRef, useState } from "react";
import { DM_Sans } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, Link, DollarSign, Lightbulb } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const cardData = [
  {
    icon: <Brain />,
    title: "AI / ML",
    desc: "Neural Cosmos",
    number: "01",
    tagline: "Shape the future with intelligent systems",
  },
  {
    icon: <Link />,
    title: "Web3",
    desc: "Decentralized Galaxy",
    number: "02",
    tagline: "Build the decentralized tomorrow",
  },
  {
    icon: <DollarSign />,
    title: "Fintech",
    desc: "Financial Orbit",
    number: "03",
    tagline: "Revolutionize global finance",
  },
  {
    icon: <Lightbulb />,
    title: "Open Innovation",
    desc: "Creative Nebula",
    number: "04",
    tagline: "Innovate without boundaries",
  },
];

const Cards = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        }
      );

      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 120, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full text-white overflow-hidden"
    >

      <div className="relative z-20 container mx-auto px-4 py-28">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-24">
          <p
            className={`${bodyFont.className} text-xs text-white/60 uppercase tracking-[0.5em] font-light mb-6`}
          >
            [ Mission Sectors ]
          </p>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight mb-6">
            Cosmic{" "}
            <span className="font-semibold italic bg-gradient-to-r from-[#0080FF] via-[#0D52BD] to-[#1C05B3] bg-clip-text text-transparent">
              Horizons
            </span>
          </h2>

          <p className={`${bodyFont.className} text-lg text-white/60 max-w-md mx-auto font-light`}>
            Choose your constellation and embark on an interstellar journey
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:flex xl:flex-row gap-4 lg:gap-5 xl:gap-6 max-w-full px-4 mx-auto">
          {cardData.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`
                group relative cursor-pointer
                transition-all duration-700 ease-out
                hover:scale-[1.03] xl:hover:scale-100
                ${activeCard === i ? "xl:flex-[1.5]" : "xl:flex-1"}
              `}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div
                className={`
                  relative overflow-hidden h-[300px]
                  rounded-xl
                  bg-gradient-to-br from-white/[0.08] to-white/[0.02]
                  backdrop-blur-xl
                  border border-white/10
                  transition-all duration-700 ease-out
                  group-hover:border-white/25
                  group-hover:shadow-[0_0_80px_-20px_rgba(255,255,255,0.15)]
                  group-hover:from-white/[0.12] group-hover:to-white/[0.04]
                `}
              >
                {/* Large Background Number */}
                <div className="absolute -right-4 -top-8 text-[200px] lg:text-[280px] font-black text-white/[0.03] leading-none select-none pointer-events-none group-hover:text-white/[0.06] transition-colors duration-700">
                  {item.number}
                </div>

                {/* Animated Glow Ring */}
                <div className="absolute top-8 left-8 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-full bg-white/10 animate-ping" style={{ animationDuration: "2s" }} />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 lg:p-8 text-center md:text-left flex flex-col items-center md:items-start">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-white/15 group-hover:border-white/20 group-hover:scale-110 transition-all duration-500">
                      {cloneElement(item.icon, {
                        className: "w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-300",
                      })}
                    </div>
                  </div>

                  {/* Track Description Badge */}
                  <div className="inline-flex items-center mb-3 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <span className="text-xs text-white/40 uppercase tracking-wider whitespace-nowrap">{item.desc}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white tracking-tight mb-3 group-hover:translate-x-2 transition-transform duration-500">
                    {item.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-white/40 text-sm font-light opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 h-10 overflow-hidden">
                    {item.tagline}
                  </p>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-3xl">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-out" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <div className="mt-20 flex items-center justify-center gap-6">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-white/20" />
          <p className="text-white/60 text-xs tracking-[0.4em] uppercase font-light">
            4 Dimensions • Infinite Universe
          </p>
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-white/20" />
        </div>
      </div>
    </section >
  );
};

export default Cards;
