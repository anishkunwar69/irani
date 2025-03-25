"use client";

import { memo, useEffect, useState } from "react";
import { GiTeapot } from "react-icons/gi";

const ClientStoryHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAnimations, setShowAnimations] = useState(false);
  
  useEffect(() => {
    // Show content immediately but defer animations
    setIsVisible(true);
    
    // Defer animations until after main content is visible
    const animationTimer = setTimeout(() => {
      setShowAnimations(true);
    }, 800);
    
    return () => clearTimeout(animationTimer);
  }, []);
  
  return (
    <div className="text-center mb-10 xs:mb-12 sm:mb-16 relative">
      {/* Simplified, less intensive blur effect for better initial performance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(400px,90vw)] h-[min(400px,90vw)] bg-[#FFD700] rounded-full blur-[50px] opacity-10"></div>
      
      <div
        className={`transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: 'translateZ(0)' }} /* Force GPU acceleration */
      >
        <h2 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-[0.2em] xs:tracking-[0.25em] sm:tracking-[0.3em] text-[#C7962D] font-quicksand mb-2 xs:mb-3 sm:mb-4 inline-flex items-center gap-1 xs:gap-2 sm:gap-3 justify-center">
          <GiTeapot className={`text-lg xs:text-xl sm:text-2xl md:text-3xl ${showAnimations ? 'animate-bounce' : ''}`} />
          Our Legacy
          <GiTeapot className={`text-lg xs:text-xl sm:text-2xl md:text-3xl ${showAnimations ? 'animate-bounce' : ''}`} />
        </h2>
        
        <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-lora text-white/90 leading-tight xs:leading-[1.2] sm:leading-tight max-w-[95%] xs:max-w-[90%] sm:max-w-4xl mx-auto px-2 xs:px-4 sm:px-0">
          Crafting{" "}
          <span className="text-[#C7962D] italic">Moments </span>
          Since <span className="text-[#C7962D] italic">2022</span>
        </h3>
      </div>
    </div>
  );
};

export default memo(ClientStoryHeader); 