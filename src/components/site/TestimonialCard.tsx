import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";
import { useLanguage } from "@/hooks/useLanguage";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { t, language } = useLanguage();

  return (
    <article className="flex h-full flex-col rounded-3xl border border-border bg-surface px-6 py-7 shadow-[var(--shadow-soft)] sm:px-7">
      <div className="flex items-center gap-1" role="img" aria-label={t.testimonials.rating}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={13} strokeWidth={1} className="text-gold" fill="currentColor" />
        ))}
      </div>

      <p className="mt-5 flex-1 font-body text-[14.5px] leading-relaxed text-text-body">
        “{testimonial.text[language]}”
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-border/70 pt-5">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-background font-heading text-base text-primary"
        >
          {testimonial.initials}
        </span>
        <span>
          <span className="block font-body text-[13.5px] font-medium text-primary">
            {testimonial.name}
          </span>
          <span className="block font-body text-[11.5px] tracking-wide text-text-secondary">
            {t.testimonials.role}
          </span>
        </span>
      </div>
    </article>
  );
}
