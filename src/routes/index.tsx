import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Layers, Zap, PenTool, Code2, Compass } from "lucide-react";
import { LinkButton } from "@/components/Button";
import { SectionTitle } from "@/components/SectionTitle";
import { StatsCard } from "@/components/StatsCard";
import { ServiceCard } from "@/components/ServiceCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AK — Premium Creative Studio" },
      { name: "description", content: "Award-winning design & development studio crafting premium digital experiences for ambitious brands." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-primary)/10%,_transparent_55%)]" />
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
              <Sparkles className="h-3 w-3 text-primary" />
              Available for new projects — 2026
            </span>
            <h1 className="mt-6 text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tighter text-foreground leading-[0.95]">
              Designing the
              <br />
              <span className="text-primary">future</span> of brands,
              <br />
              one pixel at a time.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              I'm Aman Kapoor — a multidisciplinary designer building premium digital
              experiences for forward-thinking companies across the globe.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <LinkButton to="/work" variant="secondary" arrow>
                View Selected Work
              </LinkButton>
              <LinkButton to="/contact" variant="ghost">
                Start a Project
              </LinkButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard value="120+" label="Projects shipped" hint="Across 14 countries" />
          <StatsCard value="48" label="Brands rebranded" hint="From seed to series C" />
          <StatsCard value="9 yrs" label="Of design craft" hint="Since 2017" />
          <StatsCard value="14" label="Industry awards" hint="Awwwards, FWA, CSSDA" />
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <SectionTitle
            eyebrow="What I do"
            title="A studio of one, output of many."
            subtitle="From brand identity to product engineering — every detail is crafted with intention."
          />
          <LinkButton to="/services" variant="ghost" arrow>All Services</LinkButton>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard icon={PenTool} title="Brand Identity" description="Logo systems, visual language and guidelines that scale with your business." />
          <ServiceCard icon={Layers} title="Product Design" description="End-to-end UX/UI for web and mobile products users genuinely love." />
          <ServiceCard icon={Code2} title="Development" description="Production-grade React frontends with motion, polish and performance." />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground text-background p-12 sm:p-20">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <Compass className="h-10 w-10 mb-6" />
            <h3 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Have an ambitious idea? Let's build it.
            </h3>
            <p className="mt-4 text-background/70">
              Booking projects for Q2 2026. Reach out and let's get started.
            </p>
            <div className="mt-8">
              <LinkButton to="/contact" variant="primary" arrow>
                Let's Work Together
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
