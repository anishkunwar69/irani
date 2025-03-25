import React from 'react';

export default function CriticalCSS() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          /* Critical CSS to improve First Contentful Paint */
          body {
            margin: 0;
            padding: 0;
            font-family: var(--font-geist-sans), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            background-color: #1B4D2E;
            color: #fff;
            overflow-x: hidden;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          .page-transition {
            animation: fadeIn 0.3s ease-in-out;
          }
          
          /* Optimize image placeholders */
          .image-placeholder {
            background-color: #1B4D2E;
            position: relative;
            overflow: hidden;
          }
          
          .image-placeholder::before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: -100%;
            width: 50%;
            height: 100%;
            background: linear-gradient(
              to right,
              transparent 0%,
              rgba(255, 255, 255, 0.15) 50%,
              transparent 100%
            );
            animation: shimmer 1.5s infinite;
          }
          
          @keyframes shimmer {
            100% {
              left: 150%;
            }
          }
          
          /* Hide content flash */
          .no-js {
            display: none;
          }
          
          /* Keep the below styles minimal, only for the first paint */
        `,
      }}
    />
  );
} 