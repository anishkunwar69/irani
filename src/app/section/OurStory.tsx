import OurStoryContent from "../components/our-story/OurStoryContent";
import ClientOurStoryWrapper from "./ClientOurStoryWrapper";
import { Suspense } from "react";

// Simple fallback for the entire section
const OurStoryFallback = () => (
  <section 
    id="our-story" 
    className="w-full min-h-[500px] overflow-hidden bg-[#1B4D2E] relative"
  >
    <div className="animate-pulse flex flex-col items-center justify-center p-10 space-y-8">
      <div className="h-6 w-32 bg-[#C7962D]/20 rounded"></div>
      <div className="h-12 w-64 bg-white/10 rounded"></div>
    </div>
  </section>
);

function OurStory() {
  return (
    <Suspense fallback={<OurStoryFallback />}>
      <ClientOurStoryWrapper>
        <OurStoryContent />
      </ClientOurStoryWrapper>
    </Suspense>
  );
}

export default OurStory;
