"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundVideo() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [activeVideo, setActiveVideo] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const video1 = videoRef1.current;
    const video2 = videoRef2.current;

    if (!video1 || !video2) return;

    const handleTimeUpdate = () => {
      const currentVideo = activeVideo === 1 ? video1 : video2;
      const nextVideo = activeVideo === 1 ? video2 : video1;

      const timeLeft = currentVideo.duration - currentVideo.currentTime;

      // Start transition 3 seconds before end
      if (timeLeft <= 3 && !isTransitioning) {
        setIsTransitioning(true);
        nextVideo.currentTime = 0;
        nextVideo.play();

        // After transition time, switch active state and reset previous video
        setTimeout(() => {
          setActiveVideo(activeVideo === 1 ? 2 : 1);
          setIsTransitioning(false);
          currentVideo.pause();
          currentVideo.currentTime = 0;
        }, 3000); // 3 second overlap
      }
    };

    // Attach listener to the currently active video
    const activeRef = activeVideo === 1 ? video1 : video2;
    activeRef.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      activeRef.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [activeVideo, isTransitioning]);

  useEffect(() => {
    // Initial play
    if (videoRef1.current) {
      videoRef1.current
        .play()
        .catch((e) => console.log("Autoplay prevented:", e));
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-50 overflow-hidden bg-black">
      <video
        ref={videoRef1}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[3000ms] ${
          activeVideo === 1 || (activeVideo === 2 && isTransitioning)
            ? "opacity-100"
            : "opacity-0"
        }`}
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/djrs8vc5s/video/upload/v1771109086/background_hmtian.mp4"
          type="video/mp4"
        />
      </video>
      <video
        ref={videoRef2}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[3000ms] ${
          (activeVideo === 2 && !isTransitioning) ||
          (activeVideo === 1 && isTransitioning)
            ? "opacity-100"
            : "opacity-0"
        }`}
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/djrs8vc5s/video/upload/v1771109086/background_hmtian.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/40" />{" "}
      {/* Overlay for better text readability */}
    </div>
  );
}
