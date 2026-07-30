import { services } from "@/data/services";
import { useLanguage } from "@/hooks/useLanguage";
import { Reveal } from "./Reveal";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="servicos" className="section-y bg-background">
      <div className="container-vieg">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2 className="mt-4 font-heading text-[2.4rem] leading-[1.08] text-primary lg:text-[3rem]">
            {t.services.title}
          </h2>
          <span aria-hidden="true" className="mx-auto mt-6 block h-px w-16 bg-gold/70" />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              delay={index * 110}
              className="h-full last:sm:col-span-2 last:lg:col-span-1"
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
