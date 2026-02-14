import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateSectionFadeIn = (element, options = {}) => {
  const defaults = {
    opacity: { from: 0, to: 1 },
    y: { from: 50, to: 0 },
    duration: 1.2,
    ease: "power3.out",
    trigger: element,
    start: "top 85%",
    end: "bottom 40%",
  };

  const config = { ...defaults, ...options };

  gsap.fromTo(
    element,
    {
      opacity: config.opacity.from,
      y: config.y.from,
    },
    {
      opacity: config.opacity.to,
      y: config.y.to,
      duration: config.duration,
      ease: config.ease,
      scrollTrigger: {
        trigger: config.trigger,
        start: config.start,
        end: config.end,
        toggleActions: "play none none reverse",
      },
    },
  );
};

export const animateCardsStagger = (cards, options = {}) => {
  const defaults = {
    opacity: { from: 0, to: 1 },
    scale: { from: 0.9, to: 1 },
    y: { from: 40, to: 0 },
    duration: 1,
    staggerDelay: 0.1,
    ease: "power2.out",
    start: "top 90%",
    end: "bottom 70%",
  };

  const config = { ...defaults, ...options };

  cards.forEach((card, i) => {
    gsap.fromTo(
      card,
      {
        opacity: config.opacity.from,
        scale: config.scale.from,
        y: config.y.from,
      },
      {
        opacity: config.opacity.to,
        scale: config.scale.to,
        y: config.y.to,
        duration: config.duration,
        delay: i * config.staggerDelay,
        ease: config.ease,
        scrollTrigger: {
          trigger: card,
          start: config.start,
          end: config.end,
          toggleActions: "play none none reverse",
        },
      },
    );
  });
};

export const cleanupScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};

export const animatePinnedSection = (
  triggerElement,
  videoElement,
  contentElement,
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top top",
      end: "bottom+=100% top",
      scrub: 1.5,
      pin: true,
    },
  });

  if (videoElement) {
    tl.fromTo(
      videoElement,
      { scale: 1, opacity: 1, filter: "blur(0px)" },
      { scale: 1.25, opacity: 0.4, filter: "blur(4px)", ease: "power3.inOut" },
      0,
    );
  }

  if (contentElement) {
    tl.fromTo(
      contentElement,
      { opacity: 1, y: 0 },
      { opacity: 0, y: -100, ease: "power2.inOut" },
      0,
    );
  }
};
