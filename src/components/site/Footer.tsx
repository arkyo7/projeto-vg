import { NAV_ITEMS, SITE } from "@/config/site";
import { useLanguage } from "@/hooks/useLanguage";

export function Footer() {
  const { t, language } = useLanguage();
  const year = new Date().getFullYear();
  const address = language === "fr" ? SITE.addressFr : SITE.address;

  return (
    <footer className="bg-taupe-deep text-text-light">
      <div className="container-vieg relative py-14 lg:py-16">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-6 top-10 hidden font-heading text-[6rem] leading-none tracking-[0.1em] text-text-light/[0.06] lg:block"
        >
          VG
        </span>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <p className="font-heading text-[1.6rem] tracking-[0.07em] text-text-light">
              VieG Beauté
            </p>
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
              <li>{address}</li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all transition-colors hover:text-gold"
                >
                  {SITE.email}
                </a>
              </li>
              <li>{t.footer.hours}</li>
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
