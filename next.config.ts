import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Add WebP format support
    formats: ['image/webp', 'image/avif'],
    // Increase cache TTL for better performance
    minimumCacheTTL: 60,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Enable SWC minification
  swcMinify: true,
  // Disable React strict mode which causes double renders and can trigger hydration issues
  reactStrictMode: false,
  // Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Enable experimental optimizations
  experimental: {
    // Optimize CSS
    optimizeCss: true,
    // Optimize server components
    optimizeServerReact: true,
  },
  // Disable React StrictMode warnings in development
  webpack: (config, { dev }) => {
    if (dev) {
      // This helps minimize hydration warnings during development
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-dom$': 'react-dom/profiling',
      };
    }
    
    // Add module optimization for production
    if (!dev) {
      config.optimization.minimize = true;
    }
    
    return config;
  },
};

export default nextConfig;
