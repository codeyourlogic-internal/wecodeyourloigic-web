import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/page-metadata";
import { JsonLdScripts } from "@/components/seo/JsonLdScripts";
import { webPageSchema, breadcrumbSchema } from "@/lib/seo/jsonld";
import { t } from "@/lib/seo/translations";
import { defaultLocale } from "@/lib/i18n/settings";

export const metadata: Metadata = createPageMetadata(defaultLocale, "careers", "/careers");

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = defaultLocale;
  const title = t(locale, "seo.careers.title");
  const description = t(locale, "seo.careers.description");

  return (
    <>
      <JsonLdScripts
        data={[
          webPageSchema(locale, "/careers/", title, description),
          breadcrumbSchema(locale, [
            { name: t(locale, "nav.home"), path: "/" },
            { name: t(locale, "nav.careers"), path: "/careers/" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
