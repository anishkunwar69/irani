import GalleryContent from "../components/gallery/GalleryContent";
import ClientGalleryWrapper from "./ClientGalleryWrapper";

function Gallery() {
  return (
    <section id="gallery" className="relative" style={{ zIndex: 1 }}>
      <ClientGalleryWrapper>
        <GalleryContent />
      </ClientGalleryWrapper>
    </section>
  );
}

export default Gallery;
