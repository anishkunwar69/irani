import Footer from "./components/Footer";
import FindUs from "./section/FindUs";
import FoundersWord from "./section/FoundersWord";
import Gallery from "./section/Gallery";
import Hero from "./section/Hero";
import OurStory from "./section/OurStory";
import Testimonials from "./section/Testimonials";

import { Metadata } from "next";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Irani Chiya | Authentic Irani Tea Experience in Nepal",
  description:
    "Discover Irani Chiya, where tradition meets innovation. Premium tea blends, authentic recipes, and a cozy atmosphere in the heart of Kathmandu.",
  keywords: [
    "Irani Chiya",
    "premium tea",
    "tea house",
    "Kathmandu tea",
    "authentic Irani tea",
    "tea culture",
    "tea experience",
    "Nepal",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Irani Chiya | Authentic Tea Experience in Nepal",
    description:
      "Where tradition meets innovation. Experience authentic Irani tea in the heart of Kathmandu.",
    url: "/",
    images: [
      {
        url: "/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Irani Chiya Experience",
      },
    ],
  },
  twitter: {
    title: "Irani Chiya | Authentic Tea Experience in Nepal",
    description:
      "Where tradition meets innovation. Experience authentic Irani tea in the heart of Kathmandu.",
    images: ["/hero-1.jpg"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <OurStory />
      <Gallery />
      <Testimonials />
      <FoundersWord />
      <FindUs />
      <Footer />
    </main>
  );
}
