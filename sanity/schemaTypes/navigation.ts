import { defineType, defineField } from "sanity";
import { MasterDetailIcon } from "@sanity/icons";

export const navigation = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  icon: MasterDetailIcon,
  fields: [
    defineField({
      name: "title",
      title: "Menu Name",
      type: "string",
      description: "e.g. Header Nav, Footer Nav",
    }),
    defineField({
      name: "items",
      title: "Navigation Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "href", title: "URL / Path", type: "string" },
            { 
              name: "isExternal", 
              title: "External Link?", 
              type: "boolean", 
              initialValue: false 
            },
            {
              name: "children",
              title: "Sub-menu Items",
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
  ],
});
