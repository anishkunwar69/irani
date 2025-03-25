"use client";
import Image from "next/image";
import { memo } from "react";

function ClientImageSection({ imageUrl, alt }: { imageUrl: string; alt: string }) {
  return (
    <div className="relative">
      <Image
        src={imageUrl}
        alt={alt}
        width={480}
        height={360}
        sizes="(max-width: 640px) 100vw, 480px"
        priority={true}
        quality={50}
        loading="eager"
        fetchPriority="high"
        className="rounded-xl mx-auto"
      />
    </div>
  );
}

export default memo(ClientImageSection); 