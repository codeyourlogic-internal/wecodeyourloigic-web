"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

interface ProcessStep {
  title: string;
  description?: string;
}

interface ProcessRowProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
}

export function ProcessRow({ title, subtitle, steps }: ProcessRowProps) {
  return (
    <section className="relative py-20 md:py-28 bg-orange-50/60 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(234,88,12,0.18) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
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
        <FadeIn>
          <div
            className={cn(
              "flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-thin",
              "md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-visible md:pb-0"
            )}
          >
            {steps.map((step, index) => (
              <article
                key={step.title}
                className={cn(
                  "min-w-[200px] shrink-0 snap-start rounded-2xl border border-zinc-100",
                  "bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]",
                  "md:min-w-0 md:shrink"
                )}
              >
                <div className="mb-3 text-sm font-bold text-orange-600">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-sm font-semibold text-zinc-900 leading-snug">
                  {step.title}
                </h3>
                {step.description && (
                  <p className="mt-2 text-base text-zinc-500 leading-relaxed">
                    {step.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
