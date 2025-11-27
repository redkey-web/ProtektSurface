/** @type {import('next').NextConfig} */
export default {
  // Auto-detect platform and adjust output mode
  // Replit needs standalone output, Vercel uses default
  output: process.env.REPLIT ? 'standalone' : undefined,

  // Image optimization: disabled on Replit (no optimizer), enabled on Vercel
  images: {
    unoptimized: !!process.env.REPLIT,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },

  // Allow Replit dev origins for CORS
  allowedDevOrigins: process.env.REPLIT
    ? ['*.replit.dev', 'https://*.replit.dev']
    : undefined,

  // Platform detection for debugging
  env: {
    NEXT_PUBLIC_DEPLOYMENT: process.env.VERCEL
      ? 'vercel'
      : process.env.REPLIT
        ? 'replit'
        : 'local',
  },

  // Redirects for legacy URLs
  async redirects() {
    return [
      // Legacy /services/* redirects
      {
        source: '/services/residential-window-tinting',
        destination: '/residential-window-tinting',
        permanent: true,
      },
      {
        source: '/services/automotive-window-tinting',
        destination: '/automotive-window-tinting',
        permanent: true,
      },
      {
        source: '/services/commercial-window-tinting',
        destination: '/commercial-window-tinting',
        permanent: true,
      },
      // Legacy /film-types/* redirects
      {
        source: '/film-types/ceramic-window-tint',
        destination: '/ceramic-window-tint',
        permanent: true,
      },
      {
        source: '/film-types/frosted-decorative-window-film',
        destination: '/frosted-decorative-window-film',
        permanent: true,
      },
      {
        source: '/film-types/marble-protection-film',
        destination: '/marble-protection-film',
        permanent: true,
      },
      // Old URL patterns
      {
        source: '/residential-window-tint',
        destination: '/residential-window-tinting',
        permanent: true,
      },
      {
        source: '/commercial-window-tint',
        destination: '/commercial-window-tinting',
        permanent: true,
      },
      {
        source: '/decorative-frosted-film',
        destination: '/frosted-decorative-window-film',
        permanent: true,
      },
      {
        source: '/marble-protection',
        destination: '/marble-protection-film',
        permanent: true,
      },
    ];
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};
