import HeroContent from "../components/hero/HeroContent";
import Image from "next/image";

function Hero() {
  return (
    <section 
      id="hero" 
      className="relative w-full overflow-hidden bg-[#1B4D2E]"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B4D2E]/95 via-[#2D5A27] to-[#1B4D2E]/95">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <Image 
            src="/pattern.png" 
            alt="Background pattern" 
            fill
            sizes="100vw"
            quality={40}
            priority={false}
            loading="lazy"
            className="object-repeat opacity-10"
          />
        </div>
        
        <div className="absolute top-0 right-0 h-[1px] w-full transform -rotate-[30deg] origin-top-right">
          <div className="absolute inset-0 bg-gradient-to-l from-[#C7962D] via-[#C7962D]/30 to-transparent"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 h-[1px] w-full transform -rotate-[30deg] origin-bottom-left">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C7962D] via-[#C7962D]/30 to-transparent"></div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C7962D]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C7962D]/50 to-transparent"></div>
        
        <div className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 opacity-20">
          <div className="absolute top-0 right-0 w-[1px] h-full bg-[#C7962D]"></div>
          <div className="absolute top-0 right-0 w-full h-[1px] bg-[#C7962D]"></div>
        </div>
        
        <div className="absolute bottom-4 left-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 opacity-20">
          <div className="absolute bottom-0 left-0 w-[1px] h-full bg-[#C7962D]"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C7962D]"></div>
        </div>
        
        <div className="absolute top-[20%] left-[10%] w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-[#C7962D]/10 blur-[60px] mix-blend-overlay"></div>
        <div className="absolute bottom-[20%] right-[10%] w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-[#C7962D]/10 blur-[60px] mix-blend-overlay"></div>
      </div>

      <HeroContent />
    </section>
  );
}

export default Hero;