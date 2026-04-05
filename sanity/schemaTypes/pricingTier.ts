import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const pricingTier = defineType({
  name: "pricingTier",
  title: "Pricing Tier",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "e.g., Starter, Growth, OS",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "billingCycle",
      title: "Billing Cycle",
      type: "string",
      options: {
        list: [
          { title: "One-time Charge (Project)", value: "one-time" },
          { title: "Monthly Recurring", value: "monthly" },
        ],
        layout: "radio",
      },
      initialValue: "one-time",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tierType",
      title: "Tier Type",
      type: "string",
      options: {
        list: [
          { title: "Fixed Price", value: "fixed" },
          { title: "Price Range / Starting At", value: "range" },
        ],
        layout: "radio",
      },
      initialValue: "fixed",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Fixed Price (approximate)",
      type: "number",
      hidden: ({ document }) => document?.tierType === "range",
    }),
    defineField({
      name: "minPrice",
      title: "Minimum Price / Starting At",
      type: "number",
      hidden: ({ document }) => document?.tierType === "fixed",
    }),
    defineField({
      name: "maxPrice",
      title: "Maximum Price (optional)",
      type: "number",
      hidden: ({ document }) => document?.tierType === "fixed",
    }),
    defineField({
      name: "unitLabel",
      title: "Unit Label",
      type: "string",
      description: "e.g. /mo, /project, /audit. Defaults to /mo if Monthly or empty if One-time.",
    }),
    defineField({
      name: "monthlyPrice",
      title: "Legacy: Monthly Price",
      type: "number",
      description: "Used by older components. Deprecated.",
    }),
    defineField({
      name: "annualPrice",
      title: "Legacy: Annual Price",
      type: "number",
      description: "Used by older components. Deprecated.",
    }),
    defineField({
      name: "launchSetupPrice",
      title: "Legacy: Launch / Setup Price",
      type: "number",
      description: "One-time setup cost. Deprecated.",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "includes",
      title: "Includes",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "notIncluded",
      title: "Not Included",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "forWho",
      title: "For Who",
      type: "string",
    }),
    defineField({
      name: "timeline",
      title: "Timeline",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Used to sort pricing tiers left-to-right",
      validation: (Rule) => Rule.required().integer(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      price: "price",
      minPrice: "minPrice",
      maxPrice: "maxPrice",
      tierType: "tierType",
      cycle: "billingCycle",
    },
    prepare({ title, price, minPrice, maxPrice, tierType, cycle }) {
      const priceStr =
        tierType === "range"
          ? `${minPrice}${maxPrice ? ` - ${maxPrice}` : "+"}`
          : `${price || "Custom"}`;
      const cycleStr = cycle === "monthly" ? "/mo" : "";
      return {
        title,
        subtitle: `${priceStr}${cycleStr}`,
      };
    },
  },
});
