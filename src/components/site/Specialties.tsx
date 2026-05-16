import {
  Gem, Sparkles, Activity, Sun, Syringe, AlignCenter, Layers, ArrowUpRight,
} from "lucide-react";
import { waLink } from "@/lib/site";

const items = [
  { icon: Gem, title: "Implantes Dentários", desc: "Implantes guiados por tomografia com carga imediata." },
  { icon: Sparkles, title: "Lentes de Contato Dental", desc: "Facetas ultrafinas em porcelana com design personalizado." },
  { icon: Activity, title: "Endodontia", desc: "Tratamentos de canal com microscopia de alta precisão." },
  { icon: Sun, title: "Clareamento", desc: "Protocolos seguros para um sorriso mais branco e natural." },
  { icon: Syringe, title: "Harmonização Facial", desc: "Procedimentos minimamente invasivos para realce sutil." },
  { icon: AlignCenter, title: "Ortodontia", desc: "Alinhadores invisíveis e aparelhos estéticos." },
  { icon: Layers, title: "Reabilitação Oral", desc: "Reconstruções completas com previsibilidade total." },
];

export function Specialties() {
  return (
    <section id="especialidades" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16 reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-graphite">
              Especialidades
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl leading-tight text-balance">
            Tratamentos completos sob o mesmo <em className="not-italic gold-text">cuidado especialista</em>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map((it) => (
            <a
              key={it.title}
              href={waLink(`Olá! Tenho interesse em ${it.title}. Gostaria de uma avaliação.`)}
              target="_blank"
              rel="noopener"
              className="reveal group bg-background p-10 flex flex-col gap-6 hover:bg-ink hover:text-white transition-all duration-500 min-h-[260px]"
            >
              <div className="flex items-start justify-between">
                <it.icon className="w-7 h-7 text-gold transition-transform duration-500 group-hover:scale-110" />
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
              <div className="mt-auto">
                <h3 className="font-display text-2xl leading-tight">{it.title}</h3>
                <p className="text-sm mt-3 opacity-70">{it.desc}</p>
                <span className="block mt-6 text-[10px] tracking-[0.3em] uppercase text-gold">
                  Agendar →
                </span>
              </div>
            </a>
          ))}
          <div className="bg-background p-10 flex flex-col justify-center gap-3 min-h-[260px] reveal">
            <p className="font-display text-2xl leading-tight text-balance">
              Não encontrou o que procura?
            </p>
            <p className="text-sm text-muted-foreground">
              Fale com nossa equipe para uma orientação personalizada.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="mt-4 text-[10px] tracking-[0.3em] uppercase text-gold hover:underline"
            >
              Falar com a clínica →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
