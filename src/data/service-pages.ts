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
      { id: "webApp", icon: "Code2", image: "/images/ourservice/webdev.png" },
      { id: "pwa", icon: "Smartphone", image: "/images/ourservice/mobile.png" },
      { id: "ecommerce", icon: "ShoppingCart", image: "/images/home-solutions/web-dev.png" },
      { id: "cms", icon: "LayoutDashboard", image: "/images/ourservice/woocom.png" },
      { id: "customPortals", icon: "Users", image: "/images/crm-erp/hero.jpg" },
      { id: "product", icon: "Boxes", image: "/images/desktop-dev.png" },
      { id: "enterprise", icon: "Building2", image: "/images/ourservice/hero.png" },
      { id: "webPortal", icon: "Globe", image: "/images/web-dev-hero.png" },
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
      { id: "ecommerce", icon: "ShoppingCart", image: "/images/home-solutions/mobile-dev.png" },
      { id: "enterprise", icon: "Building2", image: "/images/mobile-development/hero.png" },
      { id: "ondemand", icon: "Truck", image: "/images/mobile-hero.png" },
      { id: "social", icon: "Users", image: "/images/mobile-development/hero-ai.png" },
      { id: "health", icon: "HeartPulse", image: "/images/mobile-development/Frame (3).png" },
      { id: "fintech", icon: "Wallet", image: "/images/home-solutions/blockhain.png" },
      { id: "education", icon: "GraduationCap", image: "/images/technologies/hero.png" },
      { id: "iot", icon: "Cpu", image: "/images/home-solutions/ai-machine.png" },
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
      { id: "enterprise", icon: "Building2", image: "/images/desktop-dev.png" },
      { id: "productivity", icon: "Gauge", image: "/images/ourservice/webdev.png" },
      { id: "health", icon: "HeartPulse", image: "/images/crm-erp/hero.jpg" },
      { id: "education", icon: "GraduationCap", image: "/images/technologies/hero.png" },
      { id: "finance", icon: "Landmark", image: "/images/ai-solutions/sample-analytics.png" },
      { id: "ecommerce", icon: "ShoppingCart", image: "/images/home-solutions/woocommerce.png" },
      { id: "media", icon: "Clapperboard", image: "/images/ai-solutions/sample-vision.png" },
      { id: "custom", icon: "Wrench", image: "/images/ourservice/hero.png" },
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
      { id: "migration", icon: "ArrowRightLeft", image: "/images/cloud-devops-hero.png" },
      { id: "iac", icon: "Server", image: "/images/cloud-devops/cloud-console.png" },
      { id: "cicd", icon: "GitBranch", image: "/images/cloud-devops/ci.png" },
      { id: "containers", icon: "Boxes", image: "/images/cloud-devops/kubermeties.png" },
      { id: "serverless", icon: "CloudLightning", image: "/images/home-solutions/cloud-devops.png" },
      { id: "monitoring", icon: "BarChart3", image: "/images/cloud-devops/monitoring.png" },
      { id: "disaster", icon: "LifeBuoy", image: "/images/cloud-devops/hero.png" },
      { id: "cost", icon: "Wallet", image: "/images/ai-solutions/sample-analytics.png" },
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
      { id: "llm", icon: "Brain", image: "/images/ai-solutions/hero.png" },
      { id: "chatbots", icon: "MessageSquare", image: "/images/ai-solutions/sample-chatbot.png" },
      { id: "analytics", icon: "LineChart", image: "/images/ai-solutions/sample-analytics.png" },
      { id: "vision", icon: "Eye", image: "/images/ai-solutions/sample-vision.png" },
      { id: "nlp", icon: "Languages", image: "/images/ai-solutions/sample-training.png" },
      { id: "recommend", icon: "Sparkles", image: "/images/home-solutions/ai-machine.png" },
      { id: "documents", icon: "FileCode", image: "/images/desktop-dev.png" },
      { id: "search", icon: "Search", image: "/images/ai-solution.png" },
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
      { id: "smartContracts", icon: "FileCode", image: "/images/blockchain/hero.png" },
      { id: "defi", icon: "Landmark", image: "/images/blockchain/shot-defi.png" },
      { id: "nft", icon: "Image", image: "/images/blockchain/shot-nft.png" },
      { id: "tokenLaunch", icon: "Coins", image: "/images/home-solutions/blockhain.png" },
      { id: "dao", icon: "Users", image: "/images/blockchain/shot-explorer.png" },
      { id: "supplyChain", icon: "Truck", image: "/images/blockchain-hero.png" },
      { id: "identity", icon: "Shield", image: "/images/blockchain/shot-wallet.png" },
      { id: "payments", icon: "Wallet", image: "/images/ai-solutions/sample-analytics.png" },
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
      { id: "crm", icon: "Users", image: "/images/crm-erp/hero.jpg" },
      { id: "erp", icon: "Building2", image: "/images/desktop-dev.png" },
      { id: "sales", icon: "BarChart3", image: "/images/ai-solutions/sample-analytics.png" },
      { id: "inventory", icon: "Boxes", image: "/images/home-solutions/woocommerce.png" },
      { id: "finance", icon: "Landmark", image: "/images/ourservice/woocom.png" },
      { id: "people", icon: "Briefcase", image: "/images/ourservice/hero.png" },
      { id: "integrations", icon: "Link2", image: "/images/ourservice/webdev.png" },
      { id: "analytics", icon: "LineChart", image: "/images/home-solutions/cloud-devops.png" },
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
