"use client";

import { Suspense, useEffect } from "react";
import { useLocaleSync } from "@/hooks/useLocale";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactButtons } from "@/components/layout/FloatingContactButtons";
import { CookieConsent } from "@/components/cookies/CookieConsent";
import { AnalyticsListener } from "@/components/analytics/AnalyticsListener";
import { visitorRequiresConsent } from "@/lib/cookies/config";
import { syncTrackingWithConsent } from "@/lib/cookies/analytics";
import { captureAttributionFromUrl } from "@/lib/cookies/attribution";

/**
 * Outside GDPR/UK/CH, start tracking immediately (CookieConsent hides its banner).
 * Page views are owned by AnalyticsListener to avoid double-counting.
 */
function ConsentBootstrap() {
  useEffect(() => {
    if (visitorRequiresConsent()) return;
    captureAttributionFromUrl();
    syncTrackingWithConsent();
  }, []);

  return <CookieConsent />;
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  useLocaleSync();

  return (
    <div>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <FloatingContactButtons />
      <ConsentBootstrap />
      <Suspense fallback={null}>
        <AnalyticsListener />
      </Suspense>
    </div>
  );
}
