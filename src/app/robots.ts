import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/config";

export const dynamic = "force-static";

/**
 * Fully open crawl policy for search engines + AI agents.
 * No path is blocked. Discovery files are listed explicitly for clarity.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: [
        "/",
        "/llms.txt",
        "/llms-full.txt",
        "/sitemap.xml",
        "/robots.txt",
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
