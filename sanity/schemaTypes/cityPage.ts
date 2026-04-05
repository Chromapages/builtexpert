import { defineField, defineType } from "sanity";
import { PinIcon } from "@sanity/icons";

export const cityPage = defineType({
  name: "cityPage",
  title: "City Page",
  type: "document",
  icon: PinIcon,
  fields: [
    defineField({
      name: "cityName",
      title: "City Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "state",
      title: "State",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc) => `${doc.cityName}-${doc.state}`.toLowerCase(),
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "servicePages",
      title: "Service Pages",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero Subheadline",
      type: "string",
    }),
    defineField({
      name: "localStats",
      title: "Local Stats",
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
      name: "localTestimonials",
      title: "Local Testimonials",
      type: "array",
      of: [{ type: "reference", to: [{ type: "testimonial" }] }],
    }),
  ],
  preview: {
    select: {
      title: "cityName",
      subtitle: "state",
    },
    prepare({ title, subtitle }) {
      return {
        title: `${title}, ${subtitle}`,
      };
    },
  },
});
