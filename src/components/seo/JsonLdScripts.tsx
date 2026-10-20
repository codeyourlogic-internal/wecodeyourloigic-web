import { serializeJsonLd } from "@/lib/seo/jsonld";

interface JsonLdScriptsProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLdScripts({ data }: JsonLdScriptsProps) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
        />
      ))}
    </>
  );
}
