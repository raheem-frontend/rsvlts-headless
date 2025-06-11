import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['www.rsvlts.com', 'cdn.shopify.com', 'images.unsplash.com'], 
  },
};

export default nextConfig;
