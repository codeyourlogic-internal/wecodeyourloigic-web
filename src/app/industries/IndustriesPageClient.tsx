"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { industryCards } from "@/data/hire-resources";
import { getServicesForIndustry } from "@/data/knowledge";
import { ServiceHero } from "@/components/services/ServiceHero";
import { PageCTA } from "@/components/services/PageCTA";
import { getServiceIcon } from "@/components/services/iconMap";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const INDUSTRIES_HERO = "/images/ourservice/hero.png";

export default function IndustriesPageClient() {
  const { t } = useTranslation();

  return (
    <>
      <ServiceHero
        badge={t("knowledge.industries.badge")}
        title={t("knowledge.industries.pageTitle")}
        subtitle={t("knowledge.industries.pageSubtitle")}
        primaryCta={{ href: "/contact/", label: t("knowledge.industries.cta") }}
        secondaryCta={{
          href: "#industry-list",
          label: t("knowledge.industries.ctaSecondary"),
        }}
        backgroundImage={INDUSTRIES_HERO}
        imageAlt="Industries CodeYourLogic serves with custom software"
      />

      <section
        id="industry-list"
        className="scroll-mt-24 py-20 md:py-28 bg-zinc-50 border-y border-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industryCards.map((card) => {
              const Icon = getServiceIcon(card.icon);
              const related = getServicesForIndustry(card.id);
              return (
                <StaggerItem key={card.id}>
                  <article
                    id={card.id}
                    className="flex h-full scroll-mt-24 flex-col rounded-2xl border border-border bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-4 text-lg font-semibold text-zinc-900">
                      {t(`industries.cards.${card.id}.title`)}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                      {t(`industries.cards.${card.id}.desc`)}
                    </p>
                    <h3 className="mt-5 text-xs font-semibold uppercase tracking-wide text-orange-600">
                      {t("knowledge.industries.relatedServices")}
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {related.map((service) => (
                        <li key={service.id}>
                          <Link
                            href={service.href}
                            className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700 hover:border-orange-300 hover:text-orange-700"
                          >
                            {t(service.nameKey)}
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <PageCTA
        title={t("knowledge.industries.ctaTitle")}
        subtitle={t("knowledge.industries.ctaSubtitle")}
        buttonLabel={t("knowledge.industries.cta")}
      />
    </>
  );
}
