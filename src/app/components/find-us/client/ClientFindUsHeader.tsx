"use client";
import { motion } from "framer-motion";
import { GiTeapot } from "react-icons/gi";
import { memo } from "react";
function ClientFindUsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-10 xs:mb-12 sm:mb-16 relative"
    >
      <div className="flex flex-col items-center justify-center relative max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] xs:w-[min(300px,80vw)] xs:h-[min(300px,80vw)] sm:w-[min(350px,70vw)] sm:h-[min(350px,70vw)] md:w-[400px] md:h-[400px] bg-[#C7962D] rounded-full blur-[70px] xs:blur-[90px] sm:blur-[110px] md:blur-[140px] lg:blur-[180px] opacity-[0.08] xs:opacity-[0.1] sm:opacity-[0.12] md:opacity-[0.15] lg:opacity-20"></div>
        <h2 className="relative text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-[0.2em] xs:tracking-[0.22em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#C7962D] font-quicksand mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 inline-flex items-center gap-1.5 xs:gap-2 sm:gap-3 justify-center">
          <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl animate-bounce" />
          Visit Us
          <GiTeapot className="text-lg xs:text-xl sm:text-2xl md:text-3xl animate-bounce" />
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