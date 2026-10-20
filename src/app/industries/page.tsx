import { JsonLdScripts } from "@/components/seo/JsonLdScripts";
import {
  webPageSchema,
  breadcrumbSchema,
  itemListSchema,
} from "@/lib/seo/jsonld";
import { t } from "@/lib/seo/translations";
import { defaultLocale } from "@/lib/i18n/settings";
import { KNOWLEDGE_INDUSTRY_IDS } from "@/data/knowledge";
import { SITE_URL } from "@/lib/seo/config";
import IndustriesPageClient from "./IndustriesPageClient";

export default function IndustriesPage() {
  const locale = defaultLocale;
  const title = t(locale, "seo.industries.title");
  const description = t(locale, "seo.industries.description");

  return (
    <>
      <JsonLdScripts
        data={[
          webPageSchema(locale, "/industries/", title, description, "CollectionPage"),
          breadcrumbSchema(locale, [
            { name: t(locale, "nav.home"), path: "/" },
            { name: t(locale, "nav.industries"), path: "/industries/" },
          ]),
          itemListSchema(
            locale,
            t(locale, "knowledge.industries.pageTitle"),
            KNOWLEDGE_INDUSTRY_IDS.map((id) => ({
              name: t(locale, `industries.cards.${id}.title`),
              url: `${SITE_URL}/industries/#${id}`,
            }))
          ),
        ]}
      />
      <IndustriesPageClient />
    </>
  );
}
