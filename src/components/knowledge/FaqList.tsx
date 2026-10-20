"use client";

import { parseInlineBold } from "@/lib/parseInlineBold";
import { FadeIn } from "@/components/ui/FadeIn";

export type FaqItem = { q: string; a: string };

interface FaqListProps {
  title: string;
  items: FaqItem[];
  id?: string;
}

export function FaqList({ title, items, id = "faq" }: FaqListProps) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <section
      id={id}
      className="scroll-mt-24 py-20 md:py-28 bg-white border-y border-border"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-[36px] font-bold leading-tight tracking-tight text-zinc-900 text-center mb-12">
          {title}
        </h2>
        <FadeIn>
          <div className="flex flex-col gap-4">
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
