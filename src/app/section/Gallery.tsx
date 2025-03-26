import GalleryContent from "../components/gallery/GalleryContent";
import ClientGalleryWrapper from "./ClientGalleryWrapper";
import { Suspense } from "react";

// Simple loading fallback with minimal styles to show immediately
const GalleryFallback = () => (
  <section 
    id="gallery" 
    className="w-full min-h-[500px] bg-[#29552a] relative overflow-hidden"
  >
    <div className="flex items-center justify-center h-full">
      <div className="w-12 h-12 border-3 border-[#C7962D]/20 border-t-[#C7962D] rounded-full animate-spin"></div>
    </div>
  </section>
);

function Gallery() {
  return (
    <Suspense fallback={<GalleryFallback />}>
      <ClientGalleryWrapper>
        <GalleryContent />
      </ClientGalleryWrapper>
    </Suspense>
  );
}

export default Gallery;
