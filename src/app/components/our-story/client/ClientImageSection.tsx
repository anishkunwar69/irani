"use client";

import { memo, useEffect, useState } from "react";
import Image from "next/image";

interface ClientImageSectionProps {
  imageUrl: string;
  alt: string;
}

const ClientImageSection = ({ imageUrl, alt }: ClientImageSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div
      className={`relative w-full h-full transition-all duration-500 ${isVisible ? 'opacity-100 transform-none' : 'opacity-80 translate-y-5'}`}
    >
      <div className="relative w-full h-0 pb-[75%] rounded-xl overflow-hidden shadow-md sm:shadow-lg">
        {/* Add border effects */}
        <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C7962D] via-[#2D5A27]/50 to-[#336644] rounded-xl opacity-30 blur-[1px] z-0"></div>
        
        {/* Image container */}
        <div className="absolute inset-0 rounded-xl overflow-hidden z-10">
          <Image
            src={imageUrl}
            alt={alt}
            width={800}
            height={600}
            className="w-full h-full object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            loading="eager"
            priority
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1F0E]/60 via-[#1B4D2E]/20 to-transparent opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default memo(ClientImageSection); 