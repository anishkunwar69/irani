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
        <div className="relative space-y-12 xs:space-y-16">
          <div className="relative">
            <ClientStoryHeader />

            <div className="grid grid-cols-1 3xl:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-16 items-center">
              <ClientImageSection
                imageUrl="https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/irani-hero-imgs/about-us/gxy3jn0gxqgenyy3q9rg"
                alt="Irani Chiya Tea Experience"
              />

              <ClientTextSection>
                <ClientStatGrid stats={stats} />
              </ClientTextSection>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OurStoryContent;
