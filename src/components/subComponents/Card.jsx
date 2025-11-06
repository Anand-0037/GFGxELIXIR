import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Brain, Code, Shield, Sparkles, Target, Zap } from "lucide-react";

// Battle Fronts - Strategic Divisions

const Cards = () => {
  return (
    <section data-gsap="fade-up" className="py-20 from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p
            className="text-sm text-gray-400 uppercase tracking-widest mb-4 font-light"
            data-gsap="fade-down"
          >
            STRATEGIC OPERATIONS CLASSIFICATION
          </p>
          <div
            className="flex items-center justify-center gap-3 mb-4"
            data-gsap="zoom-in"
          >
            <h2
              className="text-4xl md:text-6xl text-white font-light tracking-tight"
              data-gsap="fade-down"
            >
              Battle Fronts
            </h2>
          </div>
          <p
            className="text-lg md:text-xl text-gray-300"
            data-gsap="fade-up"
            data-gsap-delay="200"
          >
            Select your strategic division and deploy your expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl hover:bg-white/10 hover:scale-105 transform transition-all duration-300"
            data-gsap="flip-left"
            data-gsap-delay="100"
          >
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-12 h-12 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">
                Strategic Web Initiative
              </CardTitle>
              <CardDescription className="text-gray-400 text-sm uppercase tracking-wide mt-2">
                Frontend & Backend Operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-300 text-sm font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-white">▸</span> React, Next.js, Vue.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white">▸</span> Full-stack architectures
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white">▸</span> Modern UI/UX systems
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card
            className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl hover:bg-white/10 hover:scale-105 transform transition-all duration-300"
            data-gsap="flip-left"
            data-gsap-delay="200"
          >
            <CardHeader>
              <div className="mb-4">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">AI/ML Titan</CardTitle>
              <CardDescription className="text-gray-400">
                Intelligence Warfare Division
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li>• Machine Learning models</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
              </ul>
            </CardContent>
          </Card>

          <Card
            className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl hover:bg-white/10 hover:scale-105 transform transition-all duration-300"
            data-gsap="flip-left"
            data-gsap-delay="300"
          >
            <CardHeader>
              <div className="mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">
                Security Titan
              </CardTitle>
              <CardDescription className="text-gray-400">
                Protector of Digital Walls
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li>• Security tools</li>
                <li>• Threat detection</li>
                <li>• Privacy solutions</li>
              </ul>
            </CardContent>
          </Card>

          <Card
            className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl hover:bg-white/10 hover:scale-105 transform transition-all duration-300"
            data-gsap="flip-left"
            data-gsap-delay="400"
          >
            <CardHeader>
              <div className="mb-4">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">Chain Titan</CardTitle>
              <CardDescription className="text-gray-400">
                Decentralized Territory
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li>• Smart contracts</li>
                <li>• DeFi applications</li>
                <li>• NFT platforms</li>
              </ul>
            </CardContent>
          </Card>

          <Card
            className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl hover:bg-white/10 hover:scale-105 transform transition-all duration-300"
            data-gsap="flip-left"
            data-gsap-delay="500"
          >
            <CardHeader>
              <div className="mb-4">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">
                Mobile Titan
              </CardTitle>
              <CardDescription className="text-gray-400">
                Pocket Dimension Warrior
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li>• iOS & Android apps</li>
                <li>• Cross-platform solutions</li>
                <li>• Mobile-first design</li>
              </ul>
            </CardContent>
          </Card>

          <Card
            className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl hover:bg-white/10 hover:scale-105 transform transition-all duration-300"
            data-gsap="flip-left"
            data-gsap-delay="600"
          >
            <CardHeader>
              <div className="mb-4">
                <Target className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">
                Wings of Freedom
              </CardTitle>
              <CardDescription className="text-gray-400">
                Ultimate Creative Liberty
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li>• Unique solutions</li>
                <li>• Creative problem solving</li>
                <li>• Out-of-the-box thinking</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Cards;
