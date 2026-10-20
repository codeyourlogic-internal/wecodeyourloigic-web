"use client";

import { useTranslation } from "react-i18next";
import {
  GLOSSARY_IDS,
  PUBLISHED_CLAIM_IDS,
  knowledgeCompany,
} from "@/data/knowledge";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PublishedClaims({ id = "published-figures" }: { id?: string }) {
  const { t } = useTranslation();

  return (
    <section
      id={id}
      className="scroll-mt-24 py-20 md:py-28 bg-orange-50/60 border-y border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          titleKey="knowledge.claims.title"
          subtitleKey="knowledge.claims.subtitle"
        />
        <FadeIn>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PUBLISHED_CLAIM_IDS.map((claimId) => (
              <div
                key={claimId}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm"
              >
                <dt className="text-base font-semibold text-zinc-900">
                  {t(`knowledge.claims.items.${claimId}.title`)}
                </dt>
                <dd className="mt-2 text-base text-zinc-600 leading-relaxed">
                  {t(`knowledge.claims.items.${claimId}.desc`)}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}

export function Glossary({ id = "glossary" }: { id?: string }) {
  const { t } = useTranslation();

  return (
    <section
      id={id}
      className="scroll-mt-24 py-20 md:py-28 bg-zinc-50 border-y border-border"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          titleKey="knowledge.glossary.title"
          subtitleKey="knowledge.glossary.subtitle"
        />
        <FadeIn>
          <dl className="space-y-6">
            {GLOSSARY_IDS.map((termId) => (
              <div
                key={termId}
                id={`term-${termId}`}
                className="scroll-mt-24 rounded-2xl border border-border bg-white p-6 shadow-sm"
              >
                <dt className="text-lg font-semibold text-zinc-900">
                  {t(`knowledge.glossary.items.${termId}.term`)}
                </dt>
                <dd className="mt-2 text-base text-zinc-600 leading-relaxed">
                  {t(`knowledge.glossary.items.${termId}.def`)}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm text-zinc-500">
            {knowledgeCompany.legalName} · {knowledgeCompany.trademark}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
