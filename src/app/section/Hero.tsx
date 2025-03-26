import HeroContent from "../components/hero/HeroContent";
import { Suspense } from "react";

function Hero() {
  return (
    <section 
      id="hero" 
      className="relative w-full overflow-hidden bg-[#29552a]"
      aria-label="Hero section"
    >
      {/* Simple solid background color */}
      <div className="absolute inset-0 bg-[#29552a]"></div>
      
      {/* Prioritize the main hero content */}
      <div className="relative z-10">
        <HeroContent />
      </div>
    </section>
  );
}

export default Hero;