"use client";
import dynamic from "next/dynamic";
import { GiTeapot } from "react-icons/gi";
import Container from "../Container";

const moments = [
  {
    title: "Irani Chiya Vibes ❤️",
    description: "Experience the warm atmosphere of our tea house",
    cloudinaryId: "l7pvlinwkiljcvaav12s",
  },
  {
    title: "Anxi-Tea Or Irani Tea? 🫖😉",
    description: "Our signature brews to calm your day",
    cloudinaryId: "pmsleglfxh2um51yc7wg",
  },
  {
    title: "TU Cricket Team in Irani Chiya 🏏☕️",
    description: "Where champions come to unwind",
    cloudinaryId: "xikzfycxwhhoo4chdj8o",
  },
  {
    title: "Normal day in Irani ❤️🫖",
    description: "Everyday moments of joy and connection",
    cloudinaryId: "r6wskgrjvl82iu7mij2m",
  },
  {
    title: "Chiya Moments! 🫖❤️",
    description: "Creating memories one cup at a time",
    cloudinaryId: "pcxjz5ohzhpj4vo2otmo",
  },
];

// Define the header component outside of the dynamic import
function GalleryHeader() {
  return (
    <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-14 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(400px,90vw)] h-[min(400px,90vw)] bg-[#C7962D] rounded-full blur-[min(130px,14vw)] opacity-[0.12] sm:opacity-[0.1]"></div>
      <div className="relative">
        <h2 className="text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#C7962D] font-quicksand mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 inline-flex items-center gap-1 sm:gap-2 md:gap-3 justify-center">
          <GiTeapot className="text-lg sm:text-xl md:text-2xl lg:text-3xl animate-bounce" />
          Our Moments
          <GiTeapot className="text-lg sm:text-xl md:text-2xl lg:text-3xl animate-bounce" />
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-lora text-white/90 leading-tight max-w-[95%] sm:max-w-[90%] mx-auto px-2 sm:px-4 md:px-0">
          Experience The{" "}
          <span className="text-[#C7962D] italic">Magic</span> Inside
        </h3>
      </div>
    </div>
  );
}

// Create loading placeholder for gallery
function GalleryPlaceholder() {
  return (
    <div className="w-full h-[calc(100vw*0.95)] sm:h-[calc(100vw*0.75)] md:h-[calc(100vw*0.65)] lg:h-[calc(100vw*0.55)] xl:h-[calc(100vw*0.45)] 2xl:h-[calc(100vw*0.4)] max-h-[80vh] relative mb-7 sm:mb-10 md:mb-10 lg:mb-10 xl:mb-20 gallery-5xl:mb-36 flex items-center justify-center bg-white/5">
      <div className="w-12 h-12 border-3 border-[#C7962D]/20 border-t-[#C7962D] rounded-full animate-spin"></div>
    </div>
  );
}

// Import the DynamicGalleryContent component with SSR disabled
const DynamicGalleryContent = dynamic(
  () => import('./DynamicGalleryContent'),
  { 
    ssr: false,
    loading: () => <GalleryPlaceholder />
  }
);

function GalleryContent() {
  return (
    <div className="py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 gallery-5xl:pb-0">
      <Container isGallery={true}>
        <div className="flex flex-col">
          <GalleryHeader />
          <DynamicGalleryContent moments={moments} />
        </div>
      </Container>
    </div>
  );
}

export default GalleryContent;
