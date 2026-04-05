import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { Skeleton } from "@/components/ui/Skeleton";
import { getPostBySlug, urlFor } from "@/lib/sanity.client";
import { NotFound } from "@/pages/NotFound";

function formatPublishedDate(value?: string) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [isLoading, setIsLoading] = React.useState(true);
  const [post, setPost] = React.useState<any>(null);

  React.useEffect(() => {
    let active = true;

    async function fetchPost() {
      if (!slug) {
        setIsLoading(false);
        return;
      }

      try {
        const data = await getPostBySlug(slug);
        if (active) setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        if (active) setIsLoading(false);
      }
    }

    fetchPost();

    return () => {
      active = false;
    };
  }, [slug]);

  if (!isLoading && !post) {
    return <NotFound />;
  }

  if (!post) {
    return (
      <Section className="min-h-[60vh]">
        <Skeleton className="h-80 w-full rounded-none" />
      </Section>
    );
  }

  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(1600).url() : null;
  const authorName = post.author?.name || "BuiltExpert";
  const publishedDate = formatPublishedDate(post.publishedAt);

  return (
    <>
      <SEO
        title={post.title}
        description={`Journal entry from BuiltExpert: ${post.title}`}
        canonical={`/journal/${post.slug}`}
      />

      <Section className="pt-28">
        <div className="mx-auto max-w-4xl">
          <AnimateIn className="mb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-muted">
              Journal
            </p>
            <h1 className="mt-4 font-headline text-5xl font-light leading-[0.98] tracking-tighter text-ink uppercase md:text-7xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-[0.2em] text-muted">
              <span>{authorName}</span>
              {publishedDate && <span>{publishedDate}</span>}
            </div>
          </AnimateIn>

          {imageUrl && (
            <AnimateIn className="mb-12 overflow-hidden border border-border">
              <img
                src={imageUrl}
                alt={post.title}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimateIn>
          )}

          <AnimateIn className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight prose-p:text-zinc-600 prose-a:text-accent">
            <PortableText value={post.body || []} />
          </AnimateIn>

          <div className="mt-16 flex flex-col gap-4 sm:flex-row">
            <Link to="/journal">
              <Button variant="secondary" size="lg">
                Back to Journal
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Book A Call
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
