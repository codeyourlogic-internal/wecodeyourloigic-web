"use client";

import { useTranslation } from "react-i18next";
import { stats } from "@/data/site";
import { useCounter } from "@/hooks/useCounter";
import { useInView } from "@/hooks/useInView";
import { FadeIn } from "@/components/ui/FadeIn";

function StatCounter({
  id,
  value,
  suffix,
}: {
  id: string;
  value: number;
  suffix: string;
}) {
  const { t } = useTranslation();
  const { ref, isInView } = useInView();
  const count = useCounter(value, 2000, isInView);

  return (
    <div ref={ref} className="text-center px-2">
      <div className="text-4xl md:text-5xl font-bold text-orange-600">
        {count}
        {suffix}
      </div>
      <p className="mt-3 text-sm md:text-base font-semibold text-zinc-900">
        {t(`stats.${id}.title`)}
      </p>
      <p className="mt-1.5 text-xs md:text-sm text-zinc-500">
        {t(`stats.${id}.desc`)}
      </p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {stats.map((stat) => (
              <StatCounter
                key={stat.id}
                id={stat.id}
                value={stat.value}
                suffix={stat.suffix}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
