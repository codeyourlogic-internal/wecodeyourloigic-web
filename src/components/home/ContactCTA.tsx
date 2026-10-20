"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function ContactCTA() {
  const { t } = useTranslation();
  const trustItems = t("cta.trust", { returnObjects: true }) as string[];

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-10 md:p-16 lg:p-20 text-center">
            <Image
              src="/images/Frame.png"
              alt="Contact CodeYourLogic for custom software development and engineering services"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
              title="Start your software project"
            />
            <div className="absolute inset-0 bg-black/35" aria-hidden />
            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-black/30 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-400">
                {t("cta.badge")}
              </span>

              <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                {t("cta.title")}
              </h2>

              <p className="mt-5 text-base md:text-lg text-zinc-300 leading-relaxed">
                {t("cta.subtitle")}
              </p>

              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link href="/contact" data-track="footer_cta_primary" data-track-location="home_contact_cta">
                  <Button
                    size="lg"
                    className="rounded-lg min-w-[240px] bg-orange-600 hover:bg-orange-500 shadow-lg shadow-orange-600/40"
                  >
                    {t("cta.button")}
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/services" data-track="footer_cta_secondary" data-track-location="home_contact_cta">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-lg min-w-[160px] border-white/30 bg-zinc-900/60 text-white hover:bg-white/10 hover:text-white"
                  >
                    {t("cta.secondary")}
                  </Button>
                </Link>
              </div>

              {Array.isArray(trustItems) && trustItems.length > 0 && (
                <ul className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                  {trustItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-zinc-400"
                    >
                      <Check
                        className="h-4 w-4 shrink-0 text-white"
                        strokeWidth={2.5}
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
