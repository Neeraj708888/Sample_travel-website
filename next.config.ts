import type { NextConfig } from "next";
import redirectData from "./redirect.json"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "anantahospitality.com" }],
        destination: "https://www.anantahospitality.com/:path*",
        permanent: true,
      },
      ...redirectData.map((item) => ({
        source: item.source,
        destination: item.destination,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;