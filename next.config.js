/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: ["assets.coingecko.com"],
  },
};

module.exports = nextConfig;
