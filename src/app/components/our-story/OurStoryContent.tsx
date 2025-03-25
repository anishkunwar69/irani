import { lazy, Suspense } from "react";
import Container from "../Container";

// Import the most critical component directly
import ClientStoryHeader from "./client/ClientStoryHeader";

// Lazy load less critical components
const ClientImageSection = lazy(() => import("./client/ClientImageSection"));
const ClientTextSection = lazy(() => import("./client/ClientTextSection"));
const ClientStatGrid = lazy(() => import("./client/ClientStatGrid"));

// Simple placeholder components for better loading experience
const ImagePlaceholder = () => (
  <div className="relative w-full aspect-[4/3] bg-[#C7962D]/10 rounded-lg animate-pulse"></div>
);

const TextPlaceholder = () => (
  <div className="space-y-4">
    <div className="h-4 w-full bg-white/5 rounded-md animate-pulse"></div>
    <div className="h-4 w-5/6 bg-white/5 rounded-md animate-pulse"></div>
    <div className="h-4 w-full bg-white/5 rounded-md animate-pulse"></div>
    <div className="grid grid-cols-2 gap-4 mt-6">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="h-16 bg-white/5 rounded-md animate-pulse"></div>
      ))}
    </div>
  </div>
);

function OurStoryContent() {
  const stats = [
    { iconName: "FaUsers", number: "5000+", text: "Daily Customers" },
    { iconName: "FaMugHot", number: "13", text: "Premium Locations" },
    { iconName: "FaLeaf", number: "12+", text: "Signature Blends" },
    { iconName: "FaCoffee", number: "50000", text: "Monthly Servings" },
  ];

  return (
    <div className="py-14 xs:py-16 sm:py-18 md:py-20">
      <Container>
        <div className="relative space-y-12 xs:space-y-16">
          <div className="relative">
            <ClientStoryHeader />

            <div className="grid grid-cols-1 3xl:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-16 items-center">
              <Suspense fallback={<ImagePlaceholder />}>
                <ClientImageSection
                  imageUrl="https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/irani-hero-imgs/about-us/gxy3jn0gxqgenyy3q9rg"
                  alt="Irani Chiya Tea Experience"
                />
              </Suspense>

              <Suspense fallback={<TextPlaceholder />}>
                <ClientTextSection>
                  <ClientStatGrid stats={stats} />
                </ClientTextSection>
              </Suspense>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OurStoryContent;
