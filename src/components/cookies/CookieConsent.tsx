"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Cookie, Settings2, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  OPEN_PREFERENCES_EVENT,
  acceptAllPreferences,
  getConsentPreferences,
  hasAnsweredConsent,
  rejectOptionalPreferences,
  saveConsentPreferences,
  type ConsentPreferences,
} from "@/lib/cookies/consent";
import { captureAttributionFromUrl, clearAttribution } from "@/lib/cookies/attribution";
import { syncTrackingWithConsent, trackPageView } from "@/lib/cookies/analytics";
import { cn } from "@/lib/utils";

export function CookieConsent() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [draft, setDraft] = useState<ConsentPreferences>(rejectOptionalPreferences());

  useEffect(() => {
    setMounted(true);
    const answered = hasAnsweredConsent();
    setShowBanner(!answered);
    setDraft(getConsentPreferences());

    if (answered) {
      captureAttributionFromUrl();
      syncTrackingWithConsent();
    }

    const openPrefs = () => {
      setDraft(getConsentPreferences());
      setShowPrefs(true);
      setShowBanner(false);
    };

    window.addEventListener(OPEN_PREFERENCES_EVENT, openPrefs);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, openPrefs);
  }, []);

  const applyConsent = (preferences: ConsentPreferences) => {
    saveConsentPreferences(preferences);
    setDraft(preferences);
    setShowBanner(false);
    setShowPrefs(false);

    if (preferences.analytics || preferences.marketing) {
      captureAttributionFromUrl();
    } else {
      clearAttribution();
    }
    syncTrackingWithConsent();
    if (preferences.analytics || preferences.marketing) {
      trackPageView();
    }
  };

  if (!mounted) return null;

  return (
    <>
      {showBanner && !showPrefs && (
        <div
          role="dialog"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-desc"
          className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
        >
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-background/95 p-5 shadow-2xl backdrop-blur-xl dark:border-white/10 sm:p-6">
            <div className="flex gap-3">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-brand-accent">
                <Cookie className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <h2 id="cookie-banner-title" className="text-base font-semibold sm:text-lg">
                  {t("cookies.banner.title")}
                </h2>
                <p
                  id="cookie-banner-desc"
                  className="mt-1.5 text-sm leading-relaxed text-muted-foreground"
                >
                  {t("cookies.banner.description")}{" "}
                  <Link href="/privacy" className="text-brand-accent underline-offset-2 hover:underline">
                    {t("cookies.banner.privacyLink")}
                  </Link>
                </p>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  <Button
                    type="button"
                    size="sm"
                    onClick={() => applyConsent(acceptAllPreferences())}
                    className="w-full sm:w-auto"
                  >
                    {t("cookies.banner.acceptAll")}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => applyConsent(rejectOptionalPreferences())}
                    className="w-full sm:w-auto"
                  >
                    {t("cookies.banner.rejectOptional")}
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setDraft(getConsentPreferences());
                      setShowPrefs(true);
                    }}
                    className="w-full sm:w-auto"
                  >
                    <Settings2 className="h-4 w-4" aria-hidden />
                    {t("cookies.banner.customize")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPrefs && (
        <div className="fixed inset-0 z-[110] flex items-end justify-center bg-black/50 p-4 sm:items-center">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-prefs-title"
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-background p-5 shadow-2xl dark:border-white/10 sm:p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 id="cookie-prefs-title" className="text-lg font-semibold">
                  {t("cookies.preferences.title")}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t("cookies.preferences.description")}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowPrefs(false);
                  if (!hasAnsweredConsent()) setShowBanner(true);
                }}
                className="inline-flex min-h-6 min-w-6 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
                aria-label={t("cookies.preferences.close")}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <ul className="mt-5 space-y-4">
              <CategoryRow
                title={t("cookies.categories.necessary.title")}
                description={t("cookies.categories.necessary.description")}
                checked
                disabled
                onChange={() => undefined}
              />
              <CategoryRow
                title={t("cookies.categories.analytics.title")}
                description={t("cookies.categories.analytics.description")}
                checked={draft.analytics}
                onChange={(checked) => setDraft((prev) => ({ ...prev, analytics: checked }))}
              />
              <CategoryRow
                title={t("cookies.categories.marketing.title")}
                description={t("cookies.categories.marketing.description")}
                checked={draft.marketing}
                onChange={(checked) => setDraft((prev) => ({ ...prev, marketing: checked }))}
              />
            </ul>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => applyConsent(rejectOptionalPreferences())}
              >
                {t("cookies.banner.rejectOptional")}
              </Button>
              <Button type="button" size="sm" onClick={() => applyConsent(draft)}>
                {t("cookies.preferences.save")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CategoryRow({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <li
      className={cn(
        "rounded-xl border border-border p-4 dark:border-white/10",
        disabled && "bg-muted/40"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-medium">{title}</p>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
        <label className="relative inline-flex min-h-6 min-w-11 cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={checked}
            disabled={disabled}
            onChange={(e) => onChange(e.target.checked)}
          />
          <span
            className={cn(
              "h-6 w-11 rounded-full bg-muted transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-amber-500 peer-checked:bg-amber-600 dark:bg-white/15",
              disabled && "opacity-70"
            )}
          />
          <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform peer-checked:translate-x-5" />
        </label>
      </div>
    </li>
  );
}
