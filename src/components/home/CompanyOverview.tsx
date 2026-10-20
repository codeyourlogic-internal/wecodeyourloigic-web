"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { KNOWLEDGE_SERVICES, knowledgeCompany } from "@/data/knowledge";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CompanyOverview({ id = "company" }: { id?: string }) {
  const { t } = useTranslation();

  return (
    <section
      id={id}
      className="scroll-mt-24 py-20 md:py-28 bg-white border-y border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrowKey="knowledge.company.eyebrow"
          titleKey="knowledge.company.homeTitle"
          subtitleKey="knowledge.company.homeSubtitle"
        />
        <FadeIn>
          <div className="mx-auto max-w-3xl space-y-4 text-base text-zinc-600 leading-relaxed">
            <p>{t("knowledge.company.whoWeAre")}</p>
            <p>{t("knowledge.company.whoWeServe")}</p>
            <p>
              {knowledgeCompany.legalName} · {knowledgeCompany.address}
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {KNOWLEDGE_SERVICES.map((service) => (
              <li key={service.id}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-xl border border-zinc-200 bg-zinc-50 px-5 py-4 transition-colors hover:border-orange-300 hover:bg-orange-50/40"
                >
                  <span className="text-sm font-semibold text-zinc-900 group-hover:text-orange-700">
                      {t(service.nameKey)}
                    </span>
                    <span className="mt-1 text-sm text-zinc-500 line-clamp-3">
                      {t(service.summaryKey)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center">
            <Link
              href="/about/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-500"
            >
              {t("knowledge.company.readMore")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
