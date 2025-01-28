/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure proper handling of client-side operations
  reactStrictMode: true,
  // If you're using app directory
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
