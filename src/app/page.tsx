import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Hero } from "@/components/home/Hero";
import { JsonLdScripts } from "@/components/seo/JsonLdScripts";
import { createPageMetadata } from "@/lib/seo/page-metadata";
import {
  organizationSchema,
  websiteSchema,
  webPageSchema,
  breadcrumbSchema,
  portfolioSchema,
} from "@/lib/seo/jsonld";
import { t } from "@/lib/seo/translations";
import { defaultLocale } from "@/lib/i18n/settings";

const ProcessOverview = dynamic(
  () => import("@/components/home/ProcessOverview").then((m) => m.ProcessOverview),
  { loading: () => <SectionLoader /> }
);
const CompanyOverview = dynamic(
  () =>
    import("@/components/home/CompanyOverview").then((m) => m.CompanyOverview),
  { loading: () => <SectionLoader /> }
);
const SolutionsPortfolio = dynamic(
  () =>
    import("@/components/home/SolutionsPortfolio").then(
      (m) => m.SolutionsPortfolio
    ),
  { loading: () => <SectionLoader /> }
);
const HireResourcesOverview = dynamic(
  () =>
    import("@/components/home/HireResourcesOverview").then(
      (m) => m.HireResourcesOverview
    ),
  { loading: () => <SectionLoader /> }
);
const Industries = dynamic(
  () => import("@/components/home/Industries").then((m) => m.Industries),
  { loading: () => <SectionLoader /> }
);
const ClientLogos = dynamic(
  () => import("@/components/home/ClientLogos").then((m) => m.ClientLogos),
  { loading: () => <SectionLoader /> }
);
const Testimonials = dynamic(
  () => import("@/components/home/Testimonials").then((m) => m.Testimonials),
  { loading: () => <SectionLoader /> }
);
const WhyChooseUs = dynamic(
  () => import("@/components/home/WhyChooseUs").then((m) => m.WhyChooseUs),
  { loading: () => <SectionLoader /> }
);
const RelatedServices = dynamic(
  () =>
    import("@/components/seo/RelatedServices").then((m) => m.RelatedServices),
  { loading: () => <SectionLoader /> }
);
const ContactCTA = dynamic(
  () => import("@/components/home/ContactCTA").then((m) => m.ContactCTA),
  { loading: () => <SectionLoader /> }
);

function SectionLoader() {
  return (
    <div className="py-20 flex justify-center">
      <div className="h-8 w-8 animate-pulse rounded-full bg-orange-500/20" />
    </div>
  );
}

export const metadata: Metadata = createPageMetadata(defaultLocale, "home", "/");

export default function HomePage() {
  const locale = defaultLocale;
  const title = t(locale, "seo.home.title");
  const description = t(locale, "seo.home.description");

  return (
    <>
      <JsonLdScripts
        data={[
          organizationSchema(locale, description),
          websiteSchema(description),
          webPageSchema(locale, "/", title, description),
          breadcrumbSchema(locale, [{ name: t(locale, "nav.home"), path: "/" }]),
          portfolioSchema(locale),
        ]}
      />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <CompanyOverview />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ProcessOverview />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <SolutionsPortfolio />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <HireResourcesOverview />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Industries />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ClientLogos />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <WhyChooseUs />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <RelatedServices />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ContactCTA />
      </Suspense>
    </>
  );
}
