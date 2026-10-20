"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import {
  getIndustriesForService,
  getKnowledgeService,
  type KnowledgeServiceId,
} from "@/data/knowledge";
import { servicePages, type ServiceSlug } from "@/data/service-pages";
import { TechStackBlock } from "@/components/services/TechStackBlock";
import { FadeIn } from "@/components/ui/FadeIn";

interface ServiceKnowledgeBandProps {
  slug: KnowledgeServiceId;
  includeTechStack?: boolean;
}

export function ServiceKnowledgeBand({
  slug,
  includeTechStack = true,
}: ServiceKnowledgeBandProps) {
  const { t } = useTranslation();
  const service = getKnowledgeService(slug);
  const industryIds = getIndustriesForService(slug);
  const techCategories =
    includeTechStack && slug !== "hire-resources"
      ? servicePages[slug as ServiceSlug].techStack.map((cat) => ({
          label: t(`services.${service.seoKey}.techStack.${cat.id}`),
          items: cat.items,
        }))
      : [];

  return (
    <>
      {includeTechStack && techCategories.length > 0 && (
        <div id="tech-stack" className="scroll-mt-24">
          <TechStackBlock
            title={t("services.detail.techStack")}
            subtitle={t("services.detail.techStackSubtitle")}
            categories={techCategories}
            disclaimer={t("knowledge.techDisclaimer")}
          />
        </div>
      )}

      <section className="py-20 md:py-28 bg-zinc-50 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[36px] font-bold leading-tight tracking-tight text-zinc-900 text-center">
              {t("knowledge.industries.relatedTitle")}
            </h2>
            <p className="mt-4 text-base text-zinc-500 max-w-3xl mx-auto text-center">
              {t("knowledge.industries.relatedSubtitle")}
            </p>
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industryIds.map((id) => (
                <li key={id}>
                  <Link
                    href={`/industries/#${id}`}
                    className="group flex h-full items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-white px-5 py-4 shadow-sm transition-colors hover:border-orange-300 hover:bg-orange-50/40"
                  >
                    <span>
                      <span className="block text-sm font-semibold text-zinc-900 group-hover:text-orange-700">
                        {t(`industries.cards.${id}.title`)}
                      </span>
                      <span className="mt-1 block text-sm text-zinc-500 line-clamp-2">
                        {t(`industries.cards.${id}.desc`)}
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-orange-600 opacity-70 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center">
              <Link
                href="/about/#delivery-process"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-500"
              >
                {t("knowledge.process.homeLink")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
