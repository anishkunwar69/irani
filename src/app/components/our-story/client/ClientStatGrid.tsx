"use client";

import { memo, useEffect, useState } from "react";
import { FaUsers, FaMugHot, FaLeaf, FaCoffee } from "react-icons/fa";
import ClientNumber from "./ClientNumber";

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

  // Delay stat animation slightly for better performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const renderIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return <IconComponent className="text-[#C7962D] text-xl sm:text-2xl md:text-3xl" />;
  };

  return (
    <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-3 sm:p-4 md:p-5 bg-white/5 rounded-xl border border-white/10 flex items-center"
        >
          <div className="mr-3 sm:mr-4 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#1B4D2E]/40 rounded-full">
            {renderIcon(stat.iconName)}
          </div>
          <div>
            {isVisible ? (
              <ClientNumber value={stat.number} className="text-xl sm:text-2xl md:text-3xl font-bold text-[#C7962D] font-lora" />
            ) : (
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#C7962D] font-lora opacity-60">0</div>
            )}
            <p className="text-xs sm:text-sm text-white/70 font-quicksand">
              {stat.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(ClientStatGrid); 