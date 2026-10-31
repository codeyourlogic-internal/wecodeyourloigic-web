export const homeProcessSteps = [
  "discover",
  "design",
  "build",
  "scale",
] as const;

export type HomeSolution = {
  id: string;
  image: string;
  href: string;
};

/** Order matches homepage solutions screenshot */
export const homeSolutions: HomeSolution[] = [
  {
    id: "web",
    image: "/images/home-solutions/web-dev.png",
    href: "/services/web-development/",
  },
  {
    id: "mobile",
    image: "/images/home-solutions/mobile-dev.png",
    href: "/services/mobile-development/",
  },
  {
    id: "ecommerce",
    image: "/images/home-solutions/woocommerce.png",
    href: "/services/woocommerce/",
  },
  {
    id: "desktop",
    image: "/images/desktop-dev.png",
    href: "/services/desktop-development/",
  },
  {
    id: "cloud",
    image: "/images/home-solutions/cloud-devops.png",
    href: "/services/cloud-devops/",
  },
  {
    id: "ai",
    image: "/images/home-solutions/ai-machine.png",
    href: "/services/ai-solutions/",
  },
  {
    id: "blockchain",
    image: "/images/home-solutions/blockhain.png",
    href: "/services/blockchain/",
  },
  {
    id: "crm",
    image: "/images/crm-erp/hero.jpg",
    href: "/services/crm-erp/",
  },
];

export const homeIndustryIds = [
  "restaurants",
  "ecommerce",
  "healthcare",
  "realEstate",
  "fintech",
  "education",
  "travel",
  "logistics",
] as const;

export const homeClients = [
  {
    id: "panthor",
    name: "Panthor Sports India Private Limited",
    logo: "/projects/panthor-sports.png",
    url: "https://psiplltd.com",
  },
  {
    id: "aarogyam",
    name: "Aarogyam Emergency Hospital Pvt. Ltd.",
    logo: "/projects/aarogyam-hospital.png",
    url: "https://aarogyamhospitalpatna.com/",
  },
  {
    id: "dranshu",
    name: "Siwan Piles Fistula Hospital",
    logo: "/projects/dr-anshu-kumar.png",
    url: "https://dranshukumar.com/",
  },
  {
    id: "ambb",
    name: "Association of MD Biochemists of Bihar",
    logo: "/projects/ambb-bihar.png",
    url: "https://mdbiochemistrybihar.com/",
  },
] as const;

export const homeHireRoles = [
  {
    id: "frontend",
    interest: "frontend",
    stack: ["React", "NextJS", "Vue"],
  },
  {
    id: "backend",
    interest: "backend",
    stack: ["NodeJS", "Python", "Go"],
  },
  {
    id: "mobile",
    interest: "mobile",
    stack: ["iOS", "Android", "Flutter"],
  },
  {
    id: "fullstack",
    interest: "fullstack",
    stack: ["MERN", "MEAN", "Node.js"],
  },
] as const;

export const homeWhyChooseKeys = [
  "expertise",
  "quality",
  "speed",
  "commitment",
  "endToEnd",
  "clientFirst",
] as const;
