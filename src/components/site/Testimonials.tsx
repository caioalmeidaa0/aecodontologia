import { Star, Quote } from "lucide-react";
import smileImg from "@/assets/smile.jpg";

const reviews = [
  {
    name: "Vivian Helena P.",
    text: "Moramos na zona sul e, desde que descobrimos a Almeida & Chagas, nos deslocamos até a zona leste com muita alegria. Estrutura impecável, equipamentos de última geração, dentistas extremamente qualificados e atendimento humanizado. Uma experiência maravilhosa — super recomendo.",
    role: "Avaliação Google",
  },
  {
    name: "Gabriela A.",
    text: "Simplesmente encantada com essa clínica! O lugar é lindo, moderno e muito bem cuidado. Fui recebida com atenção e carinho, os doutores são incríveis, competentes e cuidadosos, explicam tudo com paciência. Já virou minha clínica de confiança!",
    role: "Limpeza",
  },
  {
    name: "Nathan C.",
    text: "Consultório lindo, atendimento impecável. Fui atendido pelo Dr. Caio e ele é um excelente profissional. Todo o procedimento foi perfeitamente explicado.",
    role: "Avaliação Google",
  },
  {
    name: "Israel M.",
    text: "Excelente atendimento! Toda a equipe é atenciosa, educada e demonstra muito profissionalismo. Os procedimentos são realizados com cuidado, organização e qualidade. Ambiente limpo, agradável e acolhedor. Recomendo para quem procura atendimento odontológico de excelência.",
    role: "Avaliação Google",
  },
  {
    name: "Emanuelle A.",
    text: "Minha experiência foi muito boa! Fui muito bem atendida desde o início, todos foram atenciosos e me acolheram. O lugar é lindo, organizado e passa muita confiança. Fiz clareamento e uma placa de bruxismo, e fiquei muito satisfeita com o cuidado e o profissionalismo dos doutores.",
    role: "Clareamento",
  },
  {
    name: "Yasmin M.",
    text: "Quero agradecer ao Dr. Caio por ter cuidado dos meus dentes, que eram casos complexos. Não tenho palavras para agradecer o cuidado e a atenção. Ele ganhou minha confiança e admiração. Super recomendo — atendimento e clínica muito aconchegantes.",
    role: "Reabilitação Oral",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-32 bg-bone">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 reveal reveal-left lg:sticky lg:top-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-graphite">
              Depoimentos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl leading-tight text-balance">
            Pacientes que confiaram seu <em className="not-italic gold-text">sorriso</em> a nós.
          </h2>

          <div className="mt-10 flex items-center gap-6 border-t border-border pt-8">
            <div className="text-6xl font-display gold-text leading-none">5.0</div>
            <div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Baseado em +30 avaliações no Google
              </p>
            </div>
          </div>

          <div className="relative mt-10 hidden lg:block overflow-hidden">
            <img
              src={smileImg}
              alt="Sorriso natural após tratamento"
              width={1200}
              height={1500}
              loading="lazy"
              className="w-full h-[360px] object-cover grayscale-[20%] parallax"
              data-parallax="0.08"
            />
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border reveal-stagger">
          {reviews.map((r) => (
            <div key={r.name} className="bg-background p-8 flex flex-col gap-4 min-h-[260px]">
              <Quote className="w-6 h-6 text-gold" />
              <p className="text-foreground/85 leading-relaxed text-[15px]">"{r.text}"</p>
              <div className="mt-auto">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                  ))}
                </div>
                <div className="font-display text-lg">{r.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  {r.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
