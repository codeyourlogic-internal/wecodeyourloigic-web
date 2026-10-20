"use client";

import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { localeNames, type Locale } from "@/types";
import { supportedLngs } from "@/lib/i18n/settings";
import { setLocale } from "@/lib/i18n/client";
import { cn } from "@/lib/utils";

/** Switches UI language in-place via i18next + localStorage (URL stays the same). */
export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0] as Locale;

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-9 cursor-pointer items-center gap-1.5 rounded-lg border border-border bg-muted/50 px-2.5 backdrop-blur-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
        aria-label={`Change language, ${active.toUpperCase()}`}
        aria-expanded={isOpen}
      >
        <Globe className="h-4 w-4" aria-hidden />
        <span className="text-sm font-medium uppercase">{active}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-[140px] overflow-hidden rounded-xl border border-border bg-background/95 shadow-xl backdrop-blur-xl dark:border-white/10">
          {supportedLngs.map((lng) => (
            <button
              key={lng}
              type="button"
              onClick={() => {
                setLocale(lng);
                setIsOpen(false);
              }}
              className={cn(
                "flex w-full cursor-pointer items-center px-4 py-2.5 text-sm transition-colors hover:bg-muted dark:hover:bg-white/10",
                lng === active && "bg-amber-500/10 text-brand-accent"
              )}
            >
              {localeNames[lng]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
