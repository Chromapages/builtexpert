export interface CaseStudy {
    id: string;
    slug: string;
    client: string;
    category: string;
    industry: string;
    result: string;
    services: string[];
    timeline: string;
    image: string;
    problem: string;
    solution: string;
    stats: {
        label: string;
        value: string;
    }[];
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
    "fintech-dashboard": {
        id: "1",
        slug: "fintech-dashboard",
        client: "Acme Financial",
        category: "Web Apps",
        industry: "Fintech",
        result: "+47% user retention",
        services: ["UI/UX Design", "React Development", "Data Visualization"],
        timeline: "4 months",
        image: "/assets/projects/fintech.png",
        problem: "Acme Financial's existing dashboard was cluttered, slow, and confusing for users, leading to high churn rates and support costs.",
        solution: "We redesigned the entire experience from the ground up, focusing on clarity, speed, and intuitive data visualization using a modern React stack.",
        stats: [
            { label: "User Retention", value: "+47%" },
            { label: "Load Speed", value: "<1.2s" },
            { label: "Support Tickets", value: "-30%" },
        ],
    },
    "ecommerce-replatform": {
        id: "2",
        slug: "ecommerce-replatform",
        client: "Global Retail Co",
        category: "E-Commerce",
        industry: "Consumer Goods",
        result: "85% increase in conversion",
        services: ["E-Commerce Strategy", "Next.js Build", "Checkout Optimization"],
        timeline: "3 months",
        image: "/assets/projects/retail.png",
        problem: "Their legacy e-commerce platform was sluggish on mobile devices, resulting in high shopping cart abandonment and lost revenue.",
        solution: "We migrated their store to a headless commerce architecture using Next.js and Shopify, prioritizing a mobile-first checkout experience.",
        stats: [
            { label: "Conversion Rate", value: "+85%" },
            { label: "Mobile Bounce", value: "-24%" },
            { label: "Average Order", value: "+12%" },
        ],
    },
    "saas-marketing-site": {
        id: "3",
        slug: "saas-marketing-site",
        client: "CloudSync",
        category: "Marketing Sites",
        industry: "SaaS",
        result: "+85% lead generation",
        services: ["Marketing Strategy", "Vite/React Development", "Brand Identity"],
        timeline: "2 months",
        image: "/assets/projects/saas.png",
        problem: "CloudSync had a powerful product but a weak marketing site that failed to communicate value and convert professional leads.",
        solution: "We built a high-performance marketing site with premium motion design and clear conversion funnels.",
        stats: [
            { label: "Lead Gen", value: "+85%" },
            { label: "Page Speed", value: "99/100" },
            { label: "Conversion", value: "+40%" },
        ],
    },
    "healthcare-portal": {
        id: "4",
        slug: "healthcare-portal",
        client: "MediCare Plus",
        category: "Web Apps",
        industry: "Healthcare",
        result: "-30% support tickets",
        services: ["Portal Design", "Security Audit", "React Integration"],
        timeline: "5 months",
        image: "/assets/projects/health.png",
        problem: "Patients found it difficult to book appointments and view records, leading to overloaded support phone lines.",
        solution: "We built a secure, accessible patient portal that streamlined all core interactions.",
        stats: [
            { label: "Phone Volume", value: "-30%" },
            { label: "User Rating", value: "4.8/5" },
            { label: "Accessibility", value: "WCAG AA" },
        ],
    },
    "agency-redesign": {
        id: "5",
        slug: "agency-redesign",
        client: "Creative Minds",
        category: "Redesigns",
        industry: "Agency",
        result: "+120% organic traffic",
        services: ["SEO Strategy", "Visual Identity", "Performance Dev"],
        timeline: "3 months",
        image: "/assets/projects/agency.png",
        problem: "The previous site was visually dated and poorly optimized for search, limiting their organic growth.",
        solution: "A complete visual and technical overhaul that prioritized storytelling and search performance.",
        stats: [
            { label: "Organic Reach", value: "+120%" },
            { label: "Time on Site", value: "+45%" },
            { label: "Lead Value", value: "+60%" },
        ],
    },
    "local-service-site": {
        id: "6",
        slug: "local-service-site",
        client: "City Plumbers",
        category: "Marketing Sites",
        industry: "Local Services",
        result: "+50% booking rate",
        services: ["Conversion Design", "Mobile Optimization", "Local SEO"],
        timeline: "2 months",
        image: "/assets/projects/service.png",
        problem: "High traffic from local search but very few mobile bookings due to a poor interface.",
        solution: "A mobile-first lead capture site designed specifically for high-intent emergency service seekers.",
        stats: [
            { label: "Booking Rate", value: "+50%" },
            { label: "Mobile Speed", value: "0.8s" },
            { label: "ROI", value: "15x" },
        ],
    },
};
