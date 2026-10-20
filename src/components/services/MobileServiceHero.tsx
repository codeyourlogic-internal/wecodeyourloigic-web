"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CreditCard, Play, ShoppingBag, Zap } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { ServiceBackNav } from "@/components/services/ServiceBackNav";
import { cn } from "@/lib/utils";

interface ServiceCta {
  href: string;
  label: string;
}

interface MobileServiceHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCta: ServiceCta;
  secondaryCta?: ServiceCta;
  backgroundImage: string;
  backLabel?: string;
  currentLabel?: string;
}

type PhoneVariant = "ecommerce" | "fintech" | "fitness" | "entertainment";

const PHONE_VARIANTS: { variant: PhoneVariant; label: string; rotate: string }[] = [
  { variant: "ecommerce", label: "E-commerce", rotate: "-rotate-6" },
  { variant: "fintech", label: "Fintech", rotate: "-rotate-2" },
  { variant: "fitness", label: "Fitness", rotate: "rotate-2" },
  { variant: "entertainment", label: "Entertainment", rotate: "rotate-6" },
];

function CtaLink({ cta, children }: { cta: ServiceCta; children: ReactNode }) {
  if (cta.href.startsWith("#")) {
    return <a href={cta.href}>{children}</a>;
  }
  return <Link href={cta.href}>{children}</Link>;
}

function PhoneFrame({
  variant,
  label,
  rotate,
  className,
}: {
  variant: PhoneVariant;
  label: string;
  rotate: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group flex flex-col items-center gap-2 transition-transform duration-300 hover:-translate-y-1",
        rotate,
        className
      )}
    >
      <div className="relative w-[108px] sm:w-[120px] md:w-[132px]">
        <div
          className={cn(
            "relative aspect-[9/19] rounded-[1.35rem] border-[3px] border-zinc-700/90",
            "bg-zinc-900 shadow-[0_20px_40px_rgba(0,0,0,0.45)] overflow-hidden"
          )}
        >
          <div className="absolute left-1/2 top-1.5 z-10 h-1 w-8 -translate-x-1/2 rounded-full bg-zinc-800" />
          <div className="absolute inset-[3px] rounded-[1.1rem] overflow-hidden bg-zinc-950">
            <PhoneScreen variant={variant} />
          </div>
        </div>
      </div>
      <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-zinc-300/90">
        {label}
      </span>
    </div>
  );
}

function PhoneScreen({ variant }: { variant: PhoneVariant }) {
  switch (variant) {
    case "ecommerce":
      return (
        <div className="flex h-full flex-col bg-gradient-to-b from-orange-500/20 to-zinc-950 p-2">
          <div className="mb-2 flex items-center justify-between">
            <ShoppingBag className="h-3 w-3 text-orange-400" />
            <div className="h-1.5 w-6 rounded-full bg-zinc-700" />
          </div>
          <div className="mb-2 h-8 rounded-md bg-orange-500/30" />
          <div className="grid flex-1 grid-cols-2 gap-1">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="rounded-md bg-zinc-800/80 p-1">
                <div className="mb-1 aspect-square rounded bg-zinc-700/80" />
                <div className="h-1 w-full rounded bg-zinc-600" />
              </div>
            ))}
          </div>
        </div>
      );
    case "fintech":
      return (
        <div className="flex h-full flex-col bg-gradient-to-b from-emerald-500/15 to-zinc-950 p-2">
          <div className="mb-2 text-[8px] text-zinc-400">Balance</div>
          <div className="mb-3 text-[11px] font-bold text-white">$12,480</div>
          <div className="mb-2 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-700 p-2">
            <CreditCard className="mb-2 h-3 w-3 text-white/80" />
            <div className="h-1 w-12 rounded bg-white/40" />
            <div className="mt-1 h-1 w-8 rounded bg-white/30" />
          </div>
          <div className="mt-auto space-y-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-1 rounded bg-zinc-800/60 p-1">
                <div className="h-2 w-2 rounded-full bg-emerald-500/60" />
                <div className="h-1 flex-1 rounded bg-zinc-600" />
              </div>
            ))}
          </div>
        </div>
      );
    case "fitness":
      return (
        <div className="flex h-full flex-col items-center bg-gradient-to-b from-violet-500/15 to-zinc-950 p-2">
          <Zap className="mb-1 h-3 w-3 text-violet-400" />
          <div className="relative mb-2 flex h-14 w-14 items-center justify-center">
            <div className="absolute inset-0 rounded-full border-[3px] border-violet-500/30" />
            <div className="absolute inset-1 rounded-full border-[3px] border-violet-500/60 border-t-transparent" />
            <span className="text-[9px] font-bold text-white">8.2k</span>
          </div>
          <div className="mb-1 text-[8px] text-zinc-400">Steps today</div>
          <div className="mt-auto grid w-full grid-cols-3 gap-1">
            {[40, 65, 30].map((h, i) => (
              <div key={i} className="flex flex-col items-center justify-end h-8">
                <div
                  className="w-full rounded-t bg-violet-500/70"
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      );
    case "entertainment":
      return (
        <div className="flex h-full flex-col bg-gradient-to-b from-rose-500/15 to-zinc-950 p-2">
          <div className="relative mb-2 aspect-video rounded-md bg-zinc-800 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-600/40 to-zinc-900" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Play className="h-2.5 w-2.5 fill-white text-white" />
              </div>
            </div>
          </div>
          <div className="mb-1 h-1.5 w-3/4 rounded bg-zinc-700" />
          <div className="mb-2 h-1 w-1/2 rounded bg-zinc-800" />
          <div className="mt-auto grid grid-cols-3 gap-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="aspect-[4/3] rounded bg-zinc-800/80" />
            ))}
          </div>
        </div>
      );
  }
}

export function MobileServiceHero({
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage,
  backLabel,
  currentLabel,
}: MobileServiceHeroProps) {
  return (
    <section className="relative min-h-[78vh] lg:min-h-[88vh] flex flex-col items-center justify-center overflow-hidden pt-16">
      <Image
        src={backgroundImage}
        alt={`${title} — mobile app development by CodeYourLogic`}
        fill
        priority
        quality={75}
        sizes="100vw"
        className="object-cover object-center"
        title={title}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundColor:
            "color-mix(in oklab, var(--color-black) 75%, transparent)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
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
          <p className="text-base text-zinc-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 md:mb-16">
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

          <div className="hidden sm:flex items-end justify-center gap-3 md:gap-5 lg:gap-6">
            {PHONE_VARIANTS.map((phone, index) => (
              <PhoneFrame
                key={phone.variant}
                variant={phone.variant}
                label={phone.label}
                rotate={phone.rotate}
                className={cn(
                  index >= 2 && "hidden md:flex",
                  index < 2 && "scale-90 md:scale-100"
                )}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
