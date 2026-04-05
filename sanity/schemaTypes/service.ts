import { defineType, defineField } from "sanity";
import { CaseIcon } from "@sanity/icons";


export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  icon: CaseIcon,

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ladderPosition",
      title: "Offer Ladder Position",
      type: "string",
      options: {
        list: [
          { title: "1. Diagnose (Entry Offer)", value: "entry" },
          { title: "2. Fix (Core Delivery)", value: "core" },
          { title: "3. Grow (Continuity)", value: "continuity" },
        ],
      },
      validation: (Rule) => Rule.required(),
      description: "Where this service sits in the BuiltExpert 5-Offer Ladder.",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Short summary used on overview and detail pages.",
    }),
    defineField({
      name: "promise",
      title: "The Promise",
      type: "string",
      description: "The primary one-line value proposition of this service.",
    }),
    defineField({
      name: "deliverables",
      title: "Deliverables",
      type: "array",
      of: [{ type: "string" }],
      description: "What is included in the service build",
    }),
    defineField({
      name: "outcomes",
      title: "Outcomes",
      type: "array",
      of: [{ type: "string" }],
      description: "What should change after the work is done",
    }),
    defineField({
      name: "audienceFit",
      title: "Audience Fit",
      type: "array",
      of: [{ type: "string" }],
      description: "Who this service is best for (e.g. Electricians, HVAC)",
    }),
    defineField({
      name: "icon",
      title: "Icon Name (Lucide)",
      type: "string",
      description: "e.g. Activity, Globe, Zap",
    }),
    defineField({
      name: "benefits",
      title: "Key Benefits",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "pricingTiers",
      title: "Pricing Tiers",
      type: "array",
      of: [{ type: "reference", to: [{ type: "pricingTier" }] }],
      description: "Link to one or more pricing tiers (e.g. Starter, Growth, Authority).",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Lead System Audit", value: "audit" },
          { title: "Contractor Websites", value: "websites" },
          { title: "Landing Pages", value: "landingPages" },
          { title: "Local SEO", value: "localSeo" },
          { title: "Growth Support", value: "growthSupport" },
        ],
      },
    }),
    defineField({
      name: "categoryOrder",
      title: "Category Order (1-5)",
      type: "number",
      validation: (Rule) => Rule.integer().min(1).max(5),
    }),
    defineField({
      name: "cardOrder",
      title: "Card Order (within category)",
      type: "number",
      validation: (Rule) => Rule.integer().min(1),
    }),
    defineField({
      name: "bestFor",
      title: "Best For Bullets",
      type: "array",
      of: [{ type: "string" }],
      description: "3 short bullet points — what this service is best for",
    }),
    defineField({
      name: "visualStyle",
      title: "Visual Style",
      type: "string",
      options: {
        list: [
          { title: "Default (white card)", value: "default" },
          { title: "Dark Teal (full-width section)", value: "darkTeal" },
        ],
        layout: "radio",
      },
      initialValue: "default",
    }),
    defineField({
      name: "cardImage",
      title: "Card Image",
      type: "image",
      options: { hotspot: true },
      description: "Hyper-realistic image for the service card (Services section and Overview)."
    }),
    defineField({
      name: "materialIcon",
      title: "Material Icon name",
      type: "string",
      description: "Material Symbol name (e.g. search, web, flash_on, article, location_on)."
    }),
    defineField({
      name: "faqRefs",
      title: "Related FAQs",
      type: "array",
      of: [{ type: "reference", to: [{ type: "faqItem" }] }],
    }),
    defineField({
      name: "featuredCaseStudyRefs",
      title: "Featured Case Studies",
      type: "array",
      of: [{ type: "reference", to: [{ type: "caseStudy" }] }],
    }),
  ],
});
