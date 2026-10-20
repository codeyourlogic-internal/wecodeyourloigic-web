import Image from "next/image";
import { cn } from "@/lib/utils";
import { companyInfo } from "@/data/site";

interface LogoProps {
  size?: number;
  showText?: boolean;
  /** Show ® when the mark is registered (default true). */
  showTrademark?: boolean;
  className?: string;
}

export function Logo({
  size = 36,
  showText = true,
  showTrademark = true,
  className,
}: LogoProps) {
  const mark = companyInfo.trademark;
  const withMark = showTrademark && mark.registered;
  const accessibleName = withMark
    ? `${mark.mark}${mark.symbol}`
    : companyInfo.name;

  return (
    <span className={cn("flex items-center gap-2", className)}>
      <Image
        src="/logo.png"
        alt={showText ? "" : accessibleName}
        width={size}
        height={size}
        className="rounded-lg object-contain"
        priority
      />
      {showText && (
        <span className="text-lg font-bold tracking-tight">
          Code<span className="text-brand-accent">Your</span>Logic
          {withMark && (
            <sup
              className="ml-0.5 text-[0.55em] font-semibold leading-none text-current opacity-80"
              aria-hidden
            >
              {mark.symbol}
            </sup>
          )}
          {withMark && <span className="sr-only"> registered trademark</span>}
        </span>
      )}
    </span>
  );
}
