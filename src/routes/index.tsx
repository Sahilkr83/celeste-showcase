import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Sparkles,
  Play,
  ArrowUpRight,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Dribbble,
  Film,
  Wand2,
  Palette,
  AudioLines,
  Layers,
  Figma,
} from "lucide-react";
import { LinkButton, Button } from "@/components/Button";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aman Kapoor — Designer & Video Editor" },
      {
        name: "description",
        content:
          "Premium graphic design and cinematic video editing for ambitious brands. Designs that inspire, edits that make an impact.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <VideoShowcase />
      <TrustedLogos />
      <Stats />
    </>
  );
}

/* ───────────────────────── HERO ───────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available For Freelance
            </span>

            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter text-foreground leading-[1.02]">
              Designs that <span className="text-primary">inspire.</span>
              <br />
              Edits that make an <span className="text-primary">impact.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              I'm Aman Kapoor — a multidisciplinary designer & video editor
              crafting premium visuals and cinematic stories for forward-thinking
              brands across the globe.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <LinkButton to="/contact" variant="primary" arrow>
                Hire Me
              </LinkButton>
              <Button variant="ghost">
                <Play className="h-4 w-4 fill-current" />
                Watch Showreel
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Follow
              </span>
              <span className="h-px w-10 bg-border" />
              {[Twitter, Instagram, Dribbble, Linkedin, Github].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="rounded-full border border-border bg-background p-2.5 text-muted-foreground hover:text-primary hover:border-primary/40 transition"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — workspace mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <WorkspaceMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WorkspaceMockup() {
  return (
    <div className="relative">
      {/* glow */}
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent blur-2xl" />

      {/* desktop frame */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative rounded-[2rem] border border-border bg-card shadow-2xl overflow-hidden"
      >
        {/* browser chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
          <div className="ml-3 hidden sm:flex h-5 flex-1 items-center rounded-md bg-background px-3 text-[10px] text-muted-foreground">
            amankapoor.studio/work
          </div>
        </div>

        {/* mock canvas */}
        <div className="relative aspect-[4/3] bg-gradient-to-br from-background via-muted/30 to-background p-5">
          {/* sidebar tools */}
          <div className="absolute left-4 top-4 bottom-4 w-12 rounded-2xl border border-border bg-background/80 backdrop-blur p-2 flex flex-col items-center gap-3">
            {[Figma, Layers, Palette, Wand2, Film].map((Icon, i) => (
              <div
                key={i}
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                  i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <Icon className="h-4 w-4" />
              </div>
            ))}
          </div>

          {/* canvas content */}
          <div className="ml-16 grid h-full grid-cols-6 grid-rows-4 gap-2">
            <div className="col-span-4 row-span-3 rounded-xl bg-gradient-to-br from-primary/80 to-primary/40 relative overflow-hidden">
              <div className="absolute bottom-3 left-3 text-primary-foreground">
                <div className="text-[10px] uppercase tracking-widest opacity-80">Project 01</div>
                <div className="text-lg font-semibold leading-tight">Lumen Studio</div>
              </div>
            </div>
            <div className="col-span-2 row-span-2 rounded-xl bg-foreground/90" />
            <div className="col-span-2 row-span-1 rounded-xl bg-muted" />
            <div className="col-span-3 row-span-1 rounded-xl bg-muted" />
            <div className="col-span-3 row-span-1 rounded-xl bg-foreground/10" />
          </div>
        </div>
      </motion.div>

      {/* AK neon logo badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: -6 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="absolute -top-6 -left-6 sm:-left-10"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-primary blur-xl opacity-60" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground text-2xl font-bold text-primary shadow-2xl ring-1 ring-primary/40">
            AK
          </div>
        </div>
      </motion.div>

      {/* floating glassmorphism service card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ y: -4 }}
        className="absolute -bottom-8 -right-4 sm:-right-8 w-60 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl p-4 shadow-2xl"
      >
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <div className="text-xs text-muted-foreground">Now Booking</div>
            <div className="text-sm font-semibold text-foreground">Brand & Motion Design</div>
            <div className="mt-2 flex items-center gap-1 text-xs font-medium text-primary">
              View packages <ArrowUpRight className="h-3 w-3" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ───────────────────────── VIDEO SHOWCASE (DARK) ───────────────────────── */

function VideoShowcase() {
  const features = [
    { icon: Film, title: "Cinematic Edits", desc: "Story-driven cuts with film-grade pacing." },
    { icon: Wand2, title: "Smooth Transitions", desc: "Seamless motion that flows like silk." },
    { icon: Palette, title: "Color Grading", desc: "Hollywood-style LUTs and bespoke looks." },
    { icon: AudioLines, title: "Audio Sync", desc: "Frame-perfect sound design and mixing." },
  ];

  return (
    <section className="mx-auto mt-20 max-w-7xl px-6">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0a0a14] p-8 sm:p-12 lg:p-16 text-white">
        {/* gradient lights */}
        <div className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-[#7c3aed] opacity-40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-[#2563eb] opacity-40 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]" />

        <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: copy + features */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
              <Film className="h-3 w-3 text-[#a78bfa]" />
              Video Editing Showcase
            </span>
            <h2 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
              Cinematic edits that
              <br />
              move people.
            </h2>
            <p className="mt-5 max-w-md text-white/60 leading-relaxed">
              From short-form social to longform brand films — every frame is
              cut, color-graded and mixed to feel cinematic.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur hover:bg-white/[0.06] transition"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#a78bfa] to-[#3b82f6] text-white">
                    <f.icon className="h-4 w-4" />
                  </div>
                  <div className="mt-3 font-medium">{f.title}</div>
                  <div className="text-xs text-white/55 mt-1">{f.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: laptop with timeline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <LaptopEditor />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LaptopEditor() {
  return (
    <div className="relative">
      <div className="absolute -inset-10 bg-gradient-to-tr from-[#7c3aed]/30 to-[#3b82f6]/30 blur-3xl rounded-full" />
      {/* laptop screen */}
      <div className="relative rounded-2xl border border-white/15 bg-[#0d0d1a] shadow-2xl overflow-hidden">
        {/* top bar */}
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          <span className="ml-3 text-[10px] text-white/40">Final Cut — brand_film_v07.mov</span>
        </div>

        {/* preview */}
        <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#0c4a6e]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(167,139,250,0.4),transparent_50%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-[#0a0a14] shadow-2xl"
            >
              <Play className="h-6 w-6 fill-current ml-0.5" />
            </motion.button>
          </div>
          <div className="absolute bottom-3 left-3 text-xs text-white/70">
            01:24 / 03:48
          </div>
          <div className="absolute bottom-3 right-3 rounded-md bg-black/40 backdrop-blur px-2 py-1 text-[10px] text-white/80 uppercase tracking-wider">
            4K · ProRes
          </div>
        </div>

        {/* timeline */}
        <div className="border-t border-white/10 bg-[#070710] p-3 space-y-1.5">
          {[
            { c: "from-[#a78bfa] to-[#7c3aed]", w: "w-3/4" },
            { c: "from-[#3b82f6] to-[#1d4ed8]", w: "w-1/2" },
            { c: "from-[#22d3ee] to-[#0891b2]", w: "w-2/3" },
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-[9px] text-white/40 w-6">V{i + 1}</span>
              <div className="flex-1 h-4 rounded-md bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.15 }}
                  className={`h-full ${t.w} bg-gradient-to-r ${t.c} rounded-md`}
                />
              </div>
            </div>
          ))}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-[9px] text-white/40 w-6">A1</span>
            <div className="flex-1 h-3 rounded-md bg-white/5 flex items-center gap-px px-1">
              {Array.from({ length: 40 }).map((_, i) => (
                <span
                  key={i}
                  className="flex-1 bg-[#22d3ee]/60 rounded-sm"
                  style={{ height: `${20 + Math.abs(Math.sin(i)) * 70}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── TRUSTED LOGOS ───────────────────────── */

function TrustedLogos() {
  const logos = ["Lumen", "Northwind", "Vertex", "Halcyon", "Aperture", "Monolith", "Kairos"];
  return (
    <section className="mx-auto max-w-7xl px-6 mt-24">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by teams at
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
        {logos.map((l) => (
          <motion.span
            key={l}
            whileHover={{ scale: 1.05, opacity: 1 }}
            className="text-2xl font-semibold tracking-tight text-foreground/60 hover:text-foreground transition"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── STATS ───────────────────────── */

function Stats() {
  const items = [
    { value: 180, suffix: "+", label: "Happy Clients" },
    { value: 320, suffix: "+", label: "Design Projects" },
    { value: 450, suffix: "+", label: "Videos Edited" },
    { value: 9, suffix: " yrs", label: "Years Experience" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 mt-20">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-border bg-card p-8 shadow-sm hover:shadow-xl transition"
          >
            <div className="text-5xl font-semibold tracking-tight text-foreground">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 text-sm font-medium text-muted-foreground">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
