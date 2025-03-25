"use client";
import { m } from "framer-motion";
import Image from "next/image";
import { memo, useEffect, useState } from "react";

const animationVariants = {
  visible: { opacity: 1, x: 0 }
};

function ClientImageSection({ imageUrl, alt }: { imageUrl: string; alt: string }) {
  const [mounted, setMounted] = useState(false);
  
  // Defer animations until after initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative group order-1 3xl:order-2"
      style={{ 
        opacity: mounted ? 1 : 0.9,
        transform: mounted ? 'translateX(0)' : 'translateX(20px)',
        transition: 'opacity 0.5s, transform 0.8s'
      }}
    >
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[#FFD700]/30 via-[#1B4D2E]/20 to-transparent blur-3xl transition-all duration-500 group-hover:opacity-100 opacity-70"></div>
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-[#FFD700]/50 to-[#1B4D2E]/50 opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={alt}
          width={1200}
          height={900}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
          quality={90}
          className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1F0E]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      </div>
    </div>
  );
}

export default memo(ClientImageSection); 