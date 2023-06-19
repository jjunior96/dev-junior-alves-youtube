import withPlugins from 'next-compose-plugins';
import withPWAInit from 'next-pwa';

const isDev = process.env.NODE_ENV !== 'production';

const withPWA = withPWAInit({
  exclude: [
    ({ asset }) => {
      if (
        asset.name.startsWith('server/') ||
        asset.name.match(
          /^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/
        )
      ) {
        return true;
      }

      return isDev && !asset.name.startsWith('static/runtime/');
    }
  ]
});

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
    swcMinify: true
  }
};

export default withPlugins([withPWA], nextConfig);
