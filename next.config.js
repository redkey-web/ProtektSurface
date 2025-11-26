/** @type {import('next').NextConfig} */
export default {
  // Disable Turbopack for now due to CSS parsing issues
  // Can re-enable once CSS is simplified
  // turbopack: false,  // This is not a valid option, using experimental instead

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
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
