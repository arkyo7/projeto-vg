import { Clock3, Mail, MapPin } from "lucide-react";
import { BOOKING_URL, SITE } from "@/config/site";
import { useLanguage } from "@/hooks/useLanguage";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Reveal } from "./Reveal";

export function SpaceContactSection() {
  const { t, language } = useLanguage();
  const address = language === "fr" ? SITE.addressFr : SITE.address;

  return (
    <section id="espaco" className="section-y bg-surface">
      <div className="container-vieg">
        <div className="grid items-center gap-10 lg:grid-cols-[36fr_30fr_28fr] lg:gap-8">
          <Reveal>
            <ImagePlaceholder
              src="/images/espaco-recepcao.webp"
              alt={t.space.imageAltLarge}
              ratio="4 / 5"
              rounded="rounded-3xl"
            />
          </Reveal>

          <Reveal delay={100} className="lg:px-2">
            <p className="eyebrow">{t.space.eyebrow}</p>
            <h2 className="mt-4 font-heading text-[2.2rem] leading-[1.1] text-primary lg:text-[2.6rem]">
              {t.space.title}
            </h2>
            <p className="mt-5 font-body text-[14.5px] leading-relaxed text-text-body">
              {t.space.text}
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={17} strokeWidth={1.4} aria-hidden="true" className="mt-0.5 text-gold" />
                <span>
                  <span className="block font-body text-[11px] uppercase tracking-[0.16em] text-text-secondary">
                    {t.space.addressLabel}
                  </span>
                  <span className="mt-1 block font-body text-[14px] text-text-body">{address}</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={17} strokeWidth={1.4} aria-hidden="true" className="mt-0.5 text-gold" />
                <span>
                  <span className="block font-body text-[11px] uppercase tracking-[0.16em] text-text-secondary">
                    {t.space.emailLabel}
                  </span>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-1 block break-all font-body text-[14px] text-text-body transition-colors hover:text-accent"
                  >
                    {SITE.email}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock3 size={17} strokeWidth={1.4} aria-hidden="true" className="mt-0.5 text-gold" />
                <span>
                  <span className="block font-body text-[11px] uppercase tracking-[0.16em] text-text-secondary">
                    {t.space.hoursLabel}
                  </span>
                  <span className="mt-1 block font-body text-[14px] text-text-body">
                    {t.space.hours}
                  </span>
                </span>
              </li>
            </ul>

            <a
              href={BOOKING_URL}
              className="mt-9 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 font-body text-sm font-medium text-accent-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary"
            >
              {t.space.cta}
            </a>
          </Reveal>

          <Reveal delay={180}>
            <ImagePlaceholder
              src="/images/espaco-atendimento.webp"
              alt={t.space.imageAltSmall}
              ratio="3 / 4"
              rounded="rounded-3xl"
            />
          </Reveal>
        </div>

        <Reveal
          delay={80}
          className="mt-16 rounded-[2rem] border border-border bg-background px-6 py-12 text-center sm:px-10 lg:mt-20 lg:py-16"
        >
          <div id="contato" className="scroll-mt-32">
            <span aria-hidden="true" className="mx-auto mb-6 block h-px w-14 bg-gold/70" />
            <h2 className="mx-auto max-w-xl font-heading text-[2rem] leading-[1.12] text-primary lg:text-[2.5rem]">
              {t.contact.title}
            </h2>
            <p className="mx-auto mt-4 max-w-md font-body text-[14.5px] leading-relaxed text-text-body">
              {t.contact.text}
            </p>
            <a
              href={BOOKING_URL}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-9 py-3.5 font-body text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent"
            >
              {t.contact.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
