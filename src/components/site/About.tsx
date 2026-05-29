import receptionImg from "@/assets/reception.jpg";
import { ShieldCheck, Sparkles, HeartHandshake, Microscope } from "lucide-react";

const points = [
  { icon: Microscope, title: "Equipamentos de última geração", desc: "Microscopia clínica e planejamento digital." },
  { icon: ShieldCheck, title: "Previsibilidade do início ao fim", desc: "Planejamento digital com simulação do resultado final." },
  { icon: HeartHandshake, title: "Atendimento humanizado", desc: "Equipe treinada para acolher pacientes com ansiedade." },
  { icon: Sparkles, title: "Resultados naturais", desc: "Estética que valoriza a sua identidade — sem exageros." },
];

export function About() {
  return (
    <section id="sobre" className="py-32 bg-bone">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="reveal reveal-left relative">
          <div className="absolute -top-4 -left-4 w-full h-full border border-gold/40 hidden md:block" />
          <img
            src={receptionImg}
            alt="Recepção da clínica"
            width={1280}
            height={1600}
            loading="lazy"
            className="relative w-full h-[560px] object-cover"
          />
        </div>

        <div className="reveal reveal-right">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-graphite">
              A clínica
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl leading-tight text-balance">
            Um espaço pensado para entregar <em className="not-italic gold-text">excelência</em> em cada detalhe.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Há mais de quatro anos atendendo pacientes exigentes em São Paulo, unimos
            arte e ciência para entregar sorrisos naturais, funcionais e duradouros.
            Nossa estrutura foi desenhada para que você sinta conforto absoluto — da
            recepção ao consultório.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-8 reveal-stagger">
            {points.map((p) => (
              <div key={p.title} className="flex gap-4">
                <p.icon className="w-5 h-5 text-gold shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-lg leading-snug">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
