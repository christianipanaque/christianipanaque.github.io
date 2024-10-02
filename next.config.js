// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs",
  // Ensure that Next.js knows this is a static site
  trailingSlash: true,
  // Disable image optimization for static sites
  images: {
    unoptimized: true,
  },
  // Optional: Add basePath if your site will be hosted in a subdirectory
  // basePath: '/your-base-path',

  // Add any other configuration options here
};

module.exports = nextConfig;
