import { Cpu, ScanLine, Microscope, Moon, HeartHandshake, MapPin, Clock, ShieldCheck } from "lucide-react";

const items = [
  { icon: Cpu, title: "Tecnologia avançada", desc: "Equipamentos de ponta para diagnósticos precisos." },
  { icon: ScanLine, title: "Planejamento digital", desc: "Você visualiza o resultado antes de iniciar o tratamento." },
  { icon: Microscope, title: "Microscopia clínica", desc: "Procedimentos com precisão de até 25x." },
  { icon: Moon, title: "Sedação consciente", desc: "Conforto e tranquilidade para pacientes ansiosos." },
  { icon: HeartHandshake, title: "Atendimento humanizado", desc: "Equipe acolhedora do agendamento ao pós-tratamento." },
  { icon: MapPin, title: "Localização privilegiada", desc: "No coração do Itaim Bibi, com fácil acesso." },
  { icon: Clock, title: "Horários flexíveis", desc: "Atendimento estendido e aos sábados." },
  { icon: ShieldCheck, title: "Garantia clínica", desc: "Acompanhamento contínuo dos resultados." },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-32 bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16 reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-gold-soft">
              Diferenciais
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl leading-tight text-balance text-white">
            Cada detalhe pensado para entregar o <em className="not-italic gold-text">melhor</em> resultado.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 reveal-stagger">
          {items.map((it) => (
            <div key={it.title} className="border-t border-white/10 pt-6">
              <it.icon className="w-6 h-6 text-gold" />
              <h3 className="font-display text-xl mt-4 text-white">{it.title}</h3>
              <p className="text-sm text-white/60 mt-2 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
