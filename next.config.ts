
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "eastboundgroup.com",
          },
        ],
        destination: "https://www.eastboundgroup.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
