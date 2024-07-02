/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'serma-bucket.s3.us-east-1.amazonaws.com',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
