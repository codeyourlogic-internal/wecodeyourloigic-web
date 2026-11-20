"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      <video
        src="/video-assets/subscription-compressed.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-16 bottom-0 w-full object-cover object-top"
      />
      <div
        className="absolute inset-x-0 top-16 bottom-0"
        style={{
          backgroundColor:
            "color-mix(in oklab, var(--color-black) 75%, transparent)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.15] text-white"
        >
          {t("hero.title")}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-5 text-base sm:text-lg md:text-xl font-semibold leading-snug text-[#FFFFFFCC]"
        >
          {t("hero.subtitle")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link href="/contact" data-track="hero_primary_cta" data-track-location="home_hero">
            <Button
              size="lg"
              className="rounded-lg min-w-[200px] bg-orange-600 hover:bg-orange-500 shadow-lg shadow-orange-600/30"
            >
              {t("hero.ctaPrimary")}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/services" data-track="hero_secondary_cta" data-track-location="home_hero">
            <Button
              size="lg"
              variant="outline"
              className="rounded-lg min-w-[180px] border-white/80 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              {t("hero.ctaSecondary")}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
