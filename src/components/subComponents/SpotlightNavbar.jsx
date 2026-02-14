"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image"
import Link from "next/link";

export function SpotlightNavbar({
  items = [
    { label: "Home", href: "#hero" },
    
    { label: "Mission", href: "#mission-briefing" },
    { label: "Tracks", href: "#tracks" },
    { label: "Timelines", href: "#timeline" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "Rewards", href: "#prizes" },
    { label: "FAQ", href: "#faq" },
    { label: "Register Now", href: "#contact" },
  ],
  className,
  onItemClick,
  defaultActiveIndex = 0,
}) {
  const navRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [isOpen, setIsOpen] = useState(false);
  const ambienceX = useRef(0);



  
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
        block: "start"
      });
    }
  };

  return (
    <div className={cn("fixed top-4 left-0 right-0 z-50 px-4 sm:px-8", className)}>
      <nav
        ref={navRef}
        className={cn(
          "spotlight-nav spotlight-nav-bg glass-border spotlight-nav-shadow",
          "relative h-16 rounded-full transition-all duration-300 overflow-hidden bg-black/10 backdrop-blur-xs border border-white/10 shadow-2xl w-full max-w-7xl mx-auto"
        )}
      >
        
        <div className="relative flex items-center justify-between h-full px-6 sm:px-10 z-[10]">
         
          <button 
            onClick={() => handleItemClick({ href: "#hero", label: "Home" }, 0)}
            className="focus:outline-none"
          >
            <Image 
              src="/Steller A.png" 
              alt="Stellaris Logo"
              width={150} 
              height={40} 
              className="h-8 sm:h-16 w-auto object-contain cursor-pointer"
              priority 
            />
          </button>
          
          <ul className="hidden lg:flex items-center gap-1 sm:gap-2">
            {items.map((item, idx) => {
              const isRegister = item.label === "Register Now";
              return (
                <li key={idx} className="relative h-full flex items-center justify-center">
                  <button
                    data-index={idx}
                    onClick={() => handleItemClick(item, idx)}
                    className={cn(
                      "px-3 sm:px-4 py-2 text-base font-medium transition-all duration-200 rounded-full",
                      isRegister
                        ? "ml-4 px-6 py-1.5 border border-white bg-gray-500/10 hover:bg-gray-500/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-full"
                        : activeIndex === idx
                          ? "text-white"
                          : "text-neutral-400 hover:text-white"
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white border border-white/20 transition-all hover:bg-white/20"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        
        <div className="hidden lg:block">
          <div
              className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] z-[2] rounded-b-[2rem]"
              style={{
                  background: `radial-gradient(60px circle at var(--ambience-x) 0%, var(--ambience-color, rgba(255,255,255,1)) 0%, transparent 100%)`
              }}
          />
        
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 rounded-b-[2rem] z-0" />
        </div>

      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden absolute top-20 left-4 right-4 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl z-40 overflow-hidden"
          >
            <ul className="flex flex-col gap-2">
              {items.map((item, idx) => {
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
                        "w-full text-left px-4 py-3 text-lg font-medium rounded-xl transition-all",
                        isRegister
                          ? "bg-white text-black font-bold text-center mt-4 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                          : activeIndex === idx
                            ? "bg-white/10 text-white"
                            : "text-neutral-400 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style jsx>{`
        nav {
          /* Dark Mode Colors: White lights for dark background */
          --ambience-color: rgba(255,255,255,1);
        }
      `}</style>
    </div>
  );
}

export default SpotlightNavbar;