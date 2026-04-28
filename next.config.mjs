/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  allowedDevOrigins: ['192.168.236.120', '192.168.236.101', '192.168.236.135', '192.168.0.102'],
}

export default nextConfig
