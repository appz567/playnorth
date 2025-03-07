import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "casino.api.pikakasino.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cloudinary.pikakasino.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-pika-production-cdn-bucket.s3.eu-central-1.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
