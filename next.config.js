// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

if (process.env.NODE_ENV === "production") {
  // Production-specific settings
  Object.assign(nextConfig, {
    output: "export",
    distDir: "docs",
    assetPrefix: ".", // This tells Next.js to use relative paths for assets
  });
}

module.exports = nextConfig;
