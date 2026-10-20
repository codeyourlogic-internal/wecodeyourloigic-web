"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { parseInlineBold } from "@/lib/parseInlineBold";

interface WebAboutBlockProps {
  title: string;
  paragraphs: string[];
}

export function WebAboutBlock({ title, paragraphs }: WebAboutBlockProps) {
  return (
    <section className="py-20 md:py-28 bg-zinc-50 border-y border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-12 text-center">
          <h2 className="text-[36px] font-bold leading-tight tracking-tight text-zinc-900">
            {title}
          </h2>
        </div>
        <FadeIn>
          <div className="rounded-2xl border border-border bg-white p-8 md:p-10 shadow-sm">
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
