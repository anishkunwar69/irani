/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable React strict mode to avoid double rendering which can worsen hydration issues
  reactStrictMode: false,
  
  // Transpile leaflet and react-leaflet for proper SSR compatibility
  transpilePackages: ['leaflet', 'react-leaflet'],
  
  // Disable server components for the entire application
  experimental: {
    serverComponentsExternalPackages: [],
  },
};

module.exports = nextConfig; 