import type { Metadata } from "next";
import {
  SITE_URL,
  SITE_NAME,
  SITE_LEGAL_NAME,
  OG_LOCALE_MAP,
  OG_IMAGE,
  TWITTER_HANDLE,
} from "./config";

interface BuildMetadataOptions {
  locale: string;
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  ogType?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
}

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  keywords = [],
  ogType = "website",
  publishedTime,
  authors,
}: BuildMetadataOptions): Metadata {
  const normalizedPath = path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
  const canonical = path === "/" || path === "" ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`;

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: authors?.map((name) => ({ name })),
    creator: SITE_NAME,
    publisher: SITE_LEGAL_NAME,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical,
    },
    openGraph: {
      type: ogType,
      locale: OG_LOCALE_MAP[locale as keyof typeof OG_LOCALE_MAP] ?? "en_US",
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: OG_IMAGE.url,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: OG_IMAGE.alt,
        },
      ],
      ...(ogType === "article" && publishedTime
        ? { publishedTime, authors: authors ?? [SITE_NAME] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title,
      description,
      images: [OG_IMAGE.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "technology",
  };
}

export function buildSeoMetadata(
  locale: string,
  pageKey: string,
  path: string,
  title: string,
  description: string,
  keywords?: string[]
): Metadata {
  return buildPageMetadata({ locale, path, title, description, keywords });
}
