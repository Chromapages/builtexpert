import { defineType, defineField } from "sanity";
import { CogIcon } from "@sanity/icons";


export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,

  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Meta Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "organizationName",
      title: "Organization Name",
      type: "string",
      initialValue: "BuiltExpert",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),

    defineField({
      name: "siteUrl",
      title: "Site URL",
      type: "url",
      description: "Canonical base URL (e.g. https://builtexpert.com)",
    }),
    defineField({
      name: "tagline",
      title: "Brand Tagline",
      type: "string",
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
    }),
    defineField({
      name: "bookingUrl",
      title: "Booking / Scheduler URL",
      type: "url",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", type: "string", title: "Platform Name" },
            { name: "url", type: "url", title: "Profile URL" },
          ],
        },
      ],
    }),
  ],
});
