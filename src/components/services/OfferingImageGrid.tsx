"use client";

import { PhotoOfferingCard } from "@/components/services/PhotoOfferingCard";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export interface OfferingImageItem {
  title: string;
  description: string;
  image: string;
}

interface OfferingImageGridProps {
  title: string;
  subtitle?: string;
  items: OfferingImageItem[];
}

export function OfferingImageGrid({ title, subtitle, items }: OfferingImageGridProps) {
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
              <PhotoOfferingCard
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
