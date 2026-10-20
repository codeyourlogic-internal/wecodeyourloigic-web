"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { getServiceIcon } from "@/components/services/iconMap";

interface IndustryItem {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

interface IndustriesGridProps {
  title: string;
  subtitle?: string;
  items: IndustryItem[];
}

export function IndustriesGrid({ title, subtitle, items }: IndustriesGridProps) {
  return (
    <section className="relative py-20 md:py-28 bg-orange-50/60 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(234,88,12,0.18) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-[36px] font-bold leading-tight tracking-tight text-zinc-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base text-zinc-500 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => {
            const Icon = getServiceIcon(item.icon);
            const body = <IndustryBody item={item} Icon={Icon} />;
            return (
              <StaggerItem key={item.title}>
                <article className="h-full rounded-2xl border border-border bg-white p-5 shadow-sm transition-colors hover:border-orange-300">
                  {item.href ? (
                    <Link href={item.href} className="block h-full">
                      {body}
                    </Link>
                  ) : (
                    body
                  )}
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

function IndustryBody({
  item,
  Icon,
}: {
  item: IndustryItem;
  Icon: ComponentType<{ className?: string }>;
}) {
  return (
    <>
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-base font-semibold text-zinc-900 mb-2">{item.title}</h3>
      <p className="text-base text-zinc-600 leading-relaxed">{item.description}</p>
    </>
  );
}
