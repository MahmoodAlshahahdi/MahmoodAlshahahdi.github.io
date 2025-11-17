/**
 * Next.js static export configuration
 * `output: 'export'` tells Next to produce a static export via `next export`.
 * `trailingSlash: true` makes routing compatible with static hosting.
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig;
