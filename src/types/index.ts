export type Locale = "en" | "hi" | "de" | "fr" | "es";

export const locales: Locale[] = ["en", "hi", "de", "fr", "es"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  hi: "हिन्दी",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
};

export interface Service {
  slug: string;
  icon: string;
  titleKey: string;
  descKey: string;
}

export interface FeaturedProject {
  slug: string;
  titleKey: string;
  categoryKey: string;
  overviewKey: string;
  highlightsKey: string;
  url: string;
  color: string;
  logo?: string;
}

export interface NavLink {
  href: string;
  labelKey: string;
}
