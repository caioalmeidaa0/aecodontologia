import { MessageCircle, CalendarCheck, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { SITE, waLink } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0 parallax" data-parallax="0.15">
        <img
          src={heroImg}
          alt="Clínica odontológica premium em São Paulo"
          width={1920}
          height={1080}
          className="w-full h-[115%] object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 pt-40 w-full text-white">
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <span className="h-px w-10 bg-gold" />
          <span className="text-[11px] tracking-[0.4em] uppercase text-gold-soft">
            Itaim Bibi · São Paulo
          </span>
        </div>

        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl text-balance"
          style={{ animation: "fade-up 1s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          Odontologia estética <em className="not-italic gold-text">e reabilitadora</em> com precisão e naturalidade.
        </h1>

        <p
          className="mt-8 max-w-xl text-lg text-white/75 leading-relaxed"
          style={{ animation: "fade-up 1s 0.15s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          Planejamento digital, microscopia clínica e atendimento humanizado em um
          ambiente pensado para o seu conforto.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row gap-3"
          style={{ animation: "fade-up 1s 0.3s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-ink text-xs uppercase tracking-[0.25em] hover:bg-gold-soft hover:tracking-[0.32em] transition-all duration-[900ms]"
          >
            <MessageCircle className="w-4 h-4 transition-transform duration-[900ms] group-hover:translate-x-1" />
            Falar no WhatsApp
          </a>
          <a
            href="#contato"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white text-xs uppercase tracking-[0.25em] hover:bg-white hover:text-ink hover:tracking-[0.32em] transition-all duration-[900ms]"
          >
            <CalendarCheck className="w-4 h-4 transition-transform duration-[900ms] group-hover:rotate-6" />
            Agendar avaliação
          </a>
        </div>

        <div
          className="mt-16 flex flex-wrap items-center gap-8 border-t border-white/15 pt-8 max-w-2xl"
          style={{ animation: "fade-up 1s 0.45s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          <div className="flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <div className="text-sm">
              <div className="font-medium">4.9 / 5.0</div>
              <div className="text-xs text-white/60">+800 avaliações Google</div>
            </div>
          </div>
          <div className="h-10 w-px bg-white/15" />
          <div className="text-sm">
            <div className="font-medium">+15 anos</div>
            <div className="text-xs text-white/60">de excelência clínica</div>
          </div>
          <div className="h-10 w-px bg-white/15 hidden sm:block" />
          <div className="text-sm">
            <div className="font-medium">Tecnologia 4D</div>
            <div className="text-xs text-white/60">planejamento digital</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 hidden md:flex flex-col items-center gap-2 text-white/60">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="w-px h-12 bg-white/30" />
      </div>
    </section>
  );
}
