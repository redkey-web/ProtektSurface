/**
 * JSON-LD Schema generators for SEO
 * @see https://schema.org
 * @see https://developers.google.com/search/docs/appearance/structured-data
 */

// Business constants - centralized for consistency
const BUSINESS = {
  name: 'ProtektSurface',
  legalName: 'Protekt Surface Solutions',
  url: 'https://protektsurface.com.au',
  logo: 'https://protektsurface.com.au/images/brand/logo.webp',
  phone: '+61286062842',
  phoneDisplay: '(02) 8606 2842',
  address: {
    street: '24 George Street',
    locality: 'Clyde',
    region: 'NSW',
    postalCode: '2142',
    country: 'AU',
  },
  geo: {
    latitude: -33.8327,
    longitude: 151.0119,
  },
  priceRange: '$$',
  openingHours: ['Mo-Fr 07:00-17:00'],
  serviceArea: 'Greater Sydney, NSW',
};

export type LocalBusinessSchema = {
  '@context': string;
  '@type': string;
  name: string;
  legalName: string;
  url: string;
  logo: string;
  image: string;
  telephone: string;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    '@type': string;
    latitude: number;
    longitude: number;
  };
  priceRange: string;
  openingHoursSpecification: Array<{
    '@type': string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  areaServed: {
    '@type': string;
    name: string;
  };
  sameAs: string[];
};

/**
 * LocalBusiness schema for home and contact pages
 */
export function generateLocalBusinessSchema(pageUrl?: string): LocalBusinessSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: pageUrl || BUSINESS.url,
    logo: BUSINESS.logo,
    image: `${BUSINESS.url}/images/og-image.png`,
    telephone: BUSINESS.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    priceRange: BUSINESS.priceRange,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '17:00',
      },
    ],
    areaServed: {
      '@type': 'Place',
      name: BUSINESS.serviceArea,
    },
    sameAs: [
      'https://www.facebook.com/protektsurface',
      'https://www.instagram.com/protektsurface',
    ],
  };
}

export type ServiceSchema = {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  image?: string;
  provider: {
    '@type': string;
    name: string;
    url: string;
    telephone: string;
    address: {
      '@type': string;
      addressLocality: string;
      addressRegion: string;
      addressCountry: string;
    };
  };
  areaServed: {
    '@type': string;
    name: string;
  };
  serviceType: string;
};

/**
 * Service schema for service pages (residential, commercial, automotive)
 */
export function generateServiceSchema(params: {
  name: string;
  description: string;
  slug: string;
  serviceType: string;
  image?: string;
}): ServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    url: `${BUSINESS.url}/${params.slug}`,
    image: params.image,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS.name,
      url: BUSINESS.url,
      telephone: BUSINESS.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: BUSINESS.address.locality,
        addressRegion: BUSINESS.address.region,
        addressCountry: BUSINESS.address.country,
      },
    },
    areaServed: {
      '@type': 'Place',
      name: BUSINESS.serviceArea,
    },
    serviceType: params.serviceType,
  };
}

export type ProductSchema = {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  image?: string;
  brand: {
    '@type': string;
    name: string;
  };
  category: string;
  offers: {
    '@type': string;
    availability: string;
    priceCurrency: string;
    seller: {
      '@type': string;
      name: string;
      url: string;
    };
  };
};

/**
 * Product schema for film type pages
 */
export function generateProductSchema(params: {
  name: string;
  description: string;
  slug: string;
  category: string;
  image?: string;
}): ProductSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: params.name,
    description: params.description,
    url: `${BUSINESS.url}/${params.slug}`,
    image: params.image,
    brand: {
      '@type': 'Brand',
      name: BUSINESS.name,
    },
    category: params.category,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'AUD',
      seller: {
        '@type': 'Organization',
        name: BUSINESS.name,
        url: BUSINESS.url,
      },
    },
  };
}

export type ArticleSchema = {
  '@context': string;
  '@type': string;
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: {
    '@type': string;
    name: string;
    url?: string;
  };
  publisher: {
    '@type': string;
    name: string;
    url: string;
    logo: {
      '@type': string;
      url: string;
    };
  };
  mainEntityOfPage: {
    '@type': string;
    '@id': string;
  };
};

/**
 * Article schema for blog posts
 */
export function generateArticleSchema(params: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  authorUrl?: string;
  image?: string;
}): ArticleSchema {
  const url = `${BUSINESS.url}/blog/${params.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    url,
    image: params.image || `${BUSINESS.url}/images/og-image.png`,
    datePublished: params.datePublished,
    dateModified: params.dateModified || params.datePublished,
    author: {
      '@type': 'Person',
      name: params.author,
      url: params.authorUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS.name,
      url: BUSINESS.url,
      logo: {
        '@type': 'ImageObject',
        url: BUSINESS.logo,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

export type ServiceAreaSchema = {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  telephone: string;
  address: {
    '@type': string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  areaServed: {
    '@type': string;
    name: string;
    postalCode: string;
  };
  hasOfferCatalog: {
    '@type': string;
    name: string;
    itemListElement: Array<{
      '@type': string;
      itemOffered: {
        '@type': string;
        name: string;
      };
    }>;
  };
};

/**
 * Service area schema for suburb pages
 */
export function generateServiceAreaSchema(params: {
  suburb: string;
  postcode: string;
  services: string[];
}): ServiceAreaSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${BUSINESS.name} - ${params.suburb}`,
    url: `${BUSINESS.url}/service-areas/${params.suburb.toLowerCase().replace(/\s+/g, '-')}`,
    telephone: BUSINESS.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: params.suburb,
      addressRegion: 'NSW',
      postalCode: params.postcode,
      addressCountry: 'AU',
    },
    areaServed: {
      '@type': 'Place',
      name: params.suburb,
      postalCode: params.postcode,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Window Tinting Services',
      itemListElement: params.services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
        },
      })),
    },
  };
}

/**
 * Helper component to render JSON-LD script tag
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Re-export business constants for use in metadata
export { BUSINESS };
