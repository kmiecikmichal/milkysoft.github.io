/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/milkysoft.github.io',
  assetPrefix: '/milkysoft.github.io/',
  // Disable client-side navigation for static export
  experimental: {
    disableOptimizedLoading: true,
  },
};

module.exports = nextConfig; 