interface TechStackDisclaimerProps {
  text: string;
  className?: string;
}

export function TechStackDisclaimer({
  text,
  className = "",
}: TechStackDisclaimerProps) {
  return (
    <p
      className={`text-sm text-zinc-500 leading-relaxed ${className}`.trim()}
    >
      {text}
    </p>
  );
}
