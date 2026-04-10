import * as React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "business.business";
}

const DEFAULT_TITLE = "BuiltExpert | High-Converting Lead Systems for HVAC Contractors";
const DEFAULT_DESCRIPTION =
  "We build powerful lead-generation systems and Local SEO for HVAC contractors. Get more calls, more bookings, more revenue with a system built for the trades.";
const SITE_URL = "https://builtexpert.com";
const DEFAULT_OG_IMAGE = "/images/og-home.png";

export function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonicalPath = "",
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
}: SEOProps) {
  const fullTitle = title === DEFAULT_TITLE ? title : `${title} | BuiltExpert`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const absoluteOgImage = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={absoluteOgImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />

      {/* Structured Data (Schema.org) for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "BuiltExpert",
          "url": SITE_URL,
          "logo": `${SITE_URL}/logo.png`,
          "description": DEFAULT_DESCRIPTION,
          "sameAs": [
            "https://twitter.com/builtexpert",
            "https://linkedin.com/company/builtexpert",
          ],
        })}
      </script>
    </Helmet>
  );
}
