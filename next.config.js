/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/milkysoft.github.io',
  assetPrefix: '/milkysoft.github.io',
  distDir: 'out',
};

module.exports = nextConfig; 