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
          <ol className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 xl:grid-cols-7">
            {DELIVERY_PROCESS_IDS.map((stepId, index) => {
              const isLast = index === DELIVERY_PROCESS_IDS.length - 1;
              return (
                <li key={stepId} className="min-w-0">
                  <div className="mb-4 flex items-center">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-600 text-sm font-bold text-white shadow-md shadow-orange-600/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {!isLast && (
                      <span
                        className="ml-3 hidden h-0.5 flex-1 bg-orange-200 xl:block"
                        aria-hidden
                      />
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    {t(`knowledge.process.steps.${stepId}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                    {t(`knowledge.process.steps.${stepId}.desc`)}
                  </p>
                </li>
              );
            })}
          </ol>
        </FadeIn>
      </div>
    </section>
  );
}
