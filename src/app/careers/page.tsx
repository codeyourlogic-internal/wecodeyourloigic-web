"use client";

import { useTranslation } from "react-i18next";
import {
  Globe2,
  HeartPulse,
  GraduationCap,
  Clock3,
  BadgePercent,
  PartyPopper,
} from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { PageCTA } from "@/components/services/PageCTA";
import { CareerApplicationForm } from "@/components/careers/CareerApplicationForm";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { benefitKeys } from "@/data/site";

const CAREERS_HERO = "/images/careers/hero.png";

const benefitIcons = {
  remote: Globe2,
  health: HeartPulse,
  learning: GraduationCap,
  flexible: Clock3,
  equity: BadgePercent,
  events: PartyPopper,
} as const;

export default function CareersPage() {
  const { t } = useTranslation();

  return (
    <>
      <ServiceHero
        badge={t("careers.badge")}
        title={t("careers.title")}
        subtitle={t("careers.subtitle")}
        primaryCta={{
          href: "#apply",
          label: t("careers.ctaPrimary"),
        }}
        secondaryCta={{
          href: "#life",
          label: t("careers.ctaSecondary"),
        }}
        backgroundImage={CAREERS_HERO}
      />

      <section
        id="life"
        className="scroll-mt-24 py-20 md:py-28 bg-white border-b border-border"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <article className="rounded-2xl border border-zinc-200 bg-white p-8 md:p-10 shadow-sm">
              <h2 className="text-xl font-bold text-zinc-900">
                {t("careers.culture.title")}
              </h2>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                {t("careers.culture.desc")}
              </p>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-zinc-50 border-b border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-14 text-center">
            <h2 className="text-[36px] font-bold leading-tight tracking-tight text-zinc-900">
              {t("careers.benefits.title")}
            </h2>
            <p className="mt-4 text-base text-zinc-500 max-w-2xl mx-auto">
              {t("careers.benefits.subtitle")}
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefitKeys.map((key) => {
              const Icon = benefitIcons[key as keyof typeof benefitIcons];
              return (
                <StaggerItem key={key}>
                  <article className="flex h-full items-center gap-3 rounded-xl border border-zinc-200 bg-white px-5 py-4 shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-semibold text-zinc-900">
                      {t(`careers.benefits.${key}`)}
                    </p>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section
        id="apply"
        className="scroll-mt-24 py-20 md:py-28 bg-white border-b border-border"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-[36px] font-bold leading-tight tracking-tight text-zinc-900">
              {t("careers.apply.title")}
            </h2>
            <p className="mt-4 text-base text-zinc-500">
              {t("careers.apply.subtitle")}
            </p>
          </div>

          <FadeIn>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-sm">
              <CareerApplicationForm />
            </div>
          </FadeIn>
        </div>
      </section>

      <PageCTA
        title={t("careers.ctaTitle")}
        subtitle={t("careers.ctaSubtitle")}
        buttonLabel={t("careers.ctaButton")}
        href="#apply"
      />
    </>
  );
}
