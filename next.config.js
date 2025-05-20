/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/milkysoft.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/milkysoft.github.io' : '',
};

module.exports = nextConfig; 