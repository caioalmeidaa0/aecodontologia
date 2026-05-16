import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Specialties } from "@/components/site/Specialties";
import { Differentials } from "@/components/site/Differentials";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { Toaster } from "@/components/ui/sonner";
import { useReveal } from "@/hooks/use-reveal";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Almeida & Chagas Odontologia — Clínica Premium em São Paulo" },
      { name: "description", content: "Clínica odontológica premium em São Paulo. Implantes, lentes de contato dental, ortodontia e reabilitação oral com tecnologia de ponta no Itaim Bibi." },
      { name: "keywords", content: "clínica odontológica São Paulo, implante dentário São Paulo, lentes de contato dental SP, dentista premium São Paulo, endodontista São Paulo" },
      { property: "og:title", content: "Almeida & Chagas Odontologia — Clínica Premium em São Paulo" },
      { property: "og:description", content: "Odontologia estética e reabilitadora com excelência, precisão e naturalidade." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Antonio:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Dentist",
        name: SITE.name,
        image: "/og.jpg",
        telephone: SITE.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Santa Gertrudes, 25 - Tatuapé",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        priceRange: "$$$",
        openingHours: ["Mo-Fr 08:00-20:00", "Sa 09:00-14:00"],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "800" },
      }),
    }],
  }),
});

function Index() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <div className="scroll-progress" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Differentials />
        <Testimonials />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toaster position="top-center" />
    </div>
  );
}
