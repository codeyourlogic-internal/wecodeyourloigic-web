"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { parseInlineBold } from "@/lib/parseInlineBold";

interface AboutBlockProps {
  title: string;
  paragraphs: string[];
}

export function AboutBlock({ title, paragraphs }: AboutBlockProps) {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-[36px] font-bold leading-tight tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {title}
          </h2>
        </div>
        <FadeIn>
          <GlassCard hover={false} className="flex flex-col gap-4">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed text-base">
                {parseInlineBold(paragraph)}
              </p>
            ))}
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
}
