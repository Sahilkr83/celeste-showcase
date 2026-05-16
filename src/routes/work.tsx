import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — AK Studio" },
      { name: "description", content: "Selected case studies in branding, motion, video and product." },
    ],
  }),
  component: Work,
});

type Project = {
  name: string;
  tag: string;
  category: "Branding" | "Video" | "Motion" | "Web";
  year: string;
  color: string;
  span: string;
  description: string;
};

const projects: Project[] = [
  { name: "Lumen", tag: "Brand & Web", category: "Branding", year: "2025", color: "from-blue-100 to-indigo-300", span: "md:row-span-2", description: "A complete brand and web rebuild for a fast-growing fintech." },
  { name: "Northwave", tag: "Product Design", category: "Web", year: "2025", color: "from-zinc-200 to-zinc-400", span: "", description: "Marketing site and product UI for an analytics platform." },
  { name: "Orbit OS", tag: "Motion Reel", category: "Motion", year: "2024", color: "from-indigo-200 to-purple-300", span: "", description: "A 60-second kinetic launch reel for an OS startup." },
  { name: "Maison Clay", tag: "Video Campaign", category: "Video", year: "2024", color: "from-amber-100 to-orange-200", span: "md:row-span-2", description: "Cinematic campaign films for an artisan ceramics brand." },
  { name: "Pulse Health", tag: "Mobile Brand", category: "Branding", year: "2024", color: "from-emerald-100 to-teal-200", span: "", description: "Identity and app design for a wellness platform." },
  { name: "Atlas Studio", tag: "Motion Identity", category: "Motion", year: "2023", color: "from-rose-100 to-pink-200", span: "", description: "An animated identity system for a creative studio." },
];

const categories = ["All", "Branding", "Video", "Motion", "Web"] as const;

function Work() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [open, setOpen] = useState<Project | null>(null);

  const filtered = projects.filter((p) => active === "All" || p.category === active);

  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle eyebrow="Selected work" title="A look at recent projects." subtitle="Filter by discipline. Click any tile to preview." />

      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`relative rounded-full px-5 py-2 text-sm font-medium transition ${
              active === c ? "text-background" : "text-foreground/70 hover:text-foreground"
            }`}
          >
            {active === c && (
              <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-foreground" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
            )}
            <span className="relative">{c}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-3 md:auto-rows-[260px]">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.button
              type="button"
              layout
              key={p.name}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ delay: i * 0.04, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setOpen(p)}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${p.color} ${p.span} text-left shadow-sm hover:shadow-2xl transition-all`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl md:text-6xl font-semibold text-foreground/25 group-hover:scale-110 transition-transform duration-500">
                  {p.name}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-background/85 backdrop-blur p-5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">{p.name}</div>
                  <div className="text-xs text-muted-foreground">{p.tag} · {p.year}</div>
                </div>
                <span className="rounded-full bg-foreground p-2 text-background">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/40 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-card shadow-2xl"
            >
              <button
                onClick={() => setOpen(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-background/90 p-2 hover:bg-background"
              >
                <X className="h-4 w-4" />
              </button>
              <div className={`aspect-[16/9] bg-gradient-to-br ${open.color} flex items-center justify-center`}>
                <span className="text-7xl font-semibold text-foreground/30">{open.name}</span>
              </div>
              <div className="p-8">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{open.category} · {open.year}</div>
                <h3 className="mt-2 text-2xl font-semibold">{open.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{open.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
