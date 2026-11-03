import createNextIntlPlugin from 'next-intl/plugin';
import { blogRedirects } from './data/blogRedirects.mjs';
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Slugs antigos e posts duplicados do blog: 301 para a URL certa (lista em data/blogRedirects.mjs)
    async redirects() {
      return blogRedirects;
    },
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '54.91.50.25',
        },
        {
        protocol: 'https',
        hostname: 'images.prismic.io',
        port: '',
        pathname: '/**',  // permite qualquer subpath
      },
      ],
    },
  };

export default withNextIntl(nextConfig);
