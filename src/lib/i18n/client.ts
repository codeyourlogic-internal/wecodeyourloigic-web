"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { defaultNS, fallbackLng, ns, supportedLngs } from "./settings";
import type { Locale } from "@/types";
import en from "../../../public/locales/en/common.json";
import hi from "../../../public/locales/hi/common.json";
import de from "../../../public/locales/de/common.json";
import fr from "../../../public/locales/fr/common.json";
import es from "../../../public/locales/es/common.json";

export const LOCALE_STORAGE_KEY = "wecyl-locale";

const resources = {
  en: { common: en },
  hi: { common: hi },
  de: { common: de },
  fr: { common: fr },
  es: { common: es },
};

function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored && supportedLngs.includes(stored as Locale)) {
      return stored as Locale;
    }
  } catch {
    // ignore private-mode / blocked storage
  }
  return null;
}

export function getStoredLocale(): Locale | null {
  return readStoredLocale();
}

function getInitialLng(): Locale {
  return readStoredLocale() ?? fallbackLng;
}

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    lng: getInitialLng(),
    fallbackLng,
    supportedLngs: [...supportedLngs],
    ns: [...ns],
    defaultNS,
    resources,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
}

export function setLocale(locale: Locale) {
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      // ignore
    }
  }
  if (typeof document !== "undefined") {
    // Keep crawlable document language as English (SEO metadata is EN-only).
    document.documentElement.lang = "en";
  }
  if (i18n.language !== locale) {
    void i18n.changeLanguage(locale);
  }
}

export default i18n;
