'use client';

import { useEffect, useState } from 'react';

interface DeferredScriptProps {
  src: string;
  strategy?: 'afterInteraction' | 'onVisible' | 'onIdle';
  id?: string;
  onLoad?: () => void;
}

export default function DeferredScript({
  src,
  strategy = 'afterInteraction',
  id,
  onLoad,
}: DeferredScriptProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) return;

    const loadScript = () => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      if (id) script.id = id;
      
      script.onload = () => {
        setLoaded(true);
        if (onLoad) onLoad();
      };
      
      document.body.appendChild(script);
    };

    switch (strategy) {
      case 'afterInteraction':
        // Load after user interaction
        const handleInteraction = () => {
          loadScript();
          ['mousedown', 'keydown', 'touchstart', 'scroll'].forEach((event) => {
            window.removeEventListener(event, handleInteraction);
          });
        };
        
        ['mousedown', 'keydown', 'touchstart', 'scroll'].forEach((event) => {
          window.addEventListener(event, handleInteraction, { once: true, passive: true });
        });
        
        // Fallback if no interaction after 10 seconds
        setTimeout(loadScript, 10000);
        break;
        
      case 'onVisible':
        // Load when element becomes visible
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            loadScript();
            observer.disconnect();
          }
        });
        
        // Observe document body as a fallback
        observer.observe(document.body);
        break;
        
      case 'onIdle':
        // Load when the browser is idle
        if ('requestIdleCallback' in window) {
          (window as any).requestIdleCallback(loadScript);
        } else {
          // Fallback for browsers that don't support requestIdleCallback
          setTimeout(loadScript, 2000);
        }
        break;
    }
    
    return () => {
      // Cleanup listeners if component unmounts before script loads
      ['mousedown', 'keydown', 'touchstart', 'scroll'].forEach((event) => {
        window.removeEventListener(event, loadScript);
      });
    };
  }, [src, strategy, id, onLoad, loaded]);

  return null; // This component doesn't render anything
} 