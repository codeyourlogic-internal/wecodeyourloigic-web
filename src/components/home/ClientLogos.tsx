"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { panthorClientShowcase } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";

const shotAlts = [
  "Panthor CRM admission form templates",
  "Panthor CRM organisation dashboard",
  "Panthor CRM admissions and payments analytics",
  "Panthor CRM student and employee ID card settings",
  "Panthor CRM admission invoices",
  "Panthor CRM invite academy",
  "Panthor CRM staff dashboard",
  "Panthor CRM holiday calendar",
];

const shots = panthorClientShowcase.shots.map((src, index) => ({
  src,
  alt: shotAlts[index],
}));

function circularOffset(index: number, active: number, count: number) {
  let diff = index - active;
  if (diff > count / 2) diff -= count;
  if (diff < -count / 2) diff += count;
  return diff;
}

export function ClientLogos() {
  const { t } = useTranslation();
  const client = panthorClientShowcase;
  const [active, setActive] = useState(0);

  const go = useCallback((direction: number) => {
    setActive((current) => (current + direction + shots.length) % shots.length);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % shots.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="clients" className="scroll-mt-24 border-y border-border bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrowKey="homeClients.eyebrow"
          titleKey="homeClients.title"
          subtitleKey="homeClients.subtitle"
        />

        <div className="mb-10 flex justify-center">
          <a
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${client.name} — ${t("homeClients.visitSite")}`}
            className="flex flex-col items-center transition-opacity hover:opacity-80"
          >
            <div className="relative h-20 w-44 sm:h-24 sm:w-52">
              <Image
                src={client.logo}
                alt=""
                fill
                sizes="208px"
                className="object-contain"
              />
            </div>
            <span className="mt-3 text-center text-base font-semibold text-zinc-900">
              {client.name}
            </span>
          </a>
        </div>

        <div
          className="relative"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              go(1);
            } else if (event.key === "ArrowLeft") {
              event.preventDefault();
              go(-1);
            }
          }}
        >
          <div className="relative mx-auto py-3">
            <div
              className="mx-auto w-[68%] max-w-[440px] sm:w-[46%] lg:w-[32%]"
              aria-hidden="true"
            >
              <div className="aspect-[3/2]" />
            </div>
          <div
            className="absolute inset-x-0 inset-y-3 overflow-hidden"
            style={{ perspective: "1400px" }}
            role="region"
            aria-roledescription="carousel"
            aria-label={t("homeClients.title")}
          >
            {shots.map((shot, index) => {
              const offset = circularOffset(index, active, shots.length);
              const distance = Math.abs(offset);
              const isActive = distance === 0;

              return (
                <motion.button
                  key={shot.src}
                  type="button"
                  aria-label={shot.alt}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setActive(index)}
                  className={`absolute top-1/2 left-1/2 w-[68%] max-w-[440px] rounded-2xl border border-zinc-200 bg-white text-left shadow-[0_18px_40px_-28px_rgba(0,0,0,0.55)] outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:w-[46%] lg:w-[32%] ${distance > 1 ? "pointer-events-none" : "cursor-pointer"}`}
                  style={{ zIndex: 30 - distance * 10 }}
                  initial={false}
                  animate={{
                    x: `calc(-50% + ${offset * 62}%)`,
                    y: "-50%",
                    scale: isActive ? 1 : distance === 1 ? 0.82 : 0.74,
                    opacity: distance > 1 ? 0 : 1,
                    rotateY: offset * -16,
                  }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="relative block aspect-[3/2] w-full overflow-hidden rounded-2xl bg-white">
                    <Image
                      src={encodeURI(shot.src)}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 68vw, 440px"
                      priority={index === 0}
                      className="object-contain"
                    />
                    {!isActive && (
                      <span className="absolute inset-0 bg-white/25" aria-hidden="true" />
                    )}
                  </span>
                </motion.button>
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
