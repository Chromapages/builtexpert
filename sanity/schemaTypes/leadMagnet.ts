import { defineField, defineType } from "sanity";
import { EnvelopeIcon } from "@sanity/icons";

export const leadMagnet = defineType({
  name: "leadMagnet",
  title: "Lead Magnet",
  type: "document",
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Internal Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Landing Page Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA Button Label",
      type: "string",
    }),
    defineField({
      name: "deliveryMethod",
      title: "Delivery Method",
      type: "string",
      options: {
        list: [
          { title: "Email", value: "email" },
          { title: "Direct PDF Download", value: "pdf" },
          { title: "Private Link", value: "link" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "emailSubject",
      title: "Delivery Email Subject",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "deliveryMethod",
    },
  },
});
