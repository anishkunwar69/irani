"use client";
import { m } from "framer-motion";
import { memo, useMemo } from "react";
import { FaCoffee, FaLeaf, FaMugHot, FaUsers } from "react-icons/fa";
import ClientNumber from "./ClientNumber";

interface StatProps {
  stats: {
    iconName: string;
    number: string;
    text: string;
  }[];
}

// Map icon names to actual icon components
const iconMap = {
  FaUsers,
  FaMugHot,
  FaLeaf,
  FaCoffee
};

const StatItem = memo(({ stat, index }: { 
  stat: { 
    iconName: string; 
    number: string; 
    text: string 
  }; 
  index: number 
}) => {
  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const IconComponent = iconMap[stat.iconName as keyof typeof iconMap];

  return (
    <m.div
      key={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationVariants}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative space-y-1 xs:space-y-2 bg-white/10 backdrop-blur-sm p-3 xs:p-4 sm:p-6 rounded-xl border border-white/15 shadow-md shadow-black/5 hover:bg-white/15 transition-colors duration-300">
        <div className="flex items-center gap-2 xs:gap-3">
          {IconComponent && <IconComponent className="text-base xs:text-lg sm:text-lg md:text-xl lg:text-2xl text-[#FFD700]" />}
          <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-lora text-white font-bold">
            <ClientNumber n={stat.number} />
            {stat.number.includes("+") ? "+" : ""}
          </p>
        </div>
        <p className="text-sm xs:text-sm sm:text-sm md:text-base lg:text-lg text-white/80 font-quicksand font-medium">
          {stat.text}
        </p>
      </div>
    </m.div>
  );
});

function ClientStatGrid({ stats }: StatProps) {
  return (
    <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
      {stats.map((stat, index) => (
        <StatItem key={index} stat={stat} index={index} />
      ))}
    </div>
  );
}

export default memo(ClientStatGrid); 