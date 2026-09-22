import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Legacy Nextra URLs (`/en/...`) and older aliases now live under `/docs`.
      { source: '/en', destination: '/docs', permanent: true },
      { source: '/en/:path*', destination: '/docs/:path*', permanent: true },
      { source: '/documentation', destination: '/docs', permanent: true },
      { source: '/documentation/:path*', destination: '/docs/:path*', permanent: true },
    ];
  },
};

export default withMDX(config);
