import { Clock3, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { SITE_CONFIG, createWhatsAppUrl } from "@/config/site";
import { useLanguage } from "@/hooks/useLanguage";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Reveal } from "./Reveal";

export function SpaceContactSection() {
  const { t, language } = useLanguage();
  const address = language === "fr" ? SITE_CONFIG.addressFr : SITE_CONFIG.address;
  const whatsappUrl = createWhatsAppUrl(language);

  const labelClass =
    "block font-body text-[11px] uppercase tracking-[0.16em] text-text-secondary";
  const valueClass = "mt-1 block font-body text-[14px] text-text-body";

  return (
    <section id="espaco" className="section-y scroll-mt-28 bg-surface">
      <div className="container-vieg">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <ImagePlaceholder
              src="/images/espaco-recepcao.webp"
              alt={t.space.imageAltLarge}
              ratio="4 / 5"
              rounded="rounded-3xl"
              zoom
            />
          </Reveal>

          <Reveal delay={100}>

            <p className="eyebrow">{t.space.eyebrow}</p>
            <h2 className="mt-4 font-heading text-[2.2rem] leading-[1.1] text-primary lg:text-[2.6rem]">
              {t.space.title}
            </h2>
            <p className="mt-5 font-body text-[14.5px] leading-relaxed text-text-body">
              {t.space.text}
            </p>

            <ul id="contato" className="mt-8 scroll-mt-28 space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={17} strokeWidth={1.4} aria-hidden="true" className="mt-0.5 shrink-0 text-gold" />
                <span>
                  <span className={labelClass}>{t.space.addressLabel}</span>
                  <span className={valueClass}>{address}</span>
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Instagram size={17} strokeWidth={1.4} aria-hidden="true" className="mt-0.5 shrink-0 text-gold" />
                <span>
                  <span className={labelClass}>{t.space.instagramLabel}</span>
                  <a
                    href={SITE_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.common.instagramAriaLabel}
                    className="mt-1 block font-body text-[14px] text-text-body underline-offset-4 transition-colors hover:text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {SITE_CONFIG.instagramHandle}
                  </a>
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Phone size={17} strokeWidth={1.4} aria-hidden="true" className="mt-0.5 shrink-0 text-gold" />
                <span>
                  <span className={labelClass}>{t.space.phoneLabel}</span>
                  <a
                    href={SITE_CONFIG.phoneUrl}
                    className="mt-1 block font-body text-[14px] text-text-body underline-offset-4 transition-colors hover:text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Mail size={17} strokeWidth={1.4} aria-hidden="true" className="mt-0.5 shrink-0 text-gold" />
                <span>
                  <span className={labelClass}>{t.space.emailLabel}</span>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="mt-1 block break-all font-body text-[14px] text-text-body underline-offset-4 transition-colors hover:text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Clock3 size={17} strokeWidth={1.4} aria-hidden="true" className="mt-0.5 shrink-0 text-gold" />
                <span>
                  <span className={labelClass}>{t.space.hoursLabel}</span>
                  <span className={valueClass}>{t.space.hours}</span>
                </span>
              </li>
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.common.whatsappAriaLabel}
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-center font-body text-sm font-medium text-accent-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {t.space.cta}
              </a>
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.common.instagramAriaLabel}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-7 py-3.5 text-center font-body text-sm font-medium text-primary transition-all duration-300 hover:border-primary hover:bg-background-secondary/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Instagram size={16} strokeWidth={1.5} aria-hidden="true" />
                {t.space.instagramButton}
              </a>
            </div>
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
          <div>
            <span aria-hidden="true" className="mx-auto mb-6 block h-px w-14 bg-gold/70" />
            <h2 className="mx-auto max-w-xl font-heading text-[2rem] leading-[1.12] text-primary lg:text-[2.5rem]">
              {t.contact.title}
            </h2>
            <p className="mx-auto mt-4 max-w-md font-body text-[14.5px] leading-relaxed text-text-body">
              {t.contact.text}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.common.whatsappAriaLabel}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-9 py-3.5 font-body text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {t.contact.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
