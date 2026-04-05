import { StructureResolver } from "sanity/structure";
import { 
  CogIcon, 
  HomeIcon, 
  DesktopIcon, 
  CaseIcon, 
  TagIcon, 
  PinIcon, 
  EnvelopeIcon, 
  MasterDetailIcon,
  StarIcon,
  DocumentsIcon,
  BlockquoteIcon,
  SearchIcon,
  InboxIcon,
  ComposeIcon,
  HelpCircleIcon
} from "@sanity/icons";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("BuiltExpert Studio")
    .items([
      // Global Settings
      S.listItem()
        .title("Global Settings")
        .icon(CogIcon)
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),

      S.divider(),

      // Pages
      S.listItem()
        .title("Pages")
        .icon(DesktopIcon)
        .child(
          S.list()
            .title("Pages")
            .items([
              // Home Page
              S.listItem()
                .title("Home Page")
                .icon(HomeIcon)
                .child(
                  S.editor()
                    .id("homePage")
                    .schemaType("homePage")
                    .documentId("homePage")
                ),
              
              S.divider(),

              // Services Page Group
              S.listItem()
                .title("Services Page")
                .icon(MasterDetailIcon)
                .child(
                  S.list()
                    .title("Services Page Content")
                    .items([
                      S.listItem()
                        .title("Hero Section")
                        .icon(MasterDetailIcon)
                        .child(
                          S.editor()
                            .id("servicesHero")
                            .schemaType("servicesHero")
                            .documentId("servicesHero")
                        ),
                      S.listItem()
                        .title("OS Section")
                        .icon(StarIcon)
                        .child(
                          S.editor()
                            .id("osSection")
                            .schemaType("osSection")
                            .documentId("osSection")
                        ),
                    ])
                ),
            ])
        ),

      S.divider(),

      // Content Library
      S.listItem()
        .title("Content Library")
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title("Content Library")
            .items([
              S.documentTypeListItem("service").title("Services").icon(CaseIcon),
              S.documentTypeListItem("trade").title("Trades").icon(CaseIcon),
              S.documentTypeListItem("faqItem").title("FAQ Items").icon(HelpCircleIcon),
              S.documentTypeListItem("testimonial").title("Testimonials").icon(BlockquoteIcon),
              S.documentTypeListItem("caseStudy").title("Case Studies").icon(CaseIcon),
              S.documentTypeListItem("pricingTier").title("Pricing Tiers").icon(TagIcon),
            ])
        ),

      // Growth & SEO
      S.listItem()
        .title("Growth & SEO")
        .icon(PinIcon)
        .child(
          S.list()
            .title("Growth & SEO")
            .items([
              S.documentTypeListItem("cityPage").title("City Pages").icon(PinIcon),
              S.documentTypeListItem("leadMagnet").title("Lead Magnets").icon(EnvelopeIcon),
            ])
        ),

      S.divider(),

      // Blog
      S.listItem()
        .title("Blog")
        .icon(ComposeIcon)
        .child(
          S.list()
            .title("Blog")
            .items([
              S.documentTypeListItem("post").title("Posts"),
              S.documentTypeListItem("author").title("Authors"),
            ])
        ),

      S.divider(),

      // Audit System
      S.listItem()
        .title("Audit System")
        .icon(SearchIcon)
        .child(
          S.list()
            .title("Audit System")
            .items([
              S.listItem()
                .title("Audit Offer")
                .icon(SearchIcon)
                .child(
                  S.editor()
                    .id("auditOffer")
                    .schemaType("auditOffer")
                    .documentId("auditOffer")
                ),
              S.documentTypeListItem("auditDeliverable").title("Audit Deliverables"),
              S.documentTypeListItem("auditIntakeSubmission").title("Intake Submissions").icon(InboxIcon),
            ])
        ),

      // Hide all other types from the sidebar
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "siteSettings",
            "homePage",
            "servicesHero",
            "osSection",
            "service",
            "trade",
            "faqItem",
            "testimonial",
            "caseStudy",
            "pricingTier",
            "cityPage",
            "leadMagnet",
            "post",
            "author",
            "auditOffer",
            "auditDeliverable",
            "auditIntakeSubmission",
          ].includes(listItem.getId() as string)
      ),
    ]);
