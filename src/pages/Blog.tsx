import * as React from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Card } from "@/components/ui/Card";
import { HeaderSection } from "@/components/ui/HeaderSection";
import { CTASection } from "@/components/ui/CTASection";
import { industrialMeshStyle } from "@/lib/industrialStyle";
import { getPosts } from "@/lib/sanity.client";
import { CardSkeleton } from "@/components/ui/CardSkeleton";

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

function formatPublishedDate(value?: string) {
  if (!value) return "Recently";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Recently";
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export function Blog() {
  const [posts, setPosts] = React.useState(BLOG_POSTS);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let active = true;

    async function fetchPosts() {
      setLoading(true);
      try {
        const data = await getPosts();
        if (active && data?.length > 0) {
          setPosts(
            data.map((post: any) => ({
              title: post.title,
              excerpt: "Read the latest note on growth, performance, and clarity.",
              date: formatPublishedDate(post.publishedAt),
              category: "Journal",
              slug: post.slug,
            })),
          );
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        if (active) setLoading(false);
      }
    }

    fetchPosts();

    return () => {
      active = false;
    };
  }, []);

    return (
        <>
            <SEO
                title="Journal"
                description="Notes on design, performance, and digital strategy for growth-focused businesses."
                canonicalPath="/journal"
            />
            
            <HeaderSection 
                badge="Journal"
                title={
                    <>
                        Notes On Clarity, <br />
                        <span className="font-bold text-md3-primary">Performance, & Growth.</span>
                    </>
                }
                description="Editorial insight on digital strategy, engineering execution, and the decisions that actually improve outcomes for trades."
                imageSrc="/images/blog-hero.png"
                imageAlt="Industrial Engineering Journal"
            />

            <div style={industrialMeshStyle} className="pb-24">
              <Section background="white">
                  <AnimateIn stagger staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {loading ? (
                          Array.from({ length: 3 }).map((_, i) => <CardSkeleton key={`skeleton-post-${i}`} />)
                      ) : (
                          posts.map((post) => (
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
                                  <div className="mt-8 pt-6 border-t border-border">
                                      <Link 
                                          to={`/journal/${post.slug}`}
                                          className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent hover:underline inline-flex items-center gap-2"
                                      >
                                          Read Article <span className="text-sm">→</span>
                                      </Link>
                                  </div>
                              </Card>
                          ))
                      )}
                  </AnimateIn>

                  <CTASection />
              </Section>
            </div>
        </>
    );
}
