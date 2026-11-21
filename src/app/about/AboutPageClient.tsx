"use client";

import { useTranslation } from "react-i18next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { DeliveryProcess } from "@/components/knowledge/DeliveryProcess";
import { FaqList, type FaqItem } from "@/components/knowledge/FaqList";
import { PageCTA } from "@/components/services/PageCTA";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { knowledgeCompany } from "@/data/knowledge";

const ABOUT_HERO = "/images/technologies/hero.png";

export default function AboutPageClient() {
  const { t } = useTranslation();
  const faq = t("knowledge.faq.items", {
    returnObjects: true,
  }) as FaqItem[];

  return (
    <>
      <ServiceHero
        badge={t("knowledge.company.badge")}
        title={t("knowledge.company.title")}
        subtitle={t("knowledge.company.subtitle")}
        primaryCta={{ href: "/contact/", label: t("knowledge.company.cta") }}
        secondaryCta={{
          href: "#company-profile",
          label: t("knowledge.company.ctaSecondary"),
        }}
        backgroundImage={ABOUT_HERO}
        imageAlt="CodeYourLogic software engineering company knowledge and capabilities"
      />

      <section
        id="company-profile"
        className="scroll-mt-24 py-20 md:py-28 bg-white border-y border-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            titleKey="knowledge.company.profileTitle"
            subtitleKey="knowledge.company.positioning"
          />
          <FadeIn>
            <div className="mx-auto max-w-3xl space-y-4 text-base text-zinc-600 leading-relaxed">
              <p>{t("knowledge.company.whoWeAre")}</p>
              <p>{t("knowledge.company.whoWeServe")}</p>
              <p>{t("knowledge.company.legalNote")}</p>
            </div>
            <dl className="mt-10 mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <dt className="font-semibold text-zinc-900">
                  {t("knowledge.company.fields.legalName")}
                </dt>
                <dd className="mt-1 text-zinc-600">{knowledgeCompany.legalName}</dd>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <dt className="font-semibold text-zinc-900">
                  {t("knowledge.company.fields.brand")}
                </dt>
                <dd className="mt-1 text-zinc-600">{knowledgeCompany.trademark}</dd>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <dt className="font-semibold text-zinc-900">
                  {t("knowledge.company.fields.email")}
                </dt>
                <dd className="mt-1 text-zinc-600">
                  <a
                    href={`mailto:${knowledgeCompany.email}`}
                    className="text-orange-600 hover:text-orange-500"
                  >
                    {knowledgeCompany.email}
                  </a>
                </dd>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <dt className="font-semibold text-zinc-900">
                  {t("knowledge.company.fields.phone")}
                </dt>
                <dd className="mt-1 text-zinc-600">{knowledgeCompany.phone}</dd>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 sm:col-span-2">
                <dt className="font-semibold text-zinc-900">
                  {t("knowledge.company.fields.address")}
                </dt>
                <dd className="mt-1 text-zinc-600">{knowledgeCompany.address}</dd>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <dt className="font-semibold text-zinc-900">
                  {t("knowledge.company.fields.hours")}
                </dt>
                <dd className="mt-1 text-zinc-600">{knowledgeCompany.hours}</dd>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <dt className="font-semibold text-zinc-900">
                  {t("knowledge.company.fields.website")}
                </dt>
                <dd className="mt-1 text-zinc-600">
                  <a
                    href={knowledgeCompany.url}
                    className="text-orange-600 hover:text-orange-500"
                  >
                    {knowledgeCompany.url}
                  </a>
                </dd>
              </div>
            </dl>
          </FadeIn>
        </div>
      </section>

      <DeliveryProcess />

      <FaqList
        title={t("knowledge.faq.title")}
        items={Array.isArray(faq) ? faq : []}
        columns={2}
      />

      <PageCTA
        title={t("knowledge.company.ctaTitle")}
        subtitle={t("knowledge.company.ctaSubtitle")}
        buttonLabel={t("knowledge.company.cta")}
      />
    </>
  );
}
