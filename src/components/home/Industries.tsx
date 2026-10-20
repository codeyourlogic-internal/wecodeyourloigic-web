"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { BadgeCheck, ArrowRight } from "lucide-react";
import { homeIndustryIds } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function Industries() {
  const { t } = useTranslation();

  return (
    <section className="border-y border-border bg-zinc-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrowKey="homeIndustries.eyebrow"
          titleKey="homeIndustries.title"
          subtitleKey="homeIndustries.subtitle"
        />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {homeIndustryIds.map((id) => (
            <StaggerItem key={id}>
              <Link
                href={`/industries/#${id}`}
                className="block h-full rounded-2xl border border-border bg-white p-5 md:p-6 shadow-sm transition-colors hover:border-orange-300"
              >
                <article>
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
                    <div>
                      <h3 className="font-semibold text-zinc-900">
                        {t(`industries.cards.${id}.title`)}
                      </h3>
                      <p className="mt-1.5 text-sm text-zinc-500 leading-relaxed">
                        {t(`industries.cards.${id}.desc`)}
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <p className="mt-10 text-center">
          <Link
            href="/industries/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-500"
          >
            {t("homeIndustries.viewAll")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </p>
      </div>
    </section>
  );
}
