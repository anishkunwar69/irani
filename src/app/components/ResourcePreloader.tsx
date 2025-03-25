'use client';

import { useEffect } from 'react';

type Resource = {
  href: string;
  as: 'style' | 'script' | 'image' | 'font';
  type?: string;
  crossOrigin?: 'anonymous' | 'use-credentials';
  media?: string;
};

type ResourcePreloaderProps = {
  resources: Resource[];
};

export default function ResourcePreloader({ resources }: ResourcePreloaderProps) {
  useEffect(() => {
    const links: HTMLLinkElement[] = [];

    // Create and add preload links for all resources
    resources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      
      if (resource.type) {
        link.type = resource.type;
      }
      
      if (resource.crossOrigin) {
        link.crossOrigin = resource.crossOrigin;
      }
      
      if (resource.media) {
        link.media = resource.media;
      }
      
      document.head.appendChild(link);
      links.push(link);
    });

    // Clean up the preload links when component unmounts
    return () => {
      links.forEach((link) => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, [resources]);

  return null; // This component doesn't render anything
} 