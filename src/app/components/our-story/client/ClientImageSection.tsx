"use client";
import Image from "next/image";
import { memo } from "react";

function ClientImageSection({ imageUrl, alt }: { imageUrl: string; alt: string }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[#FFD700]/30 via-[#1B4D2E]/20 to-transparent blur-3xl opacity-70"></div>
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-[#FFD700]/50 to-[#1B4D2E]/50 opacity-20"></div>
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={alt}
          width={480}
          height={360}
          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 480px"
          priority={true}
          quality={50}
          loading="eager"
          fetchPriority="high"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default memo(ClientImageSection); 