import { services } from "@/data/site";
import { SITE_URL } from "./config";

const STATIC_PATHS = [
  "",
  "/about",
  "/services",
  "/hire-resources",
  "/technologies",
  "/industries",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
  "/llms.txt",
  "/llms-full.txt",
];

export function getAllSitemapEntries() {
  const entries: {
    url: string;
    lastModified: Date;
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
    priority: number;
  }[] = [];
  const now = new Date();

  for (const path of STATIC_PATHS) {
    const isFile = path.includes(".");
    const url =
      path === ""
        ? `${SITE_URL}/`
        : isFile
          ? `${SITE_URL}${path}`
          : `${SITE_URL}${path}/`;

    entries.push({
      url,
      lastModified: now,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority:
        path === ""
          ? 1.0
          : path === "/services" ||
              path === "/contact" ||
              path === "/hire-resources" ||
              path === "/about"
            ? 0.9
            : path.startsWith("/llms")
              ? 0.7
              : 0.8,
    });
  }

  for (const service of services) {
    entries.push({
      url: `${SITE_URL}/services/${service.slug}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  return entries;
}
