"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/ui/FadeIn";

interface TechCategory {
  label: string;
  items: string[];
}

interface TechStackBlockProps {
  title: string;
  subtitle?: string;
  categories: TechCategory[];
  disclaimer?: string;
}

export function TechStackBlock({
  title,
  subtitle,
  categories,
  disclaimer,
}: TechStackBlockProps) {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-[36px] font-bold leading-tight tracking-tight text-zinc-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base text-zinc-500 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          {disclaimer && (
            <p className="mt-4 text-sm text-zinc-500 max-w-3xl mx-auto leading-relaxed">
              {disclaimer}
            </p>
          )}
        </div>
        <FadeIn>
          <GlassCard hover={false} className="divide-y divide-border dark:divide-white/10">
            {categories.map((category) => (
              <div
                key={category.label}
                className="py-5 first:pt-0 last:pb-0 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-3 lg:gap-8 lg:items-baseline"
              >
                <span className="text-sm font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                  {category.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground dark:border-white/10 dark:bg-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
}
