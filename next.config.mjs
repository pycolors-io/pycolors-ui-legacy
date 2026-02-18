import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://pycolors.io/:path*',
        permanent: true, // 308
      },
    ];
  },
};

export default withMDX(config);
