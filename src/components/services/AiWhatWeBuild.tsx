"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { AiSamplesGrid, type AiSampleItem } from "@/components/services/AiSamplesGrid";

interface OfferingItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface AiWhatWeBuildProps {
  title: string;
  subtitle?: string;
  samplesLabel: string;
  samples: AiSampleItem[];
  offerings: OfferingItem[];
}

export function AiWhatWeBuild({
  title,
  subtitle,
  samplesLabel,
  samples,
  offerings,
}: AiWhatWeBuildProps) {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <AiSamplesGrid label={samplesLabel} items={samples} />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <article className="flex h-full flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange-200/80 bg-orange-50 text-orange-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
