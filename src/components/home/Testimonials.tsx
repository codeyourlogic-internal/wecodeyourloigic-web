"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { reviewKeys } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const reviewPhotos: Record<(typeof reviewKeys)[number], { src: string; position: string }> = {
  r1: { src: "/images/testimonials/Ujjwal.jpeg", position: "object-[center_26%]" },
  r2: { src: "/images/testimonials/shushant.jpeg", position: "object-[center_15%]" },
  r3: { src: "/images/testimonials/Asad shahin.jpeg", position: "object-[70%_30%]" },
};

export function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-zinc-50 py-20 md:py-28">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-orange-100/70 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-amber-100/50 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrowKey="reviews.eyebrow"
          titleKey="reviews.title"
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewKeys.map((key) => (
            <StaggerItem key={key}>
              <article className="relative flex h-full flex-col rounded-2xl border border-zinc-200 border-l-4 border-l-orange-500 bg-white p-6 md:p-8 shadow-sm">
                <span
                  className="pointer-events-none absolute right-5 top-3 text-6xl font-serif leading-none text-orange-100 select-none"
                  aria-hidden
                >
                  &rdquo;
                </span>
                <p className="relative flex-1 text-base text-zinc-700 leading-relaxed">
                  &ldquo;{t(`reviews.${key}.quote`)}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-5">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-orange-500 bg-orange-600">
                    <Image
                      src={reviewPhotos[key].src}
                      alt=""
                      fill
                      sizes="64px"
                      className={`object-cover ${reviewPhotos[key].position}`}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900">
                      {t(`reviews.${key}.author`)}
                    </p>
                    <p className="text-sm text-zinc-500">
                      {t(`reviews.${key}.role`)}
                    </p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
