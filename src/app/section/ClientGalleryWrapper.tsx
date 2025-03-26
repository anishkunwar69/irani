"use client";
import { ReactNode, useEffect, useState } from "react";
import dynamic from "next/dynamic";

interface ClientGalleryWrapperProps {
  children: ReactNode;
}

// Simple static wrapper for initial render
const StaticWrapper = ({ children }: { children: ReactNode }) => (
  <section
    className="w-full bg-gradient-to-br from-[#1B4D2E] via-[#2D5A27] to-[#2E372E] relative overflow-hidden opacity-[0.99]"
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

  // Simplified background styles for better performance
  const bgStyles = {
    backgroundImage: "url('/pattern-light.png')",
    backgroundRepeat: "repeat",
    opacity: 0.05,
  };

  return (
    <>
      {isClient ? (
        <AnimatedSection
          className="w-full bg-gradient-to-br from-[#1B4D2E] via-[#2D5A27] to-[#2E372E] relative overflow-hidden"
          id="gallery"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0" style={bgStyles}></div>
            
            {/* Essential decorative elements only */}
            <div className="absolute -top-[10%] -right-[5%] w-[60vw] h-[60vw] xs:w-[500px] xs:h-[500px] bg-[#C7962D] rounded-full blur-[100px] opacity-5 xs:opacity-6 animate-pulse-slow"></div>
            <div className="absolute -bottom-[10%] -left-[5%] w-[50vw] h-[50vw] xs:w-[400px] xs:h-[400px] bg-[#1B4D2E] rounded-full blur-[80px] opacity-5 xs:opacity-6 animate-pulse-slow"></div>

            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C7962D]/20 xs:via-[#C7962D]/25 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C7962D]/20 xs:via-[#C7962D]/25 to-transparent"></div>
          </div>
          
          {children}
        </AnimatedSection>
      ) : (
        <StaticWrapper>{children}</StaticWrapper>
      )}
    </>
  );
}

export default ClientGalleryWrapper; 