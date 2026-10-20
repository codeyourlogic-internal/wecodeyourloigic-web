import { getConsentPreferences } from "@/lib/cookies/consent";
import { getAttributionSummary } from "@/lib/cookies/attribution";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void;
      queue: unknown[];
      push: (...args: unknown[]) => void;
      loaded?: boolean;
      version?: string;
    };
    _fbq?: unknown;
    __wcylMetaPixelReady?: boolean;
    __wcylGaReady?: boolean;
    __wcylGtmReady?: boolean;
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim() || "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() || "";

export type TrackParams = Record<
  string,
  string | number | boolean | undefined | null
>;

function loadScript(src: string, id: string) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function ensureDataLayer() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(..._args: unknown[]) {
      // Official gtag pattern pushes the Arguments object
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments as unknown as never);
    };
  }
}

/** Push a GTM-friendly object event (Custom Event trigger in GTM). */
export function pushDataLayer(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  ensureDataLayer();
  window.dataLayer?.push({
    ...payload,
    event_timestamp: Date.now(),
  });
}

function cleanParams(params?: TrackParams): Record<string, string | number | boolean> {
  if (!params) return {};
  return Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== ""
    )
  ) as Record<string, string | number | boolean>;
}

/**
 * Fire analytics + marketing events.
 * - Always pushes to dataLayer for GTM
 * - Also calls gtag when GA4 is initialized (consent + ID)
 * - Meta Pixel when marketing consent is on
 */
export function trackEvent(eventName: string, params?: TrackParams) {
  if (typeof window === "undefined") return;

  const prefs = getConsentPreferences();
  const attribution = getAttributionSummary();
  const payload = {
    ...cleanParams(params),
    ...attribution,
    page_path:
      typeof window !== "undefined" ? window.location.pathname : undefined,
    page_location:
      typeof window !== "undefined" ? window.location.href : undefined,
  };

  // GTM / dataLayer — only when analytics or marketing allowed
  if (prefs.analytics || prefs.marketing) {
    pushDataLayer({
      event: eventName,
      ...payload,
    });
  }

  // Direct gtag only when GA is loaded client-side (not when GTM owns GA4)
  if (prefs.analytics && window.gtag && window.__wcylGaReady && !GTM_ID) {
    window.gtag("event", eventName, payload);
  }

  if (prefs.marketing && window.fbq) {
    const metaMap: Record<string, string> = {
      generate_lead: "Lead",
      submit_application: "SubmitApplication",
      contact: "Contact",
      schedule: "Schedule",
    };
    const metaEvent = metaMap[eventName];
    if (metaEvent) {
      window.fbq("track", metaEvent, cleanParams(params));
    } else if (eventName === "cta_click" || eventName === "form_start") {
      window.fbq("trackCustom", eventName, cleanParams(params));
    }
  }
}

export function trackPageView(url?: string) {
  if (typeof window === "undefined") return;
  const prefs = getConsentPreferences();
  if (!prefs.analytics && !prefs.marketing) return;

  const path = url || window.location.pathname + window.location.search;
  const title = document.title;
  const location = window.location.origin + path;

  pushDataLayer({
    event: "virtual_page_view",
    page_path: path,
    page_title: title,
    page_location: location,
  });

  if (prefs.analytics && window.gtag && window.__wcylGaReady && !GTM_ID && GA_ID) {
    window.gtag("event", "page_view", {
      page_path: path,
      page_title: title,
      page_location: location,
      send_to: GA_ID,
    });
  }

  if (prefs.marketing && window.fbq && window.__wcylMetaPixelReady) {
    window.fbq("track", "PageView");
  }
}

export function trackCtaClick(params: {
  cta_id: string;
  cta_location: string;
  cta_text?: string;
  destination?: string;
}) {
  trackEvent("cta_click", params);
}

export function trackFormStart(formId: string, formName?: string) {
  trackEvent("form_start", {
    form_id: formId,
    form_name: formName || formId,
  });
}

export function trackConversion(
  eventName: "generate_lead" | "submit_application",
  params?: TrackParams
) {
  const enriched = {
    currency: "USD",
    value: eventName === "generate_lead" ? 50 : 10,
    ...params,
  };

  trackEvent(eventName, enriched);

  // Alias for Google Ads / GTM conversion tags that listen for "conversion"
  if (eventName === "generate_lead") {
    trackEvent("conversion", {
      ...enriched,
      send_to: "lead",
      conversion_label: "contact_lead",
    });
  }
}

export function trackContactIntent(params?: TrackParams) {
  trackEvent("contact", {
    method: "click",
    ...params,
  });
}

export function trackPhoneClick(phone?: string) {
  trackEvent("click_to_call", {
    phone: phone?.replace(/\s/g, "").slice(-4),
    link_type: "tel",
  });
}

export function trackEmailClick(email?: string) {
  trackEvent("click_to_email", {
    email_domain: email?.includes("@") ? email.split("@")[1] : undefined,
    link_type: "mailto",
  });
}

export function trackScrollDepth(percent: number, path?: string) {
  trackEvent("scroll_depth", {
    percent_scrolled: percent,
    page_path: path || (typeof window !== "undefined" ? window.location.pathname : undefined),
  });
}

export function updateConsentMode(prefs: {
  analytics: boolean;
  marketing: boolean;
}) {
  ensureDataLayer();
  if (!window.gtag) return;

  window.gtag("consent", "update", {
    analytics_storage: prefs.analytics ? "granted" : "denied",
    ad_storage: prefs.marketing ? "granted" : "denied",
    ad_user_data: prefs.marketing ? "granted" : "denied",
    ad_personalization: prefs.marketing ? "granted" : "denied",
  });
}

export function initAnalyticsIfAllowed() {
  const prefs = getConsentPreferences();
  if (!prefs.analytics || !GA_ID) return;

  ensureDataLayer();
  updateConsentMode(prefs);

  // When GTM is configured, load GA4 inside the container to avoid double-counting
  if (GTM_ID) return;

  if (!window.__wcylGaReady) {
    window.gtag?.("js", new Date());
    window.gtag?.("config", GA_ID, {
      anonymize_ip: true,
      send_page_view: false,
      cookie_flags: "SameSite=None;Secure",
    });
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`, "wcyl-ga4");
    window.__wcylGaReady = true;
  }
}

export function initGtmIfAllowed() {
  // GTM script is injected server-side; mark ready and sync consent
  if (typeof window === "undefined" || !GTM_ID) return;
  ensureDataLayer();
  window.__wcylGtmReady = true;
  const prefs = getConsentPreferences();
  updateConsentMode(prefs);
}

export function initMarketingIfAllowed() {
  const prefs = getConsentPreferences();
  if (!prefs.marketing || !META_PIXEL_ID) return;
  if (window.__wcylMetaPixelReady) return;

  ensureDataLayer();
  updateConsentMode(prefs);

  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      const self = fbq as NonNullable<Window["fbq"]>;
      if (self.callMethod) {
        self.callMethod(...args);
      } else {
        self.queue.push(args);
      }
    } as NonNullable<Window["fbq"]>;

    if (!window._fbq) window._fbq = fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    window.fbq = fbq;
    loadScript("https://connect.facebook.net/en_US/fbevents.js", "wcyl-meta-pixel");
  }

  window.fbq("init", META_PIXEL_ID);
  window.fbq("track", "PageView");
  window.__wcylMetaPixelReady = true;
}

export function revokeOptionalTracking() {
  updateConsentMode({ analytics: false, marketing: false });
}

export function syncTrackingWithConsent() {
  const prefs = getConsentPreferences();
  updateConsentMode(prefs);
  initGtmIfAllowed();
  if (prefs.analytics) initAnalyticsIfAllowed();
  if (prefs.marketing) initMarketingIfAllowed();
  if (!prefs.analytics && !prefs.marketing) revokeOptionalTracking();
}
