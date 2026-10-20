"use client";

import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  titleKey: string;
  subtitleKey?: string;
  eyebrowKey?: string;
  className?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export function SectionHeading({
  titleKey,
  subtitleKey,
  eyebrowKey,
  className,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const { t } = useTranslation();
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrowKey && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
            isDark ? "text-orange-400" : "text-orange-600"
          )}
        >
          {t(eyebrowKey)}
        </p>
      )}
      <h2
        className={cn(
          "text-[36px] font-bold leading-tight tracking-tight",
          isDark ? "text-zinc-100" : "text-foreground"
        )}
      >
        {t(titleKey)}
      </h2>
      {subtitleKey && (
        <p
          className={cn(
            "mt-4 text-base max-w-3xl",
            align === "center" && "mx-auto",
            isDark ? "text-zinc-400" : "text-muted-foreground"
          )}
        >
          {t(subtitleKey)}
        </p>
      )}
    </div>
  );
}
