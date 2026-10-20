"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Logo } from "@/components/ui/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/ui/SocialIcons";
import { companyInfo } from "@/data/site";
import { KNOWLEDGE_SERVICES } from "@/data/knowledge";
import { openCookiePreferences } from "@/lib/cookies/consent";

const sitemapLinks = [
  { href: "/", labelKey: "nav.home" },
  { href: "/about", labelKey: "nav.about" },
  { href: "/industries", labelKey: "nav.industries" },
  { href: "/technologies", labelKey: "nav.technologies" },
  { href: "/careers", labelKey: "nav.careers" },
  { href: "/contact", labelKey: "nav.contact" },
] as const;

const legalLinks = [
  { href: "/terms", labelKey: "footer.terms" },
  { href: "/privacy", labelKey: "footer.privacy" },
] as const;

const socialLinks = [
  { href: companyInfo.whatsapp.url, labelKey: "footer.social.whatsapp" },
  { href: companyInfo.social.linkedin, labelKey: "footer.social.linkedin" },
  { href: companyInfo.social.instagram, labelKey: "footer.social.instagram" },
  { href: companyInfo.social.facebook, labelKey: "footer.social.facebook" },
] as const;

const footerSocialIcons = [
  {
    href: companyInfo.whatsapp.url,
    label: "WhatsApp",
    Icon: WhatsAppIcon,
    className: "hover:border-white/20 hover:text-white",
  },
  {
    href: companyInfo.social.instagram,
    label: "Instagram",
    Icon: InstagramIcon,
    className: "hover:border-white/20 hover:text-white",
  },
  {
    href: companyInfo.social.linkedin,
    label: "LinkedIn",
    Icon: LinkedInIcon,
    className: "hover:border-white/20 hover:text-white",
  },
  {
    href: companyInfo.social.facebook,
    label: "Facebook",
    Icon: FacebookIcon,
    className: "hover:border-white/20 hover:text-white",
  },
] as const;

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] font-sans text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          <div className="max-w-sm space-y-4 lg:col-span-1">
            <Link href="/" className="inline-flex transition-opacity hover:opacity-90">
              <Logo
                size={36}
                className="[&_span.text-lg]:text-white [&_span.text-brand-accent]:text-orange-500"
              />
            </Link>
            <p className="text-sm leading-relaxed text-zinc-400">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              {t("footer.company")}
            </h3>
            <ul className="space-y-2.5">
              {sitemapLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              {t("footer.services")}
            </h3>
            <ul className="space-y-2.5">
              {KNOWLEDGE_SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {t(service.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              {t("footer.legal")}
            </h3>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => openCookiePreferences()}
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {t("footer.cookies")}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              {t("footer.connectTitle")}
            </h3>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1 text-sm text-zinc-500">
            <p>{t("footer.copyright", { year })}</p>
            <p>{t("footer.trademark")}</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500">
            <a
              href={`mailto:${companyInfo.email}`}
              className="transition-colors hover:text-white"
            >
              {companyInfo.email}
            </a>
            <div className="flex items-center gap-3">
              {footerSocialIcons.map(({ href, label, Icon, className }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors ${className}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
