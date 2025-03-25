import { Suspense, lazy } from "react";

// Lightweight wrapper that's always imported
import ClientOurStoryWrapper from "./ClientOurStoryWrapper";

// Lazy load the actual content component as it's below the fold
const OurStoryContent = lazy(() => import("../components/our-story/OurStoryContent"));

// Loading placeholder that's extremely lightweight
function OurStoryLoadingPlaceholder() {
  return (
    <div className="w-full py-8 md:py-12 space-y-4">
      <div className="h-8 w-1/3 bg-[#C7962D]/10 rounded-md animate-pulse"></div>
      <div className="h-4 w-full bg-white/5 rounded-md animate-pulse"></div>
      <div className="h-4 w-5/6 bg-white/5 rounded-md animate-pulse"></div>
      <div className="h-4 w-full bg-white/5 rounded-md animate-pulse"></div>
    </div>
  );
}

function OurStory() {
  return (
    <ClientOurStoryWrapper>
      {/* Using Suspense to defer loading of heavy content */}
      <Suspense fallback={<OurStoryLoadingPlaceholder />}>
        <OurStoryContent />
      </Suspense>
    </ClientOurStoryWrapper>
  );
}

export default OurStory;
