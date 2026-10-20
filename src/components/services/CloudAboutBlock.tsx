"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { parseInlineBold } from "@/lib/parseInlineBold";

export interface CloudAboutShot {
  label: string;
  image: string;
  paragraph: string;
}

interface CloudAboutBlockProps {
  title: string;
  subtitle?: string;
  intro: string;
  metricsTitle: string;
  metrics: string[];
  shots: CloudAboutShot[];
  closing?: string;
  /** When true, labels render as captions under images (blockchain Figma). */
  captionBelow?: boolean;
}

export function CloudAboutBlock({
  title,
  subtitle,
  intro,
  metricsTitle,
  metrics,
  shots,
  closing,
  captionBelow = false,
}: CloudAboutBlockProps) {
  return (
    <section className="py-20 md:py-28 bg-zinc-50 border-y border-border">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-14 text-center">
          <h2 className="text-[36px] font-bold leading-tight tracking-tight text-zinc-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base text-zinc-500 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <FadeIn>
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 md:p-12 shadow-sm flex flex-col gap-8">
            <p className="text-base text-zinc-600 leading-relaxed">
              {parseInlineBold(intro)}
            </p>

            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6 md:p-7">
              {metricsTitle ? (
                <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
                  {metricsTitle}
                </p>
              ) : null}
              <ul className={metricsTitle ? "mt-4 flex flex-col gap-2.5" : "flex flex-col gap-2.5"}>
                {metrics.map((metric) => (
                  <li key={metric} className="flex gap-2.5 items-start">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600"
                      aria-hidden
                    />
                    <span className="text-[15px] text-zinc-700 leading-relaxed">
                      {parseInlineBold(metric)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {shots.map((shot) => (
              <div key={shot.label} className="flex flex-col gap-3">
                {!captionBelow && (
                  <p className="text-sm font-semibold text-zinc-900">{shot.label}</p>
                )}
                <div className="relative h-[220px] sm:h-[280px] md:h-[320px] w-full overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
                  <Image
                    src={shot.image}
                    alt={shot.label}
                    fill
                    sizes="(max-width: 1100px) 100vw, 1100px"
                    className="object-cover object-top"
                  />
                </div>
                {captionBelow && (
                  <p className="text-[13px] text-zinc-500 leading-relaxed">
                    {shot.label}
                  </p>
                )}
                {shot.paragraph.split("\n\n").map((para) => (
                  <p
                    key={para.slice(0, 48)}
                    className="text-base text-zinc-600 leading-relaxed"
                  >
                    {parseInlineBold(para)}
                  </p>
                ))}
              </div>
            ))}

            {closing && (
              <p className="text-base text-zinc-600 leading-relaxed">
                {parseInlineBold(closing)}
              </p>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
