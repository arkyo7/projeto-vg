export type Language = "pt" | "fr";

export const LANGUAGES: { code: Language; label: string; short: string; htmlLang: string }[] = [
  { code: "pt", label: "Português", short: "PT", htmlLang: "pt-BR" },
  { code: "fr", label: "Français", short: "FR", htmlLang: "fr-BE" },
];

export type Translation = {
  meta: { title: string; description: string };
  nav: Record<
    "home" | "about" | "services" | "space" | "testimonials" | "contact" | "book" | "openMenu" | "closeMenu" | "language",
    string
  >;
  hero: Record<"slogan" | "text1" | "text2" | "primary" | "secondary" | "imageAlt", string>;
  about: Record<
    "eyebrow" | "title" | "text1" | "text2" | "cta" | "imageAlt" | "storyEyebrow" | "story",
    string
  >;
  services: Record<"eyebrow" | "title" | "more", string>;
  values: { eyebrow: string; title: string; items: { title: string; text: string }[] };
  testimonials: Record<"eyebrow" | "title" | "role" | "rating", string>;
  space: Record<
    | "eyebrow"
    | "title"
    | "text"
    | "addressLabel"
    | "emailLabel"
    | "hoursLabel"
    | "hours"
    | "cta"
    | "phoneLabel"
    | "instagramLabel"
    | "instagramButton"
    | "imageAltLarge"
    | "imageAltSmall",
    string
  >;
  common: Record<"whatsappAriaLabel" | "instagramAriaLabel", string>;
  contact: Record<"title" | "text" | "cta", string>;
  footer: {
    navTitle: string;
    servicesTitle: string;
    contactTitle: string;
    services: string[];
    hours: string;
    rights: string;
  };
};

const pt: Translation = {
  meta: {
    title: "VieG Beauté | Cílios, Sobrancelhas e Unhas em Ixelles",
    description:
      "Studio de beleza especializado em cílios, sobrancelhas e unhas em Ixelles, Bélgica. Naturalidade, elegância e cuidado em cada detalhe.",
  },
  nav: {
    home: "Início",
    about: "Sobre nós",
    services: "Serviços",
    space: "Nosso espaço",
    testimonials: "Depoimentos",
    contact: "Contato",
    book: "Agendar horário",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    language: "Selecionar idioma",
  },
  hero: {
    slogan: "Viva a sua essência",
    text1: "Studio especializado em cílios, sobrancelhas e unhas.",
    text2: "Naturalidade, elegância e sofisticação em cada detalhe.",
    primary: "Agendar horário",
    secondary: "Nossos serviços",
    imageAlt: "Ambiente do studio VieG Beauté",
  },
  about: {
    eyebrow: "Sobre nós",
    title: "Somos a VieG",
    text1:
      "Um espaço criado com propósito: acolher, valorizar e transformar a autoestima de cada mulher.",
    text2:
      "Acreditamos que beleza também é se sentir segura, confiante e verdadeiramente você.",
    cta: "Conheça nossa história",
    imageAlt: "Equipe do studio VieG Beauté",
    storyEyebrow: "Nossa história",
    story:
      "A VieG nasceu do encontro entre técnica e cuidado: um studio em Ixelles pensado para receber cada cliente com atenção, escuta e um resultado feito sob medida para os seus traços.",
  },
  services: {
    eyebrow: "Nossos serviços",
    title: "Beleza em cada detalhe",
    more: "Saiba mais",
  },
  values: {
    eyebrow: "Nossos diferenciais",
    title: "Mais do que serviços, uma experiência.",
    items: [
      { title: "Naturalidade", text: "Resultados que realçam sua beleza única." },
      { title: "Elegância", text: "Estética refinada em cada detalhe." },
      { title: "Técnica", text: "Profissionais cuidadosas e atualizadas." },
      { title: "Acolhimento", text: "Um espaço para você se sentir bem." },
      { title: "Sofisticação", text: "Ambiente pensado em cada detalhe." },
    ],
  },
  testimonials: {
    eyebrow: "Depoimentos",
    title: "O que dizem nossas clientes",
    role: "Cliente",
    rating: "Avaliação de 5 estrelas",
  },
  space: {
    eyebrow: "Nosso espaço",
    title: "Seu momento, seu espaço",
    text: "Um ambiente preparado para oferecer conforto, cuidado e uma experiência especial em cada atendimento.",
    addressLabel: "Endereço",
    emailLabel: "E-mail",
    hoursLabel: "Atendimento",
    hours: "Somente com hora marcada",
    cta: "Agendar horário",
    imageAltLarge: "Recepção do studio VieG Beauté",
    imageAltSmall: "Atendimento no studio VieG Beauté",
  },
  contact: {
    title: "Pronta para viver sua experiência VieG?",
    text: "Entre em contato para verificar os horários disponíveis.",
    cta: "Agendar horário",
  },
  footer: {
    navTitle: "Navegação",
    servicesTitle: "Serviços",
    contactTitle: "Contato",
    services: ["Extensão de cílios", "Sobrancelhas", "Unhas", "Epilação facial"],
    hours: "Atendimento somente com hora marcada",
    rights: "Todos os direitos reservados.",
  },
};

const fr: Translation = {
  meta: {
    title: "VieG Beauté | Cils, Sourcils et Ongles à Ixelles",
    description:
      "Studio de beauté spécialisé dans les cils, les sourcils et les ongles à Ixelles, Belgique. Naturalité, élégance et attention dans chaque détail.",
  },
  nav: {
    home: "Accueil",
    about: "À propos de nous",
    services: "Services",
    space: "Notre espace",
    testimonials: "Témoignages",
    contact: "Contact",
    book: "Prendre rendez-vous",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Choisir la langue",
  },
  hero: {
    slogan: "Vivez votre essence",
    text1: "Studio spécialisé dans les cils, les sourcils et les ongles.",
    text2: "Naturalité, élégance et sophistication dans chaque détail.",
    primary: "Prendre rendez-vous",
    secondary: "Nos services",
    imageAlt: "Ambiance du studio VieG Beauté",
  },
  about: {
    eyebrow: "À propos de nous",
    title: "Nous sommes VieG",
    text1:
      "Un espace créé avec une véritable intention : accueillir, valoriser et renforcer l’estime de soi de chaque femme.",
    text2:
      "Nous croyons que la beauté, c’est aussi se sentir en sécurité, confiante et pleinement soi-même.",
    cta: "Découvrez notre histoire",
    imageAlt: "L’équipe du studio VieG Beauté",
    storyEyebrow: "Notre histoire",
    story:
      "VieG est née de la rencontre entre la technique et le soin : un studio à Ixelles pensé pour accueillir chaque cliente avec attention, écoute et un résultat sur mesure, fidèle à ses traits.",
  },
  services: {
    eyebrow: "Nos services",
    title: "La beauté dans chaque détail",
    more: "En savoir plus",
  },
  values: {
    eyebrow: "Nos différences",
    title: "Bien plus que des services, une expérience.",
    items: [
      { title: "Naturalité", text: "Des résultats qui révèlent votre beauté unique." },
      { title: "Élégance", text: "Une esthétique raffinée dans chaque détail." },
      { title: "Technique", text: "Des professionnelles attentives et qualifiées." },
      { title: "Accueil", text: "Un espace où vous pouvez vous sentir bien." },
      { title: "Sophistication", text: "Un environnement pensé dans chaque détail." },
    ],
  },
  testimonials: {
    eyebrow: "Témoignages",
    title: "Ce que disent nos clientes",
    role: "Cliente",
    rating: "Note de 5 étoiles",
  },
  space: {
    eyebrow: "Notre espace",
    title: "Votre moment, votre espace",
    text: "Un environnement conçu pour offrir confort, attention et une expérience unique lors de chaque rendez-vous.",
    addressLabel: "Adresse",
    emailLabel: "E-mail",
    hoursLabel: "Rendez-vous",
    hours: "Uniquement sur rendez-vous",
    cta: "Prendre rendez-vous",
    imageAltLarge: "Réception du studio VieG Beauté",
    imageAltSmall: "Prestation au studio VieG Beauté",
  },
  contact: {
    title: "Prête à vivre votre expérience VieG ?",
    text: "Contactez-nous pour connaître les disponibilités.",
    cta: "Prendre rendez-vous",
  },
  footer: {
    navTitle: "Navigation",
    servicesTitle: "Services",
    contactTitle: "Contact",
    services: ["Extensions de cils", "Sourcils", "Ongles", "Épilation du visage"],
    hours: "Uniquement sur rendez-vous",
    rights: "Tous droits réservés.",
  },
};

export const translations: Record<Language, Translation> = { pt, fr };
