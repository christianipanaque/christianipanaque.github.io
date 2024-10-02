// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: ".", // This tells Next.js to use relative paths for assets
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
