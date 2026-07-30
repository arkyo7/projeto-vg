import { useLanguage } from "@/hooks/useLanguage";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Reveal } from "./Reveal";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="section-y bg-surface">
      <div className="container-vieg grid items-center gap-12 lg:grid-cols-[42fr_58fr] lg:gap-16">
        <Reveal className="mx-auto w-full max-w-[520px]">
          <ImagePlaceholder
            src="/images/equipe-vieg-beaute.webp"
            alt={t.about.imageAlt}
            ratio="4 / 5"
            className="aspect-[4/5] lg:h-[620px] lg:aspect-auto"
            rounded="rounded-3xl"
            objectPosition="center top"
            zoom
          />
        </Reveal>

        <Reveal delay={100} className="lg:pl-4">
          <div className="flex items-center gap-4">
            <p className="eyebrow">{t.about.eyebrow}</p>

            <span
              aria-hidden="true"
              className="h-px w-10 bg-border"
            />
          </div>

          <h2 className="mt-4 font-heading text-[2.4rem] leading-[1.08] text-primary lg:text-[3rem]">
            {t.about.title}
          </h2>

          <div className="mt-6 max-w-xl space-y-4 font-body text-[15px] leading-relaxed text-text-body">
            <p>{t.about.text1}</p>
            <p>{t.about.text2}</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#nossa-historia"
              className="vieg-button inline-flex items-center justify-center rounded-full border border-primary/40 px-7 py-3 font-body text-sm font-medium text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              {t.about.cta}
            </a>

            <span
              aria-hidden="true"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/50"
            >
              <img
                src="/images/logo-monograma-vg.webp"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="h-8 w-8 object-contain"
              />
            </span>
          </div>

          <div
            id="nossa-historia"
            className="mt-10 rounded-3xl border border-border bg-background px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] sm:px-8"
          >
            <p className="eyebrow">{t.about.storyEyebrow}</p>

            <p className="mt-3 font-body text-[14.5px] leading-relaxed text-text-secondary">
              {t.about.story}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
