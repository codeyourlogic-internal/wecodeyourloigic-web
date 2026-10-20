"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
  Compass,
  Layers,
  Target,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import {
  ENGINEERING_SERVICE_IDS,
  getKnowledgeService,
  getServiceTechStack,
} from "@/data/knowledge";

const TECH_HERO = "/images/technologies/hero.png";

const processSteps = [
  {
    key: "discover",
    image: "/images/technologies/process-discover.png",
  },
  {
    key: "build",
    image: "/images/technologies/process-build.png",
  },
  {
    key: "deliver",
    image: "/images/technologies/process-deliver.png",
  },
] as const;

const principles = [
  { key: "needsFirst", icon: Compass },
  { key: "stackAgnostic", icon: Layers },
  { key: "bestFit", icon: Target },
  { key: "evolve", icon: RefreshCw },
] as const;

export default function TechnologiesPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden pt-16">
        <Image
          src={TECH_HERO}
          alt="Technology consulting and software stack guidance by CodeYourLogic"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
          title="Technology approach for custom software development"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor:
              "color-mix(in oklab, var(--color-black) 75%, transparent)",
          }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto w-full max-w-[860px] px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl md:text-[56px] font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              {t("technologies.title")}
            </h1>
            <p className="text-lg md:text-[22px] font-medium text-white mb-6 leading-snug">
              {t("technologies.subtitle")}
            </p>
            <p className="text-base text-zinc-200 leading-relaxed">
              {t("technologies.intro")}
            </p>
            <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
              {t("knowledge.techDisclaimer")}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-zinc-50 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-14 text-center">
            <h2 className="text-[36px] font-bold leading-tight tracking-tight text-zinc-900">
              {t("technologies.processTitle")}
            </h2>
            <p className="mt-4 text-base text-zinc-500 max-w-3xl mx-auto">
              {t("technologies.processSubtitle")}
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map(({ key, image }) => (
              <StaggerItem key={key}>
                <article className="flex h-full flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                  <div className="relative h-40 w-full overflow-hidden rounded-xl">
                    <Image
                      src={image}
                      alt={t(`technologies.process.${key}.title`)}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900">
                      {t(`technologies.process.${key}.title`)}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                      {t(`technologies.process.${key}.desc`)}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map(({ key, icon: Icon }) => (
              <StaggerItem key={key}>
                <article className="flex h-full gap-5 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900">
                      {t(`technologies.principles.${key}.title`)}
                    </h3>
                    <p className="mt-2 text-[15px] text-zinc-500 leading-relaxed">
                      {t(`technologies.principles.${key}.desc`)}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section
        id="tech-by-service"
        className="scroll-mt-24 py-20 md:py-28 bg-white border-y border-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-14 text-center">
            <h2 className="text-[36px] font-bold leading-tight tracking-tight text-zinc-900">
              {t("technologies.byServiceTitle")}
            </h2>
            <p className="mt-4 text-base text-zinc-500 max-w-3xl mx-auto">
              {t("technologies.byServiceSubtitle")}
            </p>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ENGINEERING_SERVICE_IDS.map((slug) => {
              const service = getKnowledgeService(slug);
              const stack = getServiceTechStack(slug);
              return (
                <StaggerItem key={slug}>
                  <article className="h-full rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                    <h3 className="text-lg font-semibold text-zinc-900">
                      <Link
                        href={service.href}
                        className="hover:text-orange-700"
                      >
                        {t(service.nameKey)}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                      {t(service.summaryKey)}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {stack.map((category) => (
                        <li key={category.id} className="text-sm text-zinc-600">
                          <span className="font-medium text-zinc-800">
                            {t(`services.${service.seoKey}.techStack.${category.id}`)}
                            :{" "}
                          </span>
                          {category.items.join(", ")}
                        </li>
                      ))}
                    </ul>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/about/#delivery-process"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-500"
            >
              {t("technologies.processLink")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about/#engineering-practices"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-500"
            >
              {t("technologies.engineeringLink")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 p-12 md:p-16 text-center">
              <Image
                src="/images/Frame.png"
                alt=""
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center"
                priority={false}
              />
              <div className="absolute inset-0 bg-black/35" aria-hidden />
              <div className="relative z-10 mx-auto max-w-2xl flex flex-col items-center gap-8">
                <p className="text-lg text-white leading-relaxed">
                  {t("technologies.closing")}
                </p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="rounded-lg bg-orange-600 hover:bg-orange-500 shadow-lg shadow-orange-600/30"
                  >
                    {t("technologies.cta")}
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
