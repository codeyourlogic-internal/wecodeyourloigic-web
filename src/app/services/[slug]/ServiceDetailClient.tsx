"use client";

import { useTranslation } from "react-i18next";
import { CheckCircle } from "lucide-react";
import {
  servicePages,
  WEB_DEV_HERO_IMAGE,
  MOBILE_DEV_HERO_IMAGE,
  WOOCOMMERCE_HERO_IMAGE,
  DESKTOP_DEV_HERO_IMAGE,
  CLOUD_DEVOPS_HERO_IMAGE,
  AI_SOLUTIONS_HERO_IMAGE,
  BLOCKCHAIN_HERO_IMAGE,
  CRM_ERP_HERO_IMAGE,
  type ServiceSlug,
} from "@/data/service-pages";
import { ServiceHero } from "@/components/services/ServiceHero";
import { MobileServiceHero } from "@/components/services/MobileServiceHero";
import { OfferingGrid } from "@/components/services/OfferingGrid";
import { OfferingImageGrid } from "@/components/services/OfferingImageGrid";
import { CloudOfferingsGrid } from "@/components/services/CloudOfferingsGrid";
import { AiWhatWeBuild } from "@/components/services/AiWhatWeBuild";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { ProcessRow } from "@/components/services/ProcessRow";
import { WhyChooseGrid } from "@/components/services/WhyChooseGrid";
import { PageCTA } from "@/components/services/PageCTA";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { RelatedServices } from "@/components/seo/RelatedServices";
import { FadeIn } from "@/components/ui/FadeIn";
import { getServiceIcon } from "@/components/services/iconMap";

const WEB_DEV_FALLBACK_HERO = "/images/web-development/hero.png";
const MOBILE_DEV_FALLBACK_HERO = "/images/mobile-development/hero.png";
const WOOCOMMERCE_FALLBACK_HERO = "/images/woocommerce/hero.png";
const CLOUD_DEVOPS_FALLBACK_HERO = "/images/cloud-devops/hero.png";
const AI_SOLUTIONS_FALLBACK_HERO = "/images/ai-solutions/hero.png";
const BLOCKCHAIN_FALLBACK_HERO = "/images/blockchain/hero.png";

export default function ServiceDetailClient({ slug }: { slug: string }) {
  const { t } = useTranslation();
  const page = servicePages[slug as ServiceSlug];

  if (!page) return null;

  const { key } = page;
  const features = t(`services.${key}.features`, { returnObjects: true }) as string[];

  const offerings = page.offerings.map((item) => ({
    icon: getServiceIcon(item.icon),
    title: t(`services.${key}.offerings.${item.id}.title`),
    description: t(`services.${key}.offerings.${item.id}.desc`),
    image: item.image,
  }));

  const offeringImages = page.offerings.map((item) => ({
    title: t(`services.${key}.offerings.${item.id}.title`),
    description: t(`services.${key}.offerings.${item.id}.desc`),
    image: item.image ?? `/images/web-development/offering-${item.id}.png`,
  }));

  const steps = page.process.map((stepId) => ({
    title: t(`services.${key}.process.${stepId}.title`),
    description: t(`services.${key}.process.${stepId}.desc`),
  }));

  const whyItems = page.why.map((item) => ({
    icon: getServiceIcon(item.icon),
    title: t(`services.${key}.why.${item.id}.title`),
    description: t(`services.${key}.why.${item.id}.desc`),
  }));

  if (slug === "mobile-development") {
    const heroImage = MOBILE_DEV_HERO_IMAGE ?? MOBILE_DEV_FALLBACK_HERO;

    const offeringItems = page.offerings.map((item) => ({
      title: t(`services.${key}.offerings.${item.id}.title`),
      description: t(`services.${key}.offerings.${item.id}.desc`),
      image: item.image ?? "",
    }));

    return (
      <>
        <MobileServiceHero
          badge={t("services.mobile.badge")}
          title={t("services.mobile.title")}
          subtitle={t("services.mobile.short")}
          primaryCta={{
            href: "/contact?interest=mobileDev",
            label: t("services.mobile.ctaPrimary"),
          }}
          secondaryCta={{
            href: "#what-we-build",
            label: t("services.mobile.ctaSecondary"),
          }}
          backgroundImage={heroImage}
          backLabel={t("common.allServices")}
          currentLabel={t("services.mobile.title")}
        />

        <div id="what-we-build" className="scroll-mt-24">
          <OfferingImageGrid
            title={t("services.mobile.whatWeBuildTitle")}
            subtitle={t("services.mobile.whatWeBuildSubtitle")}
            items={offeringItems}
          />
        </div>

        <ProcessRow
          title={t("services.mobile.processTitle")}
          subtitle={t("services.mobile.processSubtitle")}
          steps={steps}
        />

        <WhyChooseGrid
          title={t("services.mobile.whyTitle")}
          subtitle={t("services.mobile.whySubtitle")}
          items={whyItems}
        />

        <RelatedServices excludeSlug={slug} />
        <ServiceFaq serviceKey={key} />

        <PageCTA
          title={t("services.mobile.ctaTitle")}
          subtitle={t("services.mobile.ctaSubtitle")}
          buttonLabel={t("services.mobile.ctaButton")}
          href="/contact?interest=mobileDev"
        />
      </>
    );
  }

  if (slug === "web-development") {
    const heroImage = WEB_DEV_HERO_IMAGE ?? WEB_DEV_FALLBACK_HERO;

    return (
      <>
        <ServiceHero
          badge={t("services.web.badge")}
          title={t("services.web.title")}
          subtitle={t("services.web.short")}
          primaryCta={{
            href: "/contact?interest=webDev",
            label: t("services.web.ctaPrimary"),
          }}
          secondaryCta={{
            href: "#what-we-build",
            label: t("services.web.ctaSecondary"),
          }}
          backgroundImage={heroImage}
          backLabel={t("common.allServices")}
          currentLabel={t("services.web.title")}
        />

        <div id="what-we-build" className="scroll-mt-24">
          <OfferingImageGrid
            title={t("services.web.whatWeBuildTitle")}
            subtitle={t("services.web.whatWeBuildSubtitle")}
            items={offeringImages}
          />
        </div>

        <ProcessRow
          title={t("services.web.processTitle")}
          subtitle={t("services.web.processSubtitle")}
          steps={steps}
        />

        <WhyChooseGrid
          title={t("services.web.whyTitle")}
          subtitle={t("services.web.whySubtitle")}
          items={whyItems}
        />

        <RelatedServices excludeSlug={slug} />
        <ServiceFaq serviceKey={key} />

        <PageCTA
          title={t("services.web.ctaTitle")}
          subtitle={t("services.web.ctaSubtitle")}
          buttonLabel={t("services.web.ctaButton")}
          href="/contact?interest=webDev"
        />
      </>
    );
  }

  if (slug === "woocommerce") {
    const heroImage = WOOCOMMERCE_HERO_IMAGE ?? WOOCOMMERCE_FALLBACK_HERO;

    const wooOfferings = page.offerings.map((item) => ({
      title: t(`services.woocommerce.offerings.${item.id}.title`),
      description: t(`services.woocommerce.offerings.${item.id}.desc`),
      image: item.image ?? `/images/woocommerce/offering-1.png`,
    }));

    return (
      <>
        <ServiceHero
          badge={t("services.woocommerce.badge")}
          title={t("services.woocommerce.title")}
          subtitle={t("services.woocommerce.short")}
          primaryCta={{
            href: "/contact?interest=woocommerce",
            label: t("services.woocommerce.ctaPrimary"),
          }}
          secondaryCta={{
            href: "#what-we-offer",
            label: t("services.woocommerce.ctaSecondary"),
          }}
          backgroundImage={heroImage}
          backLabel={t("common.allServices")}
          currentLabel={t("services.woocommerce.title")}
        />

        <div id="what-we-offer" className="scroll-mt-24">
          <OfferingImageGrid
            title={t("services.woocommerce.whatWeBuildTitle")}
            subtitle={t("services.woocommerce.whatWeBuildSubtitle")}
            items={wooOfferings}
          />
        </div>

        <ProcessRow
          title={t("services.woocommerce.processTitle")}
          subtitle={t("services.woocommerce.processSubtitle")}
          steps={steps}
        />

        <WhyChooseGrid
          title={t("services.woocommerce.whyTitle")}
          subtitle={t("services.woocommerce.whySubtitle")}
          items={whyItems}
        />

        <RelatedServices excludeSlug={slug} />
        <ServiceFaq serviceKey={key} />

        <PageCTA
          title={t("services.woocommerce.ctaTitle")}
          subtitle={t("services.woocommerce.ctaSubtitle")}
          buttonLabel={t("services.woocommerce.ctaButton")}
          href="/contact?interest=woocommerce"
        />
      </>
    );
  }

  if (slug === "cloud-devops") {
    const heroImage = CLOUD_DEVOPS_HERO_IMAGE ?? CLOUD_DEVOPS_FALLBACK_HERO;

    const cloudOfferings = page.offerings.map((item) => ({
      icon: getServiceIcon(item.icon),
      title: t(`services.cloud.offerings.${item.id}.title`),
      description: t(`services.cloud.offerings.${item.id}.desc`),
      image: item.image,
    }));

    return (
      <>
        <ServiceHero
          badge={t("services.cloud.badge")}
          title={t("services.cloud.title")}
          subtitle={t("services.cloud.short")}
          primaryCta={{
            href: "/contact?interest=cloud",
            label: t("services.cloud.ctaPrimary"),
          }}
          secondaryCta={{
            href: "#what-we-offer",
            label: t("services.cloud.ctaSecondary"),
          }}
          backgroundImage={heroImage}
          backLabel={t("common.allServices")}
          currentLabel={t("services.cloud.title")}
        />

        <div id="what-we-offer" className="scroll-mt-24">
          <CloudOfferingsGrid
            title={t("services.cloud.whatWeBuildTitle")}
            subtitle={t("services.cloud.whatWeBuildSubtitle")}
            items={cloudOfferings}
          />
        </div>

        <ProcessRow
          title={t("services.cloud.processTitle")}
          subtitle={t("services.cloud.processSubtitle")}
          steps={steps}
        />

        <WhyChooseGrid
          title={t("services.cloud.whyTitle")}
          subtitle={t("services.cloud.whySubtitle")}
          items={whyItems}
          columns={2}
        />

        <RelatedServices excludeSlug={slug} />
        <ServiceFaq serviceKey={key} />

        <PageCTA
          title={t("services.cloud.ctaTitle")}
          subtitle={t("services.cloud.ctaSubtitle")}
          buttonLabel={t("services.cloud.ctaButton")}
          href="/contact?interest=cloud"
        />
      </>
    );
  }

  if (slug === "ai-solutions") {
    const heroImage = AI_SOLUTIONS_HERO_IMAGE ?? AI_SOLUTIONS_FALLBACK_HERO;

    const sampleKeys = ["training", "chatbot", "vision", "analytics"] as const;
    const sampleImages: Record<(typeof sampleKeys)[number], string> = {
      training: "/images/ai-solutions/sample-training.png",
      chatbot: "/images/ai-solutions/sample-chatbot.png",
      vision: "/images/ai-solutions/sample-vision.png",
      analytics: "/images/ai-solutions/sample-analytics.png",
    };

    const aiOfferings = page.offerings.map((item) => ({
      icon: getServiceIcon(item.icon),
      title: t(`services.ai.offerings.${item.id}.title`),
      description: t(`services.ai.offerings.${item.id}.desc`),
      image: item.image,
    }));

    return (
      <>
        <ServiceHero
          badge={t("services.ai.badge")}
          title={t("services.ai.title")}
          subtitle={t("services.ai.short")}
          primaryCta={{
            href: "/contact?interest=ai",
            label: t("services.ai.ctaPrimary"),
          }}
          secondaryCta={{
            href: "#what-we-build",
            label: t("services.ai.ctaSecondary"),
          }}
          backgroundImage={heroImage}
          backLabel={t("common.allServices")}
          currentLabel={t("services.ai.title")}
        />

        <div id="what-we-build" className="scroll-mt-24">
          <AiWhatWeBuild
            title={t("services.ai.whatWeBuildTitle")}
            subtitle={t("services.ai.whatWeBuildSubtitle")}
            samplesLabel={t("services.ai.samplesLabel")}
            samples={sampleKeys.map((id) => ({
              title: t(`services.ai.samples.${id}.title`),
              description: t(`services.ai.samples.${id}.desc`),
              image: sampleImages[id],
            }))}
            offerings={aiOfferings}
          />
        </div>

        <ProcessRow
          title={t("services.ai.processTitle")}
          subtitle={t("services.ai.processSubtitle")}
          steps={steps}
        />

        <WhyChooseGrid
          title={t("services.ai.whyTitle")}
          subtitle={t("services.ai.whySubtitle")}
          items={whyItems}
          columns={2}
        />

        <RelatedServices excludeSlug={slug} />
        <ServiceFaq serviceKey={key} />

        <PageCTA
          title={t("services.ai.ctaTitle")}
          subtitle={t("services.ai.ctaSubtitle")}
          buttonLabel={t("services.ai.ctaButton")}
          href="/contact?interest=ai"
        />
      </>
    );
  }

  if (slug === "blockchain") {
    const heroImage = BLOCKCHAIN_HERO_IMAGE ?? BLOCKCHAIN_FALLBACK_HERO;

    const chainOfferings = page.offerings.map((item) => ({
      icon: getServiceIcon(item.icon),
      title: t(`services.blockchain.offerings.${item.id}.title`),
      description: t(`services.blockchain.offerings.${item.id}.desc`),
      image: item.image,
    }));

    return (
      <>
        <ServiceHero
          badge={t("services.blockchain.badge")}
          title={t("services.blockchain.title")}
          subtitle={t("services.blockchain.short")}
          primaryCta={{
            href: "/contact?interest=blockchain",
            label: t("services.blockchain.ctaPrimary"),
          }}
          backgroundImage={heroImage}
          backLabel={t("common.allServices")}
          currentLabel={t("services.blockchain.title")}
        />

        <CloudOfferingsGrid
          title={t("services.blockchain.whatWeBuildTitle")}
          subtitle={t("services.blockchain.whatWeBuildSubtitle")}
          items={chainOfferings}
        />

        <ProcessRow
          title={t("services.blockchain.processTitle")}
          subtitle={t("services.blockchain.processSubtitle")}
          steps={steps}
        />

        <WhyChooseGrid
          title={t("services.blockchain.whyTitle")}
          subtitle={t("services.blockchain.whySubtitle")}
          items={whyItems}
          columns={2}
        />

        <RelatedServices excludeSlug={slug} />
        <ServiceFaq serviceKey={key} />

        <PageCTA
          title={t("services.blockchain.ctaTitle")}
          subtitle={t("services.blockchain.ctaSubtitle")}
          buttonLabel={t("services.blockchain.ctaButton")}
          href="/contact?interest=blockchain"
        />
      </>
    );
  }

  return (
    <>
      <ServiceHero
        badge={t(`services.${key}.badge`)}
        title={t(`services.${key}.title`)}
        subtitle={t(`services.${key}.short`)}
        primaryCta={{
          href: `/contact?interest=${encodeURIComponent(key)}`,
          label: t("services.detail.speakExpert"),
        }}
        backgroundImage={
          slug === "desktop-development"
            ? DESKTOP_DEV_HERO_IMAGE
            : slug === "crm-erp"
              ? CRM_ERP_HERO_IMAGE
              : undefined
        }
        backLabel={t("common.allServices")}
        currentLabel={t(`services.${key}.title`)}
      />

      <OfferingGrid
        title={t("services.detail.whatWeBuild")}
        subtitle={t("services.detail.whatWeBuildSubtitle")}
        items={offerings}
      />

      {Array.isArray(features) && features.length > 0 && (
        <section className="py-20 md:py-28 bg-muted/40 dark:bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-4">
                {t("services.detail.keyCapabilities")}
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                {t("services.detail.keyCapabilitiesSubtitle")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 dark:border-white/10 dark:bg-white/5"
                  >
                    <CheckCircle className="h-5 w-5 text-amber-400 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      <ProcessSteps
        title={t("services.detail.process")}
        subtitle={t("services.detail.processSubtitle")}
        steps={steps}
      />

      <WhyChooseGrid
        title={t("services.detail.whyChoose")}
        subtitle={t("services.detail.whyChooseSubtitle")}
        items={whyItems}
      />

      <RelatedServices excludeSlug={slug} />
      <ServiceFaq serviceKey={key} />

      <PageCTA
        title={t("services.detail.ctaTitle")}
        subtitle={t("services.detail.ctaSubtitle")}
        buttonLabel={t("services.detail.ctaButton")}
        href={`/contact?interest=${encodeURIComponent(key)}`}
      />
    </>
  );
}
