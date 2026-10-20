import { JsonLdScripts } from "@/components/seo/JsonLdScripts";
import {
  webPageSchema,
  breadcrumbSchema,
  servicesListSchema,
} from "@/lib/seo/jsonld";
import { t } from "@/lib/seo/translations";
import { defaultLocale } from "@/lib/i18n/settings";
import { ServicesPageClient } from "./ServicesPageClient";

export default function ServicesPage() {
  const locale = defaultLocale;
  const title = t(locale, "seo.services.title");
  const description = t(locale, "seo.services.description");

  return (
    <>
      <JsonLdScripts
        data={[
          webPageSchema(locale, "/services/", title, description, "CollectionPage"),
          breadcrumbSchema(locale, [
            { name: t(locale, "nav.home"), path: "/" },
            { name: t(locale, "nav.services"), path: "/services/" },
          ]),
          servicesListSchema(locale),
        ]}
      />
      <ServicesPageClient />
    </>
  );
}
