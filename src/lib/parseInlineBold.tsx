import type { ReactNode } from "react";

/**
 * Parses `**bold**` segments into orange strong elements.
 */
export function parseInlineBold(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-orange-600">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
