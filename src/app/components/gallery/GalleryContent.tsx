import { Suspense, lazy } from "react";
import Container from "../Container";
import ClientGalleryHeader from "./ClientGalleryHeader";
import { Moment } from "./types";
import { memo } from "react";

// Lazy load the gallery loader component to improve initial render time
const ClientDynamicGalleryLoader = lazy(() => import("./ClientDynamicGalleryLoader"));

// Simple placeholder while gallery loads
const GalleryLoadingPlaceholder = () => (
  <div className="w-full h-[calc(100vw*0.95)] sm:h-[calc(100vw*0.75)] md:h-[calc(100vw*0.65)] lg:h-[calc(100vw*0.55)] xl:h-[calc(100vw*0.45)] 2xl:h-[calc(100vw*0.4)] max-h-[80vh] relative mb-7 sm:mb-10 md:mb-10 lg:mb-10 xl:mb-20 gallery-5xl:mb-36 flex items-center justify-center bg-[#29552a]">
    <div className="w-12 h-12 border-3 border-[#C7962D]/20 border-t-[#C7962D] rounded-full animate-spin"></div>
  </div>
);

// Predefine the moments data to avoid calculating during render
const moments: Moment[] = [
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

function GalleryContent() {
  return (
    <div className="py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 gallery-5xl:pb-0 bg-[#29552a]">
      <Container isGallery={true}>
        <div className="flex flex-col">
          {/* Header loads immediately */}
          <ClientGalleryHeader />
          
          {/* Gallery content loads after initial render */}
          <Suspense fallback={<GalleryLoadingPlaceholder />}>
            <ClientDynamicGalleryLoader moments={moments} />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}

export default memo(GalleryContent);
