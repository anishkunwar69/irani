"use client";
import { m } from "framer-motion";
import Image from "next/image";
import { memo } from "react";

const animationVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

function ClientImageSection({ imageUrl, alt }: { imageUrl: string; alt: string }) {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationVariants}
      transition={{ duration: 0.8 }}
      className="relative group order-1 3xl:order-2"
    >
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[#FFD700]/30 via-[#1B4D2E]/20 to-transparent blur-3xl transition-all duration-500 group-hover:opacity-100 opacity-70"></div>
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-[#FFD700]/50 to-[#1B4D2E]/50 opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          loading="eager"
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1F0E]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      </div>
    </m.div>
  );
}

export default memo(ClientImageSection); 