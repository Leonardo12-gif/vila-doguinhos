import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MessageCircle, Instagram, MapPin, Music2, Moon, Sun, Heart, PawPrint, Home, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

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
    { icon: MessageCircle, label: "Falar no WhatsApp", sub: "Resposta rápida", href: WHATSAPP_URL, accent: "primary" },
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
      {/* watermark logo */}
      <img
        src={logo}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-20 -bottom-24 w-[520px] max-w-[80vw] opacity-[0.04] select-none"
      />
      {/* floating paws */}
      <PawPrint aria-hidden className="pointer-events-none absolute top-24 left-6 h-8 w-8 text-primary/15 animate-float" style={{ ['--r' as string]: '-18deg' }} />
      <PawPrint aria-hidden className="pointer-events-none absolute top-[40%] right-8 h-10 w-10 text-primary/10 animate-float" style={{ ['--r' as string]: '20deg', animationDelay: '1.2s' }} />
      <PawPrint aria-hidden className="pointer-events-none absolute bottom-40 left-10 h-6 w-6 text-primary/15 animate-float" style={{ ['--r' as string]: '10deg', animationDelay: '2.4s' }} />

      {/* theme toggle */}
      <button
        onClick={() => setDark((d) => !d)}
        aria-label="Alternar tema"
        className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 backdrop-blur shadow-soft transition hover:scale-105 hover:bg-card"
      >
        {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>

      <div className="relative z-10 mx-auto flex max-w-md flex-col px-5 pb-14 pt-12 sm:pt-16">
        {/* Logo */}
        <div className="animate-vd-in flex justify-center" style={delay(0)}>
          <div className="rounded-full bg-card p-2 shadow-glow ring-1 ring-border">
            <div className="rounded-full bg-background p-3">
              <img src={logo} alt="Vila Doguinho's" className="h-32 w-32 rounded-full object-contain" />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="animate-vd-in mt-5 text-center" style={delay(1)}>
          <h1 className="text-3xl font-bold text-foreground">Vila Doguinho's</h1>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Creche · Hotel Pet
          </p>
        </div>

        <h2 className="animate-vd-in mt-6 text-center text-xl font-semibold text-foreground sm:text-2xl" style={delay(2)}>
          Onde seu doguinho se sente em casa
        </h2>
        <p className="animate-vd-in mt-2 text-center text-sm leading-relaxed text-muted-foreground" style={delay(3)}>
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
              className="animate-vd-in group flex items-center gap-4 rounded-2xl border border-border bg-card px-4 py-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow hover:border-primary/40"
              style={delay(4 + i)}
            >
              <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${c.accent === 'primary' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-earth'} transition group-hover:scale-110`}>
                <c.icon className="h-5 w-5" />
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
            className="animate-vd-in group flex items-center gap-4 rounded-2xl border border-border bg-card px-4 py-4 text-left shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow hover:border-primary/40"
            style={delay(7)}
            aria-expanded={mapOpen}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-earth transition group-hover:scale-110">
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
          <h3 className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Nossos diferenciais
          </h3>
          <ul className="grid grid-cols-2 gap-2.5">
            {features.map((f, i) => (
              <li
                key={f.text}
                className={`animate-vd-in flex items-center gap-2 rounded-xl border border-border bg-card/70 px-3 py-2.5 backdrop-blur ${i === features.length - 1 ? 'col-span-2 justify-center' : ''}`}
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
