import { BOOKING_URL } from "@/config/site";
import { useLanguage } from "@/hooks/useLanguage";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Reveal } from "./Reveal";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative overflow-hidden bg-background pt-[72px] lg:pt-[80px]">
      <div className="container-vieg grid items-center gap-12 py-14 md:py-20 lg:min-h-[660px] lg:grid-cols-[1fr_1.08fr] lg:gap-16 lg:py-24">
        <Reveal className="max-w-xl">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-12 bg-gold" />
            <svg
              aria-hidden="true"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              className="text-gold"
              fill="currentColor"
            >
              <path d="M12 0.5l1.9 8.1 8.1 1.9 -8.1 1.9 -1.9 8.1 -1.9 -8.1 -8.1 -1.9 8.1 -1.9z" />
            </svg>
          </div>

          <h1 className="mt-6 font-heading text-[3.4rem] font-normal leading-[0.92] tracking-[0.01em] text-primary sm:text-[4.2rem] lg:text-[5.1rem]">
            VieG
            <br />
            Beauté
          </h1>

          <p className="mt-4 flex items-center gap-3">
            <span className="font-signature text-[2rem] leading-tight text-primary-light lg:text-[2.4rem]">
              {t.hero.slogan}
            </span>
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="shrink-0 text-accent"
              fill="currentColor"
            >
              <path d="M12 21s-7.5-4.7-9.3-9A5.3 5.3 0 0 1 12 6.4 5.3 5.3 0 0 1 21.3 12c-1.8 4.3-9.3 9-9.3 9z" />
            </svg>
          </p>

          <div className="mt-7 space-y-2.5 font-body text-[15px] leading-relaxed text-text-body">
            <p>{t.hero.text1}</p>
            <p>{t.hero.text2}</p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={BOOKING_URL}
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 font-body text-sm font-medium text-accent-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary"
            >
              {t.hero.primary}
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-primary/40 px-8 py-3.5 font-body text-sm font-medium text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              {t.hero.secondary}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <ImagePlaceholder
            src="/images/hero-vieg-beaute.webp"
            alt={t.hero.imageAlt}
            ratio="4 / 5"
            priority
            rounded="rounded-[2rem]"
            className="lg:aspect-[5/4]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 rounded-l-[2rem] bg-gradient-to-r from-background/70 to-transparent lg:block"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 hidden h-24 w-24 rounded-full border border-gold/40 lg:block"
          />
        </Reveal>
      </div>
    </section>
  );
}
