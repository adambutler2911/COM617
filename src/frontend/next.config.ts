import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        serverActions: {
          allowedOrigins: ['my-forwarded-host.com'],
        },
      },
};

export default nextConfig;
