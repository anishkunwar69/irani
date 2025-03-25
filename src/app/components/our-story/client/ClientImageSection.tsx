"use client";
import Image from "next/image";
import { memo } from "react";

function ClientImageSection({ imageUrl, alt }: { imageUrl: string; alt: string }) {
  return (
    <div className="relative order-1 3xl:order-2">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={alt}
          width={800}
          height={600}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          priority={true}
          quality={70}
          loading="eager"
          fetchPriority="high"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default memo(ClientImageSection); 