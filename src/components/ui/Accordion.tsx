import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

export interface AccordionProps {
  items: { title: string; content: React.ReactNode }[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("w-full space-y-4", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="rounded-xl bg-md3-surface-container-lowest px-6 py-4 shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-md3-primary focus-visible:ring-offset-2"
              aria-expanded={isOpen}
            >
              <span className="font-headline text-lg font-semibold text-md3-on-surface">
                {item.title}
              </span>
              <ChevronDownIcon
                className={cn(
                  "h-5 w-5 shrink-0 text-md3-on-surface-variant transition-transform duration-300",
                  { "rotate-180": isOpen },
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 text-md3-on-surface-variant leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
