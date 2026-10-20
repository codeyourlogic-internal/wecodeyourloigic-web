import type { MetadataRoute } from "next";
import { getAllSitemapEntries } from "@/lib/seo/sitemap-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return getAllSitemapEntries();
}
