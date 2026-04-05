import { defineField, defineType } from "sanity";
import { CheckmarkCircleIcon } from "@sanity/icons";

export const auditDeliverable = defineType({
  name: "auditDeliverable",
  title: "Audit Deliverable",
  type: "document",
  icon: CheckmarkCircleIcon,
  fields: [
    defineField({
      name: "clientBusinessName",
      title: "Client Business Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clientEmail",
      title: "Client Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "intakeSubmission",
      title: "Intake Submission",
      type: "reference",
      to: [{ type: "auditIntakeSubmission" }],
    }),
    defineField({
      name: "auditStatus",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "In Progress", value: "in-progress" },
          { title: "Delivered", value: "delivered" },
        ],
        layout: "radio",
      },
      initialValue: "in-progress",
    }),
    defineField({
      name: "deliveredAt",
      title: "Delivered At",
      type: "datetime",
    }),
    defineField({
      name: "findings",
      title: "Findings by Area",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "area", title: "Area Name", type: "string" }),
            defineField({ name: "notes", title: "Notes", type: "text" }),
            defineField({
              name: "score",
              title: "Score (0-10)",
              type: "number",
              validation: (Rule) => Rule.min(0).max(10),
            }),
            defineField({ name: "videoUrl", title: "Loom Video URL", type: "url" }),
          ],
        },
      ],
    }),
    defineField({
      name: "priorityIssues",
      title: "Priority Issues to Fix",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "area", title: "Area", type: "string" }),
            defineField({ name: "issue", title: "Issue", type: "string" }),
            defineField({ name: "recommendation", title: "Recommendation", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "packageRecommended",
      title: "Recommended Package",
      type: "reference",
      to: [{ type: "pricingTier" }],
    }),
  ],
  preview: {
    select: {
      title: "clientBusinessName",
      subtitle: "auditStatus",
    },
  },
});
