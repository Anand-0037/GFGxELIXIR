"use client";

import { useState, useEffect } from "react";

const Unit = ({ value, label }) => (
  <div className="flex flex-col items-center min-w-0 flex-1">
    <div className="relative w-full flex justify-center">
      <div className="absolute -inset-1 rounded-xl opacity-20" />

      <div
        className="
        relative
        w-full max-w-35
        aspect-square
        flex flex-col items-center justify-center
        rounded-xl
        "
      >
        <span className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-semibold text-slate-100 tabular-nums leading-none">
          {value.toString().padStart(2, "0")}
        </span>

        <span className="mt-1 text-[7px] sm:text-xs md:text-xs uppercase tracking-widest text-slate-400">
          {label}
        </span>
      </div>
    </div>
  </div>
);

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const distance = new Date(targetDate).getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-full flex justify-center -mt-10 md:-mt-4">
      <div
        className="
        w-full max-w-7xl
        flex flex-nowrap
        justify-between
        gap-1 sm:gap-4 md:gap-8
        px-1 sm:px-4
        "
      >
        <Unit value={timeLeft.days} label="days" />
        <span className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-semibold text-slate-100 tabular-nums leading-none mt-3">
          :
        </span>
        <Unit value={timeLeft.hours} label="hours" />
        <span className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-semibold text-slate-100 tabular-nums leading-none mt-3">
          :
        </span>
        <Unit value={timeLeft.minutes} label="mins" />
        <span className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-semibold text-slate-100 tabular-nums leading-none mt-3">
          :
        </span>
        <Unit value={timeLeft.seconds} label="secs" />
      </div>
    </div>
  );
};

export default CountdownTimer;
