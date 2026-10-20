import { isConsentRequiredCountry, GEO_COUNTRY_COOKIE } from "@/lib/cookies/regions";

/**
 * Consent policy:
 * - unset / "geo" (default): ask only in EEA/UK/CH; track freely elsewhere (maximize leads)
 * - "true": always show banner
 * - "false": never show banner
 */
const MODE = (process.env.NEXT_PUBLIC_REQUIRE_COOKIE_CONSENT || "geo").toLowerCase();

export type ConsentPolicyMode = "geo" | "always" | "never";

export function getConsentPolicyMode(): ConsentPolicyMode {
  if (MODE === "true" || MODE === "always") return "always";
  if (MODE === "false" || MODE === "never") return "never";
  return "geo";
}

export function readVisitorCountry(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${GEO_COUNTRY_COOKIE}=([^;]*)`)
  );
  if (!match?.[1]) return null;
  try {
    return decodeURIComponent(match[1]).toUpperCase();
  } catch {
    return match[1].toUpperCase();
  }
}

/**
 * Whether THIS visitor must see/accept the cookie banner before analytics.
 * Non-GDPR regions return false so leads are tracked immediately.
 */
export function visitorRequiresConsent(countryOverride?: string | null): boolean {
  const mode = getConsentPolicyMode();
  if (mode === "always") return true;
  if (mode === "never") return false;
  const country = countryOverride ?? readVisitorCountry();
  return isConsentRequiredCountry(country);
}

/** @deprecated use visitorRequiresConsent — kept for older imports */
export const REQUIRE_COOKIE_CONSENT = getConsentPolicyMode() === "always";
