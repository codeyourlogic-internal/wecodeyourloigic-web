"use client";

import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";
import { homeWhyChooseKeys } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <section className="border-y border-border bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrowKey="whyChoose.eyebrow"
          titleKey="whyChoose.title"
          subtitleKey="whyChoose.subtitle"
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {homeWhyChooseKeys.map((key) => (
            <StaggerItem key={key}>
              <article className="h-full rounded-2xl border border-border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <Check className="h-5 w-5" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {t(`whyChoose.${key}.title`)}
                  </h3>
                </div>
                <p className="mt-3 text-base text-zinc-600 leading-relaxed">
                  {t(`whyChoose.${key}.desc`)}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
