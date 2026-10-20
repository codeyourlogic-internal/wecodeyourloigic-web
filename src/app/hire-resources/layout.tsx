import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/page-metadata";
import { JsonLdScripts } from "@/components/seo/JsonLdScripts";
import {
  webPageSchema,
  breadcrumbSchema,
  hireServiceSchema,
  hireFaqSchema,
} from "@/lib/seo/jsonld";
import { t } from "@/lib/seo/translations";
import { defaultLocale } from "@/lib/i18n/settings";

export const metadata: Metadata = createPageMetadata(
  defaultLocale,
  "hireResources",
  "/hire-resources"
);

export default function HireResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = defaultLocale;
  const title = t(locale, "seo.hireResources.title");
  const description = t(locale, "seo.hireResources.description");

  const hireJsonLd = hireServiceSchema(locale);
  const faqJsonLd = hireFaqSchema(locale);

  return (
    <>
      <JsonLdScripts
        data={[
          webPageSchema(locale, "/hire-resources/", title, description),
          breadcrumbSchema(locale, [
            { name: t(locale, "nav.home"), path: "/" },
            { name: t(locale, "nav.hireResources"), path: "/hire-resources/" },
          ]),
          ...(hireJsonLd ? [hireJsonLd] : []),
          ...(faqJsonLd ? [faqJsonLd] : []),
        ]}
      />
      {children}
    </>
  );
}
