"use client";
import { ReactNode, useEffect, useState } from "react";
import dynamic from "next/dynamic";

interface ClientGalleryWrapperProps {
  children: ReactNode;
}

// Simple static wrapper for initial render
const StaticWrapper = ({ children }: { children: ReactNode }) => (
  <section
    className="w-full bg-[#29552a] relative overflow-hidden opacity-[0.99]"
    id="gallery"
  >
    {children}
  </section>
);

// Dynamically import animation features with lower priority
const AnimatedSection = dynamic(
  () => import('framer-motion').then(mod => {
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
  {
    ssr: false,
    loading: () => <StaticWrapper><div className="w-full h-full"></div></StaticWrapper>
  }
);

function ClientGalleryWrapper({ children }: ClientGalleryWrapperProps) {
  const [isClient, setIsClient] = useState(false);
  
  // Defer non-critical animations until after hydration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClient(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isClient ? (
        <AnimatedSection
          className="w-full bg-[#29552a] relative overflow-hidden"
          id="gallery"
        >
          {/* Removed all decorative elements for better performance */}
          {children}
        </AnimatedSection>
      ) : (
        <StaticWrapper>{children}</StaticWrapper>
      )}
    </>
  );
}

export default ClientGalleryWrapper; 