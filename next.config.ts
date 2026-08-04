import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
};

export default nextConfig;