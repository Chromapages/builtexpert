import { defineType, defineField } from "sanity";
import { BlockquoteIcon } from "@sanity/icons";


export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: BlockquoteIcon,

  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Industry",
      type: "string",
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "metric",
      title: "Result Metric (Optional)",
      type: "string",
      description: "e.g. +$240k Revenue",
    }),
    defineField({
      name: "featured",
      title: "Feature on Services Page",
      type: "boolean",
      initialValue: false,
      description: "Only featured testimonials show on the Services page (up to 3)",
    }),
    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      description: "Controls order among featured testimonials",
      validation: (Rule) => Rule.integer().min(1),
    }),
    defineField({
      name: "result",
      title: "Result Metric",
      type: "string",
      description: "e.g. '19 calls/month vs 2-3 before' or '#1 local map pack'",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "e.g. 'Denver, CO' or 'Moreno Valley, CA'",
    }),
  ],
});
