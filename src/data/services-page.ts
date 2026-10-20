export type ServicesPageCard = {
  id: string;
  icon: string;
  href: string;
  image: string;
  tags: string[];
};

/** Listing order matches the Our Services page design */
export const servicesPageCards: ServicesPageCard[] = [
  {
    id: "web",
    icon: "Globe",
    href: "/services/web-development/",
    image: "/images/ourservice/webdev.png",
    tags: ["React", "Node.js", "Next.js", "TypeScript"],
  },
  {
    id: "mobile",
    icon: "Smartphone",
    href: "/services/mobile-development/",
    image: "/images/ourservice/mobile.png",
    tags: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    id: "ecommerce",
    icon: "ShoppingCart",
    href: "/services/woocommerce/",
    image: "/images/ourservice/woocom.png",
    tags: ["WooCommerce", "WordPress", "Stripe", "PayPal"],
  },
  {
    id: "desktop",
    icon: "Monitor",
    href: "/services/desktop-development/",
    image: "/images/desktop-dev.png",
    tags: ["Electron", ".NET", "Tauri"],
  },
  {
    id: "cloud",
    icon: "Cloud",
    href: "/services/cloud-devops/",
    image: "/images/ourservice/cloud.png",
    tags: ["AWS", "Azure", "Google Cloud", "Kubernetes"],
  },
  {
    id: "ai",
    icon: "Brain",
    href: "/services/ai-solutions/",
    image: "/images/ourservice/ai.png",
    tags: ["Python", "TensorFlow", "PyTorch", "OpenAI"],
  },
  {
    id: "blockchain",
    icon: "Boxes",
    href: "/services/blockchain/",
    image: "/images/ourservice/blockchain.png",
    tags: ["Solidity", "Ethereum", "Web3.js", "Hyperledger"],
  },
  {
    id: "hire",
    icon: "Users",
    href: "/hire-resources/",
    image: "/images/hireresources/hero.png",
    tags: ["Frontend", "Backend", "Mobile", "AI"],
  },
];

export const SERVICES_HERO_IMAGE = "/images/ourservice/hero.png";
