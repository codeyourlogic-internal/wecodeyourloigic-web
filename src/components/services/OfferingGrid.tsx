"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

interface OfferingItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tags?: string[];
  href?: string;
  linkLabel?: string;
}

interface OfferingGridProps {
  title: string;
  subtitle?: string;
  items: OfferingItem[];
}

export function OfferingGrid({ title, subtitle, items }: OfferingGridProps) {
  return (
    <section className="py-20 md:py-28 bg-zinc-50 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            const content = (
              <GlassCard className="h-full flex flex-col group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600/20 to-orange-600/20 mb-4 group-hover:from-amber-600/30 group-hover:to-orange-600/30 transition-colors">
                  <Icon className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {item.description}
                </p>
                {item.tags && item.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-amber-700 dark:text-amber-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {item.href && (
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-amber-700 dark:text-amber-400 font-medium group-hover:gap-2 transition-all">
                    {item.linkLabel ?? "Learn more"}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </GlassCard>
            );

            return (
              <StaggerItem key={item.title}>
                {item.href ? (
                  <Link href={item.href} className="block h-full">
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
