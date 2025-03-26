"use client";
import dynamic from "next/dynamic";
import { Moment } from "./types";
import { useEffect, useState } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

// Create a placeholder component that shows while the gallery is loading
const GalleryPlaceholder = () => (
  <LazyMotion features={domAnimation}>
    <div className="w-full h-[calc(100vw*0.95)] sm:h-[calc(100vw*0.75)] md:h-[calc(100vw*0.65)] lg:h-[calc(100vw*0.55)] xl:h-[calc(100vw*0.45)] 2xl:h-[calc(100vw*0.4)] max-h-[80vh] relative flex items-center justify-center">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-4 border-[#C7962D]/20 border-t-[#C7962D] rounded-full animate-spin mb-4"></div>
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-[#C7962D] font-lora text-lg sm:text-xl md:text-2xl font-medium"
        >
          Loading Gallery...
        </m.div>
        <m.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.2 }}
          className="text-white/70 text-sm sm:text-base mt-2 max-w-xs text-center font-quicksand"
        >
          Preparing our moments collection
        </m.div>
      </div>
      
      {/* Faded placeholder images suggestion */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="flex space-x-4 sm:space-x-8 md:space-x-12 opacity-30">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-32 sm:w-40 md:w-52 lg:w-60 aspect-[9/16] bg-gradient-to-br from-[#0C1F0E]/70 to-[#1B4D2E]/70 rounded-md backdrop-blur shadow-lg"></div>
          ))}
        </div>
      </div>
    </div>
  </LazyMotion>
);

// Dynamic import with improved loading state
const DynamicGalleryContent = dynamic(() => import('./DynamicGalleryContent'), {
  loading: () => <GalleryPlaceholder />,
  ssr: false,
});

interface ClientDynamicGalleryLoaderProps {
  moments: Moment[];
}

export default function ClientDynamicGalleryLoader({
  moments,
}: ClientDynamicGalleryLoaderProps) {
  const [isClient, setIsClient] = useState(false);

  // Preload thumbnails to improve initial load experience
  const preloadThumbnails = () => {
    // Only preload the first few thumbnails for performance reasons
    const thumbnailsToPreload = moments.slice(0, 3);
    
    thumbnailsToPreload.forEach(moment => {
      const img = new Image();
      img.src = `https://res.cloudinary.com/dmq5tx0bd/video/upload/so_0,w_600,h_1080,c_fill,q_auto,f_jpg/v1/irani/${moment.cloudinaryId}`;
    });
  };

  useEffect(() => {
    setIsClient(true);
    
    // Only preload thumbnails in browser environment
    if (typeof window !== 'undefined') {
      // Use requestIdleCallback if available for better performance
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          preloadThumbnails();
        });
      } else {
        // Fallback to setTimeout if requestIdleCallback is not available
        setTimeout(preloadThumbnails, 200);
      }
    }
  }, []);

  if (!isClient) {
    return <GalleryPlaceholder />;
  }

  return <DynamicGalleryContent moments={moments} />;
} 