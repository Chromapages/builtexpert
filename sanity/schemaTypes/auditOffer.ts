import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const auditOffer = defineType({
  name: "auditOffer",
  title: "Audit Offer",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description: "Whether this offer is currently listed and available for purchase.",
      initialValue: true,
    }),
    defineField({
      name: "isDiagnosticWedge",
      title: "Is Official Diagnostic Wedge",
      type: "boolean",
      description: "Check this if this is the primary $497 entry offer.",
      initialValue: true,
    }),
    defineField({
      name: "ladderContext",
      title: "Ladder Context",
      type: "text",
      description: "A short 'Why this is step 1' block (e.g. 'Most contractors don't know if the issue is their site, ads, or local SEO. The audit creates clarity.')",
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subheadline",
      title: "Subheadline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "auditPrice",
      title: "Audit Price",
      type: "number",
      initialValue: 497,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "auditPriceRush",
      title: "Audit Price (Rush)",
      type: "number",
      initialValue: 750,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "auditPriceFull",
      title: "Audit Price (Full)",
      type: "number",
      description: "Standard value before any special diagnostic discounts.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "turnaround",
      title: "Turnaround Time",
      type: "string",
      initialValue: "3-5 business days",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "turnaroundRush",
      title: "Turnaround Time (Rush)",
      type: "string",
      initialValue: "24-48 hours",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "auditAreas",
      title: "Audit Areas",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "num", title: "Number", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "desc", title: "Description", type: "text" }),
            defineField({ name: "notes", title: "Notes", type: "text" }),
            defineField({
              name: "score",
              title: "Score (0-10)",
              type: "number",
              validation: (Rule) => Rule.min(0).max(10),
            }),
            defineField({ name: "videoUrl", title: "Loom Video URL", type: "url" }),
            defineField({
              name: "checks",
              title: "Checks",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "forList",
      title: "Who It's For",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "notForList",
      title: "Who It's Not For",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "howItWorksSteps",
      title: "How It Works Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "n", title: "Step Number", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text" }),
          ],
        },
      ],
    }),
    defineField({
      name: "trustStats",
      title: "Trust Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "value", title: "Value", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "question", title: "Question", type: "string" }),
            defineField({ name: "answer", title: "Answer", type: "text" }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "headline",
      subtitle: "subheadline",
    },
  },
});
