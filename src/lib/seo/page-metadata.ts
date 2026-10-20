import type { Metadata } from "next";
import { buildSeoMetadata } from "@/lib/seo/metadata";
import { PAGE_KEYWORDS } from "@/lib/seo/keywords";
import { t } from "@/lib/seo/translations";

type PageKey = keyof typeof PAGE_KEYWORDS;

export function createPageMetadata(
  locale: string,
  pageKey: PageKey,
  path: string
): Metadata {
  return buildSeoMetadata(
    locale,
    pageKey,
    path,
    t(locale, `seo.${pageKey}.title`),
    t(locale, `seo.${pageKey}.description`),
    PAGE_KEYWORDS[pageKey]
  );
}
