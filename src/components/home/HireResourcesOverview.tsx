"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowRight, UserRound } from "lucide-react";
import { homeHireRoles } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function HireResourcesOverview() {
  const { t } = useTranslation();

  return (
    <section className="border-y border-border bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrowKey="homeHire.eyebrow"
          titleKey="homeHire.title"
          subtitleKey="homeHire.subtitle"
        />

        <div className="mb-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link href="/contact?interest=hire" data-track="hire_now_cta" data-track-location="home_hire">
            <Button
              size="lg"
              className="rounded-lg min-w-[160px] bg-orange-600 hover:bg-orange-500"
            >
              {t("homeHire.hireNow")}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/hire-resources" data-track="hire_learn_more" data-track-location="home_hire">
            <Button
              size="lg"
              variant="outline"
              className="rounded-lg min-w-[160px]"
            >
              {t("homeHire.learnMore")}
            </Button>
          </Link>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {homeHireRoles.map((role) => (
            <StaggerItem key={role.id}>
              <Link
                href={`/contact?interest=${encodeURIComponent(role.interest)}`}
                data-track={`hire_role_${role.id}`}
                data-track-location="home_hire"
                className="block h-full rounded-2xl border border-border bg-zinc-50 p-6 shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-white"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <UserRound className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">
                  {t(`homeHire.roles.${role.id}.title`)}
                </h3>
                <p className="mt-2 text-sm font-medium text-orange-600">
                  {role.stack.join(" · ")}
                </p>
                <p className="mt-3 text-base text-zinc-600 leading-relaxed">
                  {t("homeHire.roleDesc")}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
