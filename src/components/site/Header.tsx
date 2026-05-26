import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

const nav = [
  { href: "#sobre", label: "A Clínica" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-logo text-xl md:text-2xl tracking-[0.12em] text-foreground">{SITE.name}</span>
          <span className="font-logo-sub text-[10px] tracking-[0.32em] text-gold mt-1.5">
            {SITE.tagline}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-[700ms] relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-px after:bg-gold after:scale-x-0 after:origin-left after:transition-transform after:duration-[700ms] hover:after:scale-x-100"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground"
          >
            <Phone className="w-4 h-4 text-gold" />
            {SITE.phoneDisplay}
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-primary/90 transition"
          >
            Agendar
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border mt-3 animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm text-foreground/80"
              >
                {n.label}
              </a>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em]"
            >
              Agendar avaliação
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
