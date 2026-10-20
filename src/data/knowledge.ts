/**
 * Canonical company knowledge graph.
 * Powers crawlable HTML, JSON-LD, and generated llms.txt files.
 * Copy lives in locales; this file owns relationships and facts already
 * published on the site — do not add clients, techs, or stats here
 * that are not already represented elsewhere.
 */

import { servicePages, type ServiceSlug } from "@/data/service-pages";
import { hireRoles, industryCards } from "@/data/hire-resources";
import { homeClients } from "@/data/home";
import { companyInfo } from "@/data/site";

export type KnowledgeServiceId = ServiceSlug | "hire-resources";

export type KnowledgeOffering = {
  id: KnowledgeServiceId;
  href: string;
  icon: string;
  /** SEO / page H1 key */
  titleKey: string;
  shortKey: string;
  /** Plain name used in listings, nav, and LLM files */
  nameKey: string;
  summaryKey: string;
  /** Locale key under services.* for service pages; unused for hire */
  seoKey: string;
  relatedServiceIds: KnowledgeServiceId[];
  relatedIndustryIds: string[];
  isDedicated?: boolean;
};

export const KNOWLEDGE_SERVICES: KnowledgeOffering[] = [
  {
    id: "web-development",
    href: "/services/web-development/",
    icon: "Globe",
    titleKey: "services.web.title",
    shortKey: "services.web.short",
    nameKey: "services.listing.web.title",
    summaryKey: "services.listing.web.desc",
    seoKey: "web",
    relatedServiceIds: [
      "mobile-development",
      "woocommerce",
      "cloud-devops",
      "hire-resources",
    ],
    relatedIndustryIds: [
      "ecommerce",
      "healthcare",
      "fintech",
      "education",
      "realEstate",
      "government",
    ],
  },
  {
    id: "mobile-development",
    href: "/services/mobile-development/",
    icon: "Smartphone",
    titleKey: "services.mobile.title",
    shortKey: "services.mobile.short",
    nameKey: "services.listing.mobile.title",
    summaryKey: "services.listing.mobile.desc",
    seoKey: "mobile",
    relatedServiceIds: [
      "web-development",
      "ai-solutions",
      "cloud-devops",
      "hire-resources",
    ],
    relatedIndustryIds: [
      "healthcare",
      "fintech",
      "ecommerce",
      "education",
      "logistics",
      "travel",
    ],
  },
  {
    id: "woocommerce",
    href: "/services/woocommerce/",
    icon: "ShoppingCart",
    titleKey: "services.woocommerce.title",
    shortKey: "services.woocommerce.short",
    nameKey: "services.listing.ecommerce.title",
    summaryKey: "services.listing.ecommerce.desc",
    seoKey: "woocommerce",
    relatedServiceIds: ["web-development", "cloud-devops", "mobile-development"],
    relatedIndustryIds: ["ecommerce", "restaurants", "travel"],
  },
  {
    id: "desktop-development",
    href: "/services/desktop-development/",
    icon: "Monitor",
    titleKey: "services.desktop.title",
    shortKey: "services.desktop.short",
    nameKey: "services.listing.desktop.title",
    summaryKey: "services.listing.desktop.desc",
    seoKey: "desktop",
    relatedServiceIds: ["web-development", "cloud-devops", "hire-resources"],
    relatedIndustryIds: [
      "healthcare",
      "education",
      "fintech",
      "manufacturing",
      "legal",
    ],
  },
  {
    id: "cloud-devops",
    href: "/services/cloud-devops/",
    icon: "Cloud",
    titleKey: "services.cloud.title",
    shortKey: "services.cloud.short",
    nameKey: "services.listing.cloud.title",
    summaryKey: "services.listing.cloud.desc",
    seoKey: "cloud",
    relatedServiceIds: [
      "web-development",
      "ai-solutions",
      "hire-resources",
    ],
    relatedIndustryIds: [
      "logistics",
      "fintech",
      "manufacturing",
      "telecom",
      "government",
    ],
  },
  {
    id: "ai-solutions",
    href: "/services/ai-solutions/",
    icon: "Brain",
    titleKey: "services.ai.title",
    shortKey: "services.ai.short",
    nameKey: "services.listing.ai.title",
    summaryKey: "services.listing.ai.desc",
    seoKey: "ai",
    relatedServiceIds: [
      "web-development",
      "cloud-devops",
      "mobile-development",
    ],
    relatedIndustryIds: [
      "healthcare",
      "fintech",
      "logistics",
      "education",
      "insurance",
      "agriculture",
    ],
  },
  {
    id: "blockchain",
    href: "/services/blockchain/",
    icon: "Boxes",
    titleKey: "services.blockchain.title",
    shortKey: "services.blockchain.short",
    nameKey: "services.listing.blockchain.title",
    summaryKey: "services.listing.blockchain.desc",
    seoKey: "blockchain",
    relatedServiceIds: ["web-development", "cloud-devops", "ai-solutions"],
    relatedIndustryIds: ["fintech", "logistics", "government"],
  },
  {
    id: "hire-resources",
    href: "/hire-resources/",
    icon: "Users",
    titleKey: "hireResources.title",
    shortKey: "hireResources.subtitle",
    nameKey: "services.listing.hire.title",
    summaryKey: "services.listing.hire.desc",
    seoKey: "hire",
    isDedicated: true,
    relatedServiceIds: [
      "web-development",
      "mobile-development",
      "cloud-devops",
      "ai-solutions",
    ],
    relatedIndustryIds: industryCards.map((card) => card.id),
  },
];

export const ENGINEERING_SERVICE_IDS: ServiceSlug[] = [
  "web-development",
  "mobile-development",
  "woocommerce",
  "desktop-development",
  "cloud-devops",
  "ai-solutions",
  "blockchain",
];

export const DELIVERY_PROCESS_IDS = [
  "discovery",
  "design",
  "development",
  "qa",
  "deployment",
  "scaling",
  "maintenance",
] as const;

export const ENGINEERING_PRACTICE_IDS = [
  "architecture",
  "testing",
  "peerReview",
  "security",
  "cicd",
  "agile",
  "devops",
] as const;

export const GLOSSARY_IDS = [
  "codeYourLogic",
  "legalName",
  "hireResources",
  "technologiesPage",
  "deliveryProcess",
  "enterpriseEngineering",
] as const;

export const COMPANY_FAQ_IDS = [
  "whatWeDo",
  "services",
  "technologies",
  "customSoftware",
  "dedicatedDevelopers",
  "startupsEnterprises",
  "industries",
  "aiLlm",
  "cloudDevops",
  "process",
] as const;

export const PUBLISHED_CLAIM_IDS = [
  "established",
  "projects",
  "engineers",
  "retention",
  "countries",
  "onboarding",
  "outcomes",
] as const;

/** Canonical industry list — same IDs used on services and hire grids. */
export const KNOWLEDGE_INDUSTRY_IDS = industryCards.map((card) => card.id);

const INDUSTRY_SERVICES: Record<string, KnowledgeServiceId[]> = {
  restaurants: ["woocommerce", "web-development", "mobile-development"],
  ecommerce: [
    "woocommerce",
    "web-development",
    "mobile-development",
    "cloud-devops",
  ],
  healthcare: [
    "web-development",
    "mobile-development",
    "ai-solutions",
    "desktop-development",
  ],
  realEstate: ["web-development", "mobile-development"],
  fintech: [
    "web-development",
    "mobile-development",
    "blockchain",
    "ai-solutions",
  ],
  education: [
    "web-development",
    "mobile-development",
    "desktop-development",
  ],
  travel: ["web-development", "mobile-development", "woocommerce"],
  logistics: [
    "web-development",
    "mobile-development",
    "cloud-devops",
    "ai-solutions",
  ],
  media: ["web-development", "mobile-development", "desktop-development"],
  automotive: ["web-development", "mobile-development", "cloud-devops"],
  agriculture: ["web-development", "mobile-development", "ai-solutions"],
  legal: ["web-development", "desktop-development"],
  insurance: ["web-development", "mobile-development", "ai-solutions"],
  manufacturing: [
    "web-development",
    "desktop-development",
    "cloud-devops",
    "ai-solutions",
  ],
  government: ["web-development", "cloud-devops"],
  telecom: ["web-development", "mobile-development", "cloud-devops"],
};

export const HIRE_ENGAGEMENT_IDS = ["fullTime", "partTime", "project"] as const;

export const HIRE_TECH_BY_ROLE: Record<string, string[]> = {
  frontend: ["React", "Next.js", "Angular", "Vue.js", "TypeScript"],
  backend: ["Node.js", "Python", "Java", "Go", "PHP"],
  mobile: ["iOS", "Android", "React Native", "Flutter", "Swift", "Kotlin"],
  fullstack: ["MERN", "MEAN", "React", "Node.js"],
  devops: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Terraform"],
  ai: ["Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain"],
  uiux: ["Figma", "Adobe XD"],
  qa: ["Selenium", "Appium"],
};

export function getKnowledgeService(id: KnowledgeServiceId) {
  const found = KNOWLEDGE_SERVICES.find((s) => s.id === id);
  if (!found) throw new Error(`Unknown knowledge service: ${id}`);
  return found;
}

export function getRelatedServices(id: KnowledgeServiceId) {
  return getKnowledgeService(id).relatedServiceIds.map(getKnowledgeService);
}

export function getIndustriesForService(id: KnowledgeServiceId) {
  return getKnowledgeService(id).relatedIndustryIds;
}

export function getServicesForIndustry(industryId: string) {
  const ids = INDUSTRY_SERVICES[industryId] ?? [];
  return ids.map(getKnowledgeService);
}

export function getServiceTechStack(slug: ServiceSlug) {
  return servicePages[slug].techStack;
}

export const knowledgeCompany = {
  name: companyInfo.name,
  legalName: companyInfo.legalName,
  trademark: `${companyInfo.trademark.mark}${companyInfo.trademark.symbol}`,
  url: companyInfo.url,
  email: companyInfo.email,
  phone: companyInfo.phone,
  address: companyInfo.address,
  hours: companyInfo.hours,
  social: companyInfo.social,
  latitude: companyInfo.latitude,
  longitude: companyInfo.longitude,
} as const;

export const knowledgeClients = homeClients;

export const knowledgeHireRoles = hireRoles;
