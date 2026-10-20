"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export interface OfferingTextItem {
  title: string;
  description: string;
}

interface OfferingTextGridProps {
  title: string;
  subtitle?: string;
  items: OfferingTextItem[];
}

export function OfferingTextGrid({ title, subtitle, items }: OfferingTextGridProps) {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <article className="h-full rounded-2xl border border-zinc-100 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
                <h3 className="text-base font-semibold text-zinc-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-base text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
