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
import {
  animateSectionFadeIn,
  animateCardsStagger,
} from "@/lib/gsap-utils";

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
      className="relative py-24 text-white overflow-hidden"
    >

      <div className="relative z-10 container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2
            className={`${sectionHeadingFont.className} text-5xl tracking-[0.08em] uppercase mb-3`}
          >
            <span className="bg-gradient-to-r from-[#0080FF] via-[#0D52BD] to-[#1C05B3] bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className={`${bodyFont.className} text-lg text-gray-400`}>
            Everything you need to know
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4"
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              value={`item-${i}`}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <AccordionTrigger
                className={`${bodyFont.className} text-left font-normal text-white px-6 py-4 hover:text-gray-300 text-lg`}
              >
                {faq.q}
              </AccordionTrigger>
              <AccordionContent
                className={`${bodyFont.className} text-gray-400 px-6 pb-4 text-sm leading-relaxed`}
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
