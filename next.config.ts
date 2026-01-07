import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* https://nextjs.org/docs/pages/guides/static-exports */
  // output: 'export',
    images: {
    unoptimized: true, // Close Image Optimization API since export mode does not support it
  },
};

export default nextConfig;
