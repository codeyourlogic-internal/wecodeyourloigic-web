"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { homeProcessSteps } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

/** Settled fan — left to right in step order */
const DEALT = [
  { y: 18, rotate: -10 },
  { y: 6, rotate: -3.5 },
  { y: 6, rotate: 3.5 },
  { y: 18, rotate: 10 },
] as const;

export function ProcessOverview() {
  const { t } = useTranslation();
  const { ref, isInView } = useInView(0.2);

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrowKey="homeProcess.eyebrow"
          titleKey="homeProcess.title"
        />

        {/* Mobile: ordered vertical cascade */}
        <ol className="mx-auto flex max-w-md flex-col gap-4 md:hidden">
          {homeProcessSteps.map((step, index) => (
            <motion.li
              key={step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProcessCard
                index={index}
                title={t(`homeProcess.steps.${step}.title`)}
                description={t(`homeProcess.steps.${step}.desc`)}
                className="w-full"
              />
            </motion.li>
          ))}
        </ol>

        {/* Desktop: stacked deal into a fan */}
        <div
          ref={ref}
          className="relative mx-auto hidden h-[460px] max-w-5xl md:block"
          aria-label={t("homeProcess.title")}
        >
          <ol className="absolute inset-0 flex items-center justify-center">
            {homeProcessSteps.map((step, index) => {
              const dealt = DEALT[index];
              const spread = (index - (homeProcessSteps.length - 1) / 2) * 200;

              return (
                <motion.li
                  key={step}
                  className="absolute h-[380px] w-[240px]"
                  style={{ originX: 0.5, originY: 1 }}
                  initial={{
                    x: 0,
                    y: 48,
                    rotate: 0,
                    scale: 0.92,
                    opacity: 0,
                    zIndex: homeProcessSteps.length - index,
                  }}
                  animate={
                    isInView
                      ? {
                          x: spread,
                          y: dealt.y,
                          rotate: dealt.rotate,
                          scale: 1,
                          opacity: 1,
                          zIndex: index + 1,
                        }
                      : undefined
                  }
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                    mass: 0.9,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: dealt.y - 24,
                    scale: 1.03,
                    zIndex: 20,
                    transition: { type: "spring", stiffness: 280, damping: 22 },
                  }}
                >
                  <ProcessCard
                    index={index}
                    title={t(`homeProcess.steps.${step}.title`)}
                    description={t(`homeProcess.steps.${step}.desc`)}
                    className="h-full"
                  />
                </motion.li>
              );
            })}
          </ol>
        </div>
        <p className="mt-10 text-center">
          <Link
            href="/about/#delivery-process"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-500"
          >
            {t("homeProcess.fullProcess")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </p>
      </div>
    </section>
  );
}

function ProcessCard({
  index,
  title,
  description,
  className,
}: {
  index: number;
  title: string;
  description: string;
  className?: string;
}) {
  const rank = String(index + 1).padStart(2, "0");

  return (
    <article
      className={cn(
        "relative flex h-[380px] flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.08)]",
        className
      )}
    >
      <div className="m-3 flex flex-1 flex-col rounded-xl border border-orange-100/80 px-5 py-5">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-600">
          Step {rank}
        </p>
        <h3 className="text-lg font-semibold leading-snug text-zinc-900">
          {title}
        </h3>
        <p className="mt-3 flex-1 overflow-hidden text-sm leading-relaxed text-zinc-600">
          {description}
        </p>
      </div>
    </article>
  );
}
