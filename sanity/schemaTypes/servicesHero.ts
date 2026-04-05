import { defineField, defineType } from "sanity";
import { MasterDetailIcon } from "@sanity/icons";


export const servicesHero = defineType({
  name: "servicesHero",
  title: "Services Hero",
  type: "document",
  icon: MasterDetailIcon,

  fields: [
    defineField({ name: "badge", title: "Badge", type: "string" }),
    defineField({ name: "headlineLine1", title: "Headline Line 1", type: "string" }),
    defineField({ name: "headlineLine2", title: "Headline Line 2", type: "string" }),
    defineField({ name: "headlineAccent", title: "Headline Accent Word", type: "string", description: "The bold/accent word in line 2" }),
    defineField({ name: "subheadline", title: "Subheadline", type: "text" }),
    defineField({ name: "ctaPrimaryLabel", title: "Primary CTA Label", type: "string" }),
    defineField({ name: "ctaPrimaryUrl", title: "Primary CTA URL", type: "string" }),
    defineField({ name: "ctaSecondaryLabel", title: "Secondary CTA Label", type: "string" }),
    defineField({ name: "ctaSecondaryUrl", title: "Secondary CTA URL", type: "string" }),
    defineField({ name: "socialProofRating", title: "Social Proof — Rating", type: "string" }),
    defineField({ name: "socialProofSource", title: "Social Proof — Source", type: "string" }),
    defineField({ name: "socialProofCount", title: "Social Proof — Count", type: "string" }),
    defineField({ name: "socialProofLeads", title: "Social Proof — Leads Claim", type: "string" }),
    defineField({
      name: "processSteps",
      title: "Process Steps",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "stepNumber", title: "Step Number", type: "string" }),
          defineField({ name: "label", title: "Label", type: "string" }),
          defineField({ name: "time", title: "Time", type: "string" }),
        ],
      }],
    }),
    defineField({ name: "pricingFrom", title: "Pricing — From (Setup)", type: "string" }),
    defineField({ name: "pricingMonthly", title: "Pricing — Monthly", type: "string" }),
  ],
  preview: { prepare() { return { title: "Services Hero" }; } },
});
