"use client";

import { memo, useEffect, useState } from "react";
import Image from "next/image";

interface ClientImageSectionProps {
  imageUrl: string;
  alt: string;
}

const ClientImageSection = ({ imageUrl, alt }: ClientImageSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showHoverEffects, setShowHoverEffects] = useState(false);
  
  useEffect(() => {
    // Immediately show the image
    setIsVisible(true);
    
    // Defer hover effects until after content is loaded
    const effectsTimer = setTimeout(() => {
      setShowHoverEffects(true);
    }, 1000);
    
    return () => clearTimeout(effectsTimer);
  }, []);
  
  return (
    <div
      className={`relative group order-1 3xl:order-2 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Only apply these expensive effects after initial render */}
      {showHoverEffects && (
        <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[#FFD700]/30 via-[#1B4D2E]/20 to-transparent blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
      )}
      
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={alt}
          width={800}
          height={600}
          className={`object-cover w-full h-full ${showHoverEffects ? 'group-hover:scale-110 transition-transform duration-1000' : ''}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          loading="eager"
          priority
          fetchPriority="high"
          decoding="async"
        />
        
        {showHoverEffects && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1F0E]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        )}
      </div>
    </div>
  );
};

export default memo(ClientImageSection); 