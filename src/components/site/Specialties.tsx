import {
  Gem, Sparkles, Activity, Sun, Syringe, AlignCenter, Layers, ArrowUpRight,
} from "lucide-react";
import { waLink } from "@/lib/site";

declare function gtag_report_conversion(url: string): boolean;

const items = [
  { icon: Gem, title: "Implantes Dentários", desc: "Implantes guiados por tomografia com carga imediata.", more: "Reabilitação completa em uma única sessão, planejada digitalmente para máxima precisão." },
  { icon: Sparkles, title: "Lentes de Contato Dental", desc: "Facetas ultrafinas em porcelana com design personalizado.", more: "Desenhadas para harmonizar com seu rosto — preservando ao máximo a estrutura natural do dente." },
  { icon: Activity, title: "Endodontia", desc: "Tratamentos de canal com microscopia de alta precisão.", more: "Ampliação de até 25x para localizar e tratar cada canal com segurança." },
  { icon: Sun, title: "Clareamento", desc: "Protocolos seguros para um sorriso mais branco e natural.", more: "Tratamento de consultório e caseiro combinados, sem sensibilidade." },
  { icon: Syringe, title: "Harmonização Facial", desc: "Procedimentos minimamente invasivos para realce sutil.", more: "Toxina, bioestimuladores e preenchedores aplicados com leveza e estética facial integrada." },
  { icon: AlignCenter, title: "Ortodontia", desc: "Alinhadores invisíveis e aparelhos estéticos.", more: "Planejamento 3D do início ao fim — você vê o resultado antes de começar." },
  { icon: Layers, title: "Reabilitação Oral", desc: "Reconstruções completas com previsibilidade total.", more: "Função, estética e longevidade trabalhadas em conjunto por uma equipe multidisciplinar." },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border reveal-stagger">
          {items.map((it) => {
            const url = waLink(`Olá! Tenho interesse em ${it.title}. Gostaria de uma avaliação.`);
            return (
              <a
                key={it.title}
                href={url}
                target="_blank"
                rel="noopener"
                onClick={() => gtag_report_conversion(url)}
                className="group bg-background p-10 flex flex-col gap-6 hover:bg-ink hover:text-white transition-colors duration-[900ms] min-h-[260px]"
              >
                <div className="flex items-start justify-between">
                  <it.icon className="w-7 h-7 text-gold transition-transform duration-[900ms] group-hover:scale-110 group-hover:rotate-3" />
                  <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[700ms]" />
                </div>
                <div className="mt-auto">
                  <h3 className="font-display text-2xl leading-tight">{it.title}</h3>
                  <p className="text-sm mt-3 opacity-70">{it.desc}</p>
                  <div className="disclose">
                    <p className="text-xs mt-4 opacity-80 leading-relaxed border-l border-gold/40 pl-3 italic">
                      {it.more}
                    </p>
                  </div>
                  <span className="block mt-6 text-[10px] tracking-[0.3em] uppercase text-gold transition-all duration-[700ms] group-hover:tracking-[0.4em]">
                    Agendar →
                  </span>
                </div>
              </a>
            );
          })}
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
              onClick={() => gtag_report_conversion(waLink())}
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
