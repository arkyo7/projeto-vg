export const SITE_CONFIG = {
  name: "VieG Beauté",
  whatsappNumber: "32467697498",
  phoneDisplay: "+32 467 69 74 98",
  phoneUrl: "tel:+32467697498",
  instagramHandle: "@viegbeaute",
  instagramUrl: "https://www.instagram.com/viegbeaute/",
  email: "viegbeaute@gmail.com",
  address: "Rue de la Brasserie, 1050 Ixelles, Bélgica",
  addressFr: "Rue de la Brasserie, 1050 Ixelles, Belgique",
} as const;

/** Compatibilidade com os componentes existentes. */
export const SITE = SITE_CONFIG;

const WHATSAPP_MESSAGES = {
  pt: "Olá! Vim pelo site da VieG Beauté e gostaria de agendar um horário. Poderia me informar os horários disponíveis?",
  fr: "Bonjour ! Je viens du site de VieG Beauté et je souhaiterais prendre rendez-vous. Pourriez-vous m’indiquer les disponibilités ?",
} as const;

export const createWhatsAppUrl = (language: "pt" | "fr"): string =>
  `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    WHATSAPP_MESSAGES[language],
  )}`;

export const NAV_ITEMS = [
  { id: "inicio", key: "home" },
  { id: "sobre", key: "about" },
  { id: "servicos", key: "services" },
  { id: "depoimentos", key: "testimonials" },
  { id: "espaco", key: "space" },
  { id: "contato", key: "contact" },
] as const;
