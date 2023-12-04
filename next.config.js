/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.gravatar.com", "images.rawpixel.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
