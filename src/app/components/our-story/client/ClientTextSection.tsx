"use client";

import { ReactNode, memo, useEffect, useState } from "react";

interface ClientTextSectionProps {
  children: ReactNode;
}

const ClientTextSection = ({ children }: ClientTextSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div
      className={`w-full order-2 3xl:order-1 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="space-y-6 sm:space-y-8">
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-lora text-white">
            <span className="text-[#C7962D]">Authentic</span> Tea, Remarkable Stories
          </h3>
          
          <p className="text-white/80 font-quicksand text-base sm:text-lg leading-relaxed">
            Discover the essence of traditional tea culture reimagined for today's tea lovers. 
            Our journey began with a mission to preserve authentic Irani tea craftsmanship while 
            creating welcoming spaces for connection and community.
          </p>
        </div>
        
        {children}
      </div>
    </div>
  );
};

export default memo(ClientTextSection); 