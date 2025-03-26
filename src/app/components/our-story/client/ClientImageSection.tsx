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
      viewport={{ once: true, margin: "-100px" }}
      variants={animationVariants}
      transition={{ duration: 0.6 }}
      className="relative group order-1 3xl:order-2"
    >
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#C7962D]/20">
        <Image
          src={imageUrl}
          alt={alt}
          width={1200}
          height={900}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          fetchPriority="high"
          quality={90}
          className="object-cover w-full h-full"
        />
      </div>
    </m.div>
  );
}

export default memo(ClientImageSection); 