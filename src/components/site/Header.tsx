import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { NAV_ITEMS, BOOKING_URL } from "@/config/site";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";
import { LanguageSelector } from "./LanguageSelector";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("inicio");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="container-vieg flex h-[72px] items-center justify-between gap-6 lg:h-[80px]">
          <a
            href="#inicio"
            className="font-heading text-[1.4rem] leading-none tracking-[0.08em] text-primary transition-colors hover:text-accent lg:text-[1.6rem]"
          >
            VieG Beauté
          </a>

          <nav aria-label="VieG Beauté" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active === item.id ? "true" : undefined}
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
              href={BOOKING_URL}
              className="hidden rounded-full bg-accent px-6 py-2.5 font-body text-[12.5px] font-medium tracking-wide text-accent-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary lg:inline-flex"
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
              <Menu size={20} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
