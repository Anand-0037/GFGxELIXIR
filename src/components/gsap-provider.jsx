"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPProvider({ children }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Select all elements that should animate on scroll
    const elements = document.querySelectorAll("[data-gsap]");

    elements.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse", // AOS-like behavior
        },
      });
    });
  }, []);

  return <>{children}</>;
}
