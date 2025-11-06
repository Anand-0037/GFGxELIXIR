import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

// CTA Section with Wings of Freedom

const CTA = () => {
  return (
    <section className="py-20  from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 text-center">
        <Card
          className="bg-white/5 backdrop-blur-sm border border-white/20 shadow-2xl max-w-2xl mx-auto hover:bg-white/10 transition-all duration-300"
          data-gsap="zoom-in"
        >
          <CardHeader>
            <div className="mb-4">
              <div className="text-6xl mb-4 animate-pulse">⚔️</div>
              <CardTitle className="text-4xl mb-2 text-white font-light tracking-tight">
                Ready to Face the Titans?
              </CardTitle>
            </div>
            <CardDescription className="text-xl text-gray-300">
              Join the Survey Corps. Join hundreds of elite developers in
              humanity&apos;s last stand against the titans of code.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg font-semibold transform hover:scale-110 transition-all duration-300 shadow-sm shadow-white/20"
              >
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white px-8 py-6 text-lg font-semibold transform hover:scale-110 transition-all duration-300"
              >
                Join Discord
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Registration closes February 1, 2025
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
