import { defineType, defineField } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: DocumentIcon,
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
      name: "pageType",
      title: "Page Type",
      type: "string",
      options: {
        list: [
          { title: "Standard Page", value: "standard" },
          { title: "About", value: "about" },
          { title: "Our Process", value: "process" },
          { title: "Pricing", value: "pricing" },
          { title: "Contact", value: "contact" },
          { title: "FAQ", value: "faq" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "hero",
      title: "Hero Content",
      type: "object",
      fields: [
        defineField({ name: "headline", title: "Hero Headline", type: "string" }),
        defineField({ name: "subheadline", title: "Hero Subheadline", type: "text", rows: 3 }),
        defineField({ name: "image", title: "Hero Background Image", type: "image", options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: "sections",
      title: "Page Sections",
      type: "array",
      of: [
        { 
          type: "object",
          name: "textSection",
          title: "Rich Text Section",
          fields: [
            { name: "heading", title: "Heading", type: "string" },
            { name: "content", title: "Content", type: "array", of: [{ type: "block" }] },
          ],
        },
        { type: "reference", name: "caseStudyRef", title: "Featured Case Studies", to: [{ type: "caseStudy" }] },
        { type: "reference", name: "testimonialRef", title: "Featured Testimonials", to: [{ type: "testimonial" }] },
        {
          type: "object",
          name: "ctaSection",
          title: "Call to Action Section",
          fields: [
            { name: "headline", title: "Headline", type: "string" },
            { name: "label", title: "CTA Label", type: "string" },
            { name: "url", title: "CTA URL", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO Overrides",
      type: "object",
      fields: [
        defineField({ name: "metaTitle", title: "Meta Title", type: "string" }),
        defineField({ name: "metaDescription", title: "Meta Description", type: "text", rows: 3 }),
        defineField({ name: "shareImage", title: "Social Share Image", type: "image" }),
      ],
    }),
  ],
});
