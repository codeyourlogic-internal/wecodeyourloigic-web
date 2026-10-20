"use client";

import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { hireSteps } from "@/data/hire-resources";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export function HireHowItWorks() {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          titleKey="hireResources.howTitle"
          subtitleKey="hireResources.howSubtitle"
        />

        <FadeIn>
          <ol className="mx-auto max-w-3xl">
            {hireSteps.map((stepId, index) => {
              const isLast = index === hireSteps.length - 1;
              return (
                <li key={stepId} className="flex gap-5 md:gap-6">
                  <div className="flex w-12 shrink-0 flex-col items-center">
                    <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-sm font-bold text-white shadow-md shadow-orange-600/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {!isLast && (
                      <div
                        className="flex flex-1 flex-col items-center py-1"
                        aria-hidden
                      >
                        <div className="w-0.5 flex-1 min-h-6 bg-orange-500" />
                        <ChevronDown
                          className="h-4 w-4 -my-0.5 text-orange-500"
                          strokeWidth={3}
                        />
                        <div className="w-0.5 flex-1 min-h-6 bg-orange-500" />
                      </div>
                    )}
                  </div>
                  <div className={cn("flex-1", !isLast && "pb-8")}>
                    <article className="rounded-2xl border border-border bg-white p-5 md:p-6 shadow-sm">
                      <h3 className="text-lg md:text-xl font-semibold text-zinc-900">
                        {t(`hireResources.steps.${stepId}.title`)}
                      </h3>
                      <p className="mt-2 text-sm md:text-base text-zinc-600 leading-relaxed">
                        {t(`hireResources.steps.${stepId}.desc`)}
                      </p>
                    </article>
                  </div>
                </li>
              );
            })}
          </ol>
        </FadeIn>
      </div>
    </section>
  );
}
