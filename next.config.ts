import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    unoptimized: true, // Close Image Optimization API since export mode does not support it
  },
};

export default nextConfig;
