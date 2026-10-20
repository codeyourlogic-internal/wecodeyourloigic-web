"use client";

import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Clock, Globe, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactForm } from "@/components/contact/ContactForm";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { companyInfo } from "@/data/site";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader title={t("contact.title")} subtitle={t("contact.subtitle")} />

      <section className="pb-20 md:pb-28 bg-zinc-50 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 md:pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <FadeIn className="lg:col-span-3">
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
                <div
                  className="absolute left-0 top-0 h-full w-1.5 bg-orange-600"
                  aria-hidden
                />
                <div className="mb-8 border-b border-zinc-100 pb-6">
                  <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                    {t("contact.form.submit")}
                  </h2>
                  <p className="mt-2 text-base text-zinc-500">
                    {t("contact.subtitle")}
                  </p>
                </div>
                <Suspense fallback={<div className="h-64 animate-pulse rounded-xl bg-zinc-100" />}>
                  <ContactForm />
                </Suspense>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-2">
              <aside className="h-full rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
                <h2 className="text-xl font-bold text-zinc-900 mb-6">
                  {t("contact.info.title")}
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-3 rounded-xl border border-zinc-100 bg-zinc-50/80 p-3.5">
                    <Mail className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">
                        {t("contact.info.email")}
                      </p>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-sm text-zinc-600 hover:text-orange-600 transition-colors"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-zinc-100 bg-zinc-50/80 p-3.5">
                    <Phone className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">
                        {t("contact.info.phone")}
                      </p>
                      <p className="text-sm text-zinc-600">
                        {companyInfo.phones.map((phone, index) => (
                          <span key={phone}>
                            {index > 0 && ", "}
                            <a
                              href={`tel:${phone.replace(/\s/g, "")}`}
                              className="hover:text-orange-600 transition-colors"
                            >
                              {phone}
                            </a>
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl border border-zinc-100 bg-zinc-50/80 p-3.5">
                    <a
                      href={companyInfo.whatsapp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1ebe57] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60 focus-visible:ring-offset-2"
                    >
                      <WhatsAppIcon className="h-5 w-5 shrink-0" />
                      {t("contact.info.whatsappCta")}
                    </a>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-zinc-100 bg-zinc-50/80 p-3.5">
                    <Globe className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">
                        {t("contact.info.presence")}
                      </p>
                      <p className="text-sm text-zinc-600">
                        {t("contact.info.presenceValue")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-zinc-100 bg-zinc-50/80 p-3.5">
                    <MapPin className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">
                        {t("contact.info.address")}
                      </p>
                      <div className="text-sm text-zinc-600">
                        {companyInfo.addressLines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                      <a
                        href={companyInfo.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-sm text-orange-600 hover:text-orange-500 transition-colors"
                      >
                        {t("contact.info.openInMaps")}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-zinc-100 bg-zinc-50/80 p-3.5">
                    <Clock className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">
                        {t("contact.info.hours")}
                      </p>
                      <p className="text-sm text-zinc-600">{companyInfo.hours}</p>
                    </div>
                  </div>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="overflow-hidden rounded-3xl border border-zinc-200 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-zinc-100">
                <iframe
                  title={`${companyInfo.name} headquarters — Google Maps`}
                  src={companyInfo.mapEmbedUrl}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
