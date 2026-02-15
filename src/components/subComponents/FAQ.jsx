import { useEffect, useRef } from "react";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { faqs } from "@/lib/data/data";
import { animateSectionFadeIn, animateCardsStagger } from "@/lib/gsap-utils";

gsap.registerPlugin(ScrollTrigger);

const sectionHeadingFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const FAQ = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      animateSectionFadeIn(sectionRef.current);
      animateCardsStagger(itemsRef.current, {
        duration: 0.8,
        staggerDelay: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`${sectionHeadingFont.className} text-4xl md:text-5xl tracking-[0.08em] uppercase mb-3`}
          >
            <span className="bg-gradient-to-r from-[#0080FF] via-[#0D52BD] to-[#1C05B3] bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p
            className={`${bodyFont.className} text-lg md:text-xl text-white/70`}
          >
            Everything you need to know
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              value={`item-${i}`}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/5 transition-all duration-300 overflow-hidden"
            >
              <AccordionTrigger
                className={`${bodyFont.className} text-left  text-white px-6 py-5 md:py-6 hover:text-white/80 text-lg md:text-xl transition-colors duration-300 group`}
              >
                {faq.q}
              </AccordionTrigger>
              <AccordionContent
                className={`${bodyFont.className} text-white/70 px-6 pb-5 md:pb-6 text-base md:text-lg leading-relaxed`}
              >
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
