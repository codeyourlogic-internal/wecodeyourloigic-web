import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/page-metadata";
import { JsonLdScripts } from "@/components/seo/JsonLdScripts";
import { webPageSchema, breadcrumbSchema } from "@/lib/seo/jsonld";
import { t } from "@/lib/seo/translations";
import { defaultLocale } from "@/lib/i18n/settings";

export const metadata: Metadata = createPageMetadata(
  defaultLocale,
  "technologies",
  "/technologies"
);

export default function TechnologiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = defaultLocale;
  const title = t(locale, "seo.technologies.title");
  const description = t(locale, "seo.technologies.description");

  return (
    <>
      <JsonLdScripts
        data={[
          webPageSchema(locale, "/technologies/", title, description),
          breadcrumbSchema(locale, [
            { name: t(locale, "nav.home"), path: "/" },
            { name: t(locale, "nav.technologies"), path: "/technologies/" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
