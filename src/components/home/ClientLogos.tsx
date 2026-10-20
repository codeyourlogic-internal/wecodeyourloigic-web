"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { homeClients } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function ClientLogos() {
  const { t } = useTranslation();

  return (
    <section className="border-y border-border bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrowKey="homeClients.eyebrow"
          titleKey="homeClients.title"
          subtitleKey="homeClients.subtitle"
        />
        <FadeIn>
          <ul className="mx-auto flex max-w-5xl flex-wrap items-end justify-center gap-x-10 gap-y-10 sm:gap-x-12 md:gap-x-14">
            {homeClients.map((client) => {
              const content = (
                <>
                  <div className="relative h-16 w-36 sm:h-20 sm:w-44">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      sizes="176px"
                      className="object-contain"
                    />
                  </div>
                  <span className="mt-4 max-w-[12rem] text-center text-sm font-medium leading-snug text-zinc-600">
                    {client.name}
                  </span>
                </>
              );

              return (
                <li key={client.id} className="flex flex-col items-center">
                  {client.url ? (
                    <a
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center transition-opacity hover:opacity-80"
                      aria-label={`${client.name} — ${t("homeClients.visitSite")}`}
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
