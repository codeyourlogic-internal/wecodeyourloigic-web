"use client";

import { useTranslation } from "react-i18next";
import { DELIVERY_PROCESS_IDS } from "@/data/knowledge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

interface DeliveryProcessProps {
  id?: string;
  className?: string;
}

export function DeliveryProcess({
  id = "delivery-process",
  className,
}: DeliveryProcessProps) {
  const { t } = useTranslation();

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-20 md:py-28 bg-white border-y border-border",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          titleKey="knowledge.process.title"
          subtitleKey="knowledge.process.subtitle"
        />
        <FadeIn>
          <ol className="mx-auto max-w-3xl">
            {DELIVERY_PROCESS_IDS.map((stepId, index) => {
              const isLast = index === DELIVERY_PROCESS_IDS.length - 1;
              return (
                <li key={stepId} className="flex gap-5 md:gap-6">
                  <div className="flex w-12 shrink-0 flex-col items-center">
                    <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-sm font-bold text-white shadow-md shadow-orange-600/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {!isLast && (
                      <div className="w-0.5 flex-1 min-h-8 bg-orange-200" aria-hidden />
                    )}
                  </div>
                  <div className={cn("flex-1", !isLast && "pb-8")}>
                    <article className="rounded-2xl border border-border bg-white p-5 md:p-6 shadow-sm">
                      <h3 className="text-lg md:text-xl font-semibold text-zinc-900">
                        {t(`knowledge.process.steps.${stepId}.title`)}
                      </h3>
                      <p className="mt-2 text-sm md:text-base text-zinc-600 leading-relaxed">
                        {t(`knowledge.process.steps.${stepId}.desc`)}
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
