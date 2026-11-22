export interface HireRole {
  id: string;
  icon: string;
  image: string;
  tags: string[];
  interest: string;
}

export interface IndustryCard {
  id: string;
  icon: string;
}

export const HIRE_HERO_IMAGE = "/images/hireresources/hero.png";

export const hireRoles: HireRole[] = [
  {
    id: "frontend",
    icon: "Monitor",
    image: "/images/home-solutions/web-dev.png",
    tags: ["React", "Next.js", "Angular"],
    interest: "frontend",
  },
  {
    id: "backend",
    icon: "Server",
    image: "/images/desktop-dev.png",
    tags: ["Node.js", "Python", "Java"],
    interest: "backend",
  },
  {
    id: "mobile",
    icon: "Smartphone",
    image: "/images/home-solutions/mobile-dev.png",
    tags: ["iOS", "Android", "Flutter"],
    interest: "mobile",
  },
  {
    id: "fullstack",
    icon: "Layers",
    image: "/images/ourservice/hero.png",
    tags: ["MERN", "MEAN", "Node.js"],
    interest: "fullstack",
  },
  {
    id: "devops",
    icon: "Cloud",
    image: "/images/home-solutions/cloud-devops.png",
    tags: ["AWS", "Azure", "Kubernetes"],
    interest: "devops",
  },
  {
    id: "ai",
    icon: "Brain",
    image: "/images/ai-solutions/sample-vision.png",
    tags: ["TensorFlow", "PyTorch", "OpenAI"],
    interest: "ai",
  },
  {
    id: "uiux",
    icon: "Palette",
    image: "/images/crm-erp/hero.jpg",
    tags: ["Figma", "Adobe XD"],
    interest: "uiux",
  },
  {
    id: "qa",
    icon: "Bug",
    image: "/images/ai-solutions/sample-analytics.png",
    tags: ["Selenium", "Appium"],
    interest: "qa",
  },
];

export const hireSteps = ["requirements", "shortlist", "building", "scale"] as const;

/** Expanded industry cards for Services + Hire Resources grids */
export const industryCards: IndustryCard[] = [
  { id: "restaurants", icon: "UtensilsCrossed" },
  { id: "ecommerce", icon: "ShoppingBag" },
  { id: "healthcare", icon: "HeartPulse" },
  { id: "realEstate", icon: "Home" },
  { id: "fintech", icon: "Coins" },
  { id: "education", icon: "GraduationCap" },
  { id: "travel", icon: "Send" },
  { id: "logistics", icon: "Truck" },
  { id: "media", icon: "Video" },
  { id: "automotive", icon: "Car" },
  { id: "agriculture", icon: "Leaf" },
  { id: "legal", icon: "Scale" },
  { id: "insurance", icon: "Shield" },
  { id: "manufacturing", icon: "Factory" },
  { id: "government", icon: "Building2" },
  { id: "telecom", icon: "Wifi" },
];
