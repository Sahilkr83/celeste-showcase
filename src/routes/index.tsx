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
  PenTool,
  Grid2X2,
  Layers3,
  ImageIcon,
  Type,
  Clapperboard,
} from "lucide-react";
import { LinkButton, Button } from "@/components/Button";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import HeroImg from "@/assets/heroOfHome.png";
import HeroImg2 from "@/assets/Hero2.png";
import { SectionTitle } from "@/components/SectionTitle";
import { FeaturedProjectsSection } from "@/components/featuredProject";
import { MyProcessSection } from "@/components/myProcessSection";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zenrix" },
      {
        name: "description",
        content:
          "Premium graphic design and cinematic video editing for ambitious brands. Designs that inspire, edits that make an impact.",
      },
    ],
  }),
  component: Home,
});
type Props = {
  variant?: "default" | "hero";
};

function Home() {
  return (
    <>
      <Hero variant="hero" />
      {/* <Testimonials/> */}
      <ServicesElevateBrandSection />
      <FeaturedProjectsSection variant="hero" />
      <MyProcessSection variant="hero" />

      {/* <TrustedLogos /> */}
      {/* <Stats /> */}
    </>
  );
}

/* ───────────────────────── HERO ───────────────────────── */

export function Hero({ variant = "default" }: Props) {
  return (
    <section className="relative overflow-hidden w-full bg-gradient-to-b from-[#F6F8FF] via-[#F8FAFF] to-white min-h-[90vh]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[44rem] h-[44rem] bg-blue-400/25 blur-[140px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] bg-purple-400/25 blur-[140px] rounded-full"
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.9), transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.9), transparent 75%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center min-h-[80vh]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-slate-200/80 bg-white px-4 py-2 shadow-[0_4px_20px_-4px_rgba(59,130,246,0.15)]"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              </span>
              <span className="text-sm font-medium text-slate-700">Creative Design Studio</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-7 text-[2.75rem] sm:text-6xl lg:text-[4.5rem] font-black leading-[0.98] tracking-[-0.03em] text-slate-900"
            >
              Designs that{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                inspire.
              </span>
              <br />
              Edits that make an{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                impact.
              </span>
            </motion.h1>

            {/* Desc */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mt-7 text-lg leading-[1.7] text-slate-500 max-w-[520px]"
            >
              I'm Aman Keshri, a creative designer & video editor crafting stunning visuals and
              cinematic edits that help brands grow and stand out.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative h-14 px-8 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-[0_10px_30px_-8px_rgba(59,130,246,0.6)] hover:shadow-[0_18px_40px_-8px_rgba(59,130,246,0.7)] transition-shadow inline-flex items-center gap-2"
              >
                <span>View My Work</span>
                <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="h-14 px-5 rounded-xl border border-slate-200 bg-white text-slate-800 font-medium transition-all flex items-center gap-3 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.1)]"
              >
                <span className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 ring-1 ring-blue-100 flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-blue-600 text-blue-600 ml-0.5" />
                </span>
                Watch Showreel
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-12 flex items-center gap-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt=""
                      className="w-11 h-11 rounded-full border-[2.5px] border-white shadow-md object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900">50+ Happy Clients</div>
                  <div className="text-sm text-slate-500">Worldwide</div>
                </div>
              </div>

              <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-300 to-transparent" />

              <div>
                <div className="text-base font-bold text-slate-900">5+ Years</div>
                <div className="text-sm text-slate-500">of Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Workspace */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[560px] lg:h-[640px] flex items-center justify-center"
          >
            <WorkspaceScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── WORKSPACE SCENE ───────────────────────── */

function WorkspaceScene() {
  const floatingIcons = [
    { Icon: PenTool, color: "text-blue-600", bg: "from-blue-50 to-white", pos: "top-4 left-2", delay: 0, dur: 5 },
    { Icon: Play, color: "text-indigo-600", bg: "from-indigo-50 to-white", pos: "top-20 -right-2", delay: 0.6, dur: 6 },
    { Icon: Type, color: "text-purple-600", bg: "from-purple-50 to-white", pos: "top-44 -left-4", delay: 1.2, dur: 5.5 },
    { Icon: ImageIcon, color: "text-cyan-600", bg: "from-cyan-50 to-white", pos: "top-56 right-4", delay: 0.3, dur: 6.5 },
    { Icon: Clapperboard, color: "text-fuchsia-600", bg: "from-fuchsia-50 to-white", pos: "bottom-44 right-0", delay: 0.9, dur: 5.2 },
  ];

  return (
    <div className="relative w-full h-full">
      {/* Ambient glows behind scene */}
      <div className="absolute inset-x-8 top-8 bottom-32 bg-gradient-to-br from-blue-300/20 via-indigo-300/15 to-purple-300/20 blur-3xl rounded-[3rem]" />

      {/* Dotted connection path */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
        viewBox="0 0 600 600"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M60 120 C 180 60, 300 220, 420 140 S 580 240, 540 360"
          stroke="url(#dashGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3.5, delay: 0.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="dashGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </svg>

      {/* Glowing particles */}
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)] z-10"
          style={{
            top: `${15 + ((i * 53) % 70)}%`,
            left: `${10 + ((i * 71) % 80)}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.7, 1.3, 0.7] }}
          transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      {/* Floating icon cards */}
      {floatingIcons.map(({ Icon, color, bg, pos, delay, dur }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
          className={`absolute ${pos} z-30`}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: dur, delay, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, rotate: -3 }}
            className={`w-[60px] h-[60px] rounded-2xl bg-gradient-to-br ${bg} border border-white shadow-[0_12px_30px_-8px_rgba(15,23,42,0.15)] backdrop-blur-xl flex items-center justify-center`}
          >
            <Icon className={`w-6 h-6 ${color}`} strokeWidth={2} />
          </motion.div>
        </motion.div>
      ))}

      {/* MONITOR + DESK */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center z-20"
      >
        {/* Monitor */}
        <div className="relative">
          {/* Glow behind monitor */}
          <div className="absolute -inset-8 bg-gradient-to-br from-blue-400/30 via-indigo-300/20 to-purple-400/30 blur-3xl rounded-full" />

          <div className="relative w-[420px] sm:w-[460px] rounded-[1.5rem] bg-gradient-to-b from-slate-800 to-slate-900 p-3 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.4)]">
            {/* Screen */}
            <div className="relative aspect-[16/10] rounded-[1rem] bg-gradient-to-br from-[#fafbff] via-white to-[#f0f4ff] overflow-hidden">
              {/* subtle gradient sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/40 via-transparent to-purple-100/30" />
              {/* top dot */}
              <div className="absolute top-3 left-3 flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-400/70" />
                <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
                <span className="w-2 h-2 rounded-full bg-green-400/70" />
              </div>

              <div className="relative h-full flex items-center justify-center px-10">
                <p className="text-3xl sm:text-4xl font-black leading-[1.05] tracking-tight text-slate-900 text-center">
                  Good design
                  <br />
                  is good
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    business.
                  </span>
                </p>
              </div>

              {/* corner accent */}
              <div className="absolute bottom-3 right-4 flex items-center gap-1.5 text-[10px] font-medium text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                AK.Studio
              </div>
            </div>
            {/* Stand notch */}
            <div className="mx-auto mt-1 h-1.5 w-20 rounded-b-lg bg-slate-700" />
          </div>

          {/* Stand */}
          <div className="mx-auto -mt-px h-8 w-2 bg-gradient-to-b from-slate-700 to-slate-600" style={{ width: "10px" }} />
          <div className="mx-auto h-2 w-40 rounded-full bg-gradient-to-b from-slate-700 to-slate-500 shadow-lg" />
        </div>

        {/* Desk surface */}
        <div className="relative mt-4 w-[92%] h-[120px] rounded-t-[2rem] bg-gradient-to-b from-[#e8eaf2] via-[#dfe3ee] to-[#cbd0dc] shadow-[inset_0_2px_0_rgba(255,255,255,0.7),0_20px_50px_-10px_rgba(15,23,42,0.25)]">
            {/* keyboard */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[220px] h-[60px] rounded-xl bg-gradient-to-b from-white to-slate-100 shadow-md border border-slate-200/80 p-2">
              <div className="grid grid-cols-12 gap-[3px] h-full">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="rounded-[3px] bg-slate-100 border border-slate-200/70" />
                ))}
              </div>
            </div>
            {/* mouse */}
            <div className="absolute top-7 right-12 w-9 h-14 rounded-[12px] bg-gradient-to-b from-white to-slate-100 shadow-md border border-slate-200/80" />
            {/* mug */}
            <div className="absolute -top-8 left-10">
              <div className="relative w-12 h-14 rounded-b-[10px] rounded-t-md bg-gradient-to-b from-white to-slate-100 border border-slate-200 shadow-md">
                <div className="absolute -right-2 top-3 w-3 h-6 rounded-full border-2 border-slate-300" />
                <div className="absolute inset-x-1 top-1 h-1 rounded-full bg-blue-500/70" />
              </div>
            </div>
            {/* plant */}
            <div className="absolute -top-12 right-8">
              <div className="relative w-12 h-10 rounded-b-xl bg-gradient-to-b from-orange-200 to-orange-300 border border-orange-300/60" />
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex gap-0.5">
                <span className="block w-2 h-8 rounded-full bg-green-500 rotate-[-15deg]" />
                <span className="block w-2 h-10 rounded-full bg-green-600" />
                <span className="block w-2 h-8 rounded-full bg-green-500 rotate-[15deg]" />
              </div>
            </div>
        </div>
      </motion.div>

      {/* Floating service card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-4 left-0 sm:left-2 z-40"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ y: -12 }}
          className="w-[260px] rounded-3xl bg-white/80 backdrop-blur-2xl border border-white shadow-[0_30px_60px_-15px_rgba(15,23,42,0.2)] p-5"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-70 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(59,130,246,0.9)]" />
            </span>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
              Now offering
            </span>
          </div>
          <div className="text-base font-bold text-slate-900 leading-snug">
            Brand & Identity
            <br />
            Design
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex -space-x-2">
              {[21, 22, 23, 24].map((n) => (
                <img
                  key={n}
                  src={`https://i.pravatar.cc/80?img=${n}`}
                  alt=""
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <motion.button
              whileHover={{ rotate: 45, scale: 1.1 }}
              className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-[0_8px_20px_-4px_rgba(59,130,246,0.6)]"
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ───────────────────────── VIDEO SHOWCASE (DARK) ───────────────────────── */

export function VideoShowcase({ variant = "default" }: Props) {
  const isHero = variant === "hero";
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
  const features2 = [
    {
      title: "Cinematic Edits",
      desc: "Story-driven edits with smooth pacing and flow.",
      gradient: "from-violet-500 to-purple-500",
      icon: "✂",
    },
    {
      title: "Smooth Transitions",
      desc: "Seamless transitions that keep viewers engaged.",
      gradient: "from-blue-500 to-cyan-500",
      icon: "⤴",
    },
    {
      title: "Color Grading",
      desc: "Professional color correction that sets the mood.",
      gradient: "from-emerald-500 to-teal-500",
      icon: "◉",
    },
    {
      title: "Audio Enhancement",
      desc: "Crisp audio, perfect sync, and noise reduction.",
      gradient: "from-pink-500 to-rose-500",
      icon: "🔊",
    },
  ];
  const stats = [
    {
      number: "150+",
      label: "Videos Edited",
    },
    {
      number: "4+",
      label: "Years Experience",
    },
    {
      number: "50+",
      label: "Happy Clients",
    },
  ];

  return (
    <section className={`w-full ${isHero ? "flex items-center justify-center" : " block pb-20"}`}>
      <div
        className={`relative  border border-white/10 bg-[#0a0a14] px-6 py-10 sm:px-8 lg:px-12 ${isHero ? "rounded-[1.5rem]" : "rounded-[0rem] flex items-center justify-center py-20"}`}
      >
        {/* Background Effects */}
        <div className="pointer-events-none absolute -top-32 left-0 h-96 w-96 rounded-full bg-violet-600/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className={`relative flex gap-16 items-center ${!isHero && "h-[620px]"}`}>
          {/* LEFT CONTENT */}
          <div className="max-w-md flex flex-col items-start h-full">
            {!isHero && (
              <Breadcrumb className="mb-20">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbSeparator className="text-white/30" />

                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/work"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Work
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbSeparator className="text-white/30" />

                  <BreadcrumbItem>
                    <BreadcrumbPage className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">
                      Video Editing
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            )}
            <div>
              {" "}
              <div className=" inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur">
                <Film className="h-3.5 w-3.5 text-violet-400" />
                Video Editing Showcase
              </div>
              <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Edit with purpose.
                <br />
                Create <span className="text-violet-400">stories</span> that people remember.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
                From raw footage to polished cinematic experiences, we craft engaging videos that
                elevate brands, capture attention, and leave a lasting impact across every platform.
              </p>
              {/* FEATURES */}
              {!isHero ? (
                <div className="mt-14 flex flex-wrap gap-10">
                  {stats.map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-violet-400" />

                        <span className="text-2xl font-bold text-white">{item.number}</span>
                      </div>

                      <p className="mt-1 text-sm text-white/55">{item.label}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  {features.map((f, i) => (
                    <motion.div
                      key={f.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
                        <f.icon className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="font-semibold text-white">{f.title}</p>

                        <p className="mt-1 text-sm leading-relaxed text-white/55">{f.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
              {/* BUTTON */}
              {isHero && (
                <div className="mt-10">
                  <button
                    onClick={() =>
                      (window.location.href = "http://localhost:8080/work/video-editing")
                    }
                    className="group flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
                  >
                    Explore Edits
                    <MoveRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              )}
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
                      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?q=80&w=800&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=800&auto=format&fit=crop",
                    ].map((img, i) => (
                      <div
                        key={i}
                        className="aspect-video rounded-xl overflow-hidden border border-white/10"
                      >
                        <img src={img} alt="preview" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {!isHero && (
          <section className="w-full px-6 py-8 absolute -bottom-45 z-30">
            <div className="max-w-7xl mx-auto rounded-[32px] border border-slate-200 bg-white shadow-sm ">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                {features2.map((feature, i) => (
                  <div
                    key={i}
                    className={`relative p-8 ${
                      i !== features.length - 1
                        ? "border-b xl:border-b-0 xl:border-r border-slate-200"
                        : ""
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white text-xl shadow-lg`}
                    >
                      {feature.icon}
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-900">{feature.title}</h3>

                    <p className="mt-3 text-slate-500 leading-relaxed text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}

function ServicesElevateBrandSection() {
  const services = [
    {
      title: "Graphic Design",
      desc: "Logos, branding, print & digital visuals that communicate your message clearly.",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Video Editing",
      desc: "Professional edits that turn raw footage into engaging cinematic stories.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Brand Identity",
      desc: "Complete identity systems that help your business stand out beautifully.",
      gradient: "from-emerald-500 to-teal-400",
    },
    {
      title: "Social Media Design",
      desc: "High-performing social creatives optimized for engagement and growth.",
      gradient: "from-orange-500 to-pink-500",
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
              {" "}
              Your Brand
            </span>
          </h2>

          <p className="mt-6 text-slate-500 text-lg leading-relaxed">
            Powerful design and editing solutions crafted to help brands stand out, connect with
            audiences, and grow with confidence.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-10 blur-3xl rounded-full`}
              />

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-[1px]`}
              >
                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                  <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${service.gradient}`} />
                </div>
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">{service.title}</h3>

              <p className="mt-4 text-slate-500 leading-relaxed text-base">{service.desc}</p>

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
                  {" "}
                  impactful experiences.
                </span>
              </h3>

              <p className="mt-5 text-white/60 text-lg leading-relaxed">
                From strategy and branding to cinematic edits and social media visuals, every
                project is crafted with precision and creativity.
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
  {
    q: "Aman shipped a brand and product launch in 6 weeks. Best design hire we've ever made.",
    a: "Mira Chen",
    r: "CEO, Lumen",
    initials: "MC",
    color: "from-blue-200 to-indigo-300",
  },
  {
    q: "Pixel-perfect, fast, and ridiculously thoughtful. Every detail was considered.",
    a: "Daniel Park",
    r: "Head of Product, Orbit",
    initials: "DP",
    color: "from-emerald-200 to-teal-300",
  },
  {
    q: "He doesn't just design — he thinks like a founder. Rare combination.",
    a: "Sasha Reyes",
    r: "Founder, Maison Clay",
    initials: "SR",
    color: "from-amber-200 to-orange-300",
  },
  {
    q: "The most polished work we've ever shipped. Our conversion doubled.",
    a: "Ethan Wells",
    r: "CMO, Northwave",
    initials: "EW",
    color: "from-rose-200 to-pink-300",
  },
  {
    q: "Working with AK felt like adding a senior designer to our founding team.",
    a: "Lina Ortiz",
    r: "COO, Pulse Health",
    initials: "LO",
    color: "from-violet-200 to-fuchsia-300",
  },
  {
    q: "Editorial-grade work, indie-studio energy. We will absolutely hire again.",
    a: "Tomás Alvarez",
    r: "Director, Atlas",
    initials: "TA",
    color: "from-cyan-200 to-sky-300",
  },
];

function Card({ t }: { t: (typeof items)[number] }) {
  return (
    <div className="w-[340px] sm:w-[420px] shrink-0 rounded-3xl glass gradient-border p-7 hover-glow mx-3">
      <Quote className="h-7 w-7 text-primary" />
      <p className="mt-5 text-base leading-relaxed text-foreground">"{t.q}"</p>
      <div className="mt-7 flex items-center justify-between border-t border-border/60 pt-5">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-semibold text-foreground/80`}
          >
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
        <SectionTitle
          eyebrow="Testimonials"
          title="Trusted by teams who ship."
          subtitle="Hover to pause the marquee."
        />
      </div>

      <div className="mt-16 space-y-6 ">
        {[row1, row2].map((row, idx) => (
          <div key={idx} className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
            <div
              className="marquee-track flex w-max"
              style={{
                animationDirection: idx === 1 ? "reverse" : "normal",
                animationDuration: idx === 1 ? "55s" : "45s",
              }}
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
