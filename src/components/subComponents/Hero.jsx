import { useEffect, useRef } from "react";
import { Audiowide } from "next/font/google";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Code, Target, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animatePinnedSection } from "@/lib/gsap-utils";
import CountdownTimer from "./CountdownTimer";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
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
      animatePinnedSection(
        sectionRef.current,
        videoRef.current,
        contentRef.current,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] w-full overflow-hidden text-white"
    >
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4 space-y-4 pt-16 sm:pt-20"
      >
        <Badge className="px-3 py-1.5 text-xs sm:text-sm bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-lg translate-y-4 sm:translate-y-2">
          COMMAND BRANCH: GEEKSFORGEEKS X ELIXIR
        </Badge>

        <div className="relative flex items-center justify-center w-full h-20 sm:h-30 md:h-40 lg:h-52">
          {/* The Image is now absolute, so its "transparent border" won't push anything */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none translate-x-2 translate-y-6 sm:translate-x-5 sm:translate-y-11">
            <Image
              src="/stellaris-logo.webp"
              alt="Stellaris Logo"
              width={1200}
              height={400}
              // scale-[2.5] or higher will make the visible logo huge
              // while the container stays small
              className="rotate-90 scale-[2.5] sm:scale-[3.5] md:scale-[4.5] lg:scale-[5.5] w-auto h-full object-contain"
              priority
            />
          </div>
        </div>

        <h2
          className={`${audiowide.className} text-xl sm:text-2xl md:text-3xl text-white/90 tracking-[0.05em] leading-tight`}
        >
          TRANSCEND THE CODE, CONQUER THE COSMOS.
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-4 w-full max-w-sm sm:w-auto px-2">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white px-4 sm:px-10 py-3 sm:py-6 text-sm sm:text-lg font-semibold tracking-wide"
            onClick={() => {
              document
                .getElementById("mission-briefing")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Code className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            Mission Briefing
          </Button>

          {/* <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white px-6 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-semibold tracking-wide"
            onClick={() => window.open('https://registration.example.com', '_blank')}
          >
            <Target className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            Register Now
          </Button> */}

          {/* devfolio button */}
          <div
            className="apply-button h-10 w-64 sm:h-11 sm:w-[312px] mx-auto sm:mx-0"
            data-hackathon-slug="stellaris"
            data-button-theme="dark-inverted"
          ></div>
        </div>

        <div className="w-full max-w-4xl mt-6">
          <CountdownTimer targetDate="2026-03-28T11:00:00" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
