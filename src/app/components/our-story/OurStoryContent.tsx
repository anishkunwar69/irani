import { Suspense, lazy } from "react";
import Container from "../Container";
import ClientImageSection from "./client/ClientImageSection";
import ClientStoryHeader from "./client/ClientStoryHeader";

// Lazy load non-critical components
const ClientTextSection = lazy(() => import("./client/ClientTextSection"));
const ClientStatGrid = lazy(() => import("./client/ClientStatGrid"));

// Simple fallback with solid background
const FallbackDiv = () => (
  <div className="min-h-[300px] bg-[#1B4D2E]/20 rounded-lg animate-pulse"></div>
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-14 lg:gap-10 xl:gap-12 3xl:gap-16 items-center">
              {/* Prioritize image section */}
              <ClientImageSection
                imageUrl="https://res.cloudinary.com/dmq5tx0bd/image/upload/v1772180311/irani/Whisk_d29b85f5429efa485554bd5422f7ee0cdr_c5uurq.png"
                alt="Irani Chiya Tea Experience"
              />

              {/* Defer text content loading */}
              <Suspense fallback={<FallbackDiv />}>
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
