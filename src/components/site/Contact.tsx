import { useState } from "react";
import { MessageCircle, Phone, Send } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import { z } from "zod";
import { toast } from "sonner";

declare function gtag_report_conversion(url: string): boolean;

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(80),
  phone: z.string().trim().min(8, "Telefone inválido").max(20),
  message: z.string().trim().max(500).optional(),
});

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    const text = `Olá! Meu nome é ${form.name}. Telefone: ${form.phone}. ${form.message ? "Mensagem: " + form.message : "Gostaria de agendar uma avaliação."}`;
    const url = waLink(text);
    gtag_report_conversion(url);
    window.open(url, "_blank");
    setTimeout(() => {
      setLoading(false);
      toast.success("Redirecionando para o WhatsApp...");
      setForm({ name: "", phone: "", message: "" });
    }, 600);
  };

  return (
    <section id="contato" className="py-32 bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold) 0%, transparent 50%)",
      }} />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 relative">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-gold-soft">
              Vamos conversar
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl leading-tight text-balance text-white">
            Seu novo sorriso começa com uma <em className="not-italic gold-text">conversa</em>.
          </h2>
          <p className="mt-6 text-white/70 max-w-md leading-relaxed">
            Agende sua avaliação e descubra um plano de tratamento personalizado,
            entregue com a discrição e o cuidado que você merece.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              onClick={() => gtag_report_conversion(waLink())}
              className="flex items-center gap-4 group"
            >
              <span className="w-12 h-12 border border-gold/40 flex items-center justify-center group-hover:bg-gold group-hover:text-ink transition-colors">
                <MessageCircle className="w-5 h-5" />
              </span>
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold-soft">WhatsApp</div>
                <div className="text-lg font-display">{SITE.phoneDisplay}</div>
              </div>
            </a>
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-4 group">
              <span className="w-12 h-12 border border-gold/40 flex items-center justify-center group-hover:bg-gold group-hover:text-ink transition-colors">
                <Phone className="w-5 h-5" />
              </span>
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold-soft">Ligação</div>
                <div className="text-lg font-display">{SITE.phoneDisplay}</div>
              </div>
            </a>
          </div>
        </div>

        <form onSubmit={submit} className="reveal bg-white/[0.03] border border-white/10 p-10 backdrop-blur-sm">
          <h3 className="font-display text-2xl text-white mb-6">Agendar avaliação</h3>
          <div className="space-y-5">
            <div>
              <label className="block text-[10px] tracking-[0.3em] uppercase text-white/60 mb-2">Nome completo</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition"
                placeholder="Como podemos chamar você?"
                maxLength={80}
                required
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.3em] uppercase text-white/60 mb-2">Telefone / WhatsApp</label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition"
                placeholder="(11) 99999-9999"
                maxLength={20}
                required
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.3em] uppercase text-white/60 mb-2">Mensagem (opcional)</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                maxLength={500}
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition resize-none"
                placeholder="Conte-nos brevemente sobre o que você precisa"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-ink text-xs uppercase tracking-[0.25em] hover:bg-gold-soft transition disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {loading ? "Enviando..." : "Enviar e abrir WhatsApp"}
            </button>
            <p className="text-[11px] text-white/40 text-center">
              Seus dados são tratados com sigilo e nunca compartilhados.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
