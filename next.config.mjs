const isDev = process.env.NODE_ENV !== 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 1000,
  compiler: {
    removeConsole: !isDev
  },
  images: {
    formats: ['image/avif', 'image/webp']
  },
  experimental: {
    swcMinify: true,
    serverActions: true
  }
};

export default nextConfig;
