"use client";

import { memo, useEffect, useState } from "react";
import { FaUsers, FaMugHot, FaLeaf, FaCoffee } from "react-icons/fa";

interface StatItem {
  iconName: string;
  number: string;
  text: string;
}

interface ClientStatGridProps {
  stats: StatItem[];
}

const iconMap = {
  FaUsers,
  FaMugHot,
  FaLeaf,
  FaCoffee,
};

const ClientStatGrid = ({ stats }: ClientStatGridProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showStaggered, setShowStaggered] = useState(false);
  
  useEffect(() => {
    // Show basic grid immediately for better LCP
    setIsVisible(true);
    
    // Defer staggered animations which are not critical
    const animationTimer = setTimeout(() => {
      setShowStaggered(true);
    }, 1200);
    
    return () => clearTimeout(animationTimer);
  }, []);
  
  return (
    <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
      {stats.map((stat, index) => {
        const IconComponent = iconMap[stat.iconName as keyof typeof iconMap];
        // Only apply delays if staggered animations are enabled
        const animationDelay = showStaggered ? `${index * 100}ms` : '0ms';
        
        return (
          <div
            key={index}
            className="relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible && showStaggered ? 'translateY(0)' : 'translateY(0)',
              transition: `opacity 0.3s ease ${animationDelay}${showStaggered ? `, transform 0.4s ease ${animationDelay}` : ''}`
            }}
          >
            {showStaggered && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B4D2E]/10 to-transparent rounded-xl blur-lg"></div>
            )}
            <div className="relative space-y-1 xs:space-y-2 bg-white/5 p-3 xs:p-4 sm:p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 xs:gap-3">
                {IconComponent && <IconComponent className="text-base xs:text-lg sm:text-lg md:text-xl lg:text-2xl text-[#FFD700]" />}
                <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-lora text-white font-bold">
                  {stat.number}
                </p>
              </div>
              <p className="text-sm xs:text-sm sm:text-sm md:text-base lg:text-lg text-white/70 font-quicksand font-medium">
                {stat.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(ClientStatGrid); 