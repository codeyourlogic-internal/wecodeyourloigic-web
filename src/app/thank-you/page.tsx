"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { ArrowRight, CheckCircle, Mail, Phone } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { companyInfo } from "@/data/site";

function ThankYouContent() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const isApplication = searchParams.get("type") === "application";
  const primaryPhone = companyInfo.phones[0]?.replace(/\s/g, "") || "";

  return (
    <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 sm:p-10 md:p-12 text-center shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
      <div className="absolute left-0 top-0 h-full w-1.5 bg-orange-600" aria-hidden />
      <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" aria-hidden />
      <p className="text-lg font-medium text-zinc-900">
        {isApplication ? t("careers.apply.success") : t("contact.form.success")}
      </p>

      {!isApplication && (
        <>
          <p className="mt-2 text-base text-zinc-500">{t("contact.form.successNext")}</p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
            {primaryPhone ? (
              <a
                href={`tel:${primaryPhone}`}
                data-track="contact_success_call"
                data-track-location="thank_you_page"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {t("contact.form.callUs")}
              </a>
            ) : null}
            <a
              href={`mailto:${companyInfo.email}`}
              data-track="contact_success_email"
              data-track-location="thank_you_page"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-50"
            >
              <Mail className="h-4 w-4" aria-hidden />
              {t("contact.form.emailUs")}
            </a>
          </div>
        </>
      )}

      <div className="mt-8 flex flex-col items-center justify-center gap-4 border-t border-zinc-100 pt-6 sm:flex-row">
        <Link
          href="/"
          className="text-sm font-semibold text-zinc-700 transition-colors hover:text-orange-600"
        >
          {t("thankYou.backHome")}
        </Link>
        <Link
          href={isApplication ? "/careers" : "/services"}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 transition-colors hover:text-orange-500"
        >
          {isApplication ? t("thankYou.viewCareers") : t("thankYou.exploreServices")}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader title={t("thankYou.title")} subtitle={t("thankYou.subtitle")} />
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Suspense fallback={<div className="h-64 animate-pulse rounded-3xl bg-zinc-100" />}>
              <ThankYouContent />
            </Suspense>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
