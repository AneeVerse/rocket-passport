import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  transpilePackages: ['@sanity/ui', '@sanity/icons'],
  // Suppress the workspace root warning
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
