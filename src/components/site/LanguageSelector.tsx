import { useEffect, useRef, useState } from "react";
import { ChevronDown, Globe2 } from "lucide-react";
import { LANGUAGES } from "@/data/translations";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

export function LanguageSelector({ className }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const current = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent | TouchEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className={cn("relative", className)}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t.nav.language}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-full border border-transparent px-2.5 py-2 font-body text-xs font-medium tracking-wide text-primary transition-colors hover:border-border hover:bg-background-secondary/50"
      >
        <Globe2 size={15} strokeWidth={1.5} aria-hidden="true" />
        <span>{current.short}</span>
        <ChevronDown
          size={13}
          strokeWidth={1.5}
          aria-hidden="true"
          className={cn("transition-transform duration-300", open && "rotate-180")}
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={t.nav.language}
          className="absolute right-0 z-50 mt-2 min-w-[9.5rem] overflow-hidden rounded-2xl border border-border bg-surface py-1.5 shadow-[var(--shadow-soft)]"
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              role="menuitemradio"
              aria-checked={lang.code === language}
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
                buttonRef.current?.focus();
              }}
              className={cn(
                "flex w-full items-center justify-between gap-3 px-4 py-2 text-left font-body text-[13px] transition-colors hover:bg-background",
                lang.code === language ? "text-accent" : "text-text-body",
              )}
            >
              <span>{lang.label}</span>
              <span className="font-medium tracking-widest text-[10px] text-primary-light">
                {lang.short}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
