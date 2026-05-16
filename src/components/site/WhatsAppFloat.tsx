import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-gold text-ink pl-4 pr-5 py-3 shadow-luxe transition-all duration-700 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      } hover:bg-ink hover:text-gold`}
    >
      <span className="relative flex">
        <MessageCircle className="w-5 h-5" />
        <span className="absolute inset-0 rounded-full animate-ping bg-gold/50 -z-10" />
      </span>
      <span className="text-[11px] tracking-[0.25em] uppercase font-medium hidden sm:block">
        WhatsApp
      </span>
    </a>
  );
}
