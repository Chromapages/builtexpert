import * as React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    /** When set, used as the full document title (no `| BuiltExpert` suffix). */
    titleFull?: string;
    description?: string;
    canonical?: string;
    ogType?: string;
    ogImage?: string;
    schema?: object;
}

const DEFAULT_TITLE = "BuiltExpert | Digital Design Elevated";
const DEFAULT_DESCRIPTION =
    "BuiltExpert builds premium, high-converting websites and web apps for growth-focused businesses. From design to deployment, we deliver digital excellence.";
const SITE_URL = "https://builtexpert.com"; // Update when domain is confirmed

const DEFAULT_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "BuiltExpert",
    "image": `${SITE_URL}/og-image.jpg`,
    "@id": SITE_URL,
    "url": SITE_URL,
    "telephone": "",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressRegion": "UK",
        "postalCode": "",
        "addressCountry": "GB"
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
    },
    "sameAs": [
        "https://www.linkedin.com/company/builtexpert",
        "https://twitter.com/builtexpert"
    ]
};

export function SEO({
    title,
    titleFull,
    description = DEFAULT_DESCRIPTION,
    canonical,
    ogType = "website",
    ogImage = "/og-image.jpg", // Ensure this exists in public folder
    schema,
}: SEOProps) {
    const fullTitle =
        titleFull ?? (title ? `${title} | BuiltExpert` : DEFAULT_TITLE);
    const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
    const jsonLd = schema || DEFAULT_SCHEMA;

    return (
        <Helmet>
            {/* Basic Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={url} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${SITE_URL}${ogImage}`} />
            <meta property="og:url" content={url} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${SITE_URL}${ogImage}`} />

            {/* Schema.org Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>

            {/* Viewport & Charset are handled in index.html, but can be overridden here if needed */}
        </Helmet>
    );
}
