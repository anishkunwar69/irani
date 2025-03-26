"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { GiTeapot } from "react-icons/gi";

function ClientFoundersHeader() {
  return (
    <div className="text-center mb-10 xs:mb-12 sm:mb-16 relative">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <h2 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-[0.2em] xs:tracking-[0.22em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#C7962D] font-quicksand mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 inline-flex items-center gap-1.5 xs:gap-2 sm:gap-3 justify-center">
          <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl" />
          A Cup of Wisdom
          <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl" />
        </h2>
        <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-lora text-white/90 leading-tight xs:leading-[1.15] sm:leading-[1.2] max-w-[95%] xs:max-w-[90%] sm:max-w-4xl mx-auto px-1 xs:px-2 sm:px-0">
          From the <span className="text-[#C7962D] italic">Founder's</span>{" "}
          Heart
        </h3>
      </motion.div>
    </div>
  );
} 

export default memo(ClientFoundersHeader);      