"use client";

import { ReactNode, useEffect, useState } from "react";
import dynamic from "next/dynamic";

interface ClientOurStoryWrapperProps {
  children: ReactNode;
}

// Simple placeholder before animation loads
const StaticSection = ({ children }: { children: ReactNode }) => (
  <section
    className="w-full overflow-hidden bg-[#1B4D2E] relative opacity-[0.99]"
    id="our-story"
  >
    {children}
  </section>
);

// Dynamically import animation features 
const MotionSection = dynamic(() => 
  import('framer-motion').then(mod => {
    const { LazyMotion, domAnimation, m } = mod;
    
    return {
      default: ({ children, ...props }: any) => (
        <LazyMotion features={domAnimation} strict>
          <m.section
            initial={{ opacity: 0.95 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            {...props}
          >
            {children}
          </m.section>
        </LazyMotion>
      )
    };
  }),
  { ssr: false, loading: () => <StaticSection><div className="animate-pulse">Loading...</div></StaticSection> } 
);

function ClientOurStoryWrapper({ children }: ClientOurStoryWrapperProps) {
  // Use state to track if this component is in the visible viewport
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <MotionSection
          className="w-full overflow-hidden bg-[#1B4D2E] relative"
          id="our-story"
        >
          {/* All complex background elements removed */}
          {children}
        </MotionSection>
      ) : (
        <StaticSection>{children}</StaticSection>
      )}
    </>
  );
}

export default ClientOurStoryWrapper; 