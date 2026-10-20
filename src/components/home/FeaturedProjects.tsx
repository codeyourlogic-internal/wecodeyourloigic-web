"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function FeaturedProjects() {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          titleKey="featured.title"
          subtitleKey="featured.subtitle"
        />
        <div className="max-w-5xl mx-auto space-y-8">
          {featuredProjects.map((project) => {
            const highlights = t(project.highlightsKey, {
              returnObjects: true,
            }) as string[];

            return (
              <FadeIn key={project.slug}>
                <GlassCard hover={false} className="overflow-hidden p-0">
                  <div className="grid grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-2 relative min-h-[220px] md:min-h-full bg-white flex items-center justify-center p-8 md:p-10 border-b md:border-b-0 md:border-r border-border dark:border-white/10">
                      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.color}`} />
                      {project.logo ? (
                        <Image
                          src={project.logo}
                          alt={t(project.titleKey)}
                          width={280}
                          height={280}
                          className="w-full max-w-[220px] h-auto object-contain"
                          priority
                        />
                      ) : (
                        <div className={`h-24 w-24 rounded-2xl bg-gradient-to-br ${project.color}`} />
                      )}
                    </div>

                    <div className="md:col-span-3 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                      <span className="text-xs font-medium text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                        {t(project.categoryKey)}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4 tracking-tight">
                        {t(project.titleKey)}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {t(project.overviewKey)}
                      </p>

                      {Array.isArray(highlights) && highlights.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-8">
                          {highlights.map((item) => (
                            <span
                              key={item}
                              className="inline-flex rounded-lg border border-border bg-muted/60 px-3 py-1.5 text-xs font-medium text-foreground dark:border-white/10 dark:bg-white/5"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button>
                            {t("featured.visitSite")}
                            <ArrowUpRight className="h-4 w-4" />
                          </Button>
                        </a>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {new URL(project.url).hostname.replace(/^www\./, "")}
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
