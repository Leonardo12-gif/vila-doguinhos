import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, MapPin, Music2, Moon, Sun, Heart, PawPrint, Home, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden className={className}>
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.214-.487.214-.946.142-1.018-.072-.13-.27-.187-.554-.33z"/>
      <path d="M16.207 4C9.413 4 4.005 9.408 4.005 16.202c0 2.163.573 4.296 1.652 6.158L4 28l5.81-1.52a12.142 12.142 0 0 0 6.394 1.823h.005c6.789 0 12.318-5.408 12.318-12.202 0-3.288-1.402-6.378-3.726-8.701A12.072 12.072 0 0 0 16.207 4zm0 22.42h-.004a10.13 10.13 0 0 1-5.166-1.415l-.371-.22-3.45.904.92-3.36-.241-.385a10.118 10.118 0 0 1-1.55-5.4c0-5.605 4.561-10.166 10.166-10.166a10.07 10.07 0 0 1 7.18 2.985 10.07 10.07 0 0 1 2.972 7.187c0 5.606-4.561 10.167-10.167 10.167z"/>
    </svg>
  );
}

export const Route = createFileRoute("/")({
  component: BioLink,
  head: () => ({
    meta: [
      { title: "Vila Doguinho's — Creche e Hotel Pet na Mooca" },
      { name: "description", content: "Onde seu doguinho se sente em casa. Creche e hotel pet na Mooca, SP. Diversão, carinho e cuidado para o seu melhor amigo." },
      { property: "og:title", content: "Vila Doguinho's — Creche e Hotel Pet" },
      { property: "og:description", content: "Onde seu doguinho se sente em casa. Mooca, SP." },
      { property: "og:type", content: "website" },
    ],
  }),
});

const WHATSAPP_URL = "https://wa.me/5511925859445?text=" + encodeURIComponent("Olá! Vim pelo link da bio e gostaria de saber mais sobre a Vila Doguinho's.");
const INSTAGRAM_URL = "https://www.instagram.com/villadoguinhos";
const TIKTOK_URL = "https://www.tiktok.com/@villa.doguinhos";
const MAPS_EMBED = "https://www.google.com/maps?q=Rua+Pira%C3%A7ununga+1228+Mooca+SP&output=embed";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Rua+Pira%C3%A7ununga+1228+Mooca+SP";

function BioLink() {
  const [dark, setDark] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const cards = [
    { icon: WhatsAppIcon, label: "Falar no WhatsApp", sub: "Resposta rápida", href: WHATSAPP_URL, accent: "whatsapp" },
    { icon: Instagram, label: "Instagram", sub: "@villadoguinhos", href: INSTAGRAM_URL },
    { icon: Music2, label: "TikTok", sub: "@villa.doguinhos", href: TIKTOK_URL },
  ];

  const features = [
    { icon: Home, text: "Creche e hotel pet" },
    { icon: Sparkles, text: "Diversão garantida" },
    { icon: Heart, text: "Muito amor e cuidado" },
    { icon: PawPrint, text: "Pensado para doguinhos" },
    { icon: MapPin, text: "Localização na Mooca" },
  ];

  const delay = (i: number) => ({ animationDelay: `${i * 110}ms` } as React.CSSProperties);

  return (
    <main className="relative min-h-screen overflow-hidden font-body">
      {/* organic blobs */}
      <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-[42%_58%_62%_38%/45%_40%_60%_55%] bg-primary/15 blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -right-20 top-40 h-64 w-64 rounded-[58%_42%_40%_60%/55%_60%_40%_45%] bg-accent/40 blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -left-16 bottom-40 h-72 w-72 rounded-[55%_45%_60%_40%/50%_55%_45%_50%] bg-primary/10 blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-[45%_55%_42%_58%/55%_45%_55%_45%] bg-accent/35 blur-2xl" />
      {/* floating paws scattered across background */}
      {[
        { c: "top-20 left-4", s: "h-8 w-8", o: "text-primary/15", r: "-18deg", d: "0s" },
        { c: "top-32 right-6", s: "h-6 w-6", o: "text-primary/10", r: "24deg", d: "0.6s" },
        { c: "top-[28%] left-10", s: "h-5 w-5", o: "text-primary/15", r: "-30deg", d: "1.1s" },
        { c: "top-[42%] right-4", s: "h-10 w-10", o: "text-primary/10", r: "20deg", d: "1.4s" },
        { c: "top-[55%] left-2", s: "h-7 w-7", o: "text-earth/20", r: "12deg", d: "1.9s" },
        { c: "top-[68%] right-10", s: "h-6 w-6", o: "text-primary/15", r: "-15deg", d: "2.3s" },
        { c: "bottom-44 left-8", s: "h-9 w-9", o: "text-primary/15", r: "8deg", d: "2.6s" },
        { c: "bottom-24 right-6", s: "h-5 w-5", o: "text-earth/20", r: "-22deg", d: "3.1s" },
        { c: "bottom-10 left-1/3", s: "h-6 w-6", o: "text-primary/10", r: "16deg", d: "3.6s" },
        { c: "top-[15%] left-1/2", s: "h-4 w-4", o: "text-primary/10", r: "-8deg", d: "4s" },
      ].map((p, i) => (
        <PawPrint
          key={i}
          aria-hidden
          className={`pointer-events-none absolute ${p.c} ${p.s} ${p.o} animate-float`}
          style={{ ['--r' as string]: p.r, animationDelay: p.d }}
        />
      ))}

      {/* theme toggle */}
      <button
        onClick={() => setDark((d) => !d)}
        aria-label="Alternar tema"
        className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/70 backdrop-blur-md shadow-soft transition hover:scale-105 hover:bg-card"
      >
        {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>

      <div className="relative z-10 mx-auto flex max-w-md flex-col px-5 pb-14 pt-12 sm:pt-16">
        {/* Logo - transparent, with soft orange glow */}
        <div className="animate-vd-in flex justify-center" style={delay(0)}>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-primary/30 blur-3xl" aria-hidden />
            <img
              src={logo}
              alt="Vila Doguinho's"
              className="h-44 w-auto drop-shadow-[0_8px_24px_oklch(0.72_0.18_47/0.25)]"
            />
          </div>
        </div>

        {/* Title */}
        <div className="animate-vd-in mt-5 text-center" style={delay(1)}>
          <h1 className="text-3xl font-bold text-foreground">Vila Doguinho's</h1>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Creche · Hotel Pet
          </p>
        </div>

        <div className="animate-vd-in mt-6 flex justify-center" style={delay(2)}>
          <span className="relative inline-flex h-9 w-9 items-center justify-center">
            <Heart className="h-6 w-6 fill-primary text-primary" />
            <span className="absolute -top-0.5 left-1/2 h-2 w-px -translate-x-1/2 bg-primary/70" />
            <span className="absolute top-0.5 left-1 h-2 w-px rotate-[-35deg] bg-primary/70" />
            <span className="absolute top-0.5 right-1 h-2 w-px rotate-[35deg] bg-primary/70" />
          </span>
        </div>
        <h2 className="animate-vd-in mt-2 text-center text-3xl font-bold leading-tight text-foreground sm:text-4xl" style={delay(2)}>
          Onde seu <span className="text-primary">doguinho</span><br/>se sente em casa
        </h2>
        <p className="animate-vd-in mt-3 text-center text-sm leading-relaxed text-muted-foreground" style={delay(3)}>
          Creche e hotel com diversão garantida, muito amor, cuidado e brincadeiras na Mooca.
        </p>

        {/* Cards */}
        <div className="mt-8 flex flex-col gap-3">
          {cards.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-vd-in group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/70 bg-white/80 backdrop-blur-md px-4 py-4 pl-5 shadow-soft ring-1 ring-black/[0.02] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow hover:border-primary/40 before:absolute before:left-0 before:top-3 before:bottom-3 before:w-1.5 before:rounded-full before:bg-primary"
              style={delay(4 + i)}
            >
              <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${c.accent === 'whatsapp' ? 'bg-[#25D366] text-white' : 'bg-secondary text-earth'} transition group-hover:scale-110`}>
                <c.icon className={c.accent === 'whatsapp' ? 'h-6 w-6' : 'h-5 w-5'} />
              </span>
              <span className="flex flex-1 flex-col text-left">
                <span className="font-display text-base font-semibold text-card-foreground">{c.label}</span>
                <span className="text-xs text-muted-foreground">{c.sub}</span>
              </span>
              <span className="text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary">→</span>
            </a>
          ))}

          {/* Location toggle */}
          <button
            onClick={() => setMapOpen((o) => !o)}
            className="animate-vd-in group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/70 bg-white/80 backdrop-blur-md ring-1 ring-black/[0.02] px-4 py-4 pl-5 text-left shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow hover:border-primary/40 before:absolute before:left-0 before:top-3 before:bottom-3 before:w-1.5 before:rounded-full before:bg-primary"
            style={delay(7)}
            aria-expanded={mapOpen}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition group-hover:scale-110">
              <MapPin className="h-5 w-5" />
            </span>
            <span className="flex flex-1 flex-col">
              <span className="font-display text-base font-semibold text-card-foreground">Ver localização</span>
              <span className="text-xs text-muted-foreground">Rua Piraçununga, 1228 — Mooca, SP</span>
            </span>
            <span className={`text-muted-foreground transition ${mapOpen ? 'rotate-180 text-primary' : ''}`}>⌄</span>
          </button>

          <div
            className={`grid overflow-hidden transition-all duration-500 ease-out ${mapOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
          >
            <div className="min-h-0">
              <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
                <iframe
                  title="Mapa Vila Doguinho's"
                  src={MAPS_EMBED}
                  className="h-56 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-card px-4 py-3 text-center text-xs font-semibold text-primary hover:bg-secondary"
                >
                  Abrir no Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <section className="animate-vd-in mt-10" style={delay(8)}>
          <h3 className="mb-4 flex items-center justify-center gap-2 text-base font-bold text-foreground">
            <PawPrint className="h-5 w-5 text-primary" />
            Nossos diferenciais
          </h3>
          <ul className="grid grid-cols-2 gap-2.5">
            {features.map((f, i) => (
              <li
                key={f.text}
                className={`animate-vd-in flex items-center gap-2 rounded-xl border border-white/60 bg-white/60 px-3 py-2.5 backdrop-blur-md ${i === features.length - 1 ? 'col-span-2 justify-center' : ''}`}
                style={delay(9 + i)}
              >
                <f.icon className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-xs font-medium text-card-foreground">{f.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="animate-vd-in mt-12 text-center" style={delay(15)}>
          <a
            href="https://www.frezamarketing.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground transition hover:text-primary"
          >
            Desenvolvido por <span className="font-semibold">Frezza Marketing</span>
          </a>
        </footer>
      </div>
    </main>
  );
}
