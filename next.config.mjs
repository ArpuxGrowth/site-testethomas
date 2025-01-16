/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '54.91.50.25',
        },
      ],
    },
  };

export default nextConfig;
