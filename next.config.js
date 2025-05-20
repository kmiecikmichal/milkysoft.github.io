/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove basePath and assetPrefix for now to fix redirect loop
  experimental: {
    disableOptimizedLoading: true,
  },
};

module.exports = nextConfig; 