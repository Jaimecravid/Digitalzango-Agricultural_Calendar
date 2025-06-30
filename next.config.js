/** @type {import('next').NextConfig} */
const nextConfig = {
  // Solution 1: Enable SWC Minification (reduces compile time)
  swcMinify: true,
  
  // Solution 2: Enable concurrent features
  experimental: {
    // Optimize for App Router performance
    appDir: true,
    serverComponentsExternalPackages: ['react-big-calendar'],
  },
  
  // Solution 3: Optimize webpack for development
  webpack: (config, { dev }) => {
    if (dev) {
      // Reduce memory usage in development
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
  
  // Optimize bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  }
}

module.exports = nextConfig
