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

/** Homepage entry points. Detail pages stay on their existing routes. */
export const homeSolutions: HomeSolution[] = [
  {
    id: "business",
    image: "/images/crm-erp/hero.jpg",
    href: "/services/crm-erp/",
  },
  {
    id: "custom",
    image: "/images/ourservice/hero.png",
    href: "/services/#services-grid",
  },
  {
    id: "dedicated",
    image: "/images/hireresources/hero.png",
    href: "/hire-resources/#hire-roles",
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

/** Homepage client showcase only. The full client list stays in `homeClients`. */
export const panthorClientShowcase = {
  name: "Panthor Sports India Private Limited",
  logo: "/projects/panthor-sports.png",
  url: "https://psiplltd.com",
  shots: [
    "/images/portfolio/Screenshot 2026-11-20 192552.png",
    "/images/portfolio/Screenshot 2026-11-22 135703.png",
    "/images/portfolio/Screenshot 2026-11-20 192450.png",
    "/images/portfolio/Screenshot 2026-11-20 192529.png",
    "/images/portfolio/Screenshot 2026-11-22 135902.png",
    "/images/portfolio/Screenshot 2026-11-22 135734.png",
    "/images/portfolio/Screenshot 2026-11-20 185826.png",
    "/images/portfolio/Screenshot 2026-11-22 135936.png",
  ],
} as const;

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

export const homeWhyChooseKeys = [
  "speed",
  "endToEnd",
  "clientFirst",
] as const;
