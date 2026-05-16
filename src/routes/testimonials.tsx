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
  { q: "Aman shipped a brand and product launch in 6 weeks. Best design hire we've ever made.", a: "Mira Chen", r: "CEO, Lumen" },
  { q: "Pixel-perfect, fast, and ridiculously thoughtful. Every detail was considered.", a: "Daniel Park", r: "Head of Product, Orbit" },
  { q: "He doesn't just design — he thinks like a founder. Rare combination.", a: "Sasha Reyes", r: "Founder, Maison Clay" },
  { q: "The most polished work we've ever shipped. Our conversion doubled.", a: "Ethan Wells", r: "CMO, Northwave" },
];

function Testimonials() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle eyebrow="Testimonials" title="Trusted by teams who ship." subtitle="A few words from people I've had the pleasure to work with." />
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {items.map((t, i) => (
          <motion.div
            key={t.a}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="rounded-3xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition"
          >
            <Quote className="h-8 w-8 text-primary" />
            <p className="mt-6 text-lg text-foreground leading-relaxed">"{t.q}"</p>
            <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
              <div>
                <div className="font-semibold">{t.a}</div>
                <div className="text-sm text-muted-foreground">{t.r}</div>
              </div>
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
