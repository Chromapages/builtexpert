import { defineType, defineField } from "sanity";
import { HomeIcon } from "@sanity/icons";


export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  icon: HomeIcon,

  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "Home",
      readOnly: true,
    }),
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({
          name: "headline",
          title: "Headline",
          type: "array",
          of: [
            {
              type: "block",
              styles: [{ title: "Normal", value: "normal" }],
              lists: [],
              marks: {
                decorators: [
                  { title: "Strong", value: "strong" },
                  { title: "Emphasis", value: "em" },
                  { title: "Highlight (Green)", value: "highlight" },
                  { title: "Gradient", value: "gradient" },
                ],
              },
            },
          ],
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "subheadline",
          title: "Subheadline",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "backgroundImage",
          title: "Background Image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "heroVideo",
          title: "Hero Background Video",
          type: "file",
          options: {
            accept: "video/*",
          },
        }),
        defineField({
          name: "ctaLabel",
          title: "Primary CTA Label",
          type: "string",
        }),
        defineField({
          name: "stats",
          title: "Hero Stats",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "label", type: "string" },
                { name: "value", type: "string" },
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO Overrides",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Meta Title", type: "string" }),
        defineField({ name: "description", title: "Meta Description", type: "text" }),
      ],
    }),
  ],
});
