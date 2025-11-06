import React from "react";
import { Button } from "../ui/button";
import { Code, Target } from "lucide-react";
import { Badge } from "../ui/badge";

// Hero Section - Break Through the Walls 

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center  from-black via-gray-900 to-black overflow-hidden">
      {/* Central Emblem */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <div className="text-[300px] text-white animate-pulse">⚔️</div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center space-y-8">
          {/* Official Badge */}
          <div
            className="flex justify-center gap-4 flex-wrap"
            data-gsap="fade-down"
            data-gsap-duration="1000"
          >
            <Badge className="px-6 py-3 text-sm bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl transform  transition-transform duration-300">
              COMMAND BRANCH: GEEKSFORGEEKS X ELIXIR
            </Badge>
          </div>

          {/* Hero Headlines */}
          <div
            data-gsap="zoom-in"
            data-gsap-duration="1000"
            data-gsap-delay="200"
            className=""
          >
            <p
              className="text-sm md:text-base text-gray-400 mb-4 tracking-widest font-light uppercase"
              data-gsap="fade-up"
            >
              OPERATION DATE: FEBRUARY 15-17, 2025
            </p>
            <div className="flex items-center justify-center mb-4">
              <h1 className="text-5xl md:text-7xl font-extralight text-white mx-3 tracking-tight">
                BREAK THROUGH
              </h1>
            </div>
            <h2
              className="text-4xl md:text-5xl  text-white mb-8 tracking-wide"
              data-gsap="fade-up"
              data-gsap-delay="400"
            >
              THE WALLS OF INNOVATION
            </h2>
            <p
              className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              data-gsap="fade-up"
              data-gsap-delay="600"
            >
              <span className="text-white font-semibold">
                Dedicate your heart to innovation.
              </span>
              <br />
              Join elite developers in humanity&apos;s last stand against the
              titans of code. Rise above the walls of limitation.
            </p>
          </div>

          {/* Epic CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
            data-gsap="fade-up"
            data-gsap-delay="800"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 px-10 py-7 text-lg uppercase tracking-wide font-semibold shadow-sm shadow-white/20 transform hover:scale-105 transition-all duration-300"
            >
              <Target className="mr-2 w-5 h-5" /> Join The Scout Regiment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white px-10 py-7 text-lg uppercase tracking-wide font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Code className="mr-2 w-5 h-5" /> Mission Briefing
            </Button>
          </div>

          {/* Mission Parameters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
            <div
              className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl p-8 rounded-lg transform hover:scale-105 hover:bg-white/10 transition-all duration-300"
              data-gsap="fade-up"
              data-gsap-delay="1000"
            >
              <div className="text-5xl mb-3"></div>
              <div className="text-5xl text-white mb-2">72</div>
              <div className="text-gray-400 text-xs uppercase tracking-widest font-medium">
                HOURS DEPLOYMENT
              </div>
            </div>
            <div
              className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl p-8 rounded-lg transform hover:scale-105 hover:bg-white/10 transition-all duration-300"
              data-gsap="fade-up"
              data-gsap-delay="1200"
            >
              <div className="text-5xl mb-3"></div>
              <div className="text-5xl text-white mb-2">500+</div>
              <div className="text-gray-400 text-xs uppercase tracking-widest font-medium">
                SCOUTS RECRUITED
              </div>
            </div>
            <div
              className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl p-8 rounded-lg transform hover:scale-105 hover:bg-white/10 transition-all duration-300"
              data-gsap="fade-up"
              data-gsap-delay="1400"
            >
              <div className="text-5xl mb-3"></div>
              <div className="text-5xl text-white mb-2 drop-shadow-lg">
                ₹10L+
              </div>
              <div className="text-gray-400 text-xs uppercase tracking-widest font-medium">
                COMMENDATIONS
              </div>
            </div>
            <div
              className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl p-8 rounded-lg transform hover:scale-105 hover:bg-white/10 transition-all duration-300"
              data-gsap="fade-up"
              data-gsap-delay="1600"
            >
              <div className="text-5xl mb-3"></div>
              <div className="text-5xl text-white mb-2">5</div>
              <div className="text-gray-400 text-xs uppercase tracking-widest font-medium">
                BATTLE FRONTS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
