"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
}

export function ProcessSteps({ title, subtitle, steps }: ProcessStepsProps) {
  const lgCols =
    steps.length >= 6
      ? "lg:grid-cols-6"
      : steps.length === 4
        ? "lg:grid-cols-4"
        : "lg:grid-cols-3";

  return (
    <section className="relative py-20 md:py-28 bg-orange-50/60 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(234,88,12,0.18) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
        <StaggerContainer className={cn("grid grid-cols-1 md:grid-cols-2 gap-6", lgCols)}>
          {steps.map((step, index) => (
            <StaggerItem key={step.title}>
              <GlassCard className="h-full">
                <span className="text-3xl font-bold text-amber-500/40 dark:text-amber-400/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold mt-3 mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
