import Image from "next/image";

interface PhotoOfferingCardProps {
  title: string;
  description: string;
  image: string;
}

export function PhotoOfferingCard({
  title,
  description,
  image,
}: PhotoOfferingCardProps) {
  return (
    <article className="relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-sm">
      <Image
        src={encodeURI(image)}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
        quality={90}
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/60"
        aria-hidden
      />
      <div className="relative z-10 flex h-full flex-col p-5">
        <h3 className="text-lg font-bold tracking-tight text-orange-400 [text-shadow:0_1px_2px_rgba(0,0,0,0.65)]">
          {title}
        </h3>
        <p className="mt-2 text-base font-medium leading-relaxed text-[#f8f8f8] [text-shadow:0_1px_2px_rgba(0,0,0,0.7)]">
          {description}
        </p>
      </div>
    </article>
  );
}
