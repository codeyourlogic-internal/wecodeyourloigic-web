"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { ServiceBackNav } from "@/components/services/ServiceBackNav";

interface ServiceCta {
  href: string;
  label: string;
}

interface ServiceHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCta: ServiceCta;
  secondaryCta?: ServiceCta;
  backgroundImage?: string;
  /** Descriptive alt for hero background (SEO + a11y) */
  imageAlt?: string;
  backLabel?: string;
  currentLabel?: string;
}

function CtaLink({ cta, children }: { cta: ServiceCta; children: ReactNode }) {
  if (cta.href.startsWith("#")) {
    return <a href={cta.href}>{children}</a>;
  }
  return <Link href={cta.href}>{children}</Link>;
}

export function ServiceHero({
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage,
  imageAlt,
  backLabel,
  currentLabel,
}: ServiceHeroProps) {
  if (backgroundImage) {
    return (
      <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden pt-16">
        <Image
          src={backgroundImage}
          alt={imageAlt || `${title} — CodeYourLogic`}
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
          title={imageAlt || title}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor:
              "color-mix(in oklab, var(--color-black) 75%, transparent)",
          }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <FadeIn>
            {backLabel && currentLabel && (
              <ServiceBackNav
                parentLabel={backLabel}
                currentLabel={currentLabel}
                tone="dark"
              />
            )}
            {badge && (
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
                {badge}
              </p>
            )}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
              {title}
            </h1>
            <p className="text-base md:text-lg text-zinc-200 max-w-2xl mx-auto mb-10 leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <CtaLink cta={primaryCta}>
                <Button
                  size="lg"
                  className="rounded-lg min-w-[180px] bg-orange-600 hover:bg-orange-500"
                >
                  {primaryCta.label}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </CtaLink>
              {secondaryCta && (
                <CtaLink cta={secondaryCta}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-lg min-w-[140px] border-white/70 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  >
                    {secondaryCta.label}
                  </Button>
                </CtaLink>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-32 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-600/15 via-orange-600/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          {backLabel && currentLabel && (
            <ServiceBackNav
              parentLabel={backLabel}
              currentLabel={currentLabel}
              tone="light"
            />
          )}
          {badge && (
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-700 mb-6">
              {badge}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CtaLink cta={primaryCta}>
              <Button size="lg">{primaryCta.label}</Button>
            </CtaLink>
            {secondaryCta && (
              <CtaLink cta={secondaryCta}>
                <Button size="lg" variant="outline">
                  {secondaryCta.label}
                </Button>
              </CtaLink>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
