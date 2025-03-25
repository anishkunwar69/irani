"use client";
import { memo } from "react";

function ClientStoryHeader() {
  return (
    <div className="text-center mb-8 relative">
      <h2 className="text-base uppercase tracking-[0.2em] text-[#C7962D] font-quicksand mb-2">
        Our Legacy
      </h2>
      <h3 className="text-2xl sm:text-3xl font-bold font-lora text-white/90 leading-tight max-w-md mx-auto">
        Crafting <span className="text-[#C7962D]">Moments</span> Since <span className="text-[#C7962D]">2022</span>
      </h3>
    </div>
  );
}

export default memo(ClientStoryHeader); 