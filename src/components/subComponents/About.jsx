import { Sparkles, Trophy, Users, Zap } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

// Mission Briefing Section

const About = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <Card
          className="border bg-black border-white/10 shadow-2xl backdrop-blur-sm"
          data-gsap="fade-up"
          data-gsap-duration="1000"
        >
          <CardHeader>
            <CardTitle className="text-4xl text-center mb-4 flex items-center justify-center gap-3">
              <span className="text-3xl md:text-5xl font-normal text-white">
                Mission Briefing
              </span>
            </CardTitle>
            <Separator className="bg-white/20" />
          </CardHeader>
          <CardContent className="space-y-6 text-gray-300">
            <p className="text-base md:text-lg leading-relaxed">
              <span className="text-white font-semibold">
                CLASSIFIED: SCOUT REGIMENT HEADQUARTERS
              </span>
              <br />
              <br />
              Behind the walls of technological limitation, a new threat
              emerges. The{" "}
              <span className="text-white font-semibold">
                GeeksforGeeks X Elixir Scout Regiment
              </span>{" "}
              assembles for an unprecedented 72-hour operation to reclaim
              humanity&apos;s digital freedom.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              This is not merely a competition. This is{" "}
              <span className="text-white font-semibold">
                humanity&apos;s last stand
              </span>{" "}
              against the titans of obsolete code, rigid systems, and creative
              limitations. Elite developers will unite, innovate, and
              demonstrate that
              <span className="text-white font-semibold">
                {" "}
                determination breaks through any wall.
              </span>
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div
                className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transform transition-all duration-300"
                data-gsap="fade-right"
              >
                <Users className="w-8 h-8 text-white mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Collaboration
                  </h3>
                  <p className="text-gray-400">
                    Team up with elite developers and designers
                  </p>
                </div>
              </div>
              <div
                className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transform transition-all duration-300"
                data-gsap="fade-left"
              >
                <Zap className="w-8 h-8 text-white mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Innovation
                  </h3>
                  <p className="text-gray-400">Build cutting-edge solutions</p>
                </div>
              </div>
              <div
                className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transform transition-all duration-300"
                data-gsap="fade-right"
                data-gsap-delay="200"
              >
                <Trophy className="w-8 h-8 text-white mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Recognition
                  </h3>
                  <p className="text-gray-400">
                    Win amazing prizes and mentorship
                  </p>
                </div>
              </div>
              <div
                className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transform transition-all duration-300"
                data-gsap="fade-left"
                data-gsap-delay="200"
              >
                <Sparkles className="w-8 h-8 text-white mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Growth
                  </h3>
                  <p className="text-gray-400">Learn from industry experts</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
