"use client";

import { parseInlineBold } from "@/lib/parseInlineBold";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export type FaqItem = { q: string; a: string };

interface FaqListProps {
  title: string;
  items: FaqItem[];
  id?: string;
  /** Two columns from the large breakpoint up. */
  columns?: 1 | 2;
}

export function FaqList({ title, items, id = "faq", columns = 1 }: FaqListProps) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <section
      id={id}
      className="scroll-mt-24 py-20 md:py-28 bg-white border-y border-border"
    >
      <div
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          columns === 2 ? "max-w-7xl" : "max-w-3xl"
        )}
      >
        <h2 className="text-[36px] font-bold leading-tight tracking-tight text-zinc-900 text-center mb-12">
          {title}
        </h2>
        <FadeIn>
          <div
            className={cn(
              "grid grid-cols-1 gap-4",
              columns === 2 && "lg:grid-cols-2 lg:items-start"
            )}
          >
            {items.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 open:bg-white open:shadow-sm"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-zinc-900 marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.q}
                </summary>
                <p className="mt-3 text-base text-zinc-600 leading-relaxed">
                  {parseInlineBold(item.a)}
                </p>
              </details>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
