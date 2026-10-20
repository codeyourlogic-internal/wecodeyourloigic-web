import { getConsentPreferences } from "@/lib/cookies/consent";

export const ATTRIBUTION_STORAGE_KEY = "wcyl_attribution";
export const ATTRIBUTION_COOKIE_NAME = "wcyl_attr";

export type AttributionData = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
  landing_page?: string;
  referrer?: string;
  first_touch_at?: string;
  last_touch_at?: string;
};

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
] as const;

function canUseStorage() {
  return typeof window !== "undefined";
}

function writeAttrCookie(value: string) {
  const maxAge = 60 * 60 * 24 * 90;
  document.cookie = `${ATTRIBUTION_COOKIE_NAME}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}

function clearAttrCookie() {
  document.cookie = `${ATTRIBUTION_COOKIE_NAME}=; Path=/; Max-Age=0; SameSite=Lax`;
}

export function readAttribution(): AttributionData | null {
  if (!canUseStorage()) return null;
  try {
    const raw = localStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AttributionData;
  } catch {
    return null;
  }
}

export function clearAttribution() {
  if (!canUseStorage()) return;
  localStorage.removeItem(ATTRIBUTION_STORAGE_KEY);
  clearAttrCookie();
}

/** Capture campaign params (always when consent is not required). */
export function captureAttributionFromUrl() {
  if (!canUseStorage()) return;

  const prefs = getConsentPreferences();
  if (!prefs.analytics && !prefs.marketing) {
    clearAttribution();
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const incoming: AttributionData = {};

  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) incoming[key] = value.slice(0, 200);
  }

  const hasCampaignSignal = Object.keys(incoming).length > 0;
  const existing = readAttribution();
  const now = new Date().toISOString();

  if (!hasCampaignSignal && existing) {
    return;
  }

  const next: AttributionData = {
    ...(existing ?? {}),
    ...incoming,
    landing_page: existing?.landing_page || window.location.pathname,
    referrer:
      existing?.referrer ||
      (document.referrer && !document.referrer.includes(window.location.host)
        ? document.referrer.slice(0, 500)
        : undefined),
    first_touch_at: existing?.first_touch_at || now,
    last_touch_at: hasCampaignSignal ? now : existing?.last_touch_at || now,
  };

  const serialized = JSON.stringify(next);
  localStorage.setItem(ATTRIBUTION_STORAGE_KEY, serialized);
  writeAttrCookie(serialized);
}

export function getAttributionSummary(): Record<string, string> {
  const data = readAttribution();
  if (!data) return {};
  return Object.fromEntries(
    Object.entries(data).filter(([, value]) => typeof value === "string" && value)
  ) as Record<string, string>;
}
