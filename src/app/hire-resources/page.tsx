"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import {
  HIRE_HERO_IMAGE,
  hireRoles,
  industryCards,
} from "@/data/hire-resources";
import { HIRE_ENGAGEMENT_IDS } from "@/data/knowledge";
import { ServiceHero } from "@/components/services/ServiceHero";
import { IndustriesGrid } from "@/components/services/IndustriesGrid";
import { PageCTA } from "@/components/services/PageCTA";
import { HireHowItWorks } from "@/components/hire/HireHowItWorks";
import { HireRoleCard } from "@/components/hire/HireRoleCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { ServiceKnowledgeBand } from "@/components/knowledge/ServiceKnowledgeBand";
import { FaqList, type FaqItem } from "@/components/knowledge/FaqList";
import { TechStackDisclaimer } from "@/components/knowledge/TechStackDisclaimer";
import { RelatedServices } from "@/components/seo/RelatedServices";

export default function HireResourcesPage() {
  const { t } = useTranslation();
  const faq = t("hireResources.faq", { returnObjects: true }) as FaqItem[];

  const industryItems = industryCards.map((card) => ({
    icon: card.icon,
    title: t(`industries.cards.${card.id}.title`),
    description: t(`industries.cards.${card.id}.desc`),
    href: `/industries/#${card.id}`,
  }));

  return (
    <>
      <ServiceHero
        badge={t("hireResources.badge")}
        title={t("hireResources.title")}
        subtitle={t("hireResources.subtitle")}
        primaryCta={{
          href: "/contact?interest=hire",
          label: t("hireResources.hireNow"),
        }}
        secondaryCta={{
          href: "#hire-roles",
          label: t("hireResources.cta"),
        }}
        backgroundImage={HIRE_HERO_IMAGE}
      />

      <section id="hire-roles" className="scroll-mt-24 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            titleKey="hireResources.rolesTitle"
            subtitleKey="hireResources.rolesSubtitle"
          />

          <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {hireRoles.map((role) => (
              <StaggerItem key={role.id}>
                <HireRoleCard
                  role={role}
                  title={t(`hireResources.roles.${role.id}.title`)}
                  description={t(`hireResources.roles.${role.id}.desc`)}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="mt-8 max-w-3xl mx-auto text-center">
            <TechStackDisclaimer text={t("hireResources.techDisclaimer")} />
          </div>
        </div>
      </section>

      <section
        id="engagement-model"
        className="scroll-mt-24 py-20 md:py-28 bg-zinc-50 border-y border-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            titleKey="hireResources.engagementTitle"
            subtitleKey="hireResources.engagementSubtitle"
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {HIRE_ENGAGEMENT_IDS.map((id) => (
              <StaggerItem key={id}>
                <article className="h-full rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {t(`hireResources.engagement.${id}.title`)}
                  </h3>
                  <p className="mt-2 text-base text-zinc-600 leading-relaxed">
                    {t(`hireResources.engagement.${id}.desc`)}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <HireHowItWorks />

      <section className="bg-white pb-12">
        <p className="mx-auto max-w-3xl px-4 text-center text-sm text-zinc-500 leading-relaxed">
          {t("hireResources.onboardingNote")}{" "}
          <Link
            href="/about/#delivery-process"
            className="inline-flex items-center gap-1 font-semibold text-orange-600 hover:text-orange-500"
          >
            {t("hireResources.processLink")}
            <ArrowRight className="h-3 w-3" />
          </Link>
        </p>
      </section>

      <IndustriesGrid
        title={t("hireResources.industriesTitle")}
        subtitle={t("hireResources.industriesSubtitle")}
        items={industryItems}
      />

      <ServiceKnowledgeBand slug="hire-resources" includeTechStack={false} />
      <FaqList
        title={t("seoRelated.faqTitle")}
        items={Array.isArray(faq) ? faq : []}
      />
      <RelatedServices excludeSlug="hire-resources" />

      <PageCTA
        title={t("hireResources.ctaTitle")}
        subtitle={t("hireResources.ctaSubtitle")}
        buttonLabel={t("hireResources.ctaButton")}
      />
    </>
  );
}
