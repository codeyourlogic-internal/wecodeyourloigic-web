import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/page-metadata";
import { JsonLdScripts } from "@/components/seo/JsonLdScripts";
import { webPageSchema, breadcrumbSchema } from "@/lib/seo/jsonld";
import { t } from "@/lib/seo/translations";
import { defaultLocale } from "@/lib/i18n/settings";

export const metadata: Metadata = createPageMetadata(defaultLocale, "privacy", "/privacy");

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = defaultLocale;
  const title = t(locale, "seo.privacy.title");
  const description = t(locale, "seo.privacy.description");

  return (
    <>
      <JsonLdScripts
        data={[
          webPageSchema(locale, "/privacy/", title, description, "WebPage"),
          breadcrumbSchema(locale, [
            { name: t(locale, "nav.home"), path: "/" },
            { name: t(locale, "footer.privacy"), path: "/privacy/" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
