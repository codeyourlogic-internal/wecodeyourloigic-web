"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { parseInlineBold } from "@/lib/parseInlineBold";

interface RichAboutBlockProps {
  title: string;
  subtitle?: string;
  paragraphs: string[];
}

export function RichAboutBlock({ title, subtitle, paragraphs }: RichAboutBlockProps) {
  return (
    <section className="py-20 md:py-28 bg-zinc-50 border-y border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-12 text-center">
          <h2 className="text-[36px] font-bold leading-tight tracking-tight text-zinc-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base text-zinc-500 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        <FadeIn>
          <div className="rounded-2xl border border-zinc-100 bg-white p-8 md:p-10 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
            <div className="flex flex-col gap-5">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base text-zinc-600 leading-relaxed">
                  {parseInlineBold(paragraph)}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
