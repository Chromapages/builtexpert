import { defineField, defineType } from "sanity";
import { MasterDetailIcon } from "@sanity/icons";

export const auditIntakeSubmission = defineType({
  name: "auditIntakeSubmission",
  title: "Audit Intake Submission",
  type: "document",
  icon: MasterDetailIcon,
  fields: [
    defineField({
      name: "ownerName",
      title: "Owner Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "businessName",
      title: "Business Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "websiteUrl",
      title: "Website URL",
      type: "url",
    }),
    defineField({
      name: "googleBusinessProfileUrl",
      title: "Google Business Profile URL",
      type: "url",
    }),
    defineField({
      name: "serviceAreas",
      title: "Service Areas",
      type: "string",
    }),
    defineField({
      name: "yearsInBusiness",
      title: "Years in Business",
      type: "number",
    }),
    defineField({
      name: "topServices",
      title: "Top Services",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "competitorNames",
      title: "Competitor Names",
      type: "text",
    }),
    defineField({
      name: "mainProblem",
      title: "Main Problem",
      type: "text",
    }),
    defineField({
      name: "currentTools",
      title: "Current Tools",
      type: "text",
    }),
    defineField({
      name: "monthlyLeadVolume",
      title: "Monthly Lead Volume",
      type: "string",
    }),
    defineField({
      name: "budgetRange",
      title: "Budget Range",
      type: "string",
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "stripeSessionId",
      title: "Stripe Session ID",
      type: "string",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "In Progress", value: "in-progress" },
          { title: "Delivered", value: "delivered" },
        ],
        layout: "radio",
      },
      initialValue: "pending",
    }),
  ],
  preview: {
    select: {
      title: "businessName",
      subtitle: "email",
    },
  },
});
