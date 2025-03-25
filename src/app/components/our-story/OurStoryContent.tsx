import Container from "../Container";
import ClientImageSection from "./client/ClientImageSection";
import ClientStoryHeader from "./client/ClientStoryHeader";
import ClientStatGrid from "./client/ClientStatGrid";
import ClientTextSection from "./client/ClientTextSection";

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
        <div className="space-y-12">
          {/* Header at top */}
          <ClientStoryHeader />
          
          {/* Main content area with grid */}
          <div className="grid grid-cols-1 3xl:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-16 items-center">
            {/* Text section on left for 3xl screens */}
            <div className="order-2 3xl:order-1">
              <ClientTextSection>
                <ClientStatGrid stats={stats} />
              </ClientTextSection>
            </div>
            
            {/* Image on right for 3xl screens, still optimized for LCP */}
            <div className="order-1 3xl:order-2">
              <ClientImageSection
                imageUrl="https://res.cloudinary.com/dmq5tx0bd/image/upload/f_webp,q_50,w_480/v1/irani-hero-imgs/about-us/gxy3jn0gxqgenyy3q9rg"
                alt="Irani Chiya Tea Experience"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OurStoryContent;
