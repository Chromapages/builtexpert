import { defineType, defineField } from "sanity";
import { HelpCircleIcon } from "@sanity/icons";

export const faqItem = defineType({
  name: "faqItem",
  title: "FAQ Item",
  type: "document",
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Services", value: "services" },
          { title: "Pricing", value: "pricing" },
          { title: "Audit", value: "audit" },
          { title: "Process", value: "process" },
          { title: "Contact", value: "contact" },
          { title: "General", value: "general" },
        ],
      },
    }),
  ],
});
