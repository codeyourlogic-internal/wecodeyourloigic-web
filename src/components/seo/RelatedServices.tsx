"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import {
  getRelatedServices,
  KNOWLEDGE_SERVICES,
  type KnowledgeServiceId,
} from "@/data/knowledge";
import { FadeIn } from "@/components/ui/FadeIn";

interface RelatedServicesProps {
  /** Current service slug to exclude from the list */
  excludeSlug?: string;
  limit?: number;
}

export function RelatedServices({
  excludeSlug,
  limit = 6,
}: RelatedServicesProps) {
  const { t } = useTranslation();
  const relatedFromGraph =
    excludeSlug &&
    KNOWLEDGE_SERVICES.some((s) => s.id === excludeSlug)
      ? getRelatedServices(excludeSlug as KnowledgeServiceId)
      : KNOWLEDGE_SERVICES.filter((s) => s.id !== excludeSlug);

  const items = relatedFromGraph.slice(0, limit);

  return (
    <section className="py-20 md:py-28 bg-zinc-50 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-[36px] font-bold leading-tight tracking-tight text-zinc-900">
            {t("seoRelated.title")}
          </h2>
          <p className="mt-4 text-base text-zinc-500 max-w-2xl mx-auto">
            {t("seoRelated.subtitle")}
          </p>
        </div>

        <FadeIn>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((service) => (
              <li key={service.id}>
                <Link
                  href={service.href}
                  title={t(service.nameKey)}
                  className="group flex h-full items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-white px-5 py-4 shadow-sm transition-colors hover:border-orange-300 hover:bg-orange-50/40"
                >
                  <span>
                    <span className="block text-sm font-semibold text-zinc-900 group-hover:text-orange-700">
                      {t(service.nameKey)}
                    </span>
                    <span className="mt-1 block text-sm text-zinc-500 line-clamp-2">
                      {t(service.summaryKey)}
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-orange-600 opacity-70 group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
