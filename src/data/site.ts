import type { FeaturedProject, NavLink, Service } from "@/types";

export const navLinks: NavLink[] = [
  { href: "", labelKey: "nav.home" },
  { href: "/about", labelKey: "nav.about" },
  { href: "/services", labelKey: "nav.services" },
  { href: "/hire-resources", labelKey: "nav.hireResources" },
  { href: "/technologies", labelKey: "nav.technologies" },
  { href: "/industries", labelKey: "nav.industries" },
  { href: "/careers", labelKey: "nav.careers" },
];

export const services: Service[] = [
  { slug: "web-development", icon: "Globe", titleKey: "services.web.title", descKey: "services.web.short" },
  { slug: "mobile-development", icon: "Smartphone", titleKey: "services.mobile.title", descKey: "services.mobile.short" },
  { slug: "woocommerce", icon: "ShoppingCart", titleKey: "services.woocommerce.title", descKey: "services.woocommerce.short" },
  { slug: "desktop-development", icon: "Monitor", titleKey: "services.desktop.title", descKey: "services.desktop.short" },
  { slug: "cloud-devops", icon: "Cloud", titleKey: "services.cloud.title", descKey: "services.cloud.short" },
  { slug: "ai-solutions", icon: "Brain", titleKey: "services.ai.title", descKey: "services.ai.short" },
  { slug: "blockchain", icon: "Blocks", titleKey: "services.blockchain.title", descKey: "services.blockchain.short" },
  { slug: "crm-erp", icon: "LayoutDashboard", titleKey: "services.crm.title", descKey: "services.crm.short" },
];

export const allServices = [
  "customWeb", "mobileApp", "desktopApp", "saas", "cloudInfra", "devops",
  "aiIntegrations", "generativeAi", "ml", "apiDev", "blockchain", "uiux",
  "ecommerce", "maintenance",
];

export const industries = [
  "fintech", "healthcare", "ecommerce", "logistics", "education",
  "travel", "realEstate", "blockchain", "aiStartups", "enterpriseSaas",
];

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "panthor-sport",
    titleKey: "featured.panthor.title",
    categoryKey: "featured.panthor.category",
    overviewKey: "featured.panthor.overview",
    highlightsKey: "featured.panthor.highlights",
    url: "https://psiplltd.com",
    color: "from-orange-500 via-blue-600 to-blue-900",
    logo: "/projects/panthor-sports.png",
  },
  {
    slug: "aarogyam-hospital",
    titleKey: "featured.aarogyam.title",
    categoryKey: "featured.aarogyam.category",
    overviewKey: "featured.aarogyam.overview",
    highlightsKey: "featured.aarogyam.highlights",
    url: "https://aarogyamhospitalpatna.com/",
    color: "from-teal-500 via-emerald-600 to-green-900",
    logo: "/projects/aarogyam-hospital.png",
  },
  {
    slug: "dr-anshu-kumar",
    titleKey: "featured.dranshu.title",
    categoryKey: "featured.dranshu.category",
    overviewKey: "featured.dranshu.overview",
    highlightsKey: "featured.dranshu.highlights",
    url: "https://dranshukumar.com/",
    color: "from-sky-500 via-blue-600 to-indigo-900",
    logo: "/projects/dr-anshu-kumar.png",
  },
  {
    slug: "ambb-bihar",
    titleKey: "featured.ambb.title",
    categoryKey: "featured.ambb.category",
    overviewKey: "featured.ambb.overview",
    highlightsKey: "featured.ambb.highlights",
    url: "https://mdbiochemistrybihar.com/",
    color: "from-violet-500 via-indigo-600 to-slate-900",
    logo: "/projects/ambb-bihar.png",
  },
];

/** Landmark pin: Durian Furniture, Adityapur (opposite our office) */
const HQ_LAT = 22.7870298;
const HQ_LNG = 86.164525;
const HQ_MAP_QUERY = encodeURIComponent(
  `Durian Furniture, Adityapur@${HQ_LAT},${HQ_LNG}`
);

const WHATSAPP_NUMBER = "919241249929";
const WHATSAPP_DEFAULT_MESSAGE =
  "Hello CodeYourLogic!\n\nI'm reaching out to learn more about your services and how your pricing works.\n\nThank you!";

export const companyInfo = {
  name: "CodeYourLogic",
  legalName: "CodeYourLogic Pvt Ltd",
  /** Registered trademark of CodeYourLogic Pvt Ltd */
  trademark: {
    mark: "CodeYourLogic",
    symbol: "®",
    registered: true,
  },
  email: "contact@codeyourlogic.com",
  phone: "+91 9241249929",
  phones: ["+91 9241249929"],
  whatsapp: {
    number: WHATSAPP_NUMBER,
    display: "+91 9241249929",
    defaultMessage: WHATSAPP_DEFAULT_MESSAGE,
    url: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`,
  },
  address:
    "4th floor Qno3/2-3, Opposite Durian Furniture, Adityapur Main Road, Akashwani, 831013",
  addressLines: [
    "4th floor Qno3/2-3, Opposite Durian Furniture",
    "Adityapur Main Road, Akashwani, 831013",
  ] as const,
  postalCode: "831013",
  latitude: HQ_LAT,
  longitude: HQ_LNG,
  mapEmbedUrl: `https://www.google.com/maps?q=${HQ_LAT},${HQ_LNG}&hl=en&z=17&output=embed`,
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${HQ_MAP_QUERY}`,
  hours: "Mon - Fri: 9:00 AM - 6:00 PM IST",
  social: {
    linkedin: "https://www.linkedin.com/company/135124117",
    facebook: "https://www.facebook.com/profile.php?id=61591846175078",
    instagram: "https://www.instagram.com/codeyourlogic/",
  },
  url: "https://codeyourlogic.com",
};

export const stats = [
  { id: "established", value: 2026, suffix: "" },
  { id: "projects", value: 200, suffix: "+" },
  { id: "engineers", value: 50, suffix: "+" },
  { id: "retention", value: 98, suffix: "%" },
];

export const reviewKeys = ["r1", "r2", "r3"];

export const whyChooseKeys = ["expertise", "quality", "agile", "maintenance", "security", "innovation"];

export const benefitKeys = ["remote", "health", "learning", "flexible", "equity", "events"];

export const contactServices = [
  "webDev",
  "mobileDev",
  "desktopDev",
  "cloudDevops",
  "aiSolutions",
  "blockchain",
  "crmErp",
  "uiux",
  "hireResources",
  "other",
] as const;
