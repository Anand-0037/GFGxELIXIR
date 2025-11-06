import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

// FAQ Section

const FAQ = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2
            className="text-5xl text-white font-light tracking-tight mb-4"
            data-gsap="fade-down"
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-xl text-gray-400"
            data-gsap="fade-up"
            data-gsap-delay="200"
          >
            Everything you need to know
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4"
          data-gsap="fade-up"
        >
          <AccordionItem
            value="item-1"
            className="bg-white/5 backdrop-blur-sm border border-white/10 px-6 rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            <AccordionTrigger className="text-left font-normal text-white hover:text-gray-300">
              Who can participate?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              Anyone with a passion for coding! Students, professionals, and
              hobbyists are all welcome. Teams can have 2-4 members.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="bg-white/5 backdrop-blur-sm border border-white/10 px-6 rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            <AccordionTrigger className="text-left text-white hover:text-gray-300 font-normal">
              Is there a registration fee?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              No, the hackathon is completely free to participate. Just bring
              your skills and enthusiasm!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="bg-white/5 backdrop-blur-sm border border-white/10 px-6 rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            <AccordionTrigger className="text-left text-white hover:text-gray-300 font-normal">
              What do I need to bring?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              Bring your laptop, charger, and any tools you need. We&apos;ll
              provide wifi, snacks, and energy drinks to keep you going!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="bg-white/5 backdrop-blur-sm border border-white/10 px-6 rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            <AccordionTrigger className="text-left font-normal text-white hover:text-gray-300">
              Can I work on a pre-existing project?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              No, all projects must be started fresh during the hackathon. You
              can use libraries and frameworks, but the core idea and
              implementation must be new.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="bg-white/5 backdrop-blur-sm border border-white/10 px-6 rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            <AccordionTrigger className="text-left font-normal text-white hover:text-gray-300">
              How will projects be judged?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              Projects will be judged on innovation, technical complexity, user
              experience, and presentation. Each track will have industry
              experts as judges.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-6"
            className="bg-white/5 backdrop-blur-sm border border-white/10 px-6 rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            <AccordionTrigger className="text-left font-normal text-white hover:text-gray-300">
              Will the event be online or offline?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              The hackathon will be hybrid - both online and offline options
              available. Join us at our venue or participate from anywhere in
              the world.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
