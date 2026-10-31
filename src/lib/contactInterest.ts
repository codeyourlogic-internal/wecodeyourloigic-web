import { contactServices } from "@/data/site";

export type ContactServiceId = (typeof contactServices)[number];

/**
 * Maps marketing CTA `?interest=` values to a contact form service option.
 * Hire CTAs and service-page CTAs use different slugs than form values.
 */
const INTEREST_TO_SERVICE: Record<string, ContactServiceId> = {
  hire: "hireResources",
  frontend: "hireResources",
  backend: "hireResources",
  fullstack: "hireResources",
  devops: "hireResources",
  qa: "hireResources",
  mobile: "mobileDev",
  web: "webDev",
  webdev: "webDev",
  woocommerce: "webDev",
  desktop: "desktopDev",
  desktopdev: "desktopDev",
  cloud: "cloudDevops",
  clouddevops: "cloudDevops",
  ai: "aiSolutions",
  aisolutions: "aiSolutions",
  blockchain: "blockchain",
  crm: "crmErp",
  crmerp: "crmErp",
  uiux: "uiux",
  other: "other",
  hireresources: "hireResources",
};

export function resolveContactServiceFromInterest(
  interest: string
): ContactServiceId | null {
  const raw = interest.trim();
  if (!raw) return null;

  const normalized = raw.toLowerCase().replace(/[\s_-]+/g, "");
  const mapped = INTEREST_TO_SERVICE[normalized];
  if (mapped) return mapped;

  const exact = contactServices.find(
    (svc) => svc.toLowerCase() === raw.toLowerCase()
  );
  if (exact) return exact;

  const fuzzy = contactServices.find(
    (svc) =>
      normalized.includes(svc.toLowerCase()) ||
      svc.toLowerCase().includes(normalized)
  );
  return fuzzy ?? null;
}
