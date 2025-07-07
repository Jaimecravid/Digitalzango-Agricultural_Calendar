/** @type {import('next').NextConfig} */
const nextConfig = {
  // Essential for Netlify deployment
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: true,
  
  // Image optimization for both local and Netlify
  images: {
    domains: ['lh3.googleusercontent.com'],
    deviceSizes: [360, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60,
    formats: ['image/webp'],
    // Conditional optimization based on environment
    unoptimized: process.env.NODE_ENV === 'production'
  },
  
  // Performance optimizations
  experimental: {
    optimizeCss: true,
  },
  
  // Webpack configuration for both environments
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    // Bundle analyzer for local development
    if (dev && process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          openAnalyzer: true,
        })
      );
    }
    
    return config;
  },
  
  // Environment-specific settings
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

module.exports = nextConfig;
