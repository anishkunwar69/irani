import { Metadata } from "next";
import Footer from "../components/Footer";
import NavbarSimple from "../components/NavbarSimple";
import JointVentureContent from "./JointVentureContent";

// Add viewport export
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Badda's Chiya | Authentic Nepali & Irani Tea Joint Venture",
  description:
    "Experience our unique fusion of authentic Irani tea and Nepali khaja at Badda's Chiya. Located in Ghattekulo, Kathmandu, our joint venture brings traditional tea culture with a modern twist.",
  keywords: [
    "Badda's Chiya",
    "joint venture",
    "Nepali tea",
    "Irani tea",
    "Kathmandu cafe",
    "authentic tea",
    "tea house",
    "Ghattekulo",
  ],
  alternates: {
    canonical: "/joint-venture",
  },
  openGraph: {
    title: "Badda's Chiya | Tea Joint Venture in Kathmandu",
    description:
      "Where Irani tea tradition meets authentic Nepali flavor. Visit our unique tea joint venture in Ghattekulo, Kathmandu.",
    url: "/joint-venture",
    images: [
      {
        url: "/jv.jpg",
        width: 1200,
        height: 630,
        alt: "Badda's Chiya Interior",
      },
    ],
  },
  twitter: {
    title: "Badda's Chiya | Tea Joint Venture in Kathmandu",
    description:
      "Where Irani tea tradition meets authentic Nepali flavor. Visit our unique tea joint venture in Ghattekulo, Kathmandu.",
    images: ["/jv.jpg"],
  },
};

export default function JointVenturePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-[#0C1F0E] via-[#1B4D2E] to-[#2E372E]">
      <NavbarSimple activeItem="Badda's Chiya" />
      <JointVentureContent />
      <Footer />
    </main>
  );
}
