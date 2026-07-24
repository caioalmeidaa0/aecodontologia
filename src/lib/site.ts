export const SITE = {
  name: "Almeida & Chagas",
  tagline: "Odontologia Especializada",
  phone: "+55 11 97173-5944",
  phoneDisplay: "(11) 97173-5944",
  whatsapp: "5511971735944",
  whatsappMessage: "Olá! Gostaria de agendar uma avaliação na clínica.",
  email: "contato@almeidachagas.com.br",
  address: "Rua Santa Gertrudes, 25 — Tatuapé, São Paulo — SP",
  instagram: "https://instagram.com/clinicaalmeidaechagas",
  mapsEmbed:
    "https://www.google.com/maps?q=Rua+Santa+Gertrudes+25+Tatuape+Sao+Paulo&output=embed",
  mapsLink: "https://maps.google.com/?q=Rua+Santa+Gertrudes+25+Tatuape+Sao+Paulo",
  hours: "Seg a Sex · 8h às 18h  · Sáb · 9h às 14h",
};

export const waLink = (msg = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
