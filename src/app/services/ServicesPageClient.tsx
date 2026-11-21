"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import {
  SERVICES_HERO_IMAGE,
  servicesPageCards,
} from "@/data/services-page";
import { industryCards } from "@/data/hire-resources";
import { ServiceHero } from "@/components/services/ServiceHero";
import { IndustriesGrid } from "@/components/services/IndustriesGrid";
import { PageCTA } from "@/components/services/PageCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { getServiceIcon } from "@/components/services/iconMap";

export function ServicesPageClient() {
  const { t } = useTranslation();

  const industryItems = industryCards.map((card) => ({
    icon: card.icon,
    title: t(`industries.cards.${card.id}.title`),
    description: t(`industries.cards.${card.id}.desc`),
    href: `/industries/#${card.id}`,
  }));

  return (
    <>
      <ServiceHero
        badge={t("services.heroBadge")}
        title={t("services.title")}
        subtitle={t("services.subtitle")}
        primaryCta={{ href: "/contact", label: t("services.heroCtaPrimary") }}
        secondaryCta={{ href: "#services-grid", label: t("services.heroCtaSecondary") }}
        backgroundImage={SERVICES_HERO_IMAGE}
      />

      <section
        id="services-grid"
        className="py-20 md:py-28 bg-zinc-50 border-y border-border scroll-mt-24"
      >
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            titleKey="services.gridTitle"
            subtitleKey="services.gridSubtitle"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesPageCards.map((card) => {
              const Icon = getServiceIcon(card.icon);

              return (
                <StaggerItem key={card.id}>
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                    <div className="flex flex-1 flex-col p-5 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-600 text-white">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h3 className="text-lg font-semibold leading-snug text-zinc-900">
                          {t(`services.listing.${card.id}.title`)}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm text-zinc-600 leading-snug">
                        {t(`services.listing.${card.id}.desc`)}
                      </p>
                      <p className="mt-2 text-xs font-medium text-orange-600">
                        {card.tags.join(" • ")}
                      </p>
                    </div>

                    <div className="relative mx-5 aspect-[2/1] overflow-hidden rounded-xl bg-zinc-100">
                      <Image
                        src={card.image}
                        alt={t(`services.listing.${card.id}.title`)}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>

                    <div className="px-5 pb-4 pt-3">
                      <Link
                        href={card.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-500"
                      >
                        {t("services.learnMore")}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <IndustriesGrid
        title={t("services.industriesTitle")}
        subtitle={t("services.industriesSubtitle")}
        items={industryItems}
      />

      <PageCTA
        title={t("services.pageCtaTitle")}
        subtitle={t("services.pageCtaSubtitle")}
        buttonLabel={t("services.pageCtaButton")}
      />
    </>
  );
}
