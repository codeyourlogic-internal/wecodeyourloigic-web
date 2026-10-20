import type { Locale } from "@/types";

export const SITE_URL = "https://codeyourlogic.com";
export const SITE_NAME = "CodeYourLogic";
/** Registered company name used in footer, legal pages, and structured data. */
export const SITE_LEGAL_NAME = "CodeYourLogic Pvt Ltd";
/** Registered trademark mark (display with ® in brand UI). */
export const SITE_TRADEMARK = "CodeYourLogic®";
export const DEFAULT_LOCALE: Locale = "en";

export const OG_LOCALE_MAP: Record<Locale, string> = {
  en: "en_US",
  hi: "hi_IN",
  de: "de_DE",
  fr: "fr_FR",
  es: "es_ES",
};

export const LOGO_IMAGE = {
  url: "/logo.png",
  width: 256,
  height: 256,
  alt: "CodeYourLogic® logo",
};

export const TWITTER_HANDLE = "@codeyourlogic";
export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "CodeYourLogic — Custom Software Development Company for Web, Mobile, Cloud, AI & Blockchain",
};
