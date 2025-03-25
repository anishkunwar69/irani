import OurStoryContent from "../components/our-story/OurStoryContent";
import ClientOurStoryWrapper from "./ClientOurStoryWrapper";

function OurStory() {
  return (
    <section id="our-story" className="relative z-[2]">
      <ClientOurStoryWrapper>
        <OurStoryContent />
      </ClientOurStoryWrapper>
    </section>
  );
}

export default OurStory;
