"use client";

import Image from "next/image";
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
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
                <h3 className="text-base font-semibold text-zinc-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-base text-zinc-600 leading-relaxed mb-4 flex-1">
                  {item.description}
                </p>
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-zinc-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
