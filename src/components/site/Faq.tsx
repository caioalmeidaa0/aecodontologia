import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "A clínica atende particular e por convênios?", a: "Atendemos exclusivamente particular, com opções de parcelamento facilitado em até 12x. Trabalhamos com reembolso para os principais planos." },
  { q: "Como funciona a primeira avaliação?", a: "A consulta de avaliação inclui exame clínico, fotografias, escaneamento intraoral e a apresentação de um plano de tratamento personalizado com simulação digital." },
  { q: "Quanto tempo dura um tratamento com lentes de contato dental?", a: "Em média 3 consultas, distribuídas em cerca de 15 a 30 dias, dependendo do planejamento estético definido em conjunto com você." },
  { q: "Vocês atendem pacientes com medo ou ansiedade?", a: "Sim. Oferecemos sedação consciente e uma equipe especializada em acolhimento, garantindo tranquilidade total durante o atendimento." },
  { q: "Onde a clínica está localizada?", a: "Estamos na Av. Brigadeiro Faria Lima, 1234 — Itaim Bibi, com fácil acesso e manobrista disponível." },
];

export function Faq() {
  return (
    <section className="py-32 bg-bone">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-graphite">FAQ</span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl leading-tight text-balance">
            Perguntas <em className="not-italic gold-text">frequentes</em>.
          </h2>
        </div>

        <Accordion type="single" collapsible className="reveal">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-left font-display text-lg md:text-xl py-6 hover:text-gold transition-colors">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
