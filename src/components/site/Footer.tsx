import { Instagram, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white/70 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="font-logo text-2xl tracking-[0.12em] text-white">{SITE.name}</div>
          <div className="font-logo-sub text-[10px] tracking-[0.32em] text-gold mt-2">
            {SITE.tagline}
          </div>
          <p className="mt-6 text-sm max-w-sm leading-relaxed">
            Clínica odontológica premium em São Paulo, localizada no Tatuapé, especializada em estética,
            implantes e reabilitação oral com tecnologia de ponta.
          </p>
          <div className="mt-8 flex gap-3">
            <a href={waLink()} target="_blank" rel="noopener" aria-label="WhatsApp"
              className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-gold hover:text-ink hover:border-gold transition">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href={SITE.instagram} target="_blank" rel="noopener" aria-label="Instagram"
              className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-gold hover:text-ink hover:border-gold transition">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={`tel:${SITE.phone}`} aria-label="Telefone"
              className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-gold hover:text-ink hover:border-gold transition">
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5">Contato</div>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" /><a href={SITE.mapsLink} target="_blank" rel="noopener" className="hover:text-white">{SITE.address}</a></li>
            <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" /><a href={`tel:${SITE.phone}`} className="hover:text-white">{SITE.phoneDisplay}</a></li>
            <li className="flex gap-3"><Clock className="w-4 h-4 mt-0.5 text-gold shrink-0" /><span>{SITE.hours}</span></li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5">Localização</div>
          <iframe
            src={SITE.mapsEmbed}
            className="w-full h-48 grayscale invert-[0.9] contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa da clínica"
          />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados. CRO/SP 00000.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
