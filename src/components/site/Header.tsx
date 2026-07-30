import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { NAV_ITEMS, createWhatsAppUrl } from "@/config/site";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";
import { LanguageSelector } from "./LanguageSelector";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const { t, language } = useLanguage();

  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id),
    ).filter((element): element is HTMLElement => Boolean(element));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (firstEntry, secondEntry) =>
              secondEntry.intersectionRatio -
              firstEntry.intersectionRatio,
          )[0];

        if (visibleSection) {
          setActive(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-45% 0px -50% 0px",
        threshold: [0, 0.2, 0.5, 1],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-border bg-background/95 shadow-[var(--shadow-soft)] backdrop-blur-lg"
            : "border-border/60 bg-background/80 backdrop-blur-md",
        )}
      >
        <div
          className={cn(
            "container-vieg flex items-center justify-between gap-6 transition-[height] duration-300",
            scrolled
              ? "h-[66px] lg:h-[72px]"
              : "h-[72px] lg:h-[80px]",
          )}
        >
          <a
            href="#inicio"
            aria-label="VieG Beauté"
            className="flex items-center transition-opacity duration-300 hover:opacity-80"
          >
            <img
              src="/images/logo-vieg-beaute.webp"
              alt="VieG Beauté"
              loading="eager"
              decoding="async"
              className={cn(
                "w-auto object-contain transition-[height] duration-300",
                scrolled
                  ? "h-10 lg:h-12"
                  : "h-12 lg:h-14",
              )}
            />
          </a>

          <nav
            aria-label="VieG Beauté"
            className="hidden lg:block"
          >
            <ul className="flex items-center gap-7">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={
                      active === item.id ? "true" : undefined
                    }
                    className={cn(
                      "relative py-1 font-body text-[12.5px] tracking-wide transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300",
                      active === item.id
                        ? "text-primary after:scale-x-100"
                        : "text-text-body hover:text-accent hover:after:scale-x-100",
                    )}
                  >
                    {t.nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1.5 lg:gap-3">
            <LanguageSelector />

            <a
              href={createWhatsAppUrl(language)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.common.whatsappAriaLabel}
              className="vieg-button hidden items-center rounded-full bg-accent px-6 py-2.5 font-body text-[12.5px] font-medium tracking-wide text-accent-foreground shadow-[var(--shadow-soft)] hover:bg-primary lg:inline-flex"
            >
              {t.nav.book}
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={t.nav.openMenu}
              aria-expanded={menuOpen}
              className="rounded-full p-2.5 text-primary transition-colors hover:bg-background-secondary/60 lg:hidden"
            >
              <Menu
                size={20}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
