import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
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
  Clapperboard,
  MoveUpLeft,
  MoveUpRight,
} from "lucide-react";
import { LinkButton, Button } from "@/components/Button";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import HeroImg from "@/assets/heroOfHome1.png";
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
import RedirectButton from "@/components/ui/redirectButton";
import GradientText from "@/components/GradientText";
import TiltedCard from "@/components/TiltedCard";
import CardSwap, { Card } from "@/components/CardSwap";

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
  const cards = [
    {
      title: "Video Editing",
      description:
        "Cinematic storytelling, smooth transitions, color grading, motion graphics, reels, ads, and YouTube edits crafted to keep viewers engaged and emotionally connected.",
      icon: "🎬",
      glow: "bg-violet-500/20",
      gradient: "from-violet-500 to-purple-600",
      hover: "hover:shadow-[0_20px_80px_rgba(139,92,246,0.18)]",
      button: "group-hover:text-violet-400",
      buttonBg: "group-hover:bg-violet-600",
      stats: [
        {
          value: "150+",
          label: "Videos Edited",
        },
        {
          value: "4K",
          label: "Ultra HD Quality",
        },
      ],
      tags: ["Reels", "YouTube", "Ads", "Color Grading"],
    },

    {
      title: "Graphic Design",
      description:
        "Modern branding, posters, thumbnails, UI concepts, marketing visuals, and premium graphics designed to elevate your digital presence beautifully.",
      icon: "✨",
      glow: "bg-blue-500/20",
      gradient: "from-blue-500 to-cyan-500",
      hover: "hover:shadow-[0_20px_80px_rgba(59,130,246,0.18)]",
      button: "group-hover:text-blue-400",
      buttonBg: "group-hover:bg-blue-600",
      stats: [
        {
          value: "200+",
          label: "Creative Assets",
        },
        {
          value: "100%",
          label: "Brand Focused",
        },
      ],
      tags: ["Branding", "Posters", "UI Design", "Thumbnails"],
    },

    {
      title: "Web Development",
      description:
        "High-performance websites with premium UI/UX, smooth animations, responsive layouts, SEO optimization, and modern frontend technologies.",
      icon: "💻",
      glow: "bg-emerald-500/20",
      gradient: "from-emerald-500 to-teal-500",
      hover: "hover:shadow-[0_20px_80px_rgba(16,185,129,0.18)]",
      button: "group-hover:text-emerald-400",
      buttonBg: "group-hover:bg-emerald-600",
      stats: [
        {
          value: "99%",
          label: "Responsive",
        },
        {
          value: "Fast",
          label: "Performance",
        },
      ],
      tags: ["React", "Next.js", "Tailwind", "Animations"],
    },

    {
      title: "Social Media",
      description:
        "Social media strategies, engaging reels, post creatives, and growth-focused content management tailored for modern audiences.",
      icon: "📱",
      glow: "bg-pink-500/20",
      gradient: "from-pink-500 to-rose-500",
      hover: "hover:shadow-[0_20px_80px_rgba(244,63,94,0.18)]",
      button: "group-hover:text-pink-400",
      buttonBg: "group-hover:bg-pink-600",
      stats: [
        {
          value: "10M+",
          label: "Organic Reach",
        },
        {
          value: "Daily",
          label: "Content Growth",
        },
      ],
      tags: ["Instagram", "Growth", "Content", "Reels"],
    },
  ];
  return (
    <div className="relative  ">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      {/* <HeroSection3D /> */}
      <Hero variant="hero" />

      <ServicesElevateBrandSection />
      {/* <FeaturedProjectsSection variant="hero" /> */}
      <section className="relative  py-24">
        <div className="container relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 overflow-hidden">
          {/* LEFT CONTENT */}
          <div className="relative z-10 pb-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:text-blue-400">
              Our Services
            </div>

            {/* Heading */}
            <h2 className="mt-8 text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              Creative solutions
              <br />
              for modern{" "}
              <GradientText
                colors={["#3B82F6", "#8B5CF6", "#A855F7"]}
                animationSpeed={8}
                showBorder={false}
                classNameText="font-black pb-2"
              >
                digital brands.
              </GradientText>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-500 dark:text-white/60">
              From cinematic edits to premium websites and brand identities, we create experiences
              that elevate your business and connect deeply with your audience.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-5">
              {[
                "Modern premium UI/UX",
                "Cinematic storytelling",
                "Fast responsive websites",
                "Social media growth creatives",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-lg">
                    ✓
                  </div>

                  <p className="font-medium text-slate-700 dark:text-white/80">{item}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(59,130,246,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(124,58,237,0.35)]">
              Explore Services
              <span className="text-lg">→</span>
            </button>
          </div>

          {/* RIGHT CARD SWAP */}
          <div
            className="relative flex items-center justify-center pb-10"
            style={{
              height: "650px",
            }}
          >
            {/* Glow */}
            <div className="absolute h-[500px] w-[500px] rounded-full bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-cyan-500/20 blur-3xl" />

            <CardSwap
              cardDistance={70}
              verticalDistance={85}
              delay={3000}
              pauseOnHover={true}
              easing="power1"
              skewAmount={0}
            >
              {cards.map((card, index) => (
                <Card
                  key={index}
                  className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B1120]/80 p-7  backdrop-blur-2xl transition-shadow duration-500 ${card.hover}`}
                >
                  {/* Glow */}
                  <div
                    className={`absolute -right-10 -top-10 h-40 w-40 rounded-full ${card.glow} blur-3xl transition-all duration-500 group-hover:scale-125`}
                  />

                  {/* Noise */}
                  <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('/noise.svg')]" />

                  <div className="relative flex h-full flex-col ">
                    {/* Icon */}
                    <div
                      className={`flex h-16 w-16 z-10 items-center justify-center rounded-3xl bg-gradient-to-br ${card.gradient} text-3xl shadow-lg`}
                    >
                      {card.icon}
                    </div>

                    {/* Title */}
                    <h3 className="mt-7 text-3xl font-black tracking-tight text-white z-10">
                      {card.title}
                    </h3>

                    {/* Desc */}
                    <p className="mt-4 text-sm leading-relaxed text-white/60 w-2/3 z-10">
                      {card.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2 z-10">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="mt-7 grid grid-cols-2 gap-4 z-10">
                      {card.stats.map((stat) => (
                        <div key={stat.label} className="rounded-2xl bg-white/[0.04] p-4">
                          <p className="text-2xl font-bold text-white">{stat.value}</p>

                          <p className="mt-1 text-xs text-white/50">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <button
                      className={`mt-auto z-10 inline-flex items-center gap-3 pt-8 text-sm font-semibold text-white transition-all duration-300 ${card.button}`}
                    >
                      Explore Service
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:translate-x-1 ${card.buttonBg}`}
                      >
                        →
                      </span>
                    </button>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </section>
      <MyProcessSection variant="hero" />
      {/* <TrustedLogos /> */}
      {/* <Stats /> */}
    </div>
  );
}

export function Hero({ variant = "default" }: Props) {
  const isHero = variant === "hero";
  const features = [
    {
      title: "Brand Focused",
      desc: "Designs that reflect your identity.",
      icon: PenTool,
    },
    {
      title: "Creative Approach",
      desc: "Unique ideas for maximum impact.",
      icon: Grid2X2,
    },
    {
      title: "Attention to Detail",
      desc: "Pixel-perfect designs that stand out.",
      icon: Layers3,
    },
  ];

  return (
    <section className="relative overflow-hidden w-full">
      <div className="container relative  mx-auto flex flex-col items-center px-6 pt-10 gap-15">
        <div className="grid items-center gap-16 lg:grid-cols-2 max-w-7xl">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 1, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${isHero ? "max-w-lg" : "max-w-lg"} flex flex-col items-start h-full z-10`}
          >
            {!isHero && (
              <Breadcrumb className="mb-20 dark:text-white">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/"
                      className="text-black transition-colors dark:text-white"
                    >
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbSeparator className="text-black dark:text-white" />

                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/work"
                      className="text-black transition-colors dark:text-white"
                    >
                      Work
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbSeparator className="text-black dark:text-white" />

                  <BreadcrumbItem>
                    <BreadcrumbPage className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">
                      <GradientText
                        colors={["#3B82F6", "#8B5CF6", "#A855F7"]}
                        animationSpeed={8}
                        showBorder={false}
                      >
                        Graphic Design
                      </GradientText>
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            )}
            <div>
              {/* Badge */}
              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
              >
                <span className="h-2 w-2 rounded-full bg-violet-500" />

                {isHero ? "Available For Freelance" : "Graphic Design"}
              </motion.div>

              {!isHero ? (
                <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight lg:text-7xl">
                  Visuals{" "}
                  <GradientText
                    colors={["#3B82F6", "#8B5CF6", "#A855F7"]}
                    animationSpeed={8}
                    showBorder={false}
                    classNameText="font-black"
                  >
                    that
                  </GradientText>
                  speaks your{" "}
                  <GradientText
                    colors={["#8B5CF6", "#3B82F6", "#22D3EE"]}
                    animationSpeed={8}
                    showBorder={false}
                    classNameText="font-black"
                  >
                    Brand.
                  </GradientText>
                </h1>
              ) : (
                <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight lg:text-7xl z-60">
                  <p className="z-11">Designs that</p>
                  <GradientText
                    colors={["#3B82F6", "#8B5CF6", "#A855F7"]}
                    animationSpeed={8}
                    showBorder={false}
                    classNameText="font-black z-11"
                  >
                    inspire.
                  </GradientText>
                  Edits that make an{" "}
                  <GradientText
                    colors={["#8B5CF6", "#3B82F6", "#22D3EE"]}
                    animationSpeed={8}
                    showBorder={false}
                    classNameText="font-black"
                  >
                    impact.
                  </GradientText>
                </h1>
              )}

              {isHero ? (
                <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                  We are Zentrix Fintech — a creative digital agency blending strategy, cinematic
                  storytelling, and cutting-edge design to help modern brands stand out, connect
                  deeply, and grow with impact across the digital world.
                </p>
              ) : (
                <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                  We design clean, modern,and memorable visuals that communicate your message and
                  leave a lasting impression.
                </p>
              )}

              {isHero ? (
                <div>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <RedirectButton
                      label="Hire Me"
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] bg-primary text-primary-foreground hover:bg-primary/90"
                      icon={<ArrowUpRight className="h-4 w-4" />}
                    />
                    <RedirectButton
                      label="Watch Showreel"
                      to="/work/graphic-design"
                      className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] bg-transparent text-foreground border border-border hover:bg-muted"
                      icon={<Play className="h-4 w-4 fill-current" />}
                    />
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
                  </div>{" "}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
                  {features.map((feature, i) => {
                    const Icon = feature.icon;

                    return (
                      <div key={i} className="flex flex-col">
                        {/* Icon Box */}
                        <div className="w-12 h-12 rounded-md bg-[#F4F7FF] flex items-center justify-center shadow-sm">
                          <Icon className="w-6 h-6 text-blue-600 stroke-[2]" />
                        </div>

                        {/* Title */}
                        <h3 className="mt-5 text-base font-semibold text-slate-600 dark:text-slate-300 ">
                          {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 text-slate-500 leading-relaxed text-sm max-w-[220px]">
                          {feature.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>

          {/* RIGHT — workspace mockup */}
          <motion.div
            initial={{ opacity: 1, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            {/* Floating Orbit */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border border-dashed border-violet-500/20"
            />

            {/* Glow Rings */}
            <div className="absolute inset-10 rounded-full border border-blue-500/10" />
            <div className="absolute inset-20 rounded-full border border-violet-500/10" />

            {/* Main Image */}
            <motion.div
              whileHover={{
                rotateX: 4,
                rotateY: -4,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
              }}
              className="relative"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src={HeroImg}
                alt="3D Hero"
                className="relative z-10 drop-shadow-[0_40px_100px_rgba(124,58,237,0.4)] w-[75rem] h-[35rem]"
              />

              {/* Floating Glass Card */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute -bottom-6 left-10 z-20 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500">
                    <PenTool className="h-6 w-6" />
                  </div>

                  <div>
                    <h4 className="font-semibold">UI/UX & Motion Design</h4>

                    <p className="text-sm text-black dark:text-white/60">Trusted by 50+ brands</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Icons */}
              {[
                {
                  icon: <PenTool className="h-5 w-5" />,
                  className: "left-0 top-10",
                  color: "from-violet-500 to-purple-500",
                },
                {
                  icon: <Play className="h-5 w-5" />,
                  className: "right-0 top-32",
                  color: "from-pink-500 to-violet-500",
                },
                {
                  icon: <ImageIcon className="h-5 w-5" />,
                  className: "left-16 bottom-20",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: <Clapperboard className="h-5 w-5" />,
                  className: "right-12 bottom-10",
                  color: "from-cyan-500 to-emerald-500",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 6, -6, 0],
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                  }}
                  className={`absolute z-20 ${item.className}`}
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br ${item.color} shadow-[0_10px_40px_rgba(124,58,237,0.35)]`}
                  >
                    {item.icon}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        {/* <VideoEditingSection /> */}
        {isHero && <VideoShowcase variant="hero" />}
      </div>
    </section>
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
      icon: Film,
    },
    {
      title: "Smooth Transitions",
      desc: "Seamless transitions that keep viewers engaged.",
      gradient: "from-blue-500 to-cyan-500",
      icon: Wand2,
    },
    {
      title: "Color Grading",
      desc: "Professional color correction that sets the mood.",
      gradient: "from-emerald-500 to-teal-500",
      icon: Palette,
    },
    {
      title: "Audio Enhancement",
      desc: "Crisp audio, perfect sync, and noise reduction.",
      gradient: "from-pink-500 to-rose-500",
      icon: AudioLines,
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
        className={`relative border border-white/10 bg-[#0a0a14] px-6 py-10 sm:px-8 lg:px-12 ${isHero ? "rounded-[1.5rem]" : "rounded-[0rem] flex items-center justify-center py-20"}`}
      >
        {/* Background Effects */}
        <div className="pointer-events-none absolute -top-32 left-0 h-96 w-96 rounded-full bg-violet-600/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className={`relative flex gap-16 items-center ${!isHero && "h-[620px]"}`}>
          {/* LEFT CONTENT */}
          <div className="max-w-md flex flex-col items-start h-full z-10">
            {!isHero && (
              <Breadcrumb className="mb-20">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/"
                      className="text-white/70 hover:text-white transition-colors dark:text-white"
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
                      <GradientText
                        colors={["#3B82F6", "#8B5CF6", "#A855F7"]}
                        animationSpeed={8}
                        showBorder={false}
                      >
                        Video Editing
                      </GradientText>
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
                  <RedirectButton
                    label="Explore Edits"
                    to="/work/video-editing"
                    icon={
                      <MoveRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    }
                  />
                </div>
              )}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 1, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center max-w-7xl z-10"
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
          <section className="absolute -bottom-48 z-30 w-full px-6 py-8">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-slate-200 bg-white/50 backdrop-blur-xl shadow-[0_10px_40px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-[#0B1120]/90 dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              {/* Glow */}

              <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                {features2.map((feature, i) => (
                  <div
                    key={i}
                    className={`group relative overflow-hidden p-8 transition-all duration-500 hover:bg-white/60 dark:hover:bg-white/[0.03] ${
                      i !== features2.length - 1
                        ? "border-b border-slate-200 xl:border-b-0 xl:border-r dark:border-white/10"
                        : ""
                    }`}
                  >
                    {/* Hover Glow */}
                    <div
                      className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${feature.gradient} opacity-10 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-20`}
                    />

                    {/* Icon */}
                    <div
                      className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} text-xl text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]`}
                    >
                      <feature.icon className="h-6 w-6" />
                    </div>

                    {/* Title */}
                    <h3 className="relative mt-6 text-xl font-bold tracking-tight text-slate-800 dark:text-white">
                      {feature.title}
                    </h3>

                    {/* Desc */}
                    <p className="relative mt-3 text-sm leading-relaxed text-slate-500 dark:text-white/60">
                      {feature.desc}
                    </p>

                    {/* Bottom line */}
                    <div
                      className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${feature.gradient} transition-all duration-500 group-hover:w-full`}
                    />
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
      icon: Palette,
    },
    {
      title: "Video Editing",
      desc: "Professional edits that turn raw footage into engaging cinematic stories.",
      gradient: "from-purple-500 to-pink-500",
      icon: Clapperboard,
    },
    {
      title: "Brand Identity",
      desc: "Complete identity systems that help your business stand out beautifully.",
      gradient: "from-emerald-500 to-teal-400",
      icon: Layers3,
    },
    {
      title: "Social Media Design",
      desc: "High-performing social creatives optimized for engagement and growth.",
      gradient: "from-orange-500 to-pink-500",
      icon: Sparkles,
    },
  ];

  return (
    <section className="w-full px-6 md:px-10 py-20  overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto z-10">
          <span className="inline-flex  items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-[0.25em] uppercase border border-blue-100">
            What We Do
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black leading-[1]">
            Services That Elevate
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Your Brand
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Powerful design and editing solutions crafted to help brands stand out, connect with
            audiences, and grow with confidence.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <TiltedCard
                key={service.title}
                altText={service.title}
                captionText={service.title}
                containerHeight="320px"
                containerWidth="100%"
                imageHeight="320px"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showImage={false}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent
                overlayContent={
                  <div className="group relative flex h-full w-full flex-col rounded-[28px] border border-slate-200/70 bg-white/80 p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(59,130,246,0.12)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_20px_80px_rgba(124,58,237,0.2)]">
                    {/* Glow */}
                    <div
                      className={`absolute right-6 top-6 h-24 w-24 rounded-full bg-gradient-to-br ${service.gradient} opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40`}
                    />

                    {/* Top Blur Overlay */}
                    <div className="absolute inset-0 rounded-[28px] bg-gradient-to-b from-white/40 to-transparent opacity-80 dark:from-white/[0.03]" />

                    {/* Icon */}
                    <div
                      className={`relative h-14 w-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-[1px] shadow-lg`}
                    >
                      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white dark:bg-[#0B1120]">
                        <Icon className="h-6 w-6 text-slate-700 dark:text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="relative mt-6 text-xl font-semibold tracking-tight text-slate-800 dark:text-white">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="relative mt-3 text-sm leading-relaxed text-slate-500 dark:text-white/60">
                      {service.desc}
                    </p>

                    {/* Button */}
                    <button className="relative mt-auto inline-flex items-center gap-3 pt-6 text-sm font-semibold text-slate-700 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      Learn More
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-600 group-hover:text-white dark:bg-white/10 dark:text-white">
                        →
                      </span>
                    </button>

                    {/* Bottom Border Glow */}
                    <div
                      className={`absolute bottom-0 left-4 h-[2px] w-0 rounded-full bg-gradient-to-r ${service.gradient} transition-all duration-500 group-hover:w-[90%]`}
                    />
                  </div>
                }
              />
            );
          })}
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

            <div className="flex flex-wrap gap-4 z-11">
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform">
                Start a Project
              </button>

              <button className="px-8 py-4 z-11 rounded-2xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition">
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

// function Card({ t }: { t: (typeof items)[number] }) {
//   return (
//     <div className="w-[340px] sm:w-[420px] shrink-0 rounded-3xl glass gradient-border p-7 hover-glow mx-3">
//       <Quote className="h-7 w-7 text-primary" />
//       <p className="mt-5 text-base leading-relaxed text-foreground">"{t.q}"</p>
//       <div className="mt-7 flex items-center justify-between border-t border-border/60 pt-5">
//         <div className="flex items-center gap-3">
//           <div
//             className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-semibold text-foreground/80`}
//           >
//             {t.initials}
//           </div>
//           <div>
//             <div className="text-sm font-semibold">{t.a}</div>
//             <div className="text-xs text-muted-foreground">{t.r}</div>
//           </div>
//         </div>
//         <div className="flex gap-0.5 text-primary">
//           {Array.from({ length: 5 }).map((_, j) => (
//             <Star key={j} className="h-3.5 w-3.5 fill-current" />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function Testimonials() {
//   const row1 = [...items, ...items];
//   const row2 = [...items.slice().reverse(), ...items.slice().reverse()];

//   return (
//     <div className="py-24">
//       <div className="mx-auto max-w-7xl ">
//         <SectionTitle
//           eyebrow="Testimonials"
//           title="Trusted by teams who ship."
//           subtitle="Hover to pause the marquee."
//         />
//       </div>

//       <div className="mt-16 space-y-6 ">
//         {[row1, row2].map((row, idx) => (
//           <div key={idx} className="relative overflow-hidden">
//             <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
//             <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
//             <div
//               className="marquee-track flex w-max"
//               style={{
//                 animationDirection: idx === 1 ? "reverse" : "normal",
//                 animationDuration: idx === 1 ? "55s" : "45s",
//               }}
//             >
//               {row.map((t, i) => (
//                 <Card key={`${idx}-${i}`} t={t} />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mx-auto mt-20 max-w-4xl px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="relative overflow-hidden rounded-3xl bg-foreground text-background p-12 text-center"
//         >
//           <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/40 blur-3xl" />
//           <div className="relative">
//             <h3 className="text-3xl md:text-4xl font-semibold">Your story, told beautifully.</h3>
//             <p className="mt-3 text-background/70">Let's create work worth sharing.</p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
