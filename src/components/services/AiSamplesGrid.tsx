"use client";

import Image from "next/image";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export interface AiSampleItem {
  title: string;
  description: string;
  image: string;
}

interface AiSamplesGridProps {
  label: string;
  items: AiSampleItem[];
}

export function AiSamplesGrid({ label, items }: AiSamplesGridProps) {
  return (
    <div className="mb-10 md:mb-12">
      <p className="mb-4 text-xl font-bold text-zinc-900">{label}</p>
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <StaggerItem key={item.title}>
            <article className="flex h-full flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
              <div className="relative h-[180px] w-full overflow-hidden rounded-xl bg-zinc-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm font-semibold text-zinc-900">{item.title}</h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">
                {item.description}
              </p>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
