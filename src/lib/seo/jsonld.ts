import { companyInfo, services, reviewKeys } from "@/data/site";
import { homeClients } from "@/data/home";
import { SITE_URL, SITE_NAME, SITE_LEGAL_NAME, LOGO_IMAGE } from "./config";
import { t, tPrefer, getTranslations } from "./translations";
import { SERVICE_SEO_KEY } from "./keywords";
import {
  KNOWLEDGE_SERVICES,
  GLOSSARY_IDS,
  getKnowledgeService,
  type KnowledgeServiceId,
} from "@/data/knowledge";

const PHONES = companyInfo.phones;

export function organizationSchema(locale: string, description: string) {
  const reviews = reviewKeys.map((key) => ({
    "@type": "Review" as const,
    author: {
      "@type": "Person" as const,
      name: t(locale, `reviews.${key}.author`),
    },
    reviewBody: t(locale, `reviews.${key}.quote`),
    reviewRating: {
      "@type": "Rating" as const,
      ratingValue: "5",
      bestRating: "5",
    },
  }));

  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: ["CodeYourLogic®", SITE_LEGAL_NAME],
    legalName: SITE_LEGAL_NAME,
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}${LOGO_IMAGE.url}`,
      width: LOGO_IMAGE.width,
      height: LOGO_IMAGE.height,
    },
    image: `${SITE_URL}${LOGO_IMAGE.url}`,
    description,
    email: companyInfo.email,
    telephone: PHONES,
    foundingDate: "2026",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "4th floor Qno3/2-3, Opposite Durian Furniture, Adityapur Main Road, Akashwani",
      addressLocality: "Adityapur",
      addressRegion: "Jharkhand",
      postalCode: companyInfo.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: companyInfo.latitude,
      longitude: companyInfo.longitude,
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    priceRange: "$$",
    knowsAbout: [
      "Custom Software Development",
      "Web Development",
      "Mobile App Development",
      "Desktop Application Development",
      "WooCommerce",
      "E-commerce",
      "Cloud Computing",
      "DevOps",
      "Artificial Intelligence",
      "Machine Learning",
      "Large Language Models",
      "Blockchain",
      "Custom CRM",
      "ERP Systems",
      "Dedicated Developers",
      "SaaS Development",
      "Digital Transformation",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t(locale, "knowledge.services.title"),
      itemListElement: KNOWLEDGE_SERVICES.map((service) => ({
        "@type": "OfferCatalog",
        name: t(locale, service.nameKey),
        url: `${SITE_URL}${service.href}`,
        itemOffered: {
          "@type": "Service",
          "@id": `${SITE_URL}${service.href}#service`,
          name: t(locale, service.nameKey),
        },
      })),
    },
    sameAs: [
      companyInfo.social.linkedin,
      companyInfo.social.facebook,
      companyInfo.social.instagram,
    ],
    contactPoint: PHONES.map((telephone) => ({
      "@type": "ContactPoint" as const,
      telephone,
      contactType: "sales",
      email: companyInfo.email,
      availableLanguage: ["English", "Hindi", "German", "French", "Spanish"],
      areaServed: "Worldwide",
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(reviewKeys.length),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews,
    inLanguage: "en",
  };
}

export function websiteSchema(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    description,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  };
}

export function webPageSchema(
  locale: string,
  path: string,
  title: string,
  description: string,
  pageType: "WebPage" | "ContactPage" | "CollectionPage" = "WebPage"
) {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}/opengraph-image`,
    },
  };
}

export function breadcrumbSchema(
  _locale: string,
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "/" : item.path}`,
    })),
  };
}

export function serviceSchema(locale: string, slug: string) {
  const offering = KNOWLEDGE_SERVICES.find((s) => s.id === slug);
  const seoKey = offering?.seoKey ?? SERVICE_SEO_KEY[slug];
  if (!offering && !seoKey) return null;

  const url = offering
    ? `${SITE_URL}${offering.href}`
    : `${SITE_URL}/services/${slug}/`;
  const name = offering
    ? t(locale, offering.titleKey)
    : t(locale, `services.${seoKey}.title`);
  const description = seoKey
    ? tPrefer(
        locale,
        `services.${seoKey}.seoDescription`,
        offering?.shortKey ?? `services.${seoKey}.description`
      )
    : offering
      ? t(locale, offering.shortKey)
      : "";

  const related = offering
    ? offering.relatedServiceIds.map((id) => {
        const relatedService = getKnowledgeService(id);
        return {
          "@type": "Service" as const,
          "@id": `${SITE_URL}${relatedService.href}#service`,
          name: t(locale, relatedService.nameKey),
          url: `${SITE_URL}${relatedService.href}`,
        };
      })
    : [];

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    url,
    provider: { "@id": `${SITE_URL}/#organization` },
    serviceType: name,
    category: "Software development",
    areaServed: "Worldwide",
    audience: {
      "@type": "Audience",
      audienceType: "Startups and enterprises",
    },
    termsOfService: `${SITE_URL}/terms/`,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE_URL}/contact/`,
    },
    ...(related.length > 0 ? { isRelatedTo: related } : {}),
  };
}

export function faqSchema(locale: string, seoKey: string) {
  const translations = getTranslations(locale) as {
    services?: Record<string, { faq?: { q: string; a: string }[] }>;
  };
  const faq = translations.services?.[seoKey]?.faq;
  return faqPageSchema(faq);
}

export function faqPageSchema(items?: { q: string; a: string }[] | null) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a.replace(/\*\*/g, ""),
      },
    })),
  };
}

export function companyFaqSchema(locale: string) {
  const translations = getTranslations(locale) as {
    knowledge?: { faq?: { items?: { q: string; a: string }[] } };
    hireResources?: { faq?: { q: string; a: string }[] };
  };
  return faqPageSchema(translations.knowledge?.faq?.items);
}

export function hireFaqSchema(locale: string) {
  const translations = getTranslations(locale) as {
    hireResources?: { faq?: { q: string; a: string }[] };
  };
  return faqPageSchema(translations.hireResources?.faq);
}

export function glossarySchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${SITE_URL}/about/#glossary`,
    name: t(locale, "knowledge.glossary.title"),
    description: t(locale, "knowledge.glossary.subtitle"),
    hasDefinedTerm: GLOSSARY_IDS.map((id) => ({
      "@type": "DefinedTerm",
      "@id": `${SITE_URL}/about/#term-${id}`,
      name: t(locale, `knowledge.glossary.items.${id}.term`),
      description: t(locale, `knowledge.glossary.items.${id}.def`),
      inDefinedTermSet: `${SITE_URL}/about/#glossary`,
    })),
  };
}

export function hireServiceSchema(locale: string) {
  return serviceSchema(locale, "hire-resources" satisfies KnowledgeServiceId);
}

export function itemListSchema(
  _locale: string,
  name: string,
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function servicesListSchema(locale: string) {
  return itemListSchema(
    locale,
    t(locale, "services.title"),
    services.map((s) => ({
      name: t(locale, s.titleKey),
      url: `${SITE_URL}/services/${s.slug}/`,
    }))
  );
}

/** Client / portfolio sites delivered by CodeYourLogic (homepage logos). */
export function portfolioSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/#portfolio`,
    name: t(locale, "homeClients.title"),
    description: t(locale, "homeClients.subtitle"),
    numberOfItems: homeClients.length,
    itemListElement: homeClients.map((client, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        "@id": `${SITE_URL}/#project-${client.id}`,
        name: client.name,
        url: client.url,
        image: `${SITE_URL}${client.logo}`,
        creator: { "@id": `${SITE_URL}/#organization` },
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    })),
  };
}

export function serializeJsonLd(data: Record<string, unknown> | Record<string, unknown>[]) {
  return JSON.stringify(data);
}
