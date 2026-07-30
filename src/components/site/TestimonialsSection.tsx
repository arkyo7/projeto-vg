import { testimonials } from "@/data/testimonials";
import { useLanguage } from "@/hooks/useLanguage";
import { Reveal } from "./Reveal";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section id="depoimentos" className="section-y bg-background">
      <div className="container-vieg">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.testimonials.eyebrow}</p>
          <h2 className="mt-4 font-heading text-[2.4rem] leading-[1.08] text-primary lg:text-[3rem]">
            {t.testimonials.title}
          </h2>
          <span aria-hidden="true" className="mx-auto mt-6 block h-px w-16 bg-gold/70" />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.id}
              delay={index * 110}
              className="h-full last:sm:col-span-2 last:lg:col-span-1"
            >
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
