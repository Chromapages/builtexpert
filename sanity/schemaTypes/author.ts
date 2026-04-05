import { defineType, defineField } from "sanity";
import { UserIcon } from "@sanity/icons";


export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,

  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
    }),
  ],
});
