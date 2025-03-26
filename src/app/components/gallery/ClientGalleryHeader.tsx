"use client";
import { GiTeapot } from "react-icons/gi";
import { memo } from "react";

function ClientGalleryHeader() {
  return (
    <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-14 relative">
      <div className="relative">
        <h2 className="text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#C7962D] font-quicksand mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 inline-flex items-center gap-1 sm:gap-2 md:gap-3 justify-center">
          <GiTeapot className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
          Our Moments
          <GiTeapot className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-lora text-white/90 leading-tight max-w-[95%] sm:max-w-[90%] mx-auto px-2 sm:px-4 md:px-0">
          Experience The{" "}
          <span className="text-[#C7962D] italic">Magic</span> Inside
        </h3>
      </div>
    </div>
  );
}

export default memo(ClientGalleryHeader); 