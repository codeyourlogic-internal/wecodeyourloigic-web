import type { Metadata } from "next";
import { services } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { SERVICE_KEYWORDS, SERVICE_SEO_KEY } from "@/lib/seo/keywords";
import { JsonLdScripts } from "@/components/seo/JsonLdScripts";
import {
  serviceSchema,
  webPageSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/seo/jsonld";
import { t, tPrefer } from "@/lib/seo/translations";
import { defaultLocale } from "@/lib/i18n/settings";
import ServiceDetailClient from "./ServiceDetailClient";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = defaultLocale;
  const seoKey = SERVICE_SEO_KEY[slug];
  if (!seoKey) return {};

  const title = tPrefer(
    locale,
    `services.${seoKey}.seoTitle`,
    `services.${seoKey}.title`
  );
  const description = tPrefer(
    locale,
    `services.${seoKey}.seoDescription`,
    `services.${seoKey}.description`
  );

  return buildPageMetadata({
    locale,
    path: `/services/${slug}`,
    title: title.includes("CodeYourLogic")
      ? title
      : `${title} | CodeYourLogic`,
    description,
    keywords: SERVICE_KEYWORDS[slug] ?? [],
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = defaultLocale;
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;

  const seoKey = SERVICE_SEO_KEY[slug];
  const title = seoKey ? t(locale, `services.${seoKey}.title`) : "";
  const description = seoKey
    ? tPrefer(
        locale,
        `services.${seoKey}.seoDescription`,
        `services.${seoKey}.description`
      )
    : "";
  const serviceJsonLd = serviceSchema(locale, slug);
  const faqJsonLd = seoKey ? faqSchema(locale, seoKey) : null;

  return (
    <>
      <JsonLdScripts
        data={[
          webPageSchema(locale, `/services/${slug}/`, title, description),
          breadcrumbSchema(locale, [
            { name: t(locale, "nav.home"), path: "/" },
            { name: t(locale, "nav.services"), path: "/services/" },
            { name: title, path: `/services/${slug}/` },
          ]),
          ...(serviceJsonLd ? [serviceJsonLd] : []),
          ...(faqJsonLd ? [faqJsonLd] : []),
        ]}
      />
      <ServiceDetailClient slug={slug} />
    </>
  );
}
