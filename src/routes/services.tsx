import { createFileRoute } from "@tanstack/react-router";
import { Palette, Film, Sparkles, Wand2, Share2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { LinkButton } from "@/components/Button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AK Studio" },
      { name: "description", content: "Graphic design, video editing, branding, motion graphics and social media design." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Palette, title: "Graphic Design", desc: "Posters, editorial layouts and visual systems with a designer's eye for detail.", tags: ["Posters", "Editorial", "Print"] },
  { icon: Film, title: "Video Editing", desc: "Story-driven cuts, color grading and audio polish for brands and creators.", tags: ["Cinematic cuts", "Color grade", "Audio mix"] },
  { icon: Sparkles, title: "Branding", desc: "Logo systems, type, color and guidelines that make your brand unmistakable.", tags: ["Identity", "Guidelines", "Strategy"] },
  { icon: Wand2, title: "Motion Graphics", desc: "Animated logos, explainers and kinetic typography that move your story.", tags: ["After Effects", "Lottie", "Kinetic type"] },
  { icon: Share2, title: "Social Media Design", desc: "Scroll-stopping templates and campaigns built for every platform.", tags: ["Reels", "Carousels", "Templates"] },
];

function Services() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle eyebrow="Services" title="Crafted to make your brand unforgettable." subtitle="Five disciplines, one cohesive vision." />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl gradient-border glass p-8 hover-glow"
          >
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-start justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-fuchsia-300/20 text-primary float">
                <s.icon className="h-6 w-6" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition" />
            </div>
            <h3 className="relative mt-6 text-xl font-semibold">{s.title}</h3>
            <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            <ul className="relative mt-6 flex flex-wrap gap-2 border-t border-border/60 pt-4">
              {s.tags.map((t) => (
                <li key={t} className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-foreground/70">
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-foreground to-foreground/80 text-background p-8 flex flex-col justify-between min-h-[260px]"
        >
          <div>
            <div className="text-xs uppercase tracking-widest text-background/60">Have something else?</div>
            <h3 className="mt-3 text-2xl font-semibold leading-tight">Let's craft a bespoke package together.</h3>
          </div>
          <LinkButton to="/contact" variant="primary" arrow className="self-start">Start a project</LinkButton>
          <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-primary/40 blur-3xl" />
        </motion.div>
      </div>
    </div>
  );
}
