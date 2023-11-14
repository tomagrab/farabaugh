/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow images from clerk
  images: {
    domains: ["img.clerk.com"],
  },
};

module.exports = nextConfig;
