import HeroContent from "../components/hero/HeroContent";
import { Suspense } from "react";

function Hero() {
  return (
    <section 
      id="hero" 
      className="relative w-full overflow-hidden bg-[#1B4D2E]"
      aria-label="Hero section"
    >
      {/* Simple solid background color */}
      <div className="absolute inset-0 bg-[#1B4D2E]"></div>
      
      {/* Prioritize the main hero content */}
      <div className="relative z-10">
        <HeroContent />
      </div>
    </section>
  );
}

export default Hero;