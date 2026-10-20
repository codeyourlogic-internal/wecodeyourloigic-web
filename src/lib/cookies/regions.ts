/** ISO 3166-1 alpha-2 countries where cookie consent is typically required (GDPR / UK / CH). */
export const CONSENT_REQUIRED_COUNTRIES = [
  // EEA
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IS",
  "IE",
  "IT",
  "LV",
  "LI",
  "LT",
  "LU",
  "MT",
  "NL",
  "NO",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
  // UK + Switzerland
  "GB",
  "UK",
  "CH",
] as const;

export const GEO_COUNTRY_COOKIE = "wcyl_geo";

export function isConsentRequiredCountry(countryCode?: string | null): boolean {
  if (!countryCode) return false;
  return (CONSENT_REQUIRED_COUNTRIES as readonly string[]).includes(
    countryCode.trim().toUpperCase()
  );
}

/** Compact list for Google Consent Mode `region` arrays. */
export const CONSENT_MODE_REGIONS = CONSENT_REQUIRED_COUNTRIES.filter(
  (code) => code !== "UK"
);
