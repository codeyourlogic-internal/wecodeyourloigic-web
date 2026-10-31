import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import { SiteShell } from "@/components/layout/SiteShell";
import {
  ConsentModeDefaults,
  GoogleTagManager,
  GoogleTagManagerNoscript,
} from "@/components/analytics/GoogleTagManager";
import { SITE_URL, SITE_NAME, SITE_LEGAL_NAME, OG_IMAGE } from "@/lib/seo/config";
import { PAGE_KEYWORDS } from "@/lib/seo/keywords";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Custom Software Development Company | CodeYourLogic",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Custom software company for web, mobile, CRM and ERP, cloud, AI, blockchain, and WooCommerce. CodeYourLogic engineers for startups and enterprises worldwide.",
  keywords: PAGE_KEYWORDS.home,
  authors: [{ name: SITE_LEGAL_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_LEGAL_NAME,
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      {
        url: "/light/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
    ],
    apple: [
      {
        url: "/light/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    title: "Custom Software Development Company | CodeYourLogic",
    description:
      "Custom software company for web, mobile, CRM and ERP, cloud, AI, blockchain, and WooCommerce. CodeYourLogic engineers for startups and enterprises worldwide.",
    images: [
      {
        url: OG_IMAGE.url,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt: OG_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@codeyourlogic",
    creator: "@codeyourlogic",
    title: "Custom Software Development Company | CodeYourLogic",
    description:
      "Custom software for web, mobile, CRM and ERP, cloud, AI, blockchain, and WooCommerce — CodeYourLogic engineers worldwide.",
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `${SITE_URL}/`,
    types: {
      "text/plain": [
        { url: `${SITE_URL}/llms.txt`, title: "llms.txt" },
        { url: `${SITE_URL}/llms-full.txt`, title: "llms-full.txt" },
      ],
    },
  },
  category: "technology",
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
  other: {
    "geo.region": "IN-JH",
    "geo.placename": "Adityapur, Akashwani",
    "geo.position": "22.7870298;86.164525",
    ICBM: "22.7870298, 86.164525",
    "llms-txt": `${SITE_URL}/llms.txt`,
    "llms-full-txt": `${SITE_URL}/llms-full.txt`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <head>
        <ConsentModeDefaults />
        <GoogleTagManager />
      </head>
      <body className={`${outfit.className} antialiased min-h-screen`}>
        <GoogleTagManagerNoscript />
        <Providers>
          <SiteShell>{children}</SiteShell>
        </Providers>
      </body>
    </html>
  );
}
