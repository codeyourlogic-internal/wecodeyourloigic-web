import type { ReactNode } from "react";

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-10 last:mb-0">
      <h2 className="text-xl font-bold tracking-tight mb-3 text-foreground">{title}</h2>
      <div className="space-y-3 text-muted-foreground leading-relaxed text-[15px] sm:text-base">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
