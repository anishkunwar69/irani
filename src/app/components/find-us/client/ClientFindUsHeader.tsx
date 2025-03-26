"use client";
import { motion } from "framer-motion";
import { GiTeapot } from "react-icons/gi";
import { memo } from "react";

function ClientFindUsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0.8, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="text-center mb-10 xs:mb-12 sm:mb-16 relative"
    >
      <div className="flex flex-col items-center justify-center relative max-w-4xl mx-auto -mt-5">
        <h2 className="relative text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-[0.2em] xs:tracking-[0.22em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#C7962D] font-quicksand mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 inline-flex items-center gap-1.5 xs:gap-2 sm:gap-3 justify-center">
          <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl" />
          Visit Us
          <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl" />
        </h2>
        <h3 className="relative text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-lora text-white/90 leading-tight xs:leading-[1.15] sm:leading-[1.2] max-w-[95%] xs:max-w-[90%] sm:max-w-4xl mx-auto px-1 xs:px-2 sm:px-0">
          Find Your Nearest{" "}
          <span className="text-[#C7962D] italic">Irani Chiya</span>
        </h3>
      </div>
      <p className="relative text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl text-white/80 font-quicksand leading-relaxed max-w-3xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-0 mt-4 xs:mt-5 sm:mt-6">
        With <span className="text-[#C7962D] font-bold">13 branches</span>{" "}
        across the city, we're never too far away. Currently,{" "}
        <span className="text-[#C7962D] font-bold">11 locations</span> are
        available on Google Maps, with more being added soon. Each branch
        offers the same exceptional quality and service that Irani Chiya
        is known for.
      </p>
    </motion.div>
  );
}

export default memo(ClientFindUsHeader); 