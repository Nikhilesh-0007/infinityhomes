import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  imageUrl?: string;
  isHomePage?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl = 'https://infinityhomeshyderabad.com',
  imageUrl = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
  isHomePage = false,
}) => {
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Infinity Homes',
    image: imageUrl,
    telephone: '+91-8008897785',
    email: 'info@infinityhomeshyderabad.com',
    url: canonicalUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'H.No. 123 & 124, 2nd Floor, Prashanth Nagar Colony, Bandlaguda Jagir',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500086',
      addressCountry: 'IN',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '17:00',
      },
    ],
    priceRange: '₹32 Lakh - ₹3.8 Cr',
    areaServed: 'Hyderabad, Telangana',
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter Card */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />

      {/* JSON-LD Schema.org Structured Data */}
      {isHomePage && (
        <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>
      )}
    </Helmet>
  );
};
