/**
 * Next.js static export configuration
 * `output: 'export'` tells Next to produce a static export (no server runtime).
 * `trailingSlash: true` makes routing compatible with static hosting.
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig;
