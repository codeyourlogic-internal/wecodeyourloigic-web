"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Globe, Smartphone, ArrowRight } from "lucide-react";
import { services } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const HOME_SERVICE_SLUGS = new Set(["web-development", "mobile-development"]);

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Smartphone,
};

export function ServicesOverview() {
  const { t } = useTranslation();
  const homeServices = services.filter((s) => HOME_SERVICE_SLUGS.has(s.slug));

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          titleKey="services.title"
          subtitleKey="services.subtitle"
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {homeServices.map((service) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <StaggerItem key={service.slug}>
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <GlassCard className="h-full group cursor-pointer">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600/20 to-orange-600/20 mb-4 group-hover:from-amber-600/30 group-hover:to-orange-600/30 transition-colors">
                      <Icon className="h-6 w-6 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {t(service.descKey)}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-amber-700 dark:text-amber-400 font-medium group-hover:gap-2 transition-all">
                      {t("services.learnMore")}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </GlassCard>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
        <div className="mt-12 text-center">
          <Link href="/services">
            <Button size="lg" variant="outline">
              {t("services.viewAll")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
