import { defineType, defineField } from "sanity";
import { ThListIcon } from "@sanity/icons";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  icon: ThListIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Internal reference name",
      initialValue: "Main Footer",
    }),
    defineField({
      name: "copyright",
      title: "Copyright Notice",
      type: "string",
      description: "e.g. © 2026 BuiltExpert. All rights reserved.",
    }),
    defineField({
      name: "address",
      title: "Physical Address",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "navigationSections",
      title: "Footer Nav Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Section Heading", type: "string" },
            { 
              name: "links", 
              title: "Links", 
              type: "array", 
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "label", title: "Label", type: "string" },
                    { name: "href", title: "URL / Path", type: "string" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "newsletterHeadline",
      title: "Newsletter Headline",
      type: "string",
    }),
    defineField({
      name: "newsletterSmallPrint",
      title: "Newsletter Small Print",
      type: "string",
    }),
  ],
});
