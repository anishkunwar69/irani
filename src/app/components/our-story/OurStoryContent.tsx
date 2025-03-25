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
    <div className="py-14">
      <Container>
        {/* Image first for faster LCP */}
        <ClientImageSection
          imageUrl="https://res.cloudinary.com/dmq5tx0bd/image/upload/f_webp,q_50,w_480/v1/irani-hero-imgs/about-us/gxy3jn0gxqgenyy3q9rg"
          alt="Irani Chiya Tea Experience"
        />
            
        {/* Content after image */}
        <div className="mt-8">
          <ClientStoryHeader />
          <ClientTextSection>
            <ClientStatGrid stats={stats} />
          </ClientTextSection>
        </div>
      </Container>
    </div>
  );
}

export default OurStoryContent;
