/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable the app directory structure
    appDir: true,
  },
  // Enable static image optimization
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
  // Compile time environment variables
  env: {
    CUSTOM_KEY: 'my-value',
  },
  // Webpack configuration for SVG imports
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  // Performance optimizations
  swcMinify: true,
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Custom headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  // Redirects for SEO and user experience
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contacts',
        permanent: true,
      },
    ];
  },
  // Enable TypeScript and ESLint
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;