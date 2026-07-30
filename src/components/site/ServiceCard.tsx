import { ArrowRight, Brush, Eye, Hand } from "lucide-react";
import type { Service } from "@/data/services";
import { useLanguage } from "@/hooks/useLanguage";
import { ImagePlaceholder } from "./ImagePlaceholder";

const icons = { Eye, Brush, Hand };

export function ServiceCard({ service }: { service: Service }) {
  const { t, language } = useLanguage();
  const Icon = icons[service.icon];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
      <div className="relative">
        <ImagePlaceholder
          src={service.image}
          alt={service.title[language]}
          ratio="4 / 3"
          rounded="rounded-none"
          className="border-0 border-b border-border"
          objectPosition={service.objectPosition ?? "center"}
          zoom
        />


        <span
          aria-hidden="true"
          className="absolute -bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-gold shadow-[var(--shadow-soft)]"
        >
          <Icon size={18} strokeWidth={1.4} />
        </span>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-7 pt-10 sm:px-7">
        <h3 className="font-heading text-[1.6rem] leading-tight text-primary">
          {service.title[language]}
        </h3>
        <p className="mt-3 font-body text-[14px] leading-relaxed text-text-secondary">
          {service.description[language]}
        </p>

        <ul className="mt-5 space-y-2 font-body text-[13.5px] text-text-body">
          {service.items[language].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="mt-auto inline-flex items-center gap-2 pt-7 font-body text-[12.5px] font-medium tracking-wide text-accent transition-colors hover:text-primary"
        >
          {t.services.more}
          <ArrowRight
            size={14}
            strokeWidth={1.5}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </article>
  );
}
