/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'festive-coyote-547.convex.cloud',
      },
      {
        protocol: 'https',
        hostname: 'gateway.pinata.cloud/ipfs'
      }
    ],
  },
};

export default nextConfig;