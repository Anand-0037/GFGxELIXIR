"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { animate, motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/lib/data/data";

export function SpotlightNavbar({
  className,
  onItemClick,
  defaultActiveIndex = 0,
}) {
  const navRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [isOpen, setIsOpen] = useState(false);
  const ambienceX = useRef(0);
  const observerRef = useRef(null);

  // IntersectionObserver for active section detection
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (sections.length === 0) return;

    const options = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = navItems.findIndex(
            (item) => item.href === `#${entry.target.id}`,
          );
          if (index !== -1 && index !== activeIndex) {
            setActiveIndex(index);
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, options);
    sections.forEach((section) => observerRef.current.observe(section));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [activeIndex]);

  // devfolio button
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    const nav = navRef.current;
    const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);

    if (activeItem) {
      const navRect = nav.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      const targetX = itemRect.left - navRect.left + itemRect.width / 2;

      animate(ambienceX.current, targetX, {
        type: "spring",
        stiffness: 200,
        damping: 20,
        onUpdate: (v) => {
          ambienceX.current = v;
          nav.style.setProperty("--ambience-x", `${v}px`);
        },
      });
    }
  }, [activeIndex]);

  const handleItemClick = (item, index) => {
    setActiveIndex(index);
    setIsOpen(false);
    onItemClick?.(item, index);

    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className={cn("fixed top-4 left-0 right-0 z-50 px-4 sm:px-8", className)}
    >
      <nav
        ref={navRef}
        className={cn(
          "spotlight-nav spotlight-nav-bg glass-border spotlight-nav-shadow",
          "relative h-14 md:h-16 rounded-full transition-all duration-300 overflow-hidden bg-black/10 backdrop-blur-xs border border-white/10 shadow-2xl w-full max-w-7xl mx-auto",
        )}
      >
        <div className="relative flex items-center justify-between h-full px-4 sm:px-6 md:px-10 z-10">
          <button
            onClick={() => handleItemClick({ href: "#hero", label: "Home" }, 0)}
            className="focus:outline-none"
          >
            <Image
              src="/stellaris-logo.webp"
              alt="Stellaris Logo"
              width={120}
              height={32}
              className="rotate-90 scale-[3.0] md:scale-[4.0] ml-12 md:ml-20 h-6 md:h-8 w-auto object-contain cursor-pointer"
              priority
            />
          </button>

          <ul className="hidden lg:flex items-center gap-1 sm:gap-2">
            {navItems.map((item, idx) => {
              const isRegister = item.label === "Register Now";
              return (
                <li
                  key={idx}
                  className="relative h-full flex items-center justify-center"
                >
                  <button
                    data-index={idx}
                    onClick={() => handleItemClick(item, idx)}
                    className={cn(
                      "px-3 sm:px-4 py-2 text-sm sm:text-base font-medium transition-all duration-300 rounded-full",
                      isRegister
                        ? "ml-2 sm:ml-4 px-3 sm:px-6 py-1.5 border border-white bg-gray-500/10 hover:bg-gray-500/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-full"
                        : activeIndex === idx
                          ? "text-white"
                          : "text-neutral-400",
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <button
            className="lg:hidden flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 text-white border border-white/20 transition-all hover:bg-white/20"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        <div className="hidden lg:block">
          <div
            className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] z-[2] rounded-b-[2rem]"
            style={{
              background: `radial-gradient(60px circle at var(--ambience-x) 0%, var(--ambience-color, rgba(255,255,255,1)) 0%, transparent 100%)`,
            }}
          />

          <div className="absolute bottom-0 left-0 w-full h-px bg-white/10 rounded-b-[2rem] z-0" />
        </div>
      </nav>

      {/* mobile view */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden absolute top-16 md:top-20 left-4 right-4 backdrop-blur-xl bg-white/1 border border-white/20 rounded-2xl p-4 md:p-6 shadow-2xl z-40 overflow-hidden max-h-[70vh] overflow-y-auto"
          >
            <ul className="flex flex-col gap-1 sm:gap-2">
              {navItems.map((item, idx) => {
                const isRegister = item.label === "Register Now";
                return (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <button
                      onClick={() => handleItemClick(item, idx)}
                      className={cn(
                        "w-full text-left px-3 py-2 text-sm sm:text-base font-medium rounded-lg transition-all duration-300",
                        isRegister
                          ? "bg-white text-black font-bold mt-3 shadow-[0_0_20px_rgba(255,255,255,0.2)] px-4 py-2"
                          : activeIndex === idx
                            ? "bg-white/10 text-white border border-white/20"
                            : "text-neutral-400 hover:text-white hover:bg-white/5",
                      )}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                );
              })}
            </ul>

            {/* devfolio button */}
            <div
              className="apply-button h-11 w-[312px]"
              data-hackathon-slug="stellaris"
              data-button-theme="dark-inverted"
            ></div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        nav {
          /* Dark Mode Colors: White lights for dark background */
          --ambience-color: rgba(255, 255, 255, 1);
        }
      `}</style>
    </div>
  );
}

export default SpotlightNavbar;
