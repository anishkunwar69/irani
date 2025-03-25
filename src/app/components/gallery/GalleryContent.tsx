import Container from "../Container";
import ClientGalleryHeader from "./ClientGalleryHeader";
import ClientDynamicGalleryLoader from "./ClientDynamicGalleryLoader";
import { Moment } from "./types";
import { memo } from "react";

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
    <div className="py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 gallery-5xl:pb-0">
      <Container isGallery={true}>
        <div className="flex flex-col">
          <ClientGalleryHeader />
          <ClientDynamicGalleryLoader moments={moments} />
        </div>
      </Container>
    </div>
  );
}

export default memo(GalleryContent);
