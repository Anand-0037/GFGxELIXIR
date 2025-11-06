import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

// Timeline Section with Wall Theme

const Section = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div
            className="flex items-center justify-center gap-3 mb-4"
            data-gsap="zoom-in"
          >
            <h2
              className="text-5xl text-white font-light tracking-tight"
              data-gsap="fade-down"
            >
              Mission Timeline
            </h2>
          </div>
          <p
            className="text-xl text-gray-400"
            data-gsap="fade-up"
            data-gsap-delay="200"
          >
            The Survey Corps battle plan
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              date: "January 15",
              title: "Registration Opens",
              desc: "Sign up starts now!",
            },
            {
              date: "February 1",
              title: "Deadline Extended",
              desc: "Last chance to register",
            },
            {
              date: "February 15-17",
              title: "Hackathon Begins",
              desc: "72 hours of coding",
            },
            {
              date: "February 17",
              title: "Submissions Due",
              desc: "Final demos presented",
            },
            {
              date: "February 18",
              title: "Results & Awards",
              desc: "Winners announced",
            },
          ].map((event, index) => (
            <div
              key={index}
              className="flex gap-6"
              data-gsap="fade-right"
              data-gsap-delay={index * 200}
            >
              <div className="flex flex-col items-center">
                <div className="w-1 h-full bg-white/20 last:hidden mt-2"></div>
              </div>
              <div className="flex-1">
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl hover:bg-white/10 hover:scale-105 transform transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2 font-light text-white">
                        {event.title}
                      </CardTitle>
                      <Badge className="bg-white text-black font-semibold px-3 py-1 hover:bg-gray-200">
                        {event.date}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-300">
                      {event.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
