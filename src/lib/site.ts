export const SITE = {
  name: "Almeida & Chagas",
  tagline: "Odontologia Especializada",
  phone: "+55 11 99999-0000",
  phoneDisplay: "(11) 99999-0000",
  whatsapp: "5511999990000",
  whatsappMessage: "Olá! Gostaria de agendar uma avaliação na clínica.",
  email: "contato@almeidachagas.com.br",
  address: "Av. Brigadeiro Faria Lima, 1234 — Itaim Bibi, São Paulo — SP",
  instagram: "https://instagram.com/",
  mapsEmbed:
    "https://www.google.com/maps?q=Av.+Brigadeiro+Faria+Lima+1234+Itaim+Bibi&output=embed",
  mapsLink: "https://maps.google.com/?q=Av.+Brigadeiro+Faria+Lima+1234+Itaim+Bibi",
  hours: "Seg a Sex · 8h às 20h  ·  Sáb · 9h às 14h",
};

export const waLink = (msg = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
