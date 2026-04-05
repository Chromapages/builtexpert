import { defineType, defineField } from "sanity";
import { CaseIcon } from "@sanity/icons";

export const trade = defineType({
  name: "trade",
  title: "Trade",
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
      name: "summary",
      title: "Summary",
      type: "text",
      description: "Short positioning summary used in the trade detail page",
    }),
    defineField({
      name: "painPoints",
      title: "Pain Points",
      type: "array",
      of: [{ type: "string" }],
      description: "The issues this trade usually needs solved",
    }),
    defineField({
      name: "proofPoints",
      title: "Proof Points",
      type: "array",
      of: [{ type: "string" }],
      description: "Reasons this trade-specific page should feel credible",
    }),
    defineField({
      name: "serviceAngles",
      title: "Service Angles",
      type: "array",
      of: [{ type: "string" }],
      description: "Relevant service angles or offers for the trade",
    }),
    defineField({
      name: "audienceFit",
      title: "Audience Fit",
      type: "array",
      of: [{ type: "string" }],
      description: "Types of businesses that should use this page",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
});
