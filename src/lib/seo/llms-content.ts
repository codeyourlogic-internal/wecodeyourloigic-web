import { servicePages, type ServiceSlug } from "@/data/service-pages";
import { SITE_URL, SITE_NAME, SITE_LEGAL_NAME } from "./config";
import { t, getTranslations } from "./translations";
import {
  KNOWLEDGE_SERVICES,
  DELIVERY_PROCESS_IDS,
  ENGINEERING_PRACTICE_IDS,
  GLOSSARY_IDS,
  PUBLISHED_CLAIM_IDS,
  KNOWLEDGE_INDUSTRY_IDS,
  knowledgeCompany,
  knowledgeClients,
  knowledgeHireRoles,
  getServiceTechStack,
  HIRE_ENGAGEMENT_IDS,
  HIRE_TECH_BY_ROLE,
} from "@/data/knowledge";

const L = "en";

function mdLink(label: string, path: string, detail?: string) {
  const url = path.startsWith("http") ? path : `${SITE_URL}${path}`;
  return detail ? `- [${label}](${url}): ${detail}` : `- [${label}](${url})`;
}

function plain(text: string) {
  return text.replace(/\*\*/g, "");
}

/**
 * Short index for AI agents — follows https://llmstxt.org/
 * Keep this file brief: summary, canonical links, service list.
 */
export function buildLlmsTxt() {
  const serviceLines = KNOWLEDGE_SERVICES.map((s) =>
    mdLink(t(L, s.nameKey), s.href, t(L, s.summaryKey))
  ).join("\n");

  return `# ${SITE_NAME}

> ${SITE_LEGAL_NAME} is a custom software development company and technology partner. We build web, mobile, desktop, WooCommerce, cloud/DevOps, AI, blockchain, and custom CRM and ERP software, and we provide dedicated developers for startups and enterprises worldwide. Headquarters: Adityapur, India.

This file is an index for AI agents. For the full company briefing use ${SITE_URL}/llms-full.txt. Human-readable source of truth: ${SITE_URL}/about/.

## Services

${serviceLines}

## Pages

${mdLink("Home", "/", "Company overview")}
${mdLink("About", "/about/", "Company profile, delivery process, engineering practices, FAQ, glossary")}
${mdLink("Services", "/services/", "All product-engineering services")}
${mdLink("Hire dedicated developers", "/hire-resources/", "Roles, engagement model, onboarding")}
${mdLink("Technologies", "/technologies/", "How stacks are chosen — listed tools are examples, not an exclusive catalog")}
${mdLink("Industries", "/industries/", "Verticals and related services")}
${mdLink("Careers", "/careers/")}
${mdLink("Contact", "/contact/")}
${mdLink("Privacy policy", "/privacy/")}
${mdLink("Terms of service", "/terms/")}
${mdLink("XML sitemap", "/sitemap.xml")}
${mdLink("Full AI context", "/llms-full.txt", "Complete company knowledge in one document")}

## Company

- Brand: ${knowledgeCompany.trademark}
- Legal name: ${knowledgeCompany.legalName}
- Website: ${knowledgeCompany.url}/
- Email: ${knowledgeCompany.email}
- Phone: ${knowledgeCompany.phone}
- Address: ${knowledgeCompany.address}
- Hours: ${knowledgeCompany.hours}
- LinkedIn: ${knowledgeCompany.social.linkedin}
- Facebook: ${knowledgeCompany.social.facebook}
- Instagram: ${knowledgeCompany.social.instagram}

## Notes

- Primary content language is English. The UI also supports Hindi, German, French, and Spanish on the same URL paths.
- robots.txt allows all paths. Crawling and citation of public pages is welcome.
- Figures such as project counts and retention are published on ${SITE_URL}/about/#published-figures with context; they are not contractual SLAs.
`;
}

function serviceFacts(slug: ServiceSlug, seoKey: string) {
  const translations = getTranslations(L) as {
    services?: Record<
      string,
      {
        description?: string;
        offerings?: Record<string, { title?: string; desc?: string }>;
        faq?: { q: string; a: string }[];
      }
    >;
  };
  const page = translations.services?.[seoKey];
  const lines: string[] = [];

  if (page?.description) {
    lines.push("", page.description);
  }

  const offerings = servicePages[slug].offerings
    .map((item) => {
      const offering = page?.offerings?.[item.id];
      if (!offering?.title) return "";
      return `- ${offering.title}: ${plain(offering.desc ?? "")}`;
    })
    .filter(Boolean);

  if (offerings.length > 0) {
    lines.push("", "What this service includes:", ...offerings);
  }

  const faq = page?.faq ?? [];
  if (faq.length > 0) {
    lines.push(
      "",
      "Questions:",
      ...faq.map((item) => `Q: ${item.q}\nA: ${plain(item.a)}`)
    );
  }

  return lines.length > 0 ? `${lines.join("\n")}\n` : "";
}

/**
 * Full briefing for AI agents that already discovered /llms.txt.
 */
export function buildLlmsFullTxt() {
  const translations = getTranslations(L) as {
    knowledge?: {
      faq?: { items?: { q: string; a: string }[] };
    };
  };

  const servicesDetail = KNOWLEDGE_SERVICES.map((service) => {
    const tech =
      service.id === "hire-resources"
        ? knowledgeHireRoles
            .map((role) => {
              const tags = HIRE_TECH_BY_ROLE[role.id] ?? role.tags;
              return `  - ${t(L, `hireResources.roles.${role.id}.title`)}: ${tags.join(", ")}`;
            })
            .join("\n")
        : getServiceTechStack(service.id)
            .map((cat) => {
              const label = t(L, `services.${service.seoKey}.techStack.${cat.id}`);
              return `  - ${label}: ${cat.items.join(", ")}`;
            })
            .join("\n");

    const industries =
      service.id === "hire-resources"
        ? "All industries listed on this website (see Industries)."
        : service.relatedIndustryIds
            .map((id) => t(L, `industries.cards.${id}.title`))
            .join(", ");

    const facts =
      service.id === "hire-resources"
        ? ""
        : serviceFacts(service.id, service.seoKey);

    return `### ${t(L, service.nameKey)}
${SITE_URL}${service.href}

${t(L, service.summaryKey)}
${facts}
Related industries: ${industries}

Representative technologies (not an exclusive catalog):
${tech}`;
  }).join("\n\n");

  const process = DELIVERY_PROCESS_IDS.map((id, index) => {
    return `${index + 1}. ${t(L, `knowledge.process.steps.${id}.title`)} — ${t(
      L,
      `knowledge.process.steps.${id}.desc`
    )}`;
  }).join("\n");

  const engineering = ENGINEERING_PRACTICE_IDS.map((id) => {
    return `- ${t(L, `knowledge.engineering.items.${id}.title`)}: ${t(
      L,
      `knowledge.engineering.items.${id}.desc`
    )}`;
  }).join("\n");

  const industries = KNOWLEDGE_INDUSTRY_IDS.map((id) => {
    return `- ${t(L, `industries.cards.${id}.title`)}: ${t(
      L,
      `industries.cards.${id}.desc`
    )}`;
  }).join("\n");

  const faq = (translations.knowledge?.faq?.items ?? [])
    .map((item) => `Q: ${item.q}\nA: ${plain(item.a)}`)
    .join("\n\n");

  const glossary = GLOSSARY_IDS.map((id) => {
    return `- ${t(L, `knowledge.glossary.items.${id}.term`)}: ${t(
      L,
      `knowledge.glossary.items.${id}.def`
    )}`;
  }).join("\n");

  const claims = PUBLISHED_CLAIM_IDS.map((id) => {
    return `- ${t(L, `knowledge.claims.items.${id}.title`)}: ${t(
      L,
      `knowledge.claims.items.${id}.desc`
    )}`;
  }).join("\n");

  const hireRoles = knowledgeHireRoles
    .map((role) => {
      const tags = HIRE_TECH_BY_ROLE[role.id] ?? role.tags;
      return `- ${t(L, `hireResources.roles.${role.id}.title`)} (${tags.join(", ")}): ${t(
        L,
        `hireResources.roles.${role.id}.desc`
      )}`;
    })
    .join("\n");

  const engagement = HIRE_ENGAGEMENT_IDS.map((id) => {
    return `- ${t(L, `hireResources.engagement.${id}.title`)}: ${t(
      L,
      `hireResources.engagement.${id}.desc`
    )}`;
  }).join("\n");

  const clients = knowledgeClients
    .map((client) => `- ${client.name}: ${client.url}`)
    .join("\n");

  return `# ${SITE_NAME}

> Full company knowledge for AI agents. Index: ${SITE_URL}/llms.txt. Source of truth: ${SITE_URL}/about/.

## Company

${t(L, "knowledge.company.whoWeAre")}

${t(L, "knowledge.company.whoWeServe")}

${t(L, "knowledge.company.positioning")}

${t(L, "knowledge.company.legalNote")}

- Brand: ${knowledgeCompany.trademark}
- Legal name: ${knowledgeCompany.legalName}
- Website: ${knowledgeCompany.url}/
- Email: ${knowledgeCompany.email}
- Phone: ${knowledgeCompany.phone}
- Address: ${knowledgeCompany.address}
- Hours: ${knowledgeCompany.hours}
- LinkedIn: ${knowledgeCompany.social.linkedin}
- Facebook: ${knowledgeCompany.social.facebook}
- Instagram: ${knowledgeCompany.social.instagram}

## Services

${t(L, "knowledge.services.subtitle")}

${servicesDetail}

## Technologies

${t(L, "knowledge.techDisclaimer")}

Details: ${SITE_URL}/technologies/

## Industries

Details: ${SITE_URL}/industries/

${industries}

## Delivery process

${t(L, "knowledge.process.subtitle")}

${process}

Details: ${SITE_URL}/about/#delivery-process

## Engineering practices

${engineering}

Details: ${SITE_URL}/about/#engineering-practices

## Dedicated developers

${SITE_URL}/hire-resources/

${t(L, "services.listing.hire.desc")}

Roles:
${hireRoles}

Engagement model:
${engagement}

${t(L, "hireResources.onboardingNote")}

## Clients / work

Clients featured on the website:

${clients}

## Published figures

${t(L, "knowledge.claims.subtitle")}

${claims}

Details: ${SITE_URL}/about/#published-figures

## Glossary

${glossary}

## Company FAQ

${faq}

## Contact

- Contact: ${SITE_URL}/contact/
- Email: ${knowledgeCompany.email}
- Phone: ${knowledgeCompany.phone}
- Careers: ${SITE_URL}/careers/
- Privacy: ${SITE_URL}/privacy/
- Terms: ${SITE_URL}/terms/
`;
}
