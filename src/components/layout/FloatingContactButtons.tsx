"use client";

import { Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { companyInfo } from "@/data/site";

export function FloatingContactButtons() {
  const { t } = useTranslation();
  const phoneHref = `tel:${companyInfo.phones[0]?.replace(/\s/g, "") || ""}`;

  return (
    <div
      className="fixed bottom-5 right-4 z-50 flex flex-col items-center gap-3 sm:bottom-6 sm:right-6"
      aria-label={t("common.floatingContact")}
    >
      <a
        href={companyInfo.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("contact.info.whatsappCta")}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_rgba(37,211,102,0.45)] transition-transform hover:scale-105 hover:bg-[#1ebe57] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/70 focus-visible:ring-offset-2"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
      <a
        href={phoneHref}
        aria-label={t("contact.form.callUs")}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-white shadow-[0_4px_14px_rgba(234,88,12,0.4)] transition-transform hover:scale-105 hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/70 focus-visible:ring-offset-2"
      >
        <Phone className="h-5 w-5" strokeWidth={2.25} />
      </a>
    </div>
  );
}
