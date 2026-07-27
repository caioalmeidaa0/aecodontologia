import reception from "@/assets/reception.jpg";
import room from "@/assets/room1.jpg";
import hallway from "@/assets/hallway.jpg";
import hero from "@/assets/hero.jpg";
import dentist from "@/assets/dentist.jpg";

const images = [
  { src: reception, alt: "Recepção da clínica", h: "h-[420px]" },
  { src: hero, alt: "Consultório premium", h: "h-[320px]" },
  { src: hallway, alt: "Corredor da clínica", h: "h-[320px]" },
  { src: room, alt: "Consultório com microscópio", h: "h-[420px]" },
  { src: dentist, alt: "Profissional da clínica", h: "h-[420px]" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-graphite">
                Nosso espaço
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl leading-tight text-balance">
              Um ambiente que <em className="not-italic gold-text">respira</em> conforto e sofisticação.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-4">
            {[images[0], images[1]].map((i, k) => (
              <div key={k} className={`overflow-hidden ${i.h} reveal group`}>
                <img
                  src={i.src}
                  alt={i.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {[images[2], images[3]].map((i, k) => (
              <div key={k} className={`overflow-hidden ${i.h} reveal group`}>
                <img
                  src={i.src}
                  alt={i.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <div className={`overflow-hidden ${images[4].h} reveal group`}>
              <img
                src={images[4].src}
                alt={images[4].alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              />
            </div>
            <div className="bg-ink text-white p-10 h-[320px] flex flex-col justify-between reveal">
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold-soft">
                Tatuapé · SP
              </span>
              <div>
                <p className="font-display text-3xl leading-tight">
                  Venha conhecer<br />pessoalmente.
                </p>
                <a
                  href="#contato"
                  className="mt-6 inline-block text-[10px] tracking-[0.3em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition"
                >
                  Agendar visita →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
