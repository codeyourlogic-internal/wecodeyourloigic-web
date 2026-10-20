"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

interface PageCTAProps {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  href?: string;
}

export function PageCTA({ title, subtitle, buttonLabel, href = "/contact" }: PageCTAProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-12 md:p-16 text-center">
            <Image
              src="/images/Frame.png"
              alt="Discuss your custom software project with CodeYourLogic"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
              priority={false}
              title="Get a software development quote"
            />
            <div className="absolute inset-0 bg-black/35" aria-hidden />
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="text-[36px] font-bold leading-tight tracking-tight mb-4 text-white">
                {title}
              </h2>
              {subtitle ? (
                <p className="text-base text-zinc-300 mb-8 leading-relaxed">
                  {subtitle}
                </p>
              ) : (
                <div className="mb-8" />
              )}
              <Link href={href} data-track="page_cta_primary" data-track-location="page_cta">
                <Button
                  size="lg"
                  className="rounded-lg bg-orange-600 hover:bg-orange-500 shadow-lg shadow-orange-600/30"
                >
                  {buttonLabel}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
