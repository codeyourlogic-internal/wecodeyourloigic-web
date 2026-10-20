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
    image: "/images/hireresources/frontend.png",
    tags: ["React", "Next.js", "Angular"],
    interest: "frontend",
  },
  {
    id: "backend",
    icon: "Server",
    image: "/images/hireresources/backend.png",
    tags: ["Node.js", "Python", "Java"],
    interest: "backend",
  },
  {
    id: "mobile",
    icon: "Smartphone",
    image: "/images/hireresources/mobile.png",
    tags: ["iOS", "Android", "Flutter"],
    interest: "mobile",
  },
  {
    id: "fullstack",
    icon: "Layers",
    image: "/images/hireresources/fullstack.png",
    tags: ["MERN", "MEAN", "Node.js"],
    interest: "fullstack",
  },
  {
    id: "devops",
    icon: "Cloud",
    image: "/images/hireresources/devops.png",
    tags: ["AWS", "Azure", "Kubernetes"],
    interest: "devops",
  },
  {
    id: "ai",
    icon: "Brain",
    image: "/images/hireresources/ai.png",
    tags: ["TensorFlow", "PyTorch", "OpenAI"],
    interest: "ai",
  },
  {
    id: "uiux",
    icon: "Palette",
    image: "/images/hireresources/uiux.png",
    tags: ["Figma", "Adobe XD"],
    interest: "uiux",
  },
  {
    id: "qa",
    icon: "Bug",
    image: "/images/hireresources/qa.png",
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
