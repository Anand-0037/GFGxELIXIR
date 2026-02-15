import { useEffect, useRef } from "react";
import { Bebas_Neue } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/button";
import Image from "next/image";

const sectionHeadingFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const CTA = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  // devfolio button
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { scale: 1.05, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "bottom top",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden text-white flex items-center justify-center py-20 md:py-28"
    >
      <div
        ref={contentRef}
        className="relative z-10 text-center max-w-3xl mx-auto px-6 space-y-6"
      >
        <div className="flex justify-center">
          <div className="relative w-24 h-24 animate-pulse">
            <Image
              src="/Steller A.webp"
              alt="Stellaris Icon"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <h2
          className={`${sectionHeadingFont.className} text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight uppercase max-w-3xl mx-auto`}
        >
          <span className="bg-gradient-to-r from-[#0080FF] via-[#0D52BD] to-[#1C05B3] bg-clip-text text-transparent">
            Ready to Face the Unknown?
          </span>
        </h2>

        <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl mx-auto mt-4">
          Join the <span className="text-white font-medium">Stellar Corps</span>
          . Lock orbits with the galaxy&apos;s brightest minds, and code your
          way to the singularity of innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-2">
          {/* devfolio button */}
          <div
            className="apply-button h-11 w-[312px]"
            data-hackathon-slug="stellaris"
            data-button-theme="dark-inverted"
          ></div>

          <a href="https://discord.gg/yTxvuuktdZ" target="blank">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white px-6 py-3 sm:px-8 sm:py-4 text-base md:text-lg font-medium transform hover:scale-105 transition-all duration-300"
            >
              Join Discord
            </Button>
          </a>
        </div>

        <p className="text-md text-white/60 leading-relaxed">
          Registration closes{" "}
          <span className="text-white font-medium">March 15, 2026</span>
        </p>
      </div>
    </section>
  );
};

export default CTA;
