import type { Locale } from "@/types";
import en from "../../../public/locales/en/common.json";
import hi from "../../../public/locales/hi/common.json";
import de from "../../../public/locales/de/common.json";
import fr from "../../../public/locales/fr/common.json";
import es from "../../../public/locales/es/common.json";

type CommonTranslations = typeof en;

const translations: Record<Locale, CommonTranslations> = { en, hi, de, fr, es };

export function getTranslations(locale: string): CommonTranslations {
  return translations[locale as Locale] ?? translations.en;
}

export function t(locale: string, key: string): string {
  const parts = key.split(".");
  let value: unknown = getTranslations(locale);
  for (const part of parts) {
    if (value && typeof value === "object" && part in value) {
      value = (value as Record<string, unknown>)[part];
    } else {
      return key;
    }
  }
  return typeof value === "string" ? value : key;
}

/** Prefer primary key; if missing, use fallback key. */
export function tPrefer(locale: string, primaryKey: string, fallbackKey: string): string {
  const primary = t(locale, primaryKey);
  if (primary !== primaryKey) return primary;
  return t(locale, fallbackKey);
}
