"use client";
import { m } from "framer-motion";
import { GiTeapot } from "react-icons/gi";
import { memo } from "react";

const animationVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1 }
};

function ClientStoryHeader() {
  return (
    <div className="text-center mb-10 xs:mb-12 sm:mb-16 relative">
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
        variants={animationVariants}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h2 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-[0.2em] xs:tracking-[0.25em] sm:tracking-[0.3em] text-[#C7962D] font-quicksand mb-2 xs:mb-3 sm:mb-4 inline-flex items-center gap-1 xs:gap-2 sm:gap-3 justify-center">
          <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl" />
          Our Legacy
          <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl" />
        </h2>
        <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-lora text-white/90 leading-tight xs:leading-[1.2] sm:leading-tight max-w-[95%] xs:max-w-[90%] sm:max-w-4xl mx-auto px-2 xs:px-4 sm:px-0">
          Crafting{" "}
          <span className="text-[#C7962D] italic">Moments </span>
          Since <span className="text-[#C7962D] italic">2022</span>
        </h3>
      </m.div>
    </div>
  );
}

export default memo(ClientStoryHeader); 