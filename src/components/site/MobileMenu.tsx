import { useEffect } from "react";
import { X } from "lucide-react";
import { NAV_ITEMS, BOOKING_URL } from "@/config/site";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSelector } from "./LanguageSelector";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <button
        type="button"
        aria-label={t.nav.closeMenu}
        onClick={onClose}
        className="absolute inset-0 h-full w-full bg-primary-dark/25 backdrop-blur-[2px]"
      />

      <div className="absolute inset-x-0 top-0 max-h-full animate-in slide-in-from-top-4 fade-in overflow-y-auto border-b border-border bg-background duration-300">
        <div className="container-vieg flex items-center justify-between py-5">
          <span className="font-heading text-xl tracking-[0.06em] text-primary">VieG Beauté</span>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.nav.closeMenu}
            className="rounded-full p-2 text-primary transition-colors hover:bg-background-secondary/60"
          >
            <X size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label={t.nav.home} className="container-vieg pb-8">
          <ul className="flex flex-col divide-y divide-border/70 border-y border-border/70">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={onClose}
                  className="block py-4 font-body text-sm tracking-wide text-text-body transition-colors hover:text-accent"
                >
                  {t.nav[item.key]}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-4">
            <LanguageSelector className="self-start" />
            <a
              href={BOOKING_URL}
              onClick={onClose}
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-7 py-3.5 font-body text-sm font-medium text-accent-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:bg-primary"
            >
              {t.nav.book}
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
