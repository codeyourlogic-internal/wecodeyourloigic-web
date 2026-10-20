"use client";

import { useTranslation } from "react-i18next";
import { FadeIn } from "@/components/ui/FadeIn";
import { parseInlineBold } from "@/lib/parseInlineBold";

interface ServiceFaqProps {
  /** Locale key under services.*, e.g. "web" */
  serviceKey: string;
}

export function ServiceFaq({ serviceKey }: ServiceFaqProps) {
  const { t } = useTranslation();
  const items = t(`services.${serviceKey}.faq`, {
    returnObjects: true,
  }) as { q: string; a: string }[] | string;

  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-white border-y border-border">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-[36px] font-bold leading-tight tracking-tight text-zinc-900 text-center mb-12">
          {t("seoRelated.faqTitle")}
        </h2>
        <FadeIn>
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 open:bg-white open:shadow-sm"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-zinc-900 marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.q}
                </summary>
                <p className="mt-3 text-base text-zinc-600 leading-relaxed">
                  {parseInlineBold(item.a)}
                </p>
              </details>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
