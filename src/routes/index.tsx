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
  MoveRight,
  Star,
  Quote,
} from "lucide-react";
import { LinkButton, Button } from "@/components/Button";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import HeroImg from "@/assets/heroOfHome.png";
import EditImg from "@/assets/editingSection.png";
import { SectionTitle } from "@/components/SectionTitle";
import { FeaturedProjectsSection } from "@/components/FeaturedProject";
import { MyProcessSection } from "@/components/myProcessSection";

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
      {/* <Testimonials/> */}
      <ServicesElevateBrandSection/>
      <FeaturedProjectsSection/>
      <MyProcessSection />

      {/* <TrustedLogos /> */}
      {/* <Stats /> */}
    </>
  );
}

/* ───────────────────────── HERO ───────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden w-full">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto flex flex-col items-center w-full px-6 pt-10 ">
        <div className="flex items-center justify-center w-full gap-16 pb-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available For Freelance
            </span>

            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground leading-[1.02]">
              Designs that <span className="text-primary">inspire.</span>
              <br />
              Edits that make an <span className="text-primary">impact.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              We are Zentrix Fintech — a creative digital agency blending strategy, cinematic
              storytelling, and cutting-edge design to help modern brands stand out, connect deeply,
              and grow with impact across the digital world.
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
        {/* <VideoEditingSection /> */}
        <VideoShowcase />
      </div>
    </section>
  );
}

function WorkspaceMockup() {
  return (
    <div className="relative">
      {/* glow */}
      <div className="absolute -inset-6 rounded-[1.5rem] bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent blur-2xl z-20" />

      {/* desktop frame */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative rounded-[1.5rem] border border-border bg-card shadow-2xl overflow-hidden"
      >
        <img
          src={HeroImg}
          alt="Workspace Mockup"
          width={1024}
          height={700}
          className="h-[24rem] sm:h-[29rem] w-[34rem] sm:w-[48rem] max-w-none"
        />
      </motion.div>
      {/* floating glassmorphism service card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ y: -4 }}
        className="absolute bottom-8 -left-10 sm:-right-8 w-60 rounded-2xl border border-white/40 bg-white backdrop-blur-xl p-4 shadow-2xl z-30"
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
    {
      icon: Film,
      title: "Cinematic Edits",
      desc: "Story-driven cuts with film-grade pacing.",
    },
    {
      icon: Wand2,
      title: "Smooth Transitions",
      desc: "Seamless motion that flows naturally.",
    },
    {
      icon: Palette,
      title: "Color Grading",
      desc: "Rich cinematic tones with premium finishing.",
    },
    {
      icon: AudioLines,
      title: "Audio Sync",
      desc: "Clean sound design with precise timing.",
    },
  ];

  return (
    <section className="w-full flex items-center justify-center">
      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0a0a14] px-6 py-10 sm:px-8 lg:px-12">
        {/* Background Effects */}
        <div className="pointer-events-none absolute -top-32 left-0 h-96 w-96 rounded-full bg-violet-600/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative flex gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur">
              <Film className="h-3.5 w-3.5 text-violet-400" />
              Video Editing Showcase
            </div>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Edit with purpose.
              <br />
              Create <span className="text-violet-400">stories</span> that
              people remember.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
              From raw footage to polished cinematic experiences, we craft
              engaging videos that elevate brands, capture attention, and leave
              a lasting impact across every platform.
            </p>

            {/* FEATURES */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
                    <f.icon className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      {f.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-white/55">
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* BUTTON */}
            <div className="mt-10">
              <button className="group flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02]">
                Explore Edits
                <MoveRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center max-w-7xl"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-[2rem] bg-violet-500/10 blur-2xl" />

            {/* Image Container */}
            <div className="relative flex items-center justify-center max-w-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl rounded-full" />

            <div className="relative w-full max-w-3xl rounded-[1.5rem] border border-white/10 bg-[#070B18]/90 backdrop-blur-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/[0.03]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                <p className="text-white/70 text-sm">Cinematic Travel Edit</p>

                <div className="w-8" />
              </div>

              <div className="relative aspect-video overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop"
                  alt="Video Editing Showcase"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:scale-110 transition-transform">
                    <div className="ml-1 w-0 h-0 border-y-[14px] border-y-transparent border-l-[22px] border-l-white" />
                  </div>
                </button>
              </div>

              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between text-white/60 text-sm">
                  <span>00:00:12:15</span>
                  <span>4K Ultra HD</span>
                </div>

                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="w-2/3 h-full bg-gradient-to-r from-purple-500 to-blue-500" />
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {[
                    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=800&auto=format&fit=crop',
                  ].map((img, i) => (
                    <div key={i} className="aspect-video rounded-xl overflow-hidden border border-white/10">
                      <img src={img} alt="preview" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


function ServicesElevateBrandSection() {
  const services = [
    {
      title: 'Graphic Design',
      desc: 'Logos, branding, print & digital visuals that communicate your message clearly.',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      title: 'Video Editing',
      desc: 'Professional edits that turn raw footage into engaging cinematic stories.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Brand Identity',
      desc: 'Complete identity systems that help your business stand out beautifully.',
      gradient: 'from-emerald-500 to-teal-400',
    },
    {
      title: 'Social Media Design',
      desc: 'High-performing social creatives optimized for engagement and growth.',
      gradient: 'from-orange-500 to-pink-500',
    },
  ];

  return (
    <section className="w-full px-6 md:px-10 py-20  overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-[0.25em] uppercase border border-blue-100">
            What We Do
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-slate-900 leading-[1]">
            Services That Elevate
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Your Brand
            </span>
          </h2>

          <p className="mt-6 text-slate-500 text-lg leading-relaxed">
            Powerful design and editing solutions crafted to help brands stand out,
            connect with audiences, and grow with confidence.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-10 blur-3xl rounded-full`} />

              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-[1px]`}>
                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                  <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${service.gradient}`} />
                </div>
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 text-slate-500 leading-relaxed text-base">
                {service.desc}
              </p>

              <button className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                Learn More
                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  →
                </span>
              </button>

              <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-blue-200 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-[40px] bg-gradient-to-r from-[#0B1023] via-[#111827] to-[#1B0D36] overflow-hidden relative p-10 md:p-14">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <span className="inline-flex px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs tracking-[0.25em] uppercase">
                Creative Solutions
              </span>

              <h3 className="mt-6 text-4xl md:text-5xl font-black text-white leading-tight">
                Helping brands create
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {' '}impactful experiences.
                </span>
              </h3>

              <p className="mt-5 text-white/60 text-lg leading-relaxed">
                From strategy and branding to cinematic edits and social media visuals,
                every project is crafted with precision and creativity.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform">
                Start a Project
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
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
            <div className="mt-3 text-sm font-medium text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const items = [
  { q: "Aman shipped a brand and product launch in 6 weeks. Best design hire we've ever made.", a: "Mira Chen", r: "CEO, Lumen", initials: "MC", color: "from-blue-200 to-indigo-300" },
  { q: "Pixel-perfect, fast, and ridiculously thoughtful. Every detail was considered.", a: "Daniel Park", r: "Head of Product, Orbit", initials: "DP", color: "from-emerald-200 to-teal-300" },
  { q: "He doesn't just design — he thinks like a founder. Rare combination.", a: "Sasha Reyes", r: "Founder, Maison Clay", initials: "SR", color: "from-amber-200 to-orange-300" },
  { q: "The most polished work we've ever shipped. Our conversion doubled.", a: "Ethan Wells", r: "CMO, Northwave", initials: "EW", color: "from-rose-200 to-pink-300" },
  { q: "Working with AK felt like adding a senior designer to our founding team.", a: "Lina Ortiz", r: "COO, Pulse Health", initials: "LO", color: "from-violet-200 to-fuchsia-300" },
  { q: "Editorial-grade work, indie-studio energy. We will absolutely hire again.", a: "Tomás Alvarez", r: "Director, Atlas", initials: "TA", color: "from-cyan-200 to-sky-300" },
];

function Card({ t }: { t: (typeof items)[number] }) {
  return (
    <div className="w-[340px] sm:w-[420px] shrink-0 rounded-3xl glass gradient-border p-7 hover-glow mx-3">
      <Quote className="h-7 w-7 text-primary" />
      <p className="mt-5 text-base leading-relaxed text-foreground">"{t.q}"</p>
      <div className="mt-7 flex items-center justify-between border-t border-border/60 pt-5">
        <div className="flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-semibold text-foreground/80`}>
            {t.initials}
          </div>
          <div>
            <div className="text-sm font-semibold">{t.a}</div>
            <div className="text-xs text-muted-foreground">{t.r}</div>
          </div>
        </div>
        <div className="flex gap-0.5 text-primary">
          {Array.from({ length: 5 }).map((_, j) => (
            <Star key={j} className="h-3.5 w-3.5 fill-current" />
          ))}
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const row1 = [...items, ...items];
  const row2 = [...items.slice().reverse(), ...items.slice().reverse()];

  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl ">
        <SectionTitle eyebrow="Testimonials" title="Trusted by teams who ship." subtitle="Hover to pause the marquee." />
      </div>

      <div className="mt-16 space-y-6 ">
        {[row1, row2].map((row, idx) => (
          <div key={idx} className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
            <div
              className="marquee-track flex w-max"
              style={{ animationDirection: idx === 1 ? "reverse" : "normal", animationDuration: idx === 1 ? "55s" : "45s" }}
            >
              {row.map((t, i) => (
                <Card key={`${idx}-${i}`} t={t} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-20 max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-foreground text-background p-12 text-center"
        >
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/40 blur-3xl" />
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-semibold">Your story, told beautifully.</h3>
            <p className="mt-3 text-background/70">Let's create work worth sharing.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

