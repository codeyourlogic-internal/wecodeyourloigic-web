"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  trackCtaClick,
  trackContactIntent,
  trackEmailClick,
  trackPageView,
  trackPhoneClick,
  trackScrollDepth,
  syncTrackingWithConsent,
  GTM_ID,
  initGtmIfAllowed,
} from "@/lib/cookies/analytics";
import { getConsentPreferences, hasAnsweredConsent } from "@/lib/cookies/consent";
import { captureAttributionFromUrl } from "@/lib/cookies/attribution";

function resolveTrackTarget(node: EventTarget | null): HTMLElement | null {
  if (!(node instanceof Element)) return null;
  return node.closest<HTMLElement>(
    "a[href], button[data-track], [data-track]"
  );
}

/**
 * SPA page views, scroll depth, and delegated CTA / contact click tracking.
 */
export function AnalyticsListener() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastPath = useRef<string>("");
  const scrollMarks = useRef<Set<number>>(new Set());

  // Bootstrap GTM readiness + consent-gated tags after hydrate
  useEffect(() => {
    if (GTM_ID) initGtmIfAllowed();
    if (hasAnsweredConsent()) {
      captureAttributionFromUrl();
      syncTrackingWithConsent();
    }
  }, []);

  // Virtual page views on client navigations
  useEffect(() => {
    const qs = searchParams?.toString();
    const path = qs ? `${pathname}?${qs}` : pathname;
    if (path === lastPath.current) return;
    lastPath.current = path;
    scrollMarks.current = new Set();

    const prefs = getConsentPreferences();
    if (prefs.analytics || prefs.marketing) {
      captureAttributionFromUrl();
      // Small delay so document.title has updated
      const t = window.setTimeout(() => trackPageView(path), 40);
      return () => window.clearTimeout(t);
    }
  }, [pathname, searchParams]);

  // Scroll depth milestones
  useEffect(() => {
    const onScroll = () => {
      const prefs = getConsentPreferences();
      if (!prefs.analytics && !prefs.marketing) return;

      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = Math.min(100, Math.round((window.scrollY / scrollable) * 100));
      for (const mark of [25, 50, 75, 100] as const) {
        if (percent >= mark && !scrollMarks.current.has(mark)) {
          scrollMarks.current.add(mark);
          trackScrollDepth(mark, pathname);
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Delegated click tracking for CTAs, contact, tel, mailto
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const prefs = getConsentPreferences();
      if (!prefs.analytics && !prefs.marketing) return;

      const el = resolveTrackTarget(event.target);
      if (!el) return;

      const trackId = el.getAttribute("data-track");
      const trackLocation = el.getAttribute("data-track-location") || "site";
      const trackLabel =
        el.getAttribute("data-track-label") ||
        el.textContent?.trim().slice(0, 80) ||
        undefined;

      if (trackId) {
        trackCtaClick({
          cta_id: trackId,
          cta_location: trackLocation,
          cta_text: trackLabel,
          destination:
            el instanceof HTMLAnchorElement ? el.href : el.getAttribute("href") || undefined,
        });
      }

      if (!(el instanceof HTMLAnchorElement)) return;
      const href = el.getAttribute("href") || "";

      if (href.startsWith("tel:")) {
        trackPhoneClick(href.replace(/^tel:/i, ""));
        return;
      }

      if (href.startsWith("mailto:")) {
        trackEmailClick(href.replace(/^mailto:/i, "").split("?")[0]);
        return;
      }

      try {
        const url = new URL(el.href, window.location.origin);
        const isContact =
          url.pathname.replace(/\/$/, "") === "/contact" ||
          url.pathname.startsWith("/contact/");
        if (isContact && !trackId) {
          trackContactIntent({
            destination: url.pathname + url.search,
            cta_location: trackLocation,
            interest: url.searchParams.get("interest") || undefined,
          });
          trackCtaClick({
            cta_id: "contact_link",
            cta_location: trackLocation,
            cta_text: trackLabel,
            destination: url.pathname + url.search,
          });
        } else if (isContact && trackId) {
          trackContactIntent({
            destination: url.pathname + url.search,
            cta_location: trackLocation,
            interest: url.searchParams.get("interest") || undefined,
            cta_id: trackId,
          });
        }
      } catch {
        // ignore invalid URLs
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
