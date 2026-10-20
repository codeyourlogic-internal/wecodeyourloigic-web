"use client";

import { useTranslation } from "react-i18next";
import { ENGINEERING_PRACTICE_IDS } from "@/data/knowledge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function EngineeringPractices({ id = "engineering-practices" }: { id?: string }) {
  const { t } = useTranslation();

  return (
    <section
      id={id}
      className="scroll-mt-24 py-20 md:py-28 bg-zinc-50 border-y border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          titleKey="knowledge.engineering.title"
          subtitleKey="knowledge.engineering.subtitle"
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ENGINEERING_PRACTICE_IDS.map((practiceId) => (
            <StaggerItem key={practiceId}>
              <article className="h-full rounded-2xl border border-border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-zinc-900">
                  {t(`knowledge.engineering.items.${practiceId}.title`)}
                </h3>
                <p className="mt-2 text-base text-zinc-600 leading-relaxed">
                  {t(`knowledge.engineering.items.${practiceId}.desc`)}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
