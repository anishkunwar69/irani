import { Suspense, lazy } from "react";
import Container from "../Container";
import ClientImageSection from "./client/ClientImageSection";
import ClientStoryHeader from "./client/ClientStoryHeader";

// Lazy load components that aren't critical for LCP
const ClientStatGrid = lazy(() => import("./client/ClientStatGrid"));
const ClientTextSection = lazy(() => import("./client/ClientTextSection"));

// Main content component focused on fastest LCP
function MainContent() {
  return (
    <div className="relative">
      <ClientStoryHeader />
      
      <div className="grid grid-cols-1 3xl:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-16 items-center">
        <ClientImageSection
          imageUrl="https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/irani-hero-imgs/about-us/gxy3jn0gxqgenyy3q9rg"
          alt="Irani Chiya Tea Experience"
        />
        
        <div className="order-2 3xl:order-1 min-h-[200px]">
          <Suspense fallback={<LoadingPlaceholder />}>
            <LazyContent />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

// Simple loading placeholder for text content
function LoadingPlaceholder() {
  return (
    <div className="space-y-3 animate-pulse">
      <div className="h-4 bg-white/10 rounded w-3/4"></div>
      <div className="h-4 bg-white/10 rounded w-1/2"></div>
      <div className="h-4 bg-white/10 rounded w-5/6"></div>
    </div>
  );
}

// Content that can be loaded after initial render
function LazyContent() {
  const stats = [
    { iconName: "FaUsers", number: "5000+", text: "Daily Customers" },
    { iconName: "FaMugHot", number: "13", text: "Premium Locations" },
    { iconName: "FaLeaf", number: "12+", text: "Signature Blends" },
    { iconName: "FaCoffee", number: "50000", text: "Monthly Servings" },
  ];

  return (
    <ClientTextSection>
      <ClientStatGrid stats={stats} />
    </ClientTextSection>
  );
}

function OurStoryContent() {
  return (
    <div className="py-14 xs:py-16 sm:py-18 md:py-20">
      <Container>
        <div className="relative space-y-12 xs:space-y-16">
          <MainContent />
        </div>
      </Container>
    </div>
  );
}

export default OurStoryContent;
