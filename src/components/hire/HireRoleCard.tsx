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
    <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm">
      {imageError ? (
        <div className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-600 text-white">
          <Icon className="h-5 w-5" />
        </div>
      ) : (
        <div className="relative mb-4 h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-zinc-100">
          <Image
            src={role.image}
            alt={`${title} — hire dedicated developers from CodeYourLogic`}
            width={40}
            height={40}
            className="h-full w-full object-cover"
            title={title}
            onError={() => setImageError(true)}
          />
        </div>
      )}

      <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-zinc-600 leading-relaxed">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {role.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-orange-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
