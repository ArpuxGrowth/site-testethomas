import createNextIntlPlugin from 'next-intl/plugin';
import { blogRedirects } from './data/blogRedirects.mjs';
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
// Cabeçalhos de segurança em todas as páginas
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
];

const nextConfig = {
    poweredByHeader: false,
    async headers() {
      // o simulador de slices do Prismic abre o site dentro de um iframe do Prismic
      return [{ source: "/((?!slice-simulator).*)", headers: securityHeaders }];
    },
    // Slugs antigos e posts duplicados do blog: 301 para a URL certa (lista em data/blogRedirects.mjs)
    async redirects() {
      return blogRedirects;
    },
    images: {
      remotePatterns: [
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
