import { defineField, defineType } from "sanity";
import { CaseIcon } from "@sanity/icons";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({
      name: "clientName",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "clientName",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
    }),
    defineField({
      name: "trade",
      title: "Core Trade",
      type: "string",
      description: "e.g. Electrician, HVAC, Roofer",
    }),
    defineField({
      name: "serviceTypes",
      title: "Service Types",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g. Web Design, Local SEO",
    }),
    defineField({
      name: "problem",
      title: "The Problem",
      type: "text",
    }),
    defineField({
      name: "approach",
      title: "The Strategic Approach",
      type: "text",
    }),
    defineField({
      name: "build",
      title: "The Build/Execution",
      type: "text",
    }),
    defineField({
      name: "results",
      title: "Results",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "metric", title: "Metric", type: "string" }),
            defineField({ name: "value", title: "Value", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "testimonial",
      title: "Testimonial",
      type: "reference",
      to: [{ type: "testimonial" }],
    }),
    defineField({
      name: "website",
      title: "Website URL",
      type: "url",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "clientName",
      subtitle: "industry",
      media: "heroImage",
    },
  },
});
