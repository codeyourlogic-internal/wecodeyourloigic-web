import { JsonLdScripts } from "@/components/seo/JsonLdScripts";
import {
  webPageSchema,
  breadcrumbSchema,
  companyFaqSchema,
  glossarySchema,
} from "@/lib/seo/jsonld";
import { t } from "@/lib/seo/translations";
import { defaultLocale } from "@/lib/i18n/settings";
import AboutPageClient from "./AboutPageClient";

export default function AboutPage() {
  const locale = defaultLocale;
  const title = t(locale, "seo.about.title");
  const description = t(locale, "seo.about.description");
  const faq = companyFaqSchema(locale);

  return (
    <>
      <JsonLdScripts
        data={[
          webPageSchema(locale, "/about/", title, description),
          breadcrumbSchema(locale, [
            { name: t(locale, "nav.home"), path: "/" },
            { name: t(locale, "nav.about"), path: "/about/" },
          ]),
          glossarySchema(locale),
          ...(faq ? [faq] : []),
        ]}
      />
      <AboutPageClient />
    </>
  );
}
