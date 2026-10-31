export type ServiceSlug =
  | "web-development"
  | "mobile-development"
  | "woocommerce"
  | "desktop-development"
  | "cloud-devops"
  | "ai-solutions"
  | "blockchain"
  | "crm-erp";

export interface ServiceOffering {
  id: string;
  icon: string;
  image?: string;
}

export interface ServiceTechCategory {
  id: string;
  items: string[];
}

export interface ServiceWhyItem {
  id: string;
  icon: string;
}

export interface ServicePageContent {
  key: string;
  offerings: ServiceOffering[];
  techStack: ServiceTechCategory[];
  process: string[];
  why: ServiceWhyItem[];
}

export const WEB_DEV_HERO_IMAGE = "/images/web-development/hero.png";
export const MOBILE_DEV_HERO_IMAGE = "/images/mobile-development/hero-ai.png";
export const WOOCOMMERCE_HERO_IMAGE = "/images/woocommerce/hero.png";
export const DESKTOP_DEV_HERO_IMAGE = "/images/desktop-dev.png";
export const CLOUD_DEVOPS_HERO_IMAGE = "/images/cloud-devops/hero.png";
export const AI_SOLUTIONS_HERO_IMAGE = "/images/ai-solutions/hero.png";
export const BLOCKCHAIN_HERO_IMAGE = "/images/blockchain/hero.png";
export const CRM_ERP_HERO_IMAGE = "/images/crm-erp/hero.jpg";

export const SERVICE_KEY_MAP: Record<ServiceSlug, string> = {
  "web-development": "web",
  "mobile-development": "mobile",
  woocommerce: "woocommerce",
  "desktop-development": "desktop",
  "cloud-devops": "cloud",
  "ai-solutions": "ai",
  blockchain: "blockchain",
  "crm-erp": "crm",
};

export const servicePages: Record<ServiceSlug, ServicePageContent> = {
  "web-development": {
    key: "web",
    offerings: [
      { id: "webApp", icon: "Code2", image: "/images/web-development/offering-1.png" },
      { id: "pwa", icon: "Smartphone", image: "/images/web-development/offering-2.png" },
      { id: "ecommerce", icon: "ShoppingCart", image: "/images/web-development/offering-3.png" },
      { id: "cms", icon: "LayoutDashboard", image: "/images/web-development/offering-4.png" },
      { id: "customPortals", icon: "Users", image: "/images/web-development/offering-5.png" },
      { id: "product", icon: "Boxes", image: "/images/web-development/offering-6.png" },
      { id: "enterprise", icon: "Building2", image: "/images/web-development/offering-7.png" },
      { id: "webPortal", icon: "Globe", image: "/images/web-development/offering-8.png" },
    ],
    techStack: [
      {
        id: "frontend",
        items: ["Next.js", "React", "Angular", "Vue.js", "TypeScript", "Tailwind CSS"],
      },
      {
        id: "backend",
        items: ["Node.js", "Python", "Django", "Go", "PHP", "Laravel"],
      },
      {
        id: "database",
        items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
      },
      {
        id: "other",
        items: ["Docker", "Kubernetes", "AWS", "Azure", "GCP"],
      },
    ],
    process: ["discovery", "architecture", "design", "development", "testing", "deployment"],
    why: [
      { id: "scalable", icon: "ShieldCheck" },
      { id: "seo", icon: "ShieldCheck" },
      { id: "performance", icon: "ShieldCheck" },
      { id: "security", icon: "ShieldCheck" },
    ],
  },
  "mobile-development": {
    key: "mobile",
    offerings: [
      { id: "ecommerce", icon: "ShoppingCart" },
      { id: "enterprise", icon: "Building2" },
      { id: "ondemand", icon: "Truck" },
      { id: "social", icon: "Users" },
      { id: "health", icon: "HeartPulse" },
      { id: "fintech", icon: "Wallet" },
      { id: "education", icon: "GraduationCap" },
      { id: "iot", icon: "Cpu" },
    ],
    techStack: [
      { id: "ios", items: ["Swift", "SwiftUI", "Objective-C"] },
      { id: "android", items: ["Kotlin", "Java", "Jetpack Compose"] },
      {
        id: "crossPlatform",
        items: ["React Native", "Flutter", "Expo"],
      },
      {
        id: "backend",
        items: ["Node.js", "Firebase", "AWS", "Appium", "Selenium"],
      },
    ],
    process: ["concept", "design", "development", "testing", "submission", "support"],
    why: [
      { id: "crossPlatform", icon: "ShieldCheck" },
      { id: "appStore", icon: "ShieldCheck" },
      { id: "performance", icon: "ShieldCheck" },
      { id: "postLaunch", icon: "ShieldCheck" },
    ],
  },
  woocommerce: {
    key: "woocommerce",
    offerings: [
      { id: "quickSetup", icon: "Zap", image: "/images/woocommerce/offering-1.png" },
      { id: "themeCustom", icon: "Palette", image: "/images/woocommerce/offering-2.png" },
      { id: "customTemplate", icon: "LayoutTemplate", image: "/images/woocommerce/offering-3.png" },
      { id: "payments", icon: "CreditCard", image: "/images/woocommerce/offering-4.png" },
      { id: "catalog", icon: "Boxes", image: "/images/woocommerce/offering-5.png" },
      { id: "shipping", icon: "Truck", image: "/images/woocommerce/offering-6.png" },
      { id: "performance", icon: "Gauge", image: "/images/woocommerce/offering-7.png" },
      { id: "migration", icon: "ArrowRightLeft", image: "/images/woocommerce/offering-8.png" },
    ],
    techStack: [
      {
        id: "platform",
        items: ["WordPress", "WooCommerce", "PHP", "MySQL"],
      },
      {
        id: "frontend",
        items: ["HTML5", "CSS3", "JavaScript", "React"],
      },
      {
        id: "payments",
        items: ["Stripe", "PayPal", "Razorpay", "Apple Pay"],
      },
      {
        id: "tools",
        items: ["Elementor", "WPML", "Redis", "CDN"],
      },
    ],
    process: ["discovery", "quickStart", "customize", "integrations", "qa", "launch"],
    why: [
      { id: "speed", icon: "Zap" },
      { id: "flexible", icon: "SlidersHorizontal" },
      { id: "conversion", icon: "ShoppingCart" },
      { id: "support", icon: "Headphones" },
    ],
  },
  "desktop-development": {
    key: "desktop",
    offerings: [
      { id: "enterprise", icon: "Building2" },
      { id: "productivity", icon: "Gauge" },
      { id: "health", icon: "HeartPulse" },
      { id: "education", icon: "GraduationCap" },
      { id: "finance", icon: "Landmark" },
      { id: "ecommerce", icon: "ShoppingCart" },
      { id: "media", icon: "Clapperboard" },
      { id: "custom", icon: "Wrench" },
    ],
    techStack: [
      { id: "foundations", items: ["Electron", "React", "Node.js", "Tauri"] },
      { id: "languages", items: [".NET", "C#", "Java", "Python", "C++"] },
      { id: "deployment", items: ["AWS", "Azure", "GCP", "Auto-update"] },
    ],
    process: ["discovery", "planning", "design", "development", "testing", "deployment"],
    why: [
      { id: "performance", icon: "Zap" },
      { id: "security", icon: "Shield" },
      { id: "experts", icon: "Award" },
      { id: "quality", icon: "CheckCircle" },
    ],
  },
  "cloud-devops": {
    key: "cloud",
    offerings: [
      { id: "migration", icon: "ArrowRightLeft" },
      { id: "iac", icon: "Server" },
      { id: "cicd", icon: "GitBranch" },
      { id: "containers", icon: "Boxes" },
      { id: "serverless", icon: "CloudLightning" },
      { id: "monitoring", icon: "BarChart3" },
      { id: "disaster", icon: "LifeBuoy" },
      { id: "cost", icon: "Wallet" },
    ],
    techStack: [
      {
        id: "platforms",
        items: ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
      },
      { id: "containers", items: ["Docker", "Kubernetes", "ECS"] },
      {
        id: "iac",
        items: ["Terraform", "CloudFormation", "Ansible", "Pulumi"],
      },
      {
        id: "cicd",
        items: ["Jenkins", "GitLab CI", "GitHub Actions"],
      },
      {
        id: "monitoring",
        items: ["Prometheus", "Grafana", "ELK", "Datadog"],
      },
    ],
    process: ["audit", "strategy", "migration", "cicd", "monitoring", "optimization"],
    why: [
      { id: "cost", icon: "Wallet" },
      { id: "zeroDowntime", icon: "Zap" },
      { id: "security", icon: "Shield" },
      { id: "disaster", icon: "LifeBuoy" },
    ],
  },
  "ai-solutions": {
    key: "ai",
    offerings: [
      { id: "llm", icon: "Brain" },
      { id: "chatbots", icon: "MessageSquare" },
      { id: "analytics", icon: "LineChart" },
      { id: "vision", icon: "Eye" },
      { id: "nlp", icon: "Languages" },
      { id: "recommend", icon: "Sparkles" },
      { id: "documents", icon: "FileCode" },
      { id: "search", icon: "Search" },
    ],
    techStack: [
      {
        id: "frameworks",
        items: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn"],
      },
      { id: "languages", items: ["Python", "R", "Java", "C++"] },
      {
        id: "cloud",
        items: ["AWS", "Google Cloud", "Azure"],
      },
      {
        id: "tools",
        items: ["OpenAI", "Hugging Face", "LangChain"],
      },
      {
        id: "databases",
        items: ["MongoDB", "PostgreSQL", "Redis", "Vector DBs"],
      },
    ],
    process: ["data", "model", "integration", "validation", "deployment", "improve"],
    why: [
      { id: "production", icon: "Layers" },
      { id: "privacy", icon: "Shield" },
      { id: "roi", icon: "Target" },
      { id: "learning", icon: "RefreshCw" },
    ],
  },
  blockchain: {
    key: "blockchain",
    offerings: [
      { id: "smartContracts", icon: "FileCode" },
      { id: "defi", icon: "Landmark" },
      { id: "nft", icon: "Image" },
      { id: "tokenLaunch", icon: "Coins" },
      { id: "dao", icon: "Users" },
      { id: "supplyChain", icon: "Truck" },
      { id: "identity", icon: "Shield" },
      { id: "payments", icon: "Wallet" },
    ],
    techStack: [
      {
        id: "chains",
        items: ["Ethereum", "Solana", "Polygon", "BSC"],
      },
      {
        id: "languages",
        items: ["Solidity", "Rust", "Go", "Vyper"],
      },
      {
        id: "web3",
        items: ["Web3.js", "Ethers.js", "Hardhat", "Foundry"],
      },
        {
          id: "infra",
          items: ["Node.js", "IPFS", "The Graph", "Arweave", "Hyperledger"],
        },
      {
        id: "frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
    ],
    process: ["useCase", "architecture", "development", "testnet", "audit", "mainnet"],
    why: [
      { id: "security", icon: "Shield" },
      { id: "gas", icon: "Zap" },
      { id: "multiChain", icon: "Layers" },
      { id: "compliance", icon: "BadgeCheck" },
    ],
  },
  "crm-erp": {
    key: "crm",
    offerings: [
      { id: "crm", icon: "Users" },
      { id: "erp", icon: "Building2" },
      { id: "sales", icon: "BarChart3" },
      { id: "inventory", icon: "Boxes" },
      { id: "finance", icon: "Landmark" },
      { id: "people", icon: "Briefcase" },
      { id: "integrations", icon: "Link2" },
      { id: "analytics", icon: "LineChart" },
    ],
    techStack: [
      {
        id: "frontend",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        id: "backend",
        items: ["Node.js", "Python", ".NET", "REST", "GraphQL"],
      },
      {
        id: "data",
        items: ["PostgreSQL", "Redis", "Role-based access", "Audit history"],
      },
      {
        id: "integrations",
        items: ["Payments", "Email", "WhatsApp", "Accounting tools"],
      },
    ],
    process: ["discovery", "architecture", "design", "development", "testing", "rollout"],
    why: [
      { id: "fit", icon: "SlidersHorizontal" },
      { id: "connected", icon: "Link2" },
      { id: "ownership", icon: "ShieldCheck" },
      { id: "adoption", icon: "Users" },
    ],
  },
};

export const serviceListingTags: Record<ServiceSlug, string[]> = {
  "web-development": ["React", "Next.js", "Node.js"],
  "mobile-development": ["React Native", "Flutter", "Swift"],
  woocommerce: ["WooCommerce", "WordPress", "Stripe"],
  "desktop-development": ["Electron", ".NET", "Tauri"],
  "cloud-devops": ["AWS", "Kubernetes", "Terraform"],
  "ai-solutions": ["Python", "OpenAI", "LangChain"],
  blockchain: ["Solidity", "Ethereum", "Web3"],
  "crm-erp": ["CRM", "ERP", "PostgreSQL"],
};
