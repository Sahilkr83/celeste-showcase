import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — AK Studio" },
      { name: "description", content: "Kind words from founders, product leaders and creative directors." },
    ],
  }),
  component: Testimonials,
});

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
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Testimonials" title="Trusted by teams who ship." subtitle="Hover to pause the marquee." />
      </div>

      <div className="mt-16 space-y-6">
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
