"use client";

import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceBackNavProps {
  parentHref?: string;
  parentLabel: string;
  currentLabel: string;
  /** Use on dark/image heroes (default). Pass "light" for plain light heroes. */
  tone?: "dark" | "light";
  className?: string;
}

export function ServiceBackNav({
  parentHref = "/services/",
  parentLabel,
  currentLabel,
  tone = "dark",
  className,
}: ServiceBackNavProps) {
  const isDark = tone === "dark";

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "mb-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-medium",
        className
      )}
    >
      <Link
        href={parentHref}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors",
          isDark
            ? "bg-orange-600 text-white hover:bg-orange-500 shadow-md shadow-orange-600/30"
            : "bg-orange-600 text-white hover:bg-orange-500 shadow-md shadow-orange-600/25"
        )}
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
        {parentLabel}
      </Link>
      <ChevronRight
        className={cn(
          "h-4 w-4 shrink-0",
          isDark ? "text-white/70" : "text-zinc-400"
        )}
        aria-hidden
      />
      <span
        className={cn(
          "max-w-[min(100%,20rem)] truncate",
          isDark ? "text-white" : "text-zinc-900"
        )}
        aria-current="page"
      >
        {currentLabel}
      </span>
    </nav>
  );
}
