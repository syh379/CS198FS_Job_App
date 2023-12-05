/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.gravatar.com", "images.rawpixel.com"],
  },
  experimental: {
    serverActions: true,
    appDir: true,
  },
};

module.exports = nextConfig;
