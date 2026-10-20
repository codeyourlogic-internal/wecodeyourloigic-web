"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { homeSolutions } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function SolutionsPortfolio() {
  const { t } = useTranslation();

  return (
    <section className="border-y border-border bg-zinc-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrowKey="homePortfolio.eyebrow"
          titleKey="homePortfolio.title"
          subtitleKey="homePortfolio.subtitle"
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeSolutions.map((item) => (
            <StaggerItem key={item.id}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                <Link href={item.href} className="flex h-full flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                  <Image
                    src={item.image}
                    alt={t(`homePortfolio.items.${item.id}.title`)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {t(`homePortfolio.items.${item.id}.title`)}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-zinc-600 leading-relaxed">
                    {t(`homePortfolio.items.${item.id}.desc`)}
                  </p>
                  <div className="mt-4 border-t border-zinc-100 pt-4">
                    <p className="text-xs font-semibold text-zinc-900">
                      {t("homePortfolio.impactLabel")}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500 leading-relaxed">
                      {t(`homePortfolio.items.${item.id}.impact`)}
                    </p>
                  </div>
                </div>
                </Link>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-500"
          >
            {t("homePortfolio.viewAll")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
