import { Clock3, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/config/site";
import { useLanguage } from "@/hooks/useLanguage";

export function Footer() {
  const { t, language } = useLanguage();
  const year = new Date().getFullYear();
  const address = language === "fr" ? SITE_CONFIG.addressFr : SITE_CONFIG.address;
  const linkClass =
    "break-all transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";


  return (
    <footer className="bg-taupe-deep text-text-light">
      <div className="container-vieg relative py-14 lg:py-16">
        <img
          src="/images/logo-monograma-vg.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute right-6 top-10 hidden h-24 w-24 object-contain opacity-[0.12] lg:block"
        />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <img
              src="/images/logo-vieg-beaute.webp"
              alt="VieG Beauté"
              loading="lazy"
              decoding="async"
              className="h-14 w-auto object-contain"
            />
            <p className="mt-2 font-signature text-[1.6rem] text-gold">{t.hero.slogan}</p>
            <span aria-hidden="true" className="mt-5 block h-px w-12 bg-accent" />
          </div>


          <nav aria-label={t.footer.navTitle}>
            <h3 className="font-body text-[11px] uppercase tracking-[0.18em] text-text-light/60">
              {t.footer.navTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="font-body text-[13.5px] text-text-light/85 transition-colors hover:text-gold"
                  >
                    {t.nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-body text-[11px] uppercase tracking-[0.18em] text-text-light/60">
              {t.footer.servicesTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {t.footer.services.map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    className="font-body text-[13.5px] text-text-light/85 transition-colors hover:text-gold"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-[11px] uppercase tracking-[0.18em] text-text-light/60">
              {t.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 font-body text-[13.5px] text-text-light/85">
              <li className="flex items-start gap-2">
                <MapPin size={14} strokeWidth={1.5} aria-hidden="true" className="mt-0.5 shrink-0 text-gold" />
                <span>{address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Instagram size={14} strokeWidth={1.5} aria-hidden="true" className="mt-0.5 shrink-0 text-gold" />
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.common.instagramAriaLabel}
                  className={linkClass}
                >
                  {SITE_CONFIG.instagramHandle}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={14} strokeWidth={1.5} aria-hidden="true" className="mt-0.5 shrink-0 text-gold" />
                <a href={SITE_CONFIG.phoneUrl} className={linkClass}>
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={14} strokeWidth={1.5} aria-hidden="true" className="mt-0.5 shrink-0 text-gold" />
                <a href={`mailto:${SITE_CONFIG.email}`} className={linkClass}>
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock3 size={14} strokeWidth={1.5} aria-hidden="true" className="mt-0.5 shrink-0 text-gold" />
                <span>{t.footer.hours}</span>
              </li>
            </ul>

          </div>
        </div>

        <div className="mt-12 border-t border-text-light/15 pt-6">
          <p className="font-body text-[12px] text-text-light/60">
            © {year} VieG Beauté. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
