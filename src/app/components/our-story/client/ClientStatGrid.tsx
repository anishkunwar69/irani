"use client";
import { memo } from "react";
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
  const IconComponent = iconMap[stat.iconName as keyof typeof iconMap];

  return (
    <div className="bg-white/5 p-3 rounded-lg border border-white/10">
      <div className="flex items-center gap-2">
        {IconComponent && <IconComponent className="text-base text-[#FFD700]" />}
        <p className="text-lg font-lora text-white font-bold">
          <ClientNumber n={stat.number} />
          {stat.number.includes("+") ? "+" : ""}
        </p>
      </div>
      <p className="text-sm text-white/70 font-quicksand">
        {stat.text}
      </p>
    </div>
  );
});

function ClientStatGrid({ stats }: StatProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((stat, index) => (
        <StatItem key={index} stat={stat} index={index} />
      ))}
    </div>
  );
}

export default memo(ClientStatGrid); 