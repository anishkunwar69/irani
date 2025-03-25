"use client";
import dynamic from "next/dynamic";
import { Moment } from "./types";
import { memo } from "react";
function GalleryPlaceholder() {
  return (
    <div className="w-full h-[calc(100vw*0.95)] sm:h-[calc(100vw*0.75)] md:h-[calc(100vw*0.65)] lg:h-[calc(100vw*0.55)] xl:h-[calc(100vw*0.45)] 2xl:h-[calc(100vw*0.4)] max-h-[80vh] relative mb-7 sm:mb-10 md:mb-10 lg:mb-10 xl:mb-20 gallery-5xl:mb-36 flex items-center justify-center bg-white/5">
      <div className="w-12 h-12 border-3 border-[#C7962D]/20 border-t-[#C7962D] rounded-full animate-spin"></div>
    </div>
  );
}

const DynamicGalleryContent = dynamic(
  () => import('./DynamicGalleryContent'),
  { 
    ssr: false,
    loading: () => <GalleryPlaceholder />
  }
);

interface ClientDynamicGalleryLoaderProps {
  moments: Moment[];
}

function ClientDynamicGalleryLoader({ moments }: ClientDynamicGalleryLoaderProps) {
  return <DynamicGalleryContent moments={moments} />;
}

export default memo(ClientDynamicGalleryLoader); 