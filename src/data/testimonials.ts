import type { Language } from "@/data/translations";

export type Testimonial = {
  id: string;
  name: string;
  initials: string;
  text: Record<Language, string>;
};

export const testimonials: Testimonial[] = [
  {
    id: "isabelly",
    name: "Isabelly",
    initials: "I",
    text: {
      pt: "Ótimo atendimento, sempre muito bem recebida por todas as meninas.",
      fr: "Un excellent accueil, je suis toujours très bien reçue par toute l’équipe.",
    },
  },
  {
    id: "luana",
    name: "Luana",
    initials: "L",
    text: {
      pt: "Experiência maravilhosa, como sempre. Amo o trabalho e o atendimento!",
      fr: "Une expérience merveilleuse, comme toujours. J’adore le travail et l’accueil !",
    },
  },
  {
    id: "ketley",
    name: "Ketley",
    initials: "K",
    text: {
      pt: "Muito simpática e profissional. O resultado fica sempre lindo e bem-feito. Recomendo!",
      fr: "Très sympathique et professionnelle. Le résultat est toujours magnifique et soigné. Je recommande !",
    },
  },
];
