"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { parseInlineBold } from "@/lib/parseInlineBold";
import { cn } from "@/lib/utils";

interface WhyChooseItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface WhyChooseGridProps {
  title: string;
  subtitle?: string;
  items: WhyChooseItem[];
  /** Default 4 — use 2 for Figma-style 2×2 cloud cards */
  columns?: 2 | 4;
}

export function WhyChooseGrid({
  title,
  subtitle,
  items,
  columns = 4,
}: WhyChooseGridProps) {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden border-y border-border">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-orange-100/70 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-amber-100/50 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-[36px] font-bold leading-tight tracking-tight text-zinc-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base text-zinc-500 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        <StaggerContainer
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 gap-5",
            columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-4"
          )}
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <article
                  className={cn(
                    "h-full rounded-2xl border border-border border-l-4 border-l-orange-500 bg-white shadow-sm",
                    columns === 2 ? "p-6 md:p-8" : "p-5"
                  )}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3
                    className={cn(
                      "font-semibold text-zinc-900 mb-2",
                      columns === 2 ? "text-xl mb-3" : "text-base"
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className="text-base text-zinc-600 leading-relaxed">
                    {parseInlineBold(item.description)}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
