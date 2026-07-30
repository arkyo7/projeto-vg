import type { Language } from "@/data/translations";

export type Service = {
  id: string;
  image: string;
  icon: "Eye" | "Brush" | "Hand";
  objectPosition?: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  items: Record<Language, string[]>;
};


export const services: Service[] = [
  {
    id: "cilios",
    image: "/images/servico-cilios.webp",
    icon: "Eye",
    title: { pt: "Extensão de cílios", fr: "Extensions de cils" },
    description: {
      pt: "Para quem deseja praticidade e elegância desde o primeiro olhar.",
      fr: "Pour celles qui souhaitent praticité et élégance dès le premier regard.",
    },
    items: {
      pt: ["Clássico", "Volume brasileiro", "3D e 4D", "Efeito molhado", "Fox Eyes"],
      fr: ["Classique", "Volume brésilien", "3D et 4D", "Effet mouillé", "Fox Eyes"],
    },
  },
  {
    id: "sobrancelhas",
    image: "/images/servico-sobrancelhas.webp",
    icon: "Brush",
    title: { pt: "Sobrancelhas", fr: "Sourcils" },
    description: {
      pt: "Realçamos a beleza que você já possui, respeitando seus traços e sua identidade.",
      fr: "Nous révélons la beauté que vous possédez déjà, dans le respect de vos traits et de votre identité.",
    },
    items: {
      pt: [
        "Design personalizado",
        "Design com henna",
        "Design com tintura",
        "Brow lamination",
        "Reconstrução de sobrancelhas",
      ],
      fr: [
        "Design personnalisé",
        "Teinture au henné",
        "Teinture des sourcils",
        "Brow lamination",
        "Reconstruction des sourcils",
      ],
    },
  },
  {
    id: "unhas",
    image: "/images/servico-unhas.webp",
    icon: "Hand",
    title: { pt: "Unhas", fr: "Ongles" },
    description: {
      pt: "Cuidado, acabamento e elegância para valorizar cada detalhe.",
      fr: "Soin, finition et élégance pour sublimer chaque détail.",
    },
    items: {
      pt: ["Manicure", "Esmaltação em gel", "Alongamento", "Nail design"],
      fr: ["Manucure", "Vernis semi-permanent", "Extensions", "Nail art"],
    },
  },
];
