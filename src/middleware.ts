import { NextResponse, type NextRequest } from "next/server";
import { GEO_COUNTRY_COOKIE } from "@/lib/cookies/regions";

const PRIMARY_ORIGIN = "https://codeyourlogic.com";
const LEGACY_HOSTS = new Set([
  "wecodeyourlogic.com",
  "www.wecodeyourlogic.com",
]);

function resolveCountry(request: NextRequest): string {
  const fromVercel = request.headers.get("x-vercel-ip-country");
  const fromCf = request.headers.get("cf-ipcountry");
  // Next.js / some hosts expose geo on the request object
  const geo = (request as NextRequest & { geo?: { country?: string } }).geo;
  const fromGeo = geo?.country;
  const raw = fromVercel || fromCf || fromGeo || "";
  const code = raw.trim().toUpperCase();
  if (!code || code === "XX" || code === "T1") return "";
  return code.slice(0, 2);
}

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") ?? "")
    .split(":")[0]
    .trim()
    .toLowerCase();

  // Netlify domain aliases serve the site unless we redirect them.
  if (LEGACY_HOSTS.has(host)) {
    const target = new URL(
      `${request.nextUrl.pathname}${request.nextUrl.search}`,
      PRIMARY_ORIGIN
    );
    return NextResponse.redirect(target, 301);
  }

  const country = resolveCountry(request);
  const response = NextResponse.next();

  if (country) {
    response.cookies.set(GEO_COUNTRY_COOKIE, country, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  // Run on pages + SEO files so legacy hosts redirect everywhere
  matcher: ["/((?!_next/static|_next/image).*)"],
};
