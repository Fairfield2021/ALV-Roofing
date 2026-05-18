import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**.cloudinary.com' }],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
}

export default nextConfig
