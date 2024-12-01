/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turboMode: false,
    serverActions: true, // Enable server actions
  },
};

export default nextConfig;
