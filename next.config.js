/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.clerk.com", "www.gravatar.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
