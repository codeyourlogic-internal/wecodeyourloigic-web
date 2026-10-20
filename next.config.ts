import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    const locales = ["en", "hi", "de", "fr", "es"];
    return locales.flatMap((locale) => [
      {
        source: `/${locale}`,
        destination: "/",
        permanent: true,
      },
      {
        source: `/${locale}/:path*`,
        destination: "/:path*",
        permanent: true,
      },
    ]);
  },
};

export default nextConfig;
