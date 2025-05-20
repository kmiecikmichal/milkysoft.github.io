/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/milkysoft.github.io',
  assetPrefix: '/milkysoft.github.io/',
};

module.exports = nextConfig; 