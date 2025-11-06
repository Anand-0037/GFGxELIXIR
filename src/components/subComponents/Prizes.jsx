import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Award, Sparkles } from "lucide-react";
import { Separator } from "../ui/separator";

// Prizes Section
const Prizes = () => {
  return (
    <section className="py-20  from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-5xl text-white font-light tracking-tight mb-4"
            data-gsap="fade-down"
          >
            Prize Pool
          </h2>
          <p
            className="text-xl text-gray-400"
            data-gsap="fade-up"
            data-gsap-delay="200"
          >
            The spoils of victory
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card
            className="bg-black text-white border border-white/20 shadow-2xl hover:scale-105 transform transition-all duration-300"
            data-gsap="flip-left"
            data-gsap-delay="100"
          >
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">🥇</div>
              <CardTitle className="text-3xl text-white">1st Place</CardTitle>
              <div className="text-4xl text-white  mt-4">₹50,000</div>
            </CardHeader>
            <CardContent className="space-y-2">
              <Separator className="bg-white/20" />
              <p className="text-gray-400">Mentorship + Certificate</p>
              <p className="text-gray-400">Internship opportunities</p>
            </CardContent>
          </Card>

          <Card
            className="bg-black text-white border border-white/20 shadow-2xl hover:scale-105 transform transition-all duration-300"
            data-gsap="flip-left"
            data-gsap-delay="200"
          >
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">🥈</div>
              <CardTitle className="text-3xl text-white">2nd Place</CardTitle>
              <div className="text-4xl text-white mt-4">₹30,000</div>
            </CardHeader>
            <CardContent className="space-y-2">
              <Separator className="bg-white/20" />
              <p className="text-gray-400">Mentorship + Certificate</p>
              <p className="text-gray-400">Interview prep sessions</p>
            </CardContent>
          </Card>

          <Card
            className="bg-black text-white border border-white/20 shadow-2xl hover:scale-105 transform transition-all duration-300"
            data-gsap="flip-left"
            data-gsap-delay="300"
          >
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">🥉</div>
              <CardTitle className="text-3xl text-white">3rd Place</CardTitle>
              <div className="text-4xl text-white mt-4">₹20,000</div>
            </CardHeader>
            <CardContent className="space-y-2">
              <Separator className="bg-white/20" />
              <p className="text-gray-400">Mentorship + Certificate</p>
              <p className="text-gray-400">Exclusive swag pack</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
          <Card
            className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl hover:bg-white/10 hover:scale-105 transform transition-all duration-300"
            data-gsap="zoom-in"
            data-gsap-delay="400"
          >
            <CardHeader>
              <Award className="w-8 h-8 text-white mb-2" />
              <CardTitle className="text-white">Track Winners</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl  text-white">₹10,000 × 5</p>
              <p className="text-gray-400 mt-2">Top project in each track</p>
            </CardContent>
          </Card>

          <Card
            className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl hover:bg-white/10 hover:scale-105 transform transition-all duration-300"
            data-gsap="zoom-in"
            data-gsap-delay="500"
          >
            <CardHeader>
              <Sparkles className="w-8 h-8 text-white mb-2" />
              <CardTitle className="text-white">Special Awards</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl  text-white">₹5,000 × 10</p>
              <p className="text-gray-400 mt-2">
                Most innovative, best design, etc.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
