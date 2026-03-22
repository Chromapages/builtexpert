import * as React from "react";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Card } from "@/components/ui/Card";

const BLOG_POSTS = [
    {
        title: "Why Most SMB Websites Fail (and How to Fix It)",
        excerpt: "Most websites suffer from a lack of clarity and performance. Here's a 5-step framework to turn your site into a lead-generating machine.",
        date: "March 2026",
        category: "Strategy",
        slug: "why-smb-websites-fail",
    },
    {
        title: "Core Web Vitals in 2026: The Only Metrics That Matter",
        excerpt: "Google's page experience signals have evolved. Learn which technical metrics actually drive SEO rankings and user satisfaction.",
        date: "February 2026",
        category: "Technical",
        slug: "core-web-vitals-2026",
    },
    {
        title: "Premium Design vs. High Performance: The False Choice",
        excerpt: "You don't have to sacrifice aesthetics for speed. We explore the engineering principles behind beautiful, lightning-fast web apps.",
        date: "January 2026",
        category: "Design",
        slug: "premium-design-vs-performance",
    }
];

export function Blog() {
    return (
        <>
            <SEO
                title="Journal"
                description="Notes on design, performance, and digital strategy for growth-focused businesses."
                canonical="/journal"
            />
            <Section className="pt-32 pb-16">
                <div className="max-w-3xl">
                    <AnimateIn>
                        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-muted mb-4">
                            Journal
                        </p>
                        <h1 className="text-5xl md:text-7xl font-display font-light text-ink mb-6 uppercase leading-none">
                            Notes On Clarity, Performance, And Growth.
                        </h1>
                        <p className="text-lg md:text-xl text-muted leading-relaxed max-w-prose">
                            Editorial insight on digital strategy, front-end execution, and the decisions that actually improve outcomes.
                        </p>
                    </AnimateIn>
                </div>
            </Section>

            <Section background="white">
                <AnimateIn stagger staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post) => (
                        <Card key={post.slug} className="flex flex-col h-full group">
                            <div className="space-y-4 flex-grow">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-bold text-accent uppercase tracking-[0.25em]">{post.category}</span>
                                    <span className="text-[10px] text-muted uppercase tracking-[0.2em]">{post.date}</span>
                                </div>
                                <h3 className="text-2xl font-display font-medium text-ink uppercase group-hover:text-accent transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-muted leading-relaxed text-sm">
                                    {post.excerpt}
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-border text-[10px] font-bold uppercase tracking-[0.25em] text-muted">
                                Coming soon...
                            </div>
                        </Card>
                    ))}
                </AnimateIn>
            </Section>
        </>
    );
}
