"use client";

import { useEffect } from "react";
import { getStoredLocale, setLocale } from "@/lib/i18n/client";

/** Restore UI language preference; keep <html lang="en"> for SEO consistency. */
export function useLocaleSync() {
  useEffect(() => {
    document.documentElement.lang = "en";
    const stored = getStoredLocale();
    if (stored) {
      setLocale(stored);
    }
  }, []);
}
