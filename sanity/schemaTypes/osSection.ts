import { defineField, defineType } from "sanity";
import { StarIcon } from "@sanity/icons";


export const osSection = defineType({
  name: "osSection",
  title: "OS Section",
  type: "document",
  icon: StarIcon,

  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "Main headline for the OS section (e.g. 'The whole system.')",
    }),
    defineField({
      name: "subheadline",
      title: "Subheadline",
      type: "string",
      description: "Sub-headline shown below the main headline",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Paragraph of descriptive copy",
    }),
    defineField({
      name: "differentiatorBullets",
      title: "Differentiator Bullets",
      type: "array",
      of: [{ type: "object", fields: [{ name: "text", title: "Text", type: "string" }] }],
      description: "5 bullets — what makes OS different from LeadOps",
    }),
    defineField({
      name: "problemItems",
      title: "Problem Items (Without OS)",
      type: "array",
      of: [{ type: "object", fields: [{ name: "text", title: "Text", type: "string" }] }],
      description: "Bullets for the 'Without OS' column",
    }),
    defineField({
      name: "solutionItems",
      title: "Solution Items (With BuiltExpert OS)",
      type: "array",
      of: [{ type: "object", fields: [{ name: "text", title: "Text", type: "string" }] }],
      description: "Bullets for the 'With BuiltExpert OS' column",
    }),
    defineField({
      name: "featureBullets",
      title: "Feature Bullets",
      type: "array",
      of: [{ type: "object", fields: [{ name: "text", title: "Text", type: "string" }] }],
      description: "8 feature bullets shown in the grid",
    }),
    defineField({
      name: "forWho",
      title: "For Who (This is for you)",
      type: "array",
      of: [{ type: "object", fields: [{ name: "text", title: "Text", type: "string" }] }],
      description: "Who OS is for — text content",
    }),
    defineField({
      name: "notForWho",
      title: "Not For Who (This is NOT for you)",
      type: "array",
      of: [{ type: "object", fields: [{ name: "text", title: "Text", type: "string" }] }],
      description: "Who OS is NOT for — text content",
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA Label",
      type: "string",
      description: "e.g. 'Get Your OS Audit'",
    }),
    defineField({
      name: "ctaUrl",
      title: "CTA URL",
      type: "string",
      description: "e.g. '/contact?plan=os'",
    }),
    defineField({
      name: "secondaryCtaLabel",
      title: "Secondary CTA Label",
      type: "string",
      description: "Optional secondary link label, e.g. 'See pricing →'",
    }),
    defineField({
      name: "secondaryCtaUrl",
      title: "Secondary CTA URL",
      type: "string",
    }),
    defineField({
      name: "pricingSetup",
      title: "Pricing — Setup",
      type: "string",
      description: "e.g. '$4,997'",
    }),
    defineField({
      name: "pricingMonthly",
      title: "Pricing — Monthly",
      type: "string",
      description: "e.g. '$5,997/mo'",
    }),
    defineField({
      name: "pricingNote",
      title: "Pricing Note",
      type: "string",
      description: "e.g. 'Full system — everything listed above'",
    }),
  ],
  preview: {
    prepare() {
      return { title: "OS Section" };
    },
  },
});
