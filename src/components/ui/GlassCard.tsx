import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card/80 backdrop-blur-xl p-6 shadow-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none",
        hover &&
          "transition-all duration-300 hover:border-amber-500/30 hover:bg-card hover:shadow-xl hover:shadow-amber-500/5 dark:hover:border-white/20 dark:hover:bg-white/10",
        className
      )}
    >
      {children}
    </div>
  );
}
