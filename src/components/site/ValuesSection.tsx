import { Gem, Heart, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Reveal } from "./Reveal";

const icons = [Leaf, Sparkles, ShieldCheck, Heart, Gem];

export function ValuesSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-taupe">
      <div className="container-vieg grid gap-12 py-16 md:py-20 lg:grid-cols-[34fr_66fr] lg:gap-16 lg:py-24">
        <Reveal>
          <p className="eyebrow text-text-light/70">{t.values.eyebrow}</p>
          <h2 className="mt-4 max-w-sm font-heading text-[2.1rem] leading-[1.12] text-text-light lg:text-[2.6rem]">
            {t.values.title}
          </h2>
          <span aria-hidden="true" className="mt-6 block h-px w-16 bg-gold" />
        </Reveal>

        <Reveal delay={120}>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-0">
            {t.values.items.map((item, index) => {
              const Icon = icons[index];
              return (
                <li
                  key={item.title}
                  className="lg:border-l lg:border-text-light/15 lg:px-5 lg:first:border-l-0 lg:first:pl-0"
                >
                  <Icon
                    size={22}
                    strokeWidth={1.3}
                    aria-hidden="true"
                    className="text-gold transition-transform duration-300 hover:-translate-y-0.5"
                  />
                  <h3 className="mt-4 font-heading text-[1.25rem] leading-tight text-text-light">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-body text-[13px] leading-relaxed text-text-light/75">
                    {item.text}
                  </p>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
