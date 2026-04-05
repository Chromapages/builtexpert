import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "z5yntv5o",
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2024-03-27",
});

// Write client for server-side mutations
export const writeClient = createClient({
  projectId: "z5yntv5o",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-03-27",
  token: process.env.SANITY_WRITE_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]{
    title,
    description,
    ogImage,
    keywords,
    organizationName,
    logo,
    siteUrl,
    tagline,
    contactEmail,
    bookingUrl,
    phone,
    socialLinks
  }`);
}

export async function getServices() {
  return client.fetch(`*[_type == "service"] | order(order asc)`);
}

export async function getServicesHero() {
  return client.fetch(`*[_type == "servicesHero"][0]`);
}

export async function getFeaturedTestimonials() {
  return client.fetch(`*[_type == "testimonial" && featured == true] | order(displayOrder asc)[0...3]{
    name, role, quote, avatar, result, location, rating
  }`);
}

export async function getServicesByCategory() {
  return client.fetch(`*[_type == "service"] | order(categoryOrder asc, cardOrder asc)`);
}

export async function getAuditOffer() {
  return client.fetch(`*[_type == "auditOffer" && isDiagnosticWedge == true][0]{
    headline,
    subheadline,
    ladderContext,
    auditPrice,
    auditPriceRush,
    auditPriceFull,
    turnaround,
    turnaroundRush,
    auditAreas[]{num, title, desc, notes, score, videoUrl, checks},
    forList,
    notForList,
    howItWorksSteps[]{n, title, description},
    trustStats[]{label, value},
    faq[]{question, answer},
  }`);
}

export async function getFaqItems(category?: string) {
  if (category) {
    return client.fetch(
      `*[_type == "faqItem" && category == $category] | order(_createdAt asc){
        question,
        answer,
        category
      }`,
      { category },
    );
  }

  return client.fetch(`*[_type == "faqItem"] | order(_createdAt asc){
    question,
    answer,
    category
  }`);
}

export async function getCaseStudies() {
  return client.fetch(`*[_type == "caseStudy"] | order(_createdAt desc){
    _id,
    clientName,
    "slug": slug.current,
    industry,
    trade,
    serviceTypes,
    problem,
    approach,
    build,
    results,
    website,
    heroImage,
    "image": heroImage.asset->url,
  }`);
}

export async function getCaseStudyBySlug(slug: string) {
  return client.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0]{
      _id,
      clientName,
      "slug": slug.current,
      industry,
      trade,
      serviceTypes,
      problem,
      approach,
      build,
      results,
      website,
      heroImage,
      "image": heroImage.asset->url,
    }`,
    { slug },
  );
}

export async function getPosts() {
  return client.fetch(`*[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    mainImage,
    "image": mainImage.asset->url,
    author->{
      name,
      slug
    }
  }`);
}

export async function getPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      mainImage,
      body,
      author->{
        name,
        slug
      }
    }`,
    { slug },
  );
}

export async function getLeadMagnetBySlug(slug: string) {
  return client.fetch(
    `*[_type == "leadMagnet" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      headline,
      description,
      ctaLabel,
      deliveryMethod,
      emailSubject
    }`,
    { slug },
  );
}

export async function getServiceBySlug(slug: string) {
  return client.fetch(
    `*[_type == "service" && slug.current == $slug][0]{
      ...,
      "slug": slug.current
    }`,
    { slug },
  );
}

export async function getTradeBySlug(slug: string) {
  return client.fetch(
    `*[_type == "trade" && slug.current == $slug][0]{
      ...,
      "slug": slug.current
    }`,
    { slug },
  );
}

export async function getTestimonials() {
  return client.fetch(`*[_type == "testimonial"]`);
}

export async function getHomePage() {
  return client.fetch(`*[_type == "homePage"][0]{
    ...,
    hero {
      ...,
      "videoUrl": heroVideo.asset->url
    }
  }`);
}

export async function submitAuditIntake(data: any) {
  return writeClient.create({
    _type: "auditIntakeSubmission",
    ...data,
    submittedAt: new Date().toISOString(),
    status: "pending",
  });
}

export async function getPricingTiers() {
  return client.fetch(`*[_type == "pricingTier"] | order(order asc)`);
}

export async function getOsSection() {
  return client.fetch(`*[_type == "osSection"][0]{
    headline,
    subheadline,
    description,
    differentiatorBullets[]{text},
    problemItems[]{text},
    solutionItems[]{text},
    featureBullets[]{text},
    forWho[]{text},
    notForWho[]{text},
    ctaLabel,
    ctaUrl,
    secondaryCtaLabel,
    secondaryCtaUrl,
    pricingSetup,
    pricingMonthly,
    pricingNote,
  }`);
}
