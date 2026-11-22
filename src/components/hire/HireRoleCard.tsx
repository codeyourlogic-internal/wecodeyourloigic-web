"use client";

import { useState } from "react";
import Image from "next/image";
import type { HireRole } from "@/data/hire-resources";
import { getServiceIcon } from "@/components/services/iconMap";

interface HireRoleCardProps {
  role: HireRole;
  title: string;
  description: string;
}

export function HireRoleCard({ role, title, description }: HireRoleCardProps) {
  const [imageError, setImageError] = useState(false);
  const Icon = getServiceIcon(role.icon);

  return (
    <article className="relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden rounded-2xl border border-border bg-zinc-900 shadow-sm">
      {imageError ? (
        <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600 text-white">
          <Icon className="h-5 w-5" />
        </div>
      ) : (
        <Image
          src={role.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
          quality={90}
          className="object-cover"
          onError={() => setImageError(true)}
        />
      )}

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/60"
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col p-6">
        <h3 className="text-lg font-bold tracking-tight text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.7)]">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm font-medium leading-relaxed text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.65)]">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {role.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-orange-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
