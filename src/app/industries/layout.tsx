import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/page-metadata";
import { defaultLocale } from "@/lib/i18n/settings";

export const metadata: Metadata = createPageMetadata(
  defaultLocale,
  "industries",
  "/industries"
);

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
