import * as React from "react";
import { Search } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { cn } from "@/lib/utils";
import type { FAQEntry } from "@/data/detailPages";

export interface FAQSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items: FAQEntry[];
  className?: string;
  categories?: string[];
}

export function FAQSection({
  eyebrow = "FAQ",
  title,
  description,
  items,
  className,
  categories,
}: FAQSectionProps) {
  const [query, setQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState<string>("all");

  const filtered = React.useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${item.question} ${item.answer}`.toLowerCase().includes(normalizedQuery);
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [activeCategory, items, query]);

  const availableCategories =
    categories ??
    Array.from(new Set(items.map((item) => item.category).filter(Boolean) as string[]));

  const accordionItems = filtered.map((item) => ({
    title: item.question,
    content: <p className="text-sm leading-relaxed text-md3-on-surface-variant/80">{item.answer}</p>,
  }));

  return (
    <section className={cn("site-container section-py", className)}>
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
        {/* Left Column: Heading Block (Sticky) */}
        <AnimateIn className="lg:sticky lg:top-32">
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.4em] text-md3-primary">
            {eyebrow}
          </p>
          <h2 className="font-headline text-4xl font-light leading-[1.05] tracking-tighter text-md3-on-surface sm:text-5xl lg:text-7xl">
            {title}
          </h2>
          {description && (
            <p className="mt-8 text-lg leading-relaxed text-md3-on-surface-variant sm:text-xl">
              {description}
            </p>
          )}
          
          <div className="mt-10 hidden h-px w-24 bg-md3-outline-variant lg:block" aria-hidden />
        </AnimateIn>

        {/* Right Column: Interaction Block */}
        <div>
          <AnimateIn transition={{ delay: 0.2 }}>
            <div className="rounded-[2rem] border border-md3-outline-variant bg-md3-surface-container-low p-6 sm:p-8">
              <div className="flex flex-col gap-6">
                {/* Search Bar - Control Panel Style */}
                <label className="relative block">
                  <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-md3-on-surface-variant" aria-hidden />
                  <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search Frequently Asked Questions"
                    className="w-full rounded-2xl border border-md3-outline-variant bg-white px-11 py-4 text-sm text-md3-on-surface outline-none transition-all focus:border-md3-primary focus:ring-4 focus:ring-md3-primary/5"
                  />
                </label>

                {/* Category Filters */}
                {availableCategories.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveCategory("all")}
                      className={cn(
                        "rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.24em] transition-all",
                        activeCategory === "all"
                          ? "border-md3-primary bg-md3-primary text-white shadow-lg shadow-md3-primary/10"
                          : "border-md3-outline-variant bg-white text-md3-on-surface-variant hover:border-md3-primary hover:text-md3-primary",
                      )}
                    >
                      All
                    </button>
                    {availableCategories.map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                          "rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.24em] transition-all",
                          activeCategory === category
                            ? "border-md3-primary bg-md3-primary text-white shadow-lg shadow-md3-primary/10"
                            : "border-md3-outline-variant bg-white text-md3-on-surface-variant hover:border-md3-primary hover:text-md3-primary",
                        )}
                      >
                        {category.replace(/-/g, " ")}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </AnimateIn>

          {/* Accordion List */}
          <AnimateIn className="mt-8" transition={{ delay: 0.3 }}>
            <Accordion
              items={accordionItems.length > 0 ? accordionItems : [{ title: "No results found", content: <p>Try a different search or category.</p> }]}
              className="space-y-4"
            />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
