"use client";

import { memo, useEffect, useState } from "react";

const ClientStoryHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="mb-12 xs:mb-16 sm:mb-20 md:mb-24 text-center relative">
      {/* Simplified animation with CSS instead of framer-motion */}
      <div
        className={`space-y-3 xs:space-y-4 sm:space-y-5 transition-all duration-500 ${
          isVisible ? 'opacity-100 transform-none' : 'opacity-80 translate-y-2'
        }`}
      >
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-[#C7962D] to-transparent"></div>
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#C7962D]/60"></div>
          <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-gradient-to-l from-[#C7962D] to-transparent"></div>
        </div>

        <h2 className="text-white font-lora text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold">
          Our <span className="text-[#C7962D]">Story</span>
        </h2>

        <p className="text-white/70 font-quicksand text-sm xs:text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          From humble beginnings to becoming Kathmandu's signature tea
          destination, our journey is steeped in passion and tradition
        </p>
      </div>
    </div>
  );
};

export default memo(ClientStoryHeader); 