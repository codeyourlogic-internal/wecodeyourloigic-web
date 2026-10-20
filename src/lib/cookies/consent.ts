import { visitorRequiresConsent } from "@/lib/cookies/config";

export type CookieCategory = "necessary" | "analytics" | "marketing";

export type ConsentPreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export type StoredConsent = {
  version: number;
  updatedAt: string;
  preferences: ConsentPreferences;
};

export const CONSENT_STORAGE_KEY = "wcyl_cookie_consent";
export const CONSENT_COOKIE_NAME = "wcyl_consent";
export const CONSENT_VERSION = 1;
export const CONSENT_CHANGED_EVENT = "wcyl-consent-changed";
export const OPEN_PREFERENCES_EVENT = "open-cookie-preferences";

export const defaultPreferences = (): ConsentPreferences => ({
  necessary: true,
  analytics: false,
  marketing: false,
});

export function grantedPreferences(): ConsentPreferences {
  return { necessary: true, analytics: true, marketing: true };
}

export function acceptAllPreferences(): ConsentPreferences {
  return grantedPreferences();
}

export function rejectOptionalPreferences(): ConsentPreferences {
  return defaultPreferences();
}

function canUseStorage() {
  return typeof window !== "undefined";
}

function writeConsentCookie(value: string) {
  const maxAge = 60 * 60 * 24 * 180;
  document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}

function clearConsentCookie() {
  document.cookie = `${CONSENT_COOKIE_NAME}=; Path=/; Max-Age=0; SameSite=Lax`;
}

export function readStoredConsent(): StoredConsent | null {
  if (!canUseStorage()) return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (!parsed?.preferences || parsed.version !== CONSENT_VERSION) return null;
    return {
      ...parsed,
      preferences: {
        necessary: true,
        analytics: Boolean(parsed.preferences.analytics),
        marketing: Boolean(parsed.preferences.marketing),
      },
    };
  } catch {
    return null;
  }
}

export function hasAnsweredConsent(): boolean {
  if (readStoredConsent() !== null) return true;
  // Outside consent regions, treat as answered so tracking starts immediately
  if (!visitorRequiresConsent()) return true;
  return false;
}

export function getConsentPreferences(): ConsentPreferences {
  const stored = readStoredConsent();
  if (stored) return stored.preferences;
  if (!visitorRequiresConsent()) return grantedPreferences();
  return defaultPreferences();
}

export function saveConsentPreferences(preferences: ConsentPreferences): StoredConsent {
  const stored: StoredConsent = {
    version: CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
    preferences: {
      necessary: true,
      analytics: Boolean(preferences.analytics),
      marketing: Boolean(preferences.marketing),
    },
  };

  if (canUseStorage()) {
    const serialized = JSON.stringify(stored);
    localStorage.setItem(CONSENT_STORAGE_KEY, serialized);
    writeConsentCookie(
      JSON.stringify({
        v: stored.version,
        a: stored.preferences.analytics ? 1 : 0,
        m: stored.preferences.marketing ? 1 : 0,
      })
    );
    window.dispatchEvent(
      new CustomEvent(CONSENT_CHANGED_EVENT, { detail: stored.preferences })
    );
  }

  return stored;
}

export function clearConsentPreferences() {
  if (!canUseStorage()) return;
  localStorage.removeItem(CONSENT_STORAGE_KEY);
  clearConsentCookie();
  window.dispatchEvent(
    new CustomEvent(CONSENT_CHANGED_EVENT, {
      detail: visitorRequiresConsent()
        ? defaultPreferences()
        : grantedPreferences(),
    })
  );
}

export function openCookiePreferences() {
  if (!canUseStorage()) return;
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}
