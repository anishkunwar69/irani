"use client";
import { m } from "framer-motion";
import { GiTeapot } from "react-icons/gi";
import { memo, useEffect, useState } from "react";

const animationVariants = {
  visible: { scale: 1, opacity: 1 }
};

function ClientStoryHeader() {
  const [mounted, setMounted] = useState(false);
  
  // Defer animations until after initial paint
  useEffect(() => {
    // Use requestAnimationFrame to ensure we're not blocking the main thread
    requestAnimationFrame(() => {
      setTimeout(() => setMounted(true), 100);
    });
  }, []);

  return (
    <div className="text-center mb-10 xs:mb-12 sm:mb-16 relative">
      {/* Simple initial background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(400px,90vw)] h-[min(400px,90vw)] bg-[#FFD700] rounded-full blur-[min(140px,15vw)] opacity-[0.15] sm:opacity-20"></div>
      
      {/* Content that loads immediately */}
      <div className={mounted ? "hidden" : "block"}>
        <h2 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-[0.2em] xs:tracking-[0.25em] sm:tracking-[0.3em] text-[#C7962D] font-quicksand mb-2 xs:mb-3 sm:mb-4 inline-flex items-center gap-1 xs:gap-2 sm:gap-3 justify-center">
          Our Legacy
        </h2>
        <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-lora text-white/90 leading-tight xs:leading-[1.2] sm:leading-tight max-w-[95%] xs:max-w-[90%] sm:max-w-4xl mx-auto px-2 xs:px-4 sm:px-0">
          Crafting Moments Since 2022
        </h3>
      </div>
      
      {/* Animated content that loads after initial paint */}
      {mounted && (
        <m.div
          initial="visible"
          variants={animationVariants}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-[0.2em] xs:tracking-[0.25em] sm:tracking-[0.3em] text-[#C7962D] font-quicksand mb-2 xs:mb-3 sm:mb-4 inline-flex items-center gap-1 xs:gap-2 sm:gap-3 justify-center">
            <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl animate-bounce" />
            Our Legacy
            <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl animate-bounce" />
          </h2>
          <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-lora text-white/90 leading-tight xs:leading-[1.2] sm:leading-tight max-w-[95%] xs:max-w-[90%] sm:max-w-4xl mx-auto px-2 xs:px-4 sm:px-0">
            Crafting{" "}
            <span className="text-[#C7962D] italic">Moments </span>
            Since <span className="text-[#C7962D] italic">2022</span>
          </h3>
        </m.div>
      )}
    </div>
  );
}

export default memo(ClientStoryHeader); 