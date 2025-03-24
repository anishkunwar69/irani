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
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable React strict mode which causes double renders and can trigger hydration issues
  reactStrictMode: false,
  // Disable React StrictMode warnings in development
  webpack: (config, { dev }) => {
    if (dev) {
      // This helps minimize hydration warnings during development
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-dom$': 'react-dom/profiling',
      };
    }
    return config;
  },
};

export default nextConfig;
