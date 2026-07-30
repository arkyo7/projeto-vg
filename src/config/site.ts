export const SITE = {
  name: "VieG Beauté",
  address: "Rue de la Brasserie, 1050 Ixelles, Bélgica",
  addressFr: "Rue de la Brasserie, 1050 Ixelles, Belgique",
  email: "viegbeaute@gmail.com",
} as const;

/** Substituir posteriormente pelo link real de agendamento. */
export const BOOKING_URL = "#contato";

export const NAV_ITEMS = [
  { id: "inicio", key: "home" },
  { id: "sobre", key: "about" },
  { id: "servicos", key: "services" },
  { id: "espaco", key: "space" },
  { id: "depoimentos", key: "testimonials" },
  { id: "contato", key: "contact" },
] as const;
